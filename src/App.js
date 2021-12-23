import React from 'react';
import {useState} from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import { CardGroup, Container, ListGroup, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// import Chart from "react-google-charts";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([
    {
      first_published_year : '',
      title: '',
      cover_id: '',
      url: ''
    }
  ]);

  const onSubmitHandler = event => {
    event.preventDefault();
    fetch(`https://openlibrary.org/search.json?author=${searchTerm}`)
    .then(response => { 
      return response.json(); })
    .then((data) => {
      console.log(data.numFound);
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
          <p>Open Library Search</p>
        <form onSubmit={onSubmitHandler}>
          <input type="text" onChange={searchTermHandler} value={searchTerm}></input>
          <button>search</button>
        </form>
        </header>
        <Container fluid className="App py-2 overflow-hidden">
          <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
{/* <CardGroup> */}
      {books.map((book, i) => (
          <Card body outline color="dark" className="mx-2 my-2"
            // border={variant.toLowerCase()}
            key={i}
          >
          <Card.Link href={book.url} rel="noreferrer noopener" style={{textDecoration: 'none'}}>
            <Card.Img top width="100%" height="auto" src={`https://covers.openlibrary.org/b/isbn/${book.cover}-L.jpg`} />
            <Card.Body className="card-text">
              <ListGroup>
              <ListGroup.Item>
                <Card.Text>
                Title: {book.title}
                </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Text>
                  First published year: {book.first_publish_year}
                  </Card.Text>
                </ListGroup.Item>
              </ListGroup>
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