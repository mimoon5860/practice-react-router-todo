import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleTodo = () => {
    const [singleTodo, setSingleTodo] = useState({});
    const { todoId } = useParams();
    console.log(todoId)
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleTodo(data))
    }, [])

    const { completed, title, userId } = singleTodo;

    let color;
    completed ? color = {
        color: 'green'
    } : color = {
        color: 'red'
    }

    return (
        <div className='container mt-5'>
            <Card>
                <Card.Header style={color}>{completed ? <h2>Status: Completed</h2> : <h2>Status: Incomplete</h2>}</Card.Header>
                <Card.Body>
                    <Card.Title>User Id: {userId}</Card.Title>
                    <Card.Text>
                        <h3>{title}</h3>
                    </Card.Text>
                    <Link to="/todos"><Button variant="primary">Todo list</Button></Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default SingleTodo;