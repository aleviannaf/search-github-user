import { useState, FormEvent } from 'react';
import styled from 'styled-components';

import { searchAdded } from '../store/modules/search/searchSlice';
import { useStoreDispatch, useStoreSelector } from '../hooks/hooks';

import SearchPanel from '../components/SearchPanel';
import RepositoryList from '../components/RepositoriyList';



import { useLocalHistoric } from '../hooks/useHistoric';
import { useGitHubUserData } from '../hooks/useGitHubUserData';
import Loading from '../components/Loading';
import CardUser from '../components/CardUser';
import NotFound from '../components/NotFound';
import HistoricButton from '../components/HistoricButton';



const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 890px) {
        display: flex;
        flex-direction: row;
    }
`

const MainWrap = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #F0F0F5;
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export default function SearchPage() {
    const dispach = useStoreDispatch()
    const user: string = useStoreSelector((state) => state.search.value)
    const { updateLocalHistoric } = useLocalHistoric()
    const [search, setSearch] = useState<string>('')
    const { data, isLoading, isError } = useGitHubUserData(user);


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (search.length > 0) {
            dispach(searchAdded(search))
            updateLocalHistoric(search)
        }
    }


    return (
        <Container>
            <HistoricButton />
            <SearchPanel
                value={search}
                handleChange={setSearch}
                handleSubmit={handleSubmit}
            />
            {
                isError?
                <Wrap>
                    <NotFound/>
                </Wrap>

                :
                (isLoading || !user)
                    ?
                    <Wrap>
                        <Loading />
                    </Wrap>

                    :
                    <MainWrap>
                        <CardUser
                            name={data?.data.name}
                            bio={data?.data.bio}
                            url={data?.data.url}
                            avatar_url={data?.data.avatar_url}
                            login={data?.data.login}
                        />
                        <RepositoryList />
                    </MainWrap>

            }

        </Container>
    )
}