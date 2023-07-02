'use client';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding-inline: 2rem;
    padding-block: 0.75rem;
    margin: 0.5em;
    color: ${(props) => (props.outlined ? '#140C24' : '#F6F5F6')};
    background-color: ${(props) =>
        props.outlined ? 'transparent' : '#786995'};
    border: ${(props) => (props.outlined ? '1px solid #140C24' : 'none')};
    border-radius: 3px;
`;

export const Button = ({ title, outlined = undefined }) => {
    return (
        <StyledButton
            outlined={outlined}
            title={title}
            onClick={() => console.log('clicked')}
        >
            {title}
        </StyledButton>
    );
};
