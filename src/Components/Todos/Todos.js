import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ShowTodos from './ShowTodos/ShowTodos';
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])



    return (
        <div>
            {todos.length === 0 ? <h1>Loading...</h1> : <Row xs={1} md={4} className="g-2 m-2">
                {todos.map(todo => <ShowTodos todo={todo}></ShowTodos>)}
            </Row>}
        </div >
    );
};

export default Todos;