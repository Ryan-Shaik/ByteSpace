import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`w-full px-5 md:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </div>
  );
}
