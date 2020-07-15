import React, { useState } from 'react';
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";
import { Row, Col } from 'react-bootstrap';
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
            link: book.volumeInfo.infoLink
            
        }))
        
        setBooks(books)
    }
    return (
        <>
        <Row>
            <Col>Search</Col>
            <SearchInput search={search} onSearchChange={setSearch}/>
        </Row>
        <Row>
            <Col>
            <BookList books={[]}/>
            </Col>
        </Row>
        </>
    )
}