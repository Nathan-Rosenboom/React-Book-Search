import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";
import API from "../utils/api";

export default function Search() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    
    const onSearch = async (evt) => {
        evt.preventDefault();
        const results = await API.searchBooks(search);
        const books = results.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
            
        }));
        
        setBooks(books);
    }
    return (
        <>
        <Row>
            <Col><h1>Google Books Search</h1></Col>
            <SearchInput search={search} onSearchChange={setSearch} onSearch={onSearch}/>
        </Row>
        <Row>
            <Col>
            <BookList books={books}/>
            </Col>
        </Row>
        </>
    )
}