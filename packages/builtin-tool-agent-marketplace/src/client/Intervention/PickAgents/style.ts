import { createStaticStyles } from 'antd-style';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  card: css`
    cursor: pointer;

    padding: 12px;
    border: 1px solid ${cssVar.colorBorder};
    border-radius: ${cssVar.borderRadius};

    background: ${cssVar.colorBgContainer};

    transition:
      border-color ${cssVar.motionDurationMid},
      background ${cssVar.motionDurationMid};

    &:hover {
      border-color: ${cssVar.colorPrimaryHover};
    }

    &:focus-visible {
      outline: 2px solid ${cssVar.colorPrimary};
      outline-offset: 2px;
    }
  `,
  cardSelected: css`
    border-color: ${cssVar.colorPrimary};
    background: ${cssVar.colorPrimaryBg};

    &:hover {
      border-color: ${cssVar.colorPrimary};
    }
  `,
  categoryTag: css`
    font-size: 12px;
    color: ${cssVar.colorTextTertiary};
  `,
  description: css`
    font-size: 13px;
    line-height: 1.5;
    color: ${cssVar.colorTextSecondary};
  `,
  footer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: 8px;
  `,
  skipLink: css`
    cursor: pointer;

    display: inline-flex;
    gap: 4px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 0;

    font-size: 13px;

    transition: color ${cssVar.motionDurationMid};

    &:hover {
      color: ${cssVar.colorPrimary} !important;
    }
  `,
  title: css`
    font-size: 14px;
    font-weight: 500;
    color: ${cssVar.colorText};
  `,
}));
