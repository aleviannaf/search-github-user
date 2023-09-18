import { BiTime } from 'react-icons/bi';
import {  useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import { IconContext } from "react-icons";

const Icon = styled.button`
	height: 40px;
	width: 40px;
	border: none;
	background: transparent;
	position: absolute;
	left: 10px;
	top: 20px;

	cursor: pointer;

	&:hover{
        opacity: 0.7;
        transform: scale(1.08);
	}

	@media (min-width: 890px){
		right: 10px;
		top: 10px;
		left: auto;
	}
`
export default function HistoricIcon() {
	const navigate = useNavigate();

	const handleClick = ()=> {
		navigate('/historic')
	}

	return (
		<IconContext.Provider value={{ size: "40px" }}>
			<Icon onClick={handleClick}>
				<BiTime/>
			</Icon>
		</IconContext.Provider>
	)
}