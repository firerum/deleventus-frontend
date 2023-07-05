import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const _Testimonial = styled.div`
    margin-top: 2rem;
    padding-inline: 2rem;
    padding-block: 2.5rem;
    border-radius: 8px;
    position: relative;
    /* clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    24% 75%,
    13% 89%,
    14% 75%,
    0% 75%
); */

    &::after {
        content: '';
        position: absolute;
        top: -25px;
        left: 45%;
        height: 50px;
        width: 50px;
        border-radius: 100%;
        background-color: #e7ddfb;
        /* z-index: 4; */
    }
`;
export const Testimonial = ({ children, name }) => {
    return (
        <div>
            <_Testimonial className="bg-purple-base text-secondary-purple">
                {children}
            </_Testimonial>
            <figure className="flex gap-4 pt-4">
                <Image
                    className="rounded-full"
                    src="/images/universal_DP.jpeg"
                    width={50}
                    height={50}
                    alt={name}
                />
                <figcaption>{name}</figcaption>
            </figure>
        </div>
    );
};
