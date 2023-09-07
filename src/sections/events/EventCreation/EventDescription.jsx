export const EventDescription = ({ register, errors }) => {
    return (
        <div>
            <h2 className="mt-12 text-base">Event Description</h2>
            {errors && (
                <p className="text-left text-red-500 first-letter:uppercase mt-0">
                    {errors['description']?.message}
                </p>
            )}
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="enter event description"
                className="border-1 w-full p-4"
                {...register('description')}
            ></textarea>
        </div>
    );
};
