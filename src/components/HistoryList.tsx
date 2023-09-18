import styled from "styled-components"
import { useStoreSelector } from "../hooks/hooks"
import { HistoryState } from "../store/modules/history/historySlice"
import HistoryItem from "./HistoryItem"

const ContainerList = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 1440;
    height: 100vh;
    padding: 20px 20px;
    gap: 16px;
    word-wrap: break-word;
    overflow: hidden; 

    overflow: hidden;
    background-color: #F0F0F5;

    @media (min-width: 560px){
        padding: 30px 40px;
    }
`

export default function HistoryList() {
    const historyc: Array<HistoryState> = useStoreSelector((state) => state.history)

    return (
        <ContainerList>
            {
                historyc.map((item: HistoryState, index) =>
                    <HistoryItem
                        key={index}
                        value={item.search}
                        time={item.timestamp}
                    />)
            }
        </ContainerList>
    )
}