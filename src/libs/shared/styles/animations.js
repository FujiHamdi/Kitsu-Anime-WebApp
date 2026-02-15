import { keyframes, css } from "styled-components";

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const fade = css`
  animation: fade 0.3s ease forwards;

  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const shine = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;
