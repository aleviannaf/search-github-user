import styled from "styled-components"

interface CartUserProps {
    name: string,
    avatar_url: string , 
    login: string,
    bio: string ,
    url: string 
}


const CardContainer = styled.div`
  display: flex;
  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    align-items: start;
    width: 100%;
    padding: 20px 10px;
    gap: 15px;

    img {
      max-height: 100px;
      border-radius: 30px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100px;
      gap: 5px;
      padding: 10px 8px;
      font-size: 12px;

      span {
        font-size: 15px;
        color: blue;
      }

      a {
        color: black;
      }
    }
  }

  @media (min-width: 560px) {
    > div {
      padding: 20px 30px;
      gap: 20px;

      img {
        max-height: 200px;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 200px;
        gap: 20px;
        padding: 20px 8px;
        font-size: 16px;

        span {
          font-size: 15px;
          color: blue;
        }

        a {
          color: black;
        }
      }
    }
  }
`;

export default function CardUser({
  name,
  avatar_url,
  login,
  bio,
  url,
}: CartUserProps) {
  return (
    <CardContainer>
      <div>
        <img src={avatar_url} alt="avatar do usuário do github" />
        <div>
          <h2>{name}</h2>
          <span>{login}</span>
          <p>{bio}</p>
          <a href={url}>{url}</a>
        </div>
      </div>
    </CardContainer>
  );
}
