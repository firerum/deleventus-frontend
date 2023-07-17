export const CreateAccountCard = ({
    title,
    step,
    content,
    setCount,
    index,
    count,
}) => {
    return (
        <button
            className={`bg-pry-purple text-left cursor-pointer py-8 px-6 rounded-xl max-w-md ${
                count === index && 'get-started-image-bg animate-account'
            }`}
            onClick={() => setCount(index)}
        >
            <span className="block font-general mb-4">{step}</span>
            <span className="block font-semibold mb-6">{title}</span>
            <span className="hidden md:block text-sm text-pry-text-color-1">
                {content}
            </span>
        </button>
    );
};
