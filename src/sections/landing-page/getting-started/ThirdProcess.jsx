import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export const ThirdProcess = () => {
    return (
        <div className="lg:flex justify-start gap-10">
            <div className="get-started-image-bg mb-4 pt-10 px-6 xl:px-8 rounded-2xl">
                <Image
                    src="/images/universal_DP.jpeg"
                    width={500}
                    height={100}
                    alt="sign up process visuals"
                    className="rounded-2xl rounded-b-none inline-block mb-0"
                    priority={true}
                    placeholder="blur"
                    blurDataURL={'/images/universal_DP.jpeg'}
                />
            </div>
            <div className="xl:mt-8">
                <div className="text-left border-b pb-8">
                    <header className="font-general font-medium text-[#645F6E]">
                        Step 03
                    </header>
                    <h3 className="font-semibold my-2">
                        Ticketing and Secure Payments
                    </h3>
                    <p className="text-pry-text-color-1 flex items-start">
                        Set ticket prices, manage sales, and offer secure
                        payment for your event. Track ticket sales.
                    </p>
                </div>
                <div className="text-left">
                    <div className="pt-8">
                        <p className="text-pry-text-color-1 mb-6 xxl:mb-10 relative pl-6">
                            Set ticket prices, create ticket types, and manage
                            sales effortlessly, ensuring a{' '}
                            <span className="text-purple-base font-medium">
                                Smooth Ticketing Experience.
                            </span>
                            <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                        </p>
                    </div>
                    <p className="text-pry-text-color-1 mb-6 xxl:mb-10 relative pl-6">
                        Ensure peace of mind with{' '}
                        <span className="text-purple-base font-medium">
                            Secure Payment Processing
                        </span>
                        , protecting sensitive financial information during
                        transactions.
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                    <p className="text-pry-text-color-1 mb-6 relative pl-6">
                        <span className="text-purple-base font-medium">
                            Monitor Ticket Sales{' '}
                        </span>
                        in real-time, gaining valuable insights and tracking the
                        success of your event's ticketing.
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                </div>
            </div>
        </div>
    );
};
