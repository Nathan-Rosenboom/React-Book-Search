import React from 'react';
import { Row, Col, ListGroup, Button, Image } from 'react-bootstrap';

export default function BookListItem({ title, description, link, authors, image, onView, onSave, onDelete}) {
    return (
        <ListGroup.Item>
            <Row>
                <Col xs={6}>
                    <h2>{title}</h2>
                </Col>
                <Col>
                {onView && <Button variant = "primary">View</Button>}
                {onSave && <Button variant = "secondary">Save</Button>}
                <Button onCLick ={onDelete} variant = "danger">Delete</Button>

                </Col>
            </Row>
            <Row>
                <Col>
                <p>{link}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>{authors && authors.join(' ')}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                <Image src={image} alt="Book cover"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>{description}</p>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

