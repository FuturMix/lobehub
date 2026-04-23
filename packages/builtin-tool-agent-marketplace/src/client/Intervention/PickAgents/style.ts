import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  card: css`
    padding: 12px;
    border: 1px solid ${token.colorBorder};
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgContainer};
  `,
  cardSelected: css`
    border-color: ${token.colorPrimary};
    background: ${token.colorPrimaryBg};
  `,
  categoryTag: css`
    font-size: 12px;
    color: ${token.colorTextTertiary};
  `,
  description: css`
    font-size: 13px;
    line-height: 1.5;
    color: ${token.colorTextSecondary};
  `,
  footer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: 8px;
  `,
  skipLink: css`
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
  title: css`
    font-size: 14px;
    font-weight: 500;
    color: ${token.colorText};
  `,
}));
