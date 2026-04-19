import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function ProblemReportForm() {
  const [points, setPoints] = useState([]);
  const [recyclingPointId, setRecyclingPointId] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchPoints = () => {
    axios.get('http://localhost:5000/api/recycling-points')
      .then(res => setPoints(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/problem-reports', {
        recyclingPointId,
        description,
        imageUrl
      });
      alert('✅ Η αναφορά καταχωρήθηκε επιτυχώς!');
      setDescription('');
      setImageUrl('');
      setRecyclingPointId('');
    } catch (err) {
      alert('❌ Πρόβλημα κατά την καταχώρηση.');
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Αναφορά Προβλήματος</h4>
      <Form.Group className="mb-3">
        <Form.Label>Επιλογή Κάδου:</Form.Label>
        <Form.Select
          required
          value={recyclingPointId}
          onChange={(e) => setRecyclingPointId(e.target.value)}
        >
          <option value="">--Επιλογή κάδου--</option>
          {points.map(point => (
            <option key={point._id} value={point._id}>
              {point.name} - {point.address}
            </option>
          ))}
        </Form.Select>
        <Button variant="secondary" className="mt-2" onClick={fetchPoints}>
          🔄 Ανανέωση Κάδων
        </Button>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Περιγραφή προβλήματος:</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>URL εικόνας (προαιρετικό):</Form.Label>
        <Form.Control
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Υποβολή Αναφοράς
      </Button>
    </Form>
  );
}

export default ProblemReportForm;
