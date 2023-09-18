import { FormEvent, InputHTMLAttributes } from "react"
import styled from "styled-components"

const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 100%;
    height: 80px;
    
    border-bottom: solid 3px #e3e3e3;
    padding: 20px 15px;
    color: gray;


    form {
        display: flex;
        gap: 8px;
    }

    input,
    button {
        font-size: 12px;
        font-family: inherit;
        border: none;
        border-radius: 8px;
        padding: 12px 5px;
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
        background-color: white;
        line-height: 1.5;
        margin: 0;
    }

    button{
        cursor: pointer;

        &:hover{
            opacity: 0.7;
            transform: scale(1.08);
        }
    }

    @media (min-width: 417px) {
        input,
        button {
            font-size: 16px;
        }
    }

    @media (min-width: 890px){
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 22rem;
        height: 100vh;
        
        border-right: solid 3px #e3e3e3;
        padding: 20px 15px;
        color: gray;
    }

`

interface SearchPanelProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string) => void,
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function SearchPanel({value, handleChange, handleSubmit }: SearchPanelProps){
    return(
        <Sidebar>
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Buscando por usuário?"
            />
            <button type="submit">Pesquisar</button>
        </form>
    </Sidebar>
    )
}