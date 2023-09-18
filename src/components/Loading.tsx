import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 200px;
  width: 200px;
`;

export default function Loading(){
    return(
        <Loader/>
    )
}