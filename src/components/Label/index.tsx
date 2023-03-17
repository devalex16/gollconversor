import { useState, useEffect } from 'react'
import StyleLabel from './StyleLabel'
import Conversor from '../Conversor/'
import Grafico from '../Grafico'
import InputMoedas from '../InputMoedas'

function Label() {
  const [rate, setRate] = useState(0)
  const [input, setInput] = useState(false)
  const [money, setMoney] = useState(0)

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/e2cd1cd7d93027efc9ecd55a/latest/USD")
    .then(response => response.json())
    .then(dados => setRate(dados.conversion_rates.BRL))
    .then(error => console.log(error))
  }, [money])
  
  return (
    <StyleLabel>
      <Conversor money={money} input={input} setInput={setInput} rate={rate}/>
      <Grafico />
      <InputMoedas setMoney={setMoney} rate={rate} setInput={setInput} input={input} setRate={setRate} />
    </StyleLabel>
  )
}

export default Label;