import React from "react";
import { ListGroup, Card } from 'react-bootstrap';
import BookListItem from "../BookListItem";

export default function BookList({ books =[] }){
    return (
        <Card>
            <Card.Title>Results</Card.Title>
            <Card.Body>
                <ListGroup>
                    {books.map((book) => (
                        <BookListItem key={book.id} {...book}/>
                    ))}   
                </ListGroup>
            </Card.Body>
        </Card>
    )
}