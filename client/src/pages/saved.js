import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";
import API from "../utils/api";

export default function Search() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const onDelete = async (book) => {
        API.deleteBook(book)
    }
    
    const onSearch = async (evt) => {
        evt.preventDefault();
        
        const books = results.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
            onDelete,
            
        }));
        
        setBooks(books);
    }
    return (
        <>
        <Row>
            <Col><h1>Saved Books</h1></Col>
        </Row>
        <Row>
            <Col>
            <BookList books={books}/>
            </Col>
        </Row>
        </>
    )
}