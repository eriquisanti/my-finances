import React from "react";
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Root({ children, className }: Props){
  return (
    <div className={cn("bg-white shadow-sm rounded-[8px] p-4 border-[#BDBDBD] border-[1px]", className)}>
      {children}
    </div>
  );
}