'use client';

import type { BuiltinInterventionProps } from '@lobechat/types';
import { Button, Flexbox, Text } from '@lobehub/ui';
import { cx } from 'antd-style';
import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AGENT_TEMPLATES, getTemplatesByCategories } from '../../../data/agent-templates';
import type { ShowAgentMarketplaceArgs } from '../../../types';
import { styles } from './style';

const PickAgentsIntervention = memo<BuiltinInterventionProps<ShowAgentMarketplaceArgs>>(
  ({ args, interactionMode, onInteractionAction }) => {
    const { t } = useTranslation('ui');
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

    const handleCardKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>, id: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle(id);
        }
      },
      [toggle],
    );

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
                aria-pressed={isSelected}
                className={cx(styles.card, isSelected && styles.cardSelected)}
                key={tpl.id}
                role="button"
                tabIndex={0}
                onClick={() => toggle(tpl.id)}
                onKeyDown={(event) => handleCardKeyDown(event, tpl.id)}
              >
                <Flexbox gap={4}>
                  <Flexbox horizontal align="baseline" gap={4}>
                    {tpl.avatar && <span>{tpl.avatar}</span>}
                    <span className={styles.title}>{tpl.title}</span>
                  </Flexbox>
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
            {`${t('ok')} (${selected.size})`}
          </Button>
        </div>
      </Flexbox>
    );
  },
);

PickAgentsIntervention.displayName = 'PickAgentsIntervention';

export default PickAgentsIntervention;
