import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import './BookCovers.css';

const BookCovers = props => {

    return (
        <Container fluid className="App py-2 overflow-hidden">
        <Row className="d-flex flex-row flex-nowrap overflow-auto center">
          {props.books.map((book, i) => (
            <Card body outline color="dark" className="mx-2 my-2"
              key={i}>
              <Card.Link href={book.url} style={{textDecoration: 'none'}} target="_blank">
                <Card.Img
                  top width="100%" height="auto"
                  className="expand"
                  src={`https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`} />
                {/* <Card.Body className="card-text">
                    <Card.Text>
                    {book.title}
                    </Card.Text>
                </Card.Body> */}
              </Card.Link>
            </Card>
          ))}
        </Row>
      </Container>
    )
}

export default BookCovers;