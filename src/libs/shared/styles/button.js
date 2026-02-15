import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 14px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary || "#007bff"};
  color: white;
  transition: all 0.2s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled || "#ccc"};
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.primaryDark || "#63809e"};
  }
`;

export const PaginationButton = styled(Button)`
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 6px;
`;

export const NavigationButton = styled(Button)`
  padding: 5px 20px;
  font-size: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
`;
