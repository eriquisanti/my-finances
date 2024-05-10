type Props = {
  value: string;
};

export default function Title({ value }: Props) {
  return (
    <p className="font-semibold uppercase text-[#828282] text-sm">{value}</p>
  );
}