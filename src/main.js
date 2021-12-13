import React from 'react'
import Home from './components/home/home'
import Contact from './components/contact/contact'
//import Posts from './components/lista_wordpress/lista_wordpress'

import { Container } from 'react-materialize'
// importando o componente <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </Container>
    </main>
);

/*
No header do arquivo incluímos as dependências ( Switch e Route ) e dentro do nosso component “Main” incluímos nosso conjunto de rotas:
Em ” <Route exact path=’/’ component={Home}/>” dizemos que quando a rota for exatamente “/” renderize o component “Home”

Em ” <Route path=’/contact’ component={Contact}/>” dizemos que quando a rota for “/contact” renderize o component “Contact”

Obs: E como já dito, o “Switch” é um component do React Router que faz uma interação nas rotas e renderiza somente a primeira que dar match na url solicitada.
*/

export default Main;