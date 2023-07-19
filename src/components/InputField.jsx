'use client';

export const InputField = ({
    type,
    value,
    name,
    label,
    placeholder,
    onChange,
}) => {
    return (
        <div className="mb-4 md:mb-6">
            {/* {label && <label htmlFor="">{label}</label>} */}
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="pl-14 pr-4 py-3 lg:py-[13px] w-full border-1 border-secondary-purple rounded-md"
            />
        </div>
    );
};
