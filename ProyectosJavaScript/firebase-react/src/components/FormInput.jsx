import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const FormInput = forwardRef(
    // eslint-disable-next-line react/prop-types
    ({ type, placeholder, onChange, onBlur, name, label, children}, ref) => {
        const errorClassLabel = error
        ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
        : "block mb-2 text-sm font-medium text-red-900 dark:text-red-300";

        const errorClassInput = error
        ? "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        : "text-gray-900 bg-gradient-to-r from-red-300 via-red-300 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"

    return (
        <div className="mb-6">
            <label htmlFor="email" className={errorClassLabel}>
                {label}
            </label>
            
            <input 
            type={type} 
            placeholder={placeholder} 
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            name={name} 
            />
            {children}
        </div>
    )
});

export default FormInput;