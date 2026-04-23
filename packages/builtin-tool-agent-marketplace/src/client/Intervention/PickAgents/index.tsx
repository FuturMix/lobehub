'use client';

import type { BuiltinInterventionProps } from '@lobechat/types';
import { Button, Flexbox, Text } from '@lobehub/ui';
import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AGENT_TEMPLATES, getTemplatesByCategories } from '../../../data/agent-templates';
import type { ShowAgentMarketplaceArgs } from '../../../types';
import { useStyles } from './style';

const PickAgentsIntervention = memo<BuiltinInterventionProps<ShowAgentMarketplaceArgs>>(
  ({ args, interactionMode, onInteractionAction }) => {
    const { t } = useTranslation('ui');
    const { styles, cx } = useStyles();
    const isCustom = interactionMode === 'custom';

    const { categoryHints, description, prompt } = args;

    const templates = useMemo(() => getTemplatesByCategories(categoryHints ?? []), [categoryHints]);

    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [submitting, setSubmitting] = useState(false);

    const toggle = useCallback((id: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    }, []);

    const handleSubmit = useCallback(async () => {
      if (!onInteractionAction || selected.size === 0) return;
      setSubmitting(true);
      try {
        await onInteractionAction({
          payload: { selectedTemplateIds: [...selected] },
          type: 'submit',
        });
      } catch (error) {
        console.error('[AgentMarketplace] submit failed', error);
      } finally {
        setSubmitting(false);
      }
    }, [onInteractionAction, selected]);

    const handleSkip = useCallback(async () => {
      if (!onInteractionAction) return;
      await onInteractionAction({ type: 'skip' });
    }, [onInteractionAction]);

    if (!isCustom) {
      return (
        <Flexbox gap={8}>
          <Text>{prompt}</Text>
          {description && (
            <Text style={{ fontSize: 13 }} type="secondary">
              {description}
            </Text>
          )}
          <Text style={{ fontSize: 12 }} type="secondary">
            {templates.length} / {AGENT_TEMPLATES.length} templates available.
          </Text>
        </Flexbox>
      );
    }

    return (
      <Flexbox gap={12}>
        <Text style={{ fontWeight: 500 }}>{prompt}</Text>
        {description && (
          <Text style={{ fontSize: 13 }} type="secondary">
            {description}
          </Text>
        )}

        <Flexbox gap={8}>
          {templates.map((tpl) => {
            const isSelected = selected.has(tpl.id);
            return (
              <div
                className={cx(styles.card, isSelected && styles.cardSelected)}
                key={tpl.id}
                role="button"
                tabIndex={0}
                onClick={() => toggle(tpl.id)}
              >
                <Flexbox gap={4}>
                  <div className={styles.title}>
                    {tpl.avatar ? `${tpl.avatar} ` : ''}
                    {tpl.title}
                  </div>
                  <div className={styles.categoryTag}>{tpl.category}</div>
                  <div className={styles.description}>{tpl.description}</div>
                </Flexbox>
              </div>
            );
          })}
        </Flexbox>

        <div className={styles.footer}>
          <Text className={styles.skipLink} type="secondary" onClick={handleSkip}>
            {t('form.skip')}
          </Text>
          <Button
            disabled={selected.size === 0}
            loading={submitting}
            type="primary"
            onClick={handleSubmit}
          >
            {`Confirm (${selected.size})`}
          </Button>
        </div>
      </Flexbox>
    );
  },
);

PickAgentsIntervention.displayName = 'PickAgentsIntervention';

export default PickAgentsIntervention;
