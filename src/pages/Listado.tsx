import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { getPokemons } from '../controller/getpokemon';
import { Pokemon } from '../models/pokemon.m';

const Listado = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const ObtenerTodos = async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    return (
        <>
            <h1>Pokemon JonaCode</h1>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">

                        {/* Slice: Devuelve una copia de una parte del array dentro de un nuevo array empezando por iniciohasta fin (fin no incluido). El array original no se modificará */}
                        {pokemons?.slice(0, 13).map((pokemon) => (

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo de Pokemon</Card.Header>
                            <Card.Img className="d-block mx-auto w-50" width="80" height="80" variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif"/>
                            <Card.Body>
                                <Card.Title className="txt-center">Card Title</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Puntos de vida: #</ListGroup.Item>
                                    <ListGroup.Item>Ataque: #</ListGroup.Item>
                                    <ListGroup.Item>Defensa: #</ListGroup.Item>
                                    <ListGroup.Item>Ataque Especial: #</ListGroup.Item>
                                    <ListGroup.Item>Defensa Especial: #</ListGroup.Item>
                                    <ListGroup.Item>Velocidad: #</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado