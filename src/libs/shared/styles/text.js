import styled from "styled-components";


export const TitlePage = styled.h1`
  font-size: 2.3rem;
  background: linear-gradient(180deg, #181968, #22c5ba);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;


export const TitleAnime = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text || "#102249"};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  line-height: 0;
`;
export const SubTitleAnime = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text || "#143376"};
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
  line-height: 0;
`;

export const Message = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text || "#333"};
  margin-bottom: 20px;
`;


export const Subtitle = styled.h3`
  font-size: 1rem;
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
    margin-bottom: 10px;
  }
  margin: 0px 0px 12px 0px;
`;

export const DetailText = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary || "#007bff"};
  text-overflow: ellipsis;
`;

export const DetailTextSecondary = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary || "#012379"};
`;

export const Divider = styled.hr`
  height: 1px;       
  border: none;       
  background: ${({ theme }) => theme.colors.divider || "#ccc"};
  width: ${({ width }) => width || "100%"};   
  margin: 0px auto;
`;

export const RankNumber = styled.h1`
 color: #ff0062;
  margin: 10px;
`;

export const RankLabel = styled(DetailText)`
  margin: 20px;
    color: #ff0062;

`;


