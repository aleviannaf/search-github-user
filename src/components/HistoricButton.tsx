import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import HistoricIcon from './icons/HistoricIcon';

const Icon = styled.button`
	height: 40px;
	width: 40px;
	border: none;
	background: transparent;
	position: absolute;
	left: 10px;
	top: 20px;

	cursor: pointer;

	svg{
		height: 30px;
		width: 30px;
	}

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
export default function HistoricButton() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/historic')
	}

	return (
		<Icon onClick={handleClick}>
			<HistoricIcon/>
		</Icon>
	)
}