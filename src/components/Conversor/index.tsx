import { useState, useEffect } from 'react';
import StyleConv from './styles';

interface MoedasProps {
  money: number,
  rate: number,
  setInput?: boolean,
  input?: boolean
}

export default function Conversor({ money, rate, input, setInput }: MoedasProps) {
  const [wrap1, setWrap1] = useState(false);
  const [wrap2, setWrap2] = useState(false);
  
  return (
    <StyleConv setWrap1={wrap1} setWrap2={wrap2}>
      <div onClick={() => {
      setInput(!input)
      }} className="wrapper">
        <p>{money.toFixed(2)}</p>
        <nav onClick= {() => {
      setWrap1(!wrap1)
        }}>BRA</nav>
        <ul id="wrap1" className="options">
          <li>BRA</li>
          <li>USA</li>
        </ul>
      </div>
      <div className="middle">{"><"}</div>
      <div className="wrapper">
        <p>{(money/rate).toFixed(2)}</p>
        <nav onClick= {() => {
      setWrap2(!wrap2)
        }}>USA</nav>
        <ul id="wrap2" className="options">
          <li>BRA</li>
          <li>USA</li>
        </ul>
      </div>
    </StyleConv>
  )
}