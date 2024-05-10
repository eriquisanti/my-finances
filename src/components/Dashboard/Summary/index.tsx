import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Summary() {
  return (
      <div className="flex justify-between">
        <p className="font-semibold uppercase text-[#000000] text-sm">SUMMARY</p>
        <Select>
          <SelectTrigger className="w-[138px] rounded-[8px] border-[#E0E0E0]">
            <SelectValue placeholder="This month" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="jan">Janeiro</SelectItem>
              <SelectItem value="fev">Fevereiro</SelectItem>
              <SelectItem value="mar">Março</SelectItem>
              <SelectItem value="abr">Abriu</SelectItem>
              <SelectItem value="mai">Maio</SelectItem>
              <SelectItem value="jun">Junho</SelectItem>
              <SelectItem value="jul">Julho</SelectItem>
              <SelectItem value="ago">Agosto</SelectItem>
              <SelectItem value="set">Setembro</SelectItem>
              <SelectItem value="out">Outubro</SelectItem>
              <SelectItem value="nov">Novembro</SelectItem>
              <SelectItem value="dez">Dezembro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
    </div>
  );
}