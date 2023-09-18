import { useGitHubRepositoryData } from "../hooks/userGitHubRepositoryData"
import RepositoryCard from "./RepositoryCard";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    h3 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 12px;
    }
`

const ListConatiner = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    list-style: none;
    padding: 10px;
    gap: 12px;

 
`

interface Repository {
    id: number
    name: string
    language: string
    description: string
    html_url: string
}

export default function RepositoryList() {
    const { data } = useGitHubRepositoryData()
    return (
        <Container>
            <h3>Repositórios</h3>
        <ListConatiner>  
            {   
                data?.map?.((repository:Repository) => (
                    <RepositoryCard
                        key={repository.id}
                        id={repository.id}
                        name={repository.name}
                        language={repository.language}
                        description={repository.description}
                        html_url={repository.html_url}
                    />))
            }
        </ListConatiner>
        </Container>
    )
}