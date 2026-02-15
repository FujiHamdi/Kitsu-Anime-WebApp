import styled from "styled-components";


export const TitlePage = styled.h1`
  font-size: 2rem;
  background: linear-gradient(180deg, #181968, #22c5ba);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  margin-top: -1px

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;


export const TitleAnime = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text || "#102249"};
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  line-height: 0;
`;
export const SubTitleAnime = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text || "#143376"};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  line-height: 0;
`;

export const Message = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text || "#333"};
  margin-bottom: 20px;
`;


export const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary || "#905454"};

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Synopsis = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text || "#9b6464"};
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  margin: 0;
`;

export const DetailText = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary || "#007bff"};
  text-overflow: ellipsis;
`;

export const DetailTextSecondary = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary || "#012379"};
`;

export const Divider = styled.hr`
  border: none;               
  height: 1px;              
  background: ${({ theme }) => theme.colors.divider || "#ccc"};
  width: ${({ width }) => width || "100%"};   
`;

