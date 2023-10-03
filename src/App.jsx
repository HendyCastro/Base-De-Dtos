import './App.css'
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './components/Listado';
import Alert from './components/Alert';
import Formulario from './components/Formulario';

function App() {
    const colaboradores = BaseColaboradores;

    return (
        <div className="App">
            <div>
                <h1 className="tituloListado">Base de datos de Colaboradores</h1>
                <Listado colaboradores={colaboradores} />
            </div>
            <div>
            <h1 className="tituloFormulario">Agrega un Colaborador</h1>
                <Formulario agregarColaborador={colaboradores} />
            </div>
        </div>
    )
}

export default App
