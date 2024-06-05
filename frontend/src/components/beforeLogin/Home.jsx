import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://localhost:9191/dashboard');
      if (response.status === 200) {
        setOffers(response.data);
      } else {
        console.error('Failed to fetch offers');
      }
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  return (
    <div className='dashboard'>
      <Container fluid>
        <Row>
          {offers.map((offer, index) => {
            const imageUrl = `http://localhost:9191/dashboard/images/${offer.offers}`;
            return (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card className="cards my-3">
                  <Card.Img variant="top" src={imageUrl} alt={`Offer ${index}`} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
