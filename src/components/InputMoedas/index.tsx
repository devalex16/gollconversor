import { useState } from 'react';
import StyleMoedas from './styles';

interface MoneyProps {
  setMoney: number,
  input: boolean,
  setInput: boolean,
  rate: number,
  setRate?: number
}

export default function InputMoedas({ setMoney, input, setInput, rate, setRate }: MoneyProps) {
  let cotacao: number = 0;
  
  return (
    <StyleMoedas show={input}>
      <div className="label">
        <input placeholder="ex: 10.00" type="number" onChange={(e) => {
      cotacao = e.target.value;
        }} />
        <button onClick={() => {
      setInput(!input)
      setMoney(parseFloat(cotacao))
      setRate(parseFloat(rate))
        }}>X</button>
      </div>
    </StyleMoedas>
  )
}