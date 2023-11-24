import ButtonLoading from "./ButtonLoading";

const colorClasses = {
    purple: "bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
    blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900",
    red: "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    yellow: "bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900",
};

const baseButtonClass = "focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2";


// eslint-disable-next-line react/prop-types
const Button = ({ text, type, color = "purple", loading, onClick }) => {
    if (loading) return <ButtonLoading/>;

    const classColor = colorClasses[color];

    return (
        <button
        onClick={onClick}
        type={type}
        className={`${baseButtonClass} ${classColor}`}
        >
            {text}
        </button>
    );
};

export default Button;
