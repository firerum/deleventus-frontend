import { styled } from 'styled-components';

const _Button = styled.button`
    span:last-child {
        color: #807c89;
    }

    &:hover {
        background-image: linear-gradient(
            180deg,
            #f9e8be 0%,
            #8a7980 0.59%,
            #29194a 90%
        );

        span {
            color: #fefbf4;
        }

        span:nth-child(2) {
            color: #f8e4b2;
        }
    }
`;

export const CreateAccountCard = ({ title, step }) => {
    return (
        <_Button
            className="bg-pry-purple text-left cursor-pointer hover:animate-account py-8 px-6 rounded-xl max-w-md"
            onClick={() => console.log('clicked')}
        >
            <span className="block font-general mb-4">{step}</span>
            <span className="block font-semibold mb-6">{title}</span>
            <span className="hidden md:block text-sm">
                You’ll be asked to submit your name, email address and other
                relevant information
            </span>
        </_Button>
    );
};
