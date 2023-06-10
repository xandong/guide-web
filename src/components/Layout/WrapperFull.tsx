import React from "react"

interface WrapperFullProps {
  children: React.ReactNode;
  fullScreen?: boolean;
}

export const WrapperFull: React.FC<WrapperFullProps> = (props: WrapperFullProps) => {
  const { children, fullScreen = true } = props;
  return (
    <React.Fragment>
      <div className={`
      ${fullScreen ? 
      " w-screen h-screen " :
      " w-full h-full "}
       flex flex-col justify-center items-center`}>
        {children}
      </div>
    </React.Fragment>
  )
}