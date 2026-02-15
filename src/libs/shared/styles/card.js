import styled from "styled-components";
import { shine } from "./animations";

export const Card = styled.div`
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #1f1f1f;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 480px) {
    border-radius: 6px;
    font-size: 0.9rem;     
    transform: none;        
  }
`;

export const CardSkeleton = styled.div`
  width: 240px;
  height: 400px;
  border-radius: 8px;
  background: #808080;
  background-image: linear-gradient(
    90deg,
    #b1b1b1 0px,
    #b2b1b1 40px,
    #a5a4a4 80px
  );
  animation: ${shine} 1.2s linear infinite;
  animation-fill-mode: forwards;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  &.fade-in {
    animation: fadeIn 0.5s forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 480px) {
    width: 155px;
    height: 220px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 155px;
    height: 260px;
  }
`;


export const Image = styled.img`
  width: 100%;
  aspect-ratio: 2.5 / 3;
  object-fit: cover;
  display: block;
  @media (max-width: 480px) {
    aspect-ratio: 2 / 3; 
  }
`;


export const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  line-height: 0;
`;
