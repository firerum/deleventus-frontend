import { Button } from '@components/Button';
import { FaCheck } from 'react-icons/fa';

export const PricingCard = ({ title, sub_title, price, info_header, info }) => {
    return (
        <article className="border-1 p-12 mb-12 rounded-xl">
            <div className="mb-14">
                <h2 className='font-medium text-2xl'>{title}</h2>
                <p>{sub_title}</p>
                <p className="text-4xl font-general font-semibold">{price}</p>
                <div className="my-10">
                    <Button width='100%' title="Get Started" />
                </div>
            </div>
            <div>
                {info?.map((inf) => (
                    <ul className="relative text-pry-text-color-1">
                        <li className="pl-8 mb-6">{inf}</li>
                        <FaCheck className="absolute top-1 left-0 text-xs" />
                    </ul>
                ))}
            </div>
        </article>
    );
};
