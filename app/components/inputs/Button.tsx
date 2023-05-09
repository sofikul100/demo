"use client"

import clsx from "clsx"


interface buttonProps {
    type?:"button"|"submit"|"reset"|undefined;
    fullWidth?: boolean;
    children?:React.ReactNode;
    onClick?: () => void;
    secendary?:boolean;
    danger?:boolean;
    disabled?:boolean;
}


const Button: React.FC<buttonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secendary,
    disabled,
    danger
}) =>{
    return (
        <div className="ml-4 mt-8 mr-4">
            <button className={clsx(`
              flex
              justify-center
              rounded-md
              px-3
              py-2
              text-sm
              font-semibold
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:ring-offset-2
            `,
             disabled && "opacity-50 cursor-default",
             fullWidth && "w-full",
             secendary ? "text-gray-900" :"text-white",
             danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
             !secendary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600" 
            )}>
            {children}
            </button>
        </div>
    )
}


export default Button;