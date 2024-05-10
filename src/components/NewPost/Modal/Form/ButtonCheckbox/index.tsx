import { Label } from "@/components/ui/label"
import {RadioGroupItem } from "@/components/ui/radio-group"
import React from "react";

type Props = {
  id: string;
  title: string;
  type: string;
}

export default function ButtonCheckbox({ id, title, type }: Props) {
  const checked = type === id;
  return (
    <div>
      <RadioGroupItem id={id} value={id} checked={checked} hidden/>
      <div className={`border-[1px] border-green-400 rounded-[30px] ${checked && "bg-green-600 text-white"}`}>
        <Label htmlFor={id} className="block p-1 w-[100%] text-center cursor-pointer">{title}</Label>
      </div>
    </div>
  );
}