import { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import { useCloseElementOnClick } from '@utils/useCloseElementOnClick';

const DropDownContainer = styled.div`
    width: 100%;
    position: relative;
    border: 1px solid #e7ddfb;
    border-radius: 3px;
    margin-bottom: 1rem;
    background-color: #fff;
`;

const DropDownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 999999999;
    width: 100%;
    border: inherit;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
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
    const listBox = useRef();

    // close select when clicked anywhere outside of it
    useCloseElementOnClick(ref, () => setIsOpen(false));

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    // Toggles the dropdown open/close on click or Space/Enter key press
    const handleDropdownToggle = () => {
        setIsOpen((prev) => !prev);
    };

    // Handle key presses on individual options
    const handleOptionKeyDown = (event, value) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setSelectedOption(value); // Selects the option on Enter or Space key press
            setIsOpen(false); // Closes the dropdown after selection
        }
    };

    return (
        <DropDownContainer ref={ref}>
            <button
                className="w-full py-[0.57rem] px-4 font-light flex justify-between items-center gap-4"
                tabIndex={0}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={(event) => {
                    event.preventDefault();
                    setIsOpen((prev) => !prev);
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleDropdownToggle();
                    }
                }}
            >
                <span className="uppercase">
                    {selectedOption ? (
                        <span className="font-normal">{selectedOption}</span>
                    ) : (
                        <span className="title">{header}</span>
                    )}
                </span>
                <FaAngleDown
                    className={`transition-all duration-500 linear ${
                        isOpen ? '-rotate-180' : 'rotate-0'
                    }`}
                />
            </button>

            {isOpen && (
                <DropDownList
                    role="listbox"
                    ref={listBox}
                    aria-activedescendant={selectedOption}
                >
                    {children.map((child, index) => (
                        <ListItem
                            key={index}
                            role="option"
                            tabIndex={0}
                            onClick={onOptionClicked(child)}
                            aria-selected={child === selectedOption}
                            onKeyDown={(event) =>
                                handleOptionKeyDown(event, child)
                            }
                        >
                            {child}
                        </ListItem>
                    ))}
                </DropDownList>
            )}
        </DropDownContainer>
    );
};
