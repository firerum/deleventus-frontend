export const CreateAccountCard = ({ title, step }) => {
    return (
        <div className="bg-pry-purple text-left cursor-pointer py-8 px-4 rounded-xl max-w-md">
            <header className="font-general mb-4">{step}</header>
            <h3 className="font-semibold">{title}</h3>
            <p className="hidden md:block text-sm">
                You’ll be asked to submit your name, email address and other
                relevant information
            </p>
        </div>
    );
};
