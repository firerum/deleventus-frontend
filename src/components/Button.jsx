'use client';
import React from 'react';
import styled from 'styled-components';

const _Button = styled.button`
    padding-inline: 2rem;
    padding-block: 0.75rem;
    font-weight: 500;
    color: ${(props) => (props.outlined ? '#140C24' : '#F6F5F6')};
    background-color: ${(props) =>
        props.outlined ? 'transparent' : '#786995'};
    border: ${(props) => (props.outlined ? '1px solid #140C24' : 'none')};
    border-radius: 3px;
    width: ${(props) => props.width || 'auto'};

    /* &:hover {
        color: red;
    } */
`;

// TODO
export const Button = ({ outlined = 'false', className, children }) => {
    return (
        <_Button
            className={className}
            outlined={outlined}
            onClick={() => console.log('clicked')}
        >
            {children}
        </_Button>
    );
};
