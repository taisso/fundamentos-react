import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilho from "./components/ComFilho";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";

function App() {
  return (
    <div className="App">
       <Card titulo="#05 - Condicional">
        <Condicional numero={11}/>
      </Card>
      <Card titulo="#04 - Repetição">
        <Repeticao/>
      </Card>
      <Card titulo="#03 - Componente Com Filho">
        <ComFilho>
          <ul>
            <li>Ana</li>
            <li>Carlos</li>
            <li>Bia</li>
            <li>Daniel</li>
          </ul>
        </ComFilho>
      </Card>
      <Card titulo="#02 - Componente Com Parametro">
        <ComParametro titulo="Recebendo título por parâmetro" />
      </Card>
      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  );
}

export default App;
