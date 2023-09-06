export const EventDescription = ({ register, errors }) => {
    return (
        <div>
            {errors && (
                <p className="text-xs text-left text-red-500 mb-1 mt-0">
                    {errors[name]?.message}
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
