import { styled } from 'styled-components'

const Item = styled.li`
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: column;
    height: 200px;

    border-radius: 8px;
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
    background-color: white;

    padding: 20px;

    h3 {
            font-size: 20px;
            font-weight: bold;  
            text-transform: uppercase;
        }

    >div {
        display: flex;
        font-size: 14px;
        width: 100%;
        align-items: flex-start;
        justify-content: start;
        line-height: 150%;
        gap: 8px;

        span {
            font-weight: bold;
            color: blue;
        }
    }

`

const ProjectLink = styled.a`
    font-size: 1rem;
    color: #868E96;
    font-weight: 500;
    display: flex;
    align-items: center;
  
    &:hover {
      color: black;
    }
`

interface RepositoryCardProps {
    id: number,
    name: string,
    language: string,
    description: string
    html_url: string
}
export default function RepositoryCard(props : RepositoryCardProps){
    return(
        <Item key={props.id}>
            <h3>
              {props.name}
            </h3>

            <div>
              <h4> Primary Language: </h4>
              {props.language ? (
                <span>
                    {props.language}
                </span>
              ) : (
                <span> Primary language not identified</span>
              )}
            </div>

            <p>
              {props.description?.substring(0, 129)}
            </p>
            
              <ProjectLink target="_blank" href={props.html_url}>
                 Github Code
              </ProjectLink>

        </Item>
    )
}