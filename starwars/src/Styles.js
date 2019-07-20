import styled from 'styled-components';

const colors = {
	grey : '#242424'
};

export const StyledH2 = styled.h2`
	padding-bottom: 15px;
	padding-top: 0;
	// color: ${colors.grey};
	color: ${(props) => props.color};
	background-color: linear-gradient(${colors.grey}, #ffffff);
`;

export const CardStyle = styled.div`
	background-color: #ffecb3;
	height: 200px;
	margin: 16px 0;
	line-height: 5px;
`;

export const CardDisplay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	width: 400px;
	background-color: #ffecb3;
	margin: 15px;
	border: 1px solid #b96900;
	border-radius: 20px;
	box-shadow: 2px 2px 10px 5px #b96900 inset;
	height: auto;
`;
