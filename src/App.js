import React from 'react';
import {useState} from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import { CardGroup, Container, ListGroup, Row } from 'react-bootstrap';
import BarChart from './BarChart';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const onSubmitHandler = event => {
    event.preventDefault();
    fetch(`https://openlibrary.org/search.json?author=${searchTerm}`)
    .then(response => {
      return response.json(); })
    .then((data) => {
      const transformedBooks = data.docs.map(
        bookData => {
          return {
            first_publish_year: bookData.first_publish_year,
            title: bookData.title,
            cover: bookData.cover_i,
            // link to book on openLibrary
            url: `https://openlibrary.org/${bookData.key}`

          }
        });
      setBooks(transformedBooks);
    });

    setSearchTerm('');
  }

  const searchTermHandler = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='App'>
        <header className="App-header">
          <p>Open Library search</p>
        <form onSubmit={onSubmitHandler}>
          <input type="text" onChange={searchTermHandler} value={searchTerm}></input>
          <button>search</button>
        </form>
        </header>
        <BarChart/>
        <Container fluid className="App py-2 overflow-hidden">
          <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
{/* <CardGroup> */}
      {books.map((book, i) => (
          <Card body outline color="dark" className="mx-2 my-2"
            key={i}
          >
          <Card.Link href={book.url} style={{textDecoration: 'none'}} target="_blank">
            <Card.Img
            top width="100%" height="auto"
            className="expand"
            src={`https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`} />
            <Card.Body className="card-text">
              {/* <ListGroup>
              <ListGroup.Item> */}
                <Card.Text>
                Title: {book.title}
                </Card.Text>
                {/* </ListGroup.Item>
                <ListGroup.Item> */}
                  <Card.Text>
                  First published year: {book.first_publish_year}
                  </Card.Text>
                {/* </ListGroup.Item>
              </ListGroup> */}
            </Card.Body>
         </Card.Link>
          </Card>
      ))}
      {/* </CardGroup> */}
      </Row>
      </Container>

    </div>
  );
}

export default App;