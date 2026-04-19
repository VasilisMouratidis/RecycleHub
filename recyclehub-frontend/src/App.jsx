// App.jsx
import React, { useState, useEffect } from 'react';
import RecyclingMap from './RecyclingMap';
import Sidebar from './Sidebar';
import ProblemReportForm from './ProblemReportForm';
import axios from 'axios';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import logo from './assets/RecycleHubLogo.png'; // Το logo σου

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recycling-points')
      .then(res => {
        const allCategories = new Set(res.data.flatMap(p => p.categories));
        setCategories([...allCategories]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container fluid className="py-3">
      <Row>
        <Col lg={3}>
          <div className="text-center mb-3">
            <Image src={logo} alt="RecycleHubLogo" fluid style={{ maxWidth: '220px' }} />
          </div>
          <Card className="mb-3">
            <Card.Body>
              <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <ProblemReportForm />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={9}>
          <Card style={{ height: '90vh' }}>
            <Card.Body className="h-100 p-0">
              <RecyclingMap selectedCategory={selectedCategory} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
