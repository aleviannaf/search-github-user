import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useStoreDispatch, useStoreSelector } from "../hooks/hooks"
import { searchAdded } from "../store/modules/search/searchSlice"
import { HistoryState } from "../store/modules/history/historySlice"
import { useLocalHistoric } from "../hooks/useHistoric"

const CardItem = styled.li`
    display: grid;
    grid-template-columns: 2fr 2fr 0.5fr 0.5fr;
    align-items: center;
    max-width: 1440px;
    gap: 8px;

    span{
        color: #292D32;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: -0.14px;
        word-wrap: break-word;
        overflow: hidden; 
    }


    @media (min-width: 560px){
        span {
            font-size: 18px;
            font-weight: 500px;
        }
    }

`

const Button = styled.button`
    display: flex;
    width: 50px;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    

    border-radius: 4px;
    border: 1px solid ${(props) => (props.isdelete ? "#DF0404" : "#00B087")};
    background: ${(props) => (props.isdelete ? "#FFC5C5" : "rgba(22, 192, 152, 0.38)")};

    color:  ${(props) => (props.isdelete ? "#DF0404" : "#00B087")};
    font-family: Poppins;
    font-size: 12px; 
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.14px;

    cursor: pointer;

    
    @media (min-width: 560px){
        font-size: 14px;
        font-weight: 500px;
        width: 80px;
    }
`

interface HistoryItemProps {
    id: string
    value: string
    time: string
}
export default function HistoryItem({id, value, time}: HistoryItemProps){
    const dataHistoric: HistoryState[] = useStoreSelector((state)=> state.history)
    const { updateLocalHistoric, setLocalHistoric } = useLocalHistoric()
    const dispatch = useStoreDispatch()
    const navigate = useNavigate()

    const handleClickRecover = () =>{
        dispatch(searchAdded(value))
        updateLocalHistoric(value)
        navigate("/")
    }

    const handleClickDelete = (id: string) => {
        const newValue = dataHistoric.filter(item => {
            if (item.id !== id) return item
        })
        setLocalHistoric(newValue)
    }
    return(
        <CardItem>
            <span>{value}</span>
            <span>{time}</span>
            <Button onClick={handleClickRecover} >Recuperar</Button>
            <Button onClick={()=>handleClickDelete(id)} isdelete="true">Excluir</Button>
        </CardItem>
    )
}