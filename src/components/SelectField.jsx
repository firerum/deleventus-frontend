export const SelectField = ({
    children,
    value,
    name,
    placeholder,
    onChange,
}) => {
    return (
        <div className="mb-4 md:mb-6">
            <select
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="pl-14 pr-4 py-3 lg:py-[13px] w-full border-1 border-secondary-purple rounded-md"
            >
                {children.map((child, index) => (
                    <option value="" key={index}>
                        {child}
                    </option>
                ))}
            </select>
        </div>
    );
};
