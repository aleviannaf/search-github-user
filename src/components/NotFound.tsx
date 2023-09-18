import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

   

    color: #000;
    font-family: Inter;
    font-style: normal;
    line-height: normal;  

    h2{
        font-size: 49px;
        font-weight: 700;
  
    }

    p, span {
        font-size: 22px;
        font-weight: 400;
    }
`
export default function NotFound(){
    return(
       <Container>
        <h2>404 Error</h2>
        <span>Sorry, user not found</span>
        <p>The user you  were looking for doesn’t exist.</p>
       </Container>
    )
}