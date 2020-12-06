import { Switch, Route } from 'react-router-dom';

import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import SobreNos from './Paginas/SobreNos';
import Contato from './Paginas/Contato';

function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/produtos" component={Produtos}/>
            <Route exact path="/SobreNos" component={SobreNos}/>
            <Route exact path="/Contato" component={Contato}/>
        </Switch>
    );
}

export default Rotas;