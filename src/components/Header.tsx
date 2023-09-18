

import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"




const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px; 
    border-bottom: 3px solid  rgba(217, 217, 217, 0.50);
    max-width: 1440px;

    h1{
        flex: 1;
        font-size: 170%;
        font-weight: 500;
        letter-spacing: .25px;
        line-height: normal;
        margin-inline-start: 6px;
        padding-inline-end: 12px;
    }

    button {
        color: #7E7E7E;
        width: 100px;
        height: 30px;
        border: 2px solid #7E7E7E;
        border-radius: 10px;
        background: #F9FBFF;
    }

    @media (min-width: 560px){
        padding: 12px 40px; 

        button {
            width: 154px;
            height: 38px;
        }
    }
`



export function Header() {
    const navigate = useNavigate();

	const handleNavigation= ()=> {
		navigate('/')
	}

    return (
        <TagHeader>
            <h1>Histórico</h1>
            <button onClick={handleNavigation}>Voltar</button>
        </TagHeader>
    )
}

