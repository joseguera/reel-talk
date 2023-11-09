'use client'

import { FC } from "react";

type ButtonProps = {
    children?: string;
    pageNav?: () => void;
  }


const FormButton: FC<ButtonProps> = ({ children, pageNav }) => {
  return (
    <div>
        <button className="w-64 h-12 p-2.5 rounded-lg border-2 border-[#FFFFFFEB] gap-2.5" onClick={() => pageNav && pageNav()}>{children}</button>
    </div>
  )
}

export default FormButton