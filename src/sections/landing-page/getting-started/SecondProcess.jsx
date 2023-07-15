import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export const SecondProcess = () => {
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
                        Step 02
                    </header>
                    <h3 className="font-semibold my-2">
                        Create and Manage Events
                    </h3>
                    <p className="text-pry-text-color-1 flex items-start">
                        Provide event details, manage RSVPs, and send
                        invitations seamlessly.
                    </p>
                </div>
                <div className="text-left">
                    <div className="pt-8">
                        <p className="text-pry-text-color-1 mb-6 relative pl-6">
                            Easily plan, organize, and manage your events with
                            an{' '}
                            <span className="text-purple-base font-medium">
                                Intuitive and User-friendly Interface.
                            </span>{' '}
                            <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                        </p>
                    </div>
                    <p className="text-pry-text-color-1 mb-6 relative pl-6">
                        Effortlessly{' '}
                        <span className="text-purple-base font-medium">
                            Manage RSVPs
                        </span>{' '}
                        and{' '}
                        <span className="text-purple-base font-medium">
                            Send Invitations
                        </span>{' '}
                        to your guests, making event coordination a breeze.{' '}
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                    <p className="text-pry-text-color-1 mb-6 relative pl-6">
                        <span className="text-purple-base font-medium">
                            Engage and Collaborate
                        </span>{' '}
                        with event stakeholders, allowing seamless teamwork in
                        creating memorable experiences.
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                </div>
            </div>
        </div>
    );
};
