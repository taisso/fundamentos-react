import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilho from "./components/basicos/ComFilho";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import Pai from './components/comunicacao/direta/Pai'

function App() {
  return (
    <div className="App">
      <Card titulo="#07 - Comunicação Direta">
        <Pai sobrenome="Freitas"/>
      </Card>
       <Card titulo="#05 - Condicional" color="#F96849">
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
