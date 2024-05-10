import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonCheckbox from "@/components/NewPost/Modal/Form/ButtonCheckbox";
import { RadioGroup } from "@/components/ui/radio-group";
import React from "react";
import { paymentsType, cardTypes } from "@/utils/constants";

export default function Form() {
  const [paymentType, setPaymentType] = React.useState(paymentsType.money);
  const [cardType, setCardType] = React.useState(cardTypes.credit);
  return (
    <div>
     <Input type="number" className="border-none text-red-600 font-bold text-lg w-[120px] p-0" placeholder="R$ 0,00"/>
     <section className="mt-3">
      <div className="mt-3">
        <Label>Método de pagemnto</Label>
        <RadioGroup defaultValue="payment-type" onValueChange={(type) => setPaymentType(type) } className="grid grid-cols-3 gap-3">
          <ButtonCheckbox id="money" title="Dinheiro" type={paymentType} />
          <ButtonCheckbox id="card" title="Cartão" type={paymentType} />
          <ButtonCheckbox id="pix" title="Pix"  type={paymentType}/>
        </RadioGroup>
      </div>
      {paymentType === paymentsType.card && (
        <div className="mt-3">
          <Label>Forma de pagamento</Label>
          <RadioGroup defaultValue="payment-type" onValueChange={(type) => setCardType(type) } className="grid grid-cols-3 gap-3">
          <ButtonCheckbox id="credit" title="Crédito" type={cardType} />
          <ButtonCheckbox id="debit" title="Débito" type={cardType} />
        </RadioGroup>
        </div>
      )}
      {
        paymentType === paymentsType.card && cardType === cardTypes.credit && (
          <div className="mt-3">
            <Label>Número de parcelas</Label>
            <Input type="number" className="w-[120px]"/>
          </div>
        )
      }
     </section>
    </div>
  );
}