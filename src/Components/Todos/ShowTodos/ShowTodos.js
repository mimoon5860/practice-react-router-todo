import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowTodos = props => {
    const { completed, title, userId, id } = props.todo;
    return (
        <Col>
            <Card className='h-100 bg-info'>
                <Card.Body>
                    <Card.Title>Completed: {completed.toString()}</Card.Title>
                    <Card.Text>
                        <p>{title}</p>
                        <small>User id: {userId}</small>
                    </Card.Text>
                </Card.Body>
                <Link to={`/todo/${id}`}><Button className='w-50 mx-auto m-2' variant="light">Show Details</Button></Link>
            </Card>
        </Col>
    );
};

export default ShowTodos;