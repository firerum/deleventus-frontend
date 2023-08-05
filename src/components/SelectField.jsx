import { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import { useCloseElementOnClick } from '@utils/useCloseElementOnClick';

const DropDownContainer = styled.div`
    width: 100%;
    position: relative;
    border: 1px solid #e7ddfb;
    padding-block: 0.57rem;
    padding-inline: 1rem;
    border-radius: 3px;
    margin-bottom: 1rem;
    background-color: #fff;
`;

const DropDownHeader = styled.div`
    background: inherit;
    text-transform: uppercase;
`;

const DropDownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 999999999;
    width: 100%;
    border: inherit;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;
`;

const ListItem = styled.li`
    list-style: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #e7ddfb;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background-color: #e7ddfb;
    }
`;

export const SelectField = ({ children, header }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const ref = useRef();
    useCloseElementOnClick(ref, () => setIsOpen(false));

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <div className="App">
            <DropDownContainer ref={ref}>
                <div
                    className="w-full font-light flex justify-between items-center gap-4"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <DropDownHeader>
                        {selectedOption ? (
                            <span className="font-normal">
                                {selectedOption}
                            </span>
                        ) : (
                            <span>{header}</span>
                        )}
                    </DropDownHeader>
                    <FaAngleDown
                        className={`transition-all duration-500 linear ${
                            isOpen ? '-rotate-180' : 'rotate-0'
                        }`}
                    />
                </div>

                {isOpen && (
                    <DropDownList>
                        {children.map((child, index) => (
                            <ListItem
                                key={index}
                                onClick={onOptionClicked(child)}
                            >
                                {child}
                            </ListItem>
                        ))}
                    </DropDownList>
                )}
            </DropDownContainer>
        </div>
    );
};
