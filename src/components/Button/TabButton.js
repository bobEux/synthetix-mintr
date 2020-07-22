import React from 'react';
import styled from 'styled-components';

const ContentHeaderButton = ({ children, isSelected, onClick, disabled }) => {
	return (
		<Button onClick={onClick} isSelected={isSelected} disabled={disabled}>
			{children}
		</Button>
	);
};

const Button = styled.button`
	cursor: pointer;
	height: 85px;
	outline: none;
	padding-top: 8px;
	border: none;
	flex: 1;
	font-size: 32px;
	letter-spacing: 1px;
	transition: all ease-in 0.1s;
	font-family: 'archia-medium';
	background-color: ${props => props.theme.colorStyles.background};
	color: ${props => props.theme.colorStyles.subtext};
	&:disabled {
		opacity: 0.3;
	}
	&:hover:not(:disabled),
	&:focus:not(:disabled) {
		background-color: ${props => props.theme.colorStyles.borders};
		border-bottom: 8px solid
			${props =>
				props.isSelected ? props.theme.colorStyles.accentDark : props.theme.colorStyles.borders};
	}
`;

export default ContentHeaderButton;
