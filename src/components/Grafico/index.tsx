import StyleGrafico from './StyleGrafico'
function Grafico() {

  return (
    <StyleGrafico>
      <div id="colun0" className="colun"></div>
      <div id="colun1" className="colun"></div>
      <div id="colun2" className="colun"></div>
      <div id="colun3" className="colun"></div>
      <div id="colun4" className="colun"></div>
      <div id="colun5" className="colun"></div>
      <div id="colun6" className="colun"></div>
      <section className="moedas">
        <p>5.0</p>
        <p>3.0</p>
        <p>2.0</p>
        <p>1.0</p>
      </section>
      <section className="dias">
        <p>S</p>
        <p>S</p>
        <p>T</p>
        <p>Q</p>
        <p>Q</p>
        <p>S</p>
        <p>D</p>
      </section>
    </StyleGrafico>
  )
}

export default Grafico