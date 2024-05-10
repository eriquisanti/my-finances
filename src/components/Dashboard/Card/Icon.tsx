import { icons } from 'lucide-react'

type Props = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

export default function Icon({ name, color, size }: Props) {
  const LucideIcon = icons[name]
  if (!LucideIcon) {
    console.error(`Icon ${name} not found`)
    return null
  }
  return (
    <div className='bg-[#F4F4F4] p-4 rounded-[8px]'>
      <LucideIcon color={color} size={size} />
    </div>
  );
}