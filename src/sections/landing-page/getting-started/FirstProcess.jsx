import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export const FirstProcess = () => {
    return (
        <div className="lg:flex justify-start gap-10">
            <div className="get-started-image-bg mb-4 pt-20 px-6 xl:px-8 xl:pt-24 rounded-2xl">
                <Image
                    src="/images/universal_DP.jpeg"
                    width={750}
                    height={200}
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
                        Step 01
                    </header>
                    <h3 className="font-semibold my-2">Create Account</h3>
                    <p className="text-pry-text-color-1 flex items-start">
                        You’ll be asked to submit your name, email address and
                        other relevant informations
                    </p>
                </div>
                <div className="text-left">
                    <div className="pt-8">
                        <p className="text-pry-text-color-1 mb-6 xxl:mb-10 relative pl-6">
                            With our lightning-fast{' '}
                            <span className="text-purple-base font-medium">
                                30 Seconds Sign-Up Process,
                            </span>{' '}
                            you'll be ready to organize events in no time.
                            <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                        </p>
                    </div>
                    <p className="text-pry-text-color-1 mb-6 xxl:mb-10 relative pl-6">
                        Take full control of your{' '}
                        <span className="text-purple-base font-medium">
                            Privacy Settings
                        </span>{' '}
                        while effortlessly creating an account.
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                    <p className="text-pry-text-color-1 mb-6 relative pl-6">
                        Experience the convenience of{' '}
                        <span className="text-purple-base font-medium">
                            Passwordless Integration
                        </span>{' '}
                        with leading platforms like Google, Apple, and more.
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                </div>
            </div>
        </div>
    );
};
