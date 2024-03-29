import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCharacters } from "../Hooks/useCharacters";

const CharactersPage: React.FC = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Characters</h1>
      <Row>
        {data.characters.results.map((character: any, index: any) => {
          return (
            <Col key={index}>
              <Link to={`/${character.id}`} key={character.id}>
                <Card id={index} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CharactersPage;
