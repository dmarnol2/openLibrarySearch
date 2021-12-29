import Card from 'react-bootstrap/Card';
import { CardGroup, Container, ListGroup, Row } from 'react-bootstrap';

const BookCovers = props => {
    return (
        <Container fluid className="App py-2 overflow-hidden">
        <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
        {/* <CardGroup> */}
          {props.books.map((book, i) => (
            <Card body outline color="dark" className="mx-2 my-2"
              key={i}>
              <Card.Link href={book.url} style={{textDecoration: 'none'}} target="_blank">
                <Card.Img
                  top width="100%" height="auto"
                  className="expand"
                  src={`https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`} />
                <Card.Body className="card-text">
                  {/* <ListGroup>
                  <ListGroup.Item> */}
                    <Card.Text>
                    {/* Title: {book.title} */}
                    {book.title}
                    </Card.Text>
                    {/* </ListGroup.Item>
                    <ListGroup.Item> */}
                      {/* <Card.Text>
                      First published year: {book.first_publish_year}
                      </Card.Text> */}
                    {/* </ListGroup.Item>
                  </ListGroup> */}
                </Card.Body>
              </Card.Link>
            </Card>
          ))}
        {/* </CardGroup> */}
        </Row>
      </Container>
    )
}

export default BookCovers;