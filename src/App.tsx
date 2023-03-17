import CSSReset from './style/StyleGlobals';
import StyleBody from './style/StyleBody'
import Label from './components/Label/'

export default function App() {
  return (
    <StyleBody>
      <CSSReset/>
      <Label/>
      <footer className="caption">
        <p>o gráfico é apenas representativo de exemplo mas a conversão do dólar pro real funciona.</p>
      </footer>
    </StyleBody>
  )
}