import { PropsWithChildren, ButtonHTMLAttributes } from "react";
interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement>{

}

const Button = (props: ButtonProps) => {

    const { className, children, ...customProps } = props;

    return(
        <button
            className={`bg-violet-950 text-gray-100 button ${className? className:''}`}
            {...customProps}
        >
            {children}
        </button>
    )
}
export default Button;