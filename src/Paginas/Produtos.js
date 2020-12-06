import React from 'react';
import{ useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';

import Produto from '../Components/Produto'
import Categorias from '../Components/Produto/categoria';
import './Produtos.css';

export default function Produtos(){
    const [produtos, setProdutos] = useState([]);

    useEffect( () => {
            async function fetchData(){
                const resposta = await fetch("http://localhost/projetos/genisis/api/produtos.php")
                const dados = await resposta.json()
                setProdutos(dados);
            }
            fetchData();
    }, []);

    return(
        
        <Container fluid className="produtos">

            <Row>
             <h1>Produtos</h1>
            </Row>
            <Row >
             < Categorias />
            </Row>
            <Row>
             {produtos && produtos.map(item => <Produto key={item.id} img={item.img} nome={item.descricao} preco={item.preco} categoria={item.desenvolvimento} />) }
            </Row>
       
           
        </Container>
        
    );
}