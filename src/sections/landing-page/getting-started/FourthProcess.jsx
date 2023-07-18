import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export const FourthProcess = () => {
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
                        Step 04
                    </header>
                    <h3 className="font-semibold my-2">
                        Upload Precious Memories
                    </h3>
                    <p className="text-pry-text-color-1 flex items-start">
                        Upload and share photos, videos, and other media to
                        create a comprehensive album of event memories.
                    </p>
                </div>
                <div className="text-left">
                    <div className="pt-8">
                        <p className="text-pry-text-color-1 mb-6 xxl:mb-10 relative pl-6">
                            Create a{' '}
                            <span className="text-purple-base font-medium">
                                Captivating Album of Memories
                            </span>{' '}
                            by easily uploading and sharing photos and videos.
                            <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                        </p>
                    </div>
                    <p className="text-pry-text-color-1 mb-6 xxl:mb-10 relative pl-6">
                        Keep all{' '}
                        <span className="text-purple-base font-medium">
                            Event Memories Organized
                        </span>{' '}
                        in one place, making it convenient to search and relive
                        the cherished experiences.
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                    <p className="text-pry-text-color-1 mb-6 relative pl-6">
                        Seamlessly{' '}
                        <span className="text-purple-base font-medium">
                            Share Event Memories
                        </span>{' '}
                        with your friends, family, and attendees while spreading
                        the joy and excitement.
                        <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                    </p>
                </div>
            </div>
        </div>
    );
};
