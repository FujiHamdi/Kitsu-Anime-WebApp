import styled from "styled-components";
import { fade, spin } from "./animations";
import { createGlobalStyle } from "styled-components";

export const FullScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  ${fade};
`;

export const TitleBox = styled.div`
 display: flex; 
 flex-direction: column;
 text-align: center;
 margin: 10px 0;
 `;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  min-height: 800px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: start;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;  

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ margin }) => margin || "0"};
`;


export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;            
  justify-content: center;
  align-items: center;
  gap: 8px;                  
  margin: 25px 0;

  @media (max-width: 480px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 8px;
    & > button {
      flex: 0 0 auto;
    }
  }
`;


export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.colors.card || "#ddd"};
  border-top: 4px solid ${({ theme }) => theme.colors.primary || "#007bff"};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: 20px;
`;

export const FadeWrapper = styled.div`
  ${fade};
`;


export const Poster = styled.img`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: min(500px, 40vw);
  border-radius: 8px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 0;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export const SearchBox = styled.div`
  margin: -1rem 0 2rem 0;
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #0070f3;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
     padding: 0.4rem 0.8rem;  
     width: 85%;
     max-width: none;
  }
`;



