
type Props = {
  value: string;
};
export default function Text({ value }: Props) {
  return (
    <p className="text-2xl">{value}</p>
  )
}