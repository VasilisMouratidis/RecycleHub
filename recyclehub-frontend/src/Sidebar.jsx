import React from 'react';
import { Form } from 'react-bootstrap';

function Sidebar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <h5>Φίλτρο Κατηγοριών</h5>
      <Form>
        <Form.Check
          type="radio"
          label="Όλες οι κατηγορίες"
          checked={selectedCategory === ''}
          onChange={() => setSelectedCategory('')}
        />
        {categories.map(category => (
          <Form.Check
            key={category}
            type="radio"
            label={category}
            checked={selectedCategory === category}
            onChange={() => setSelectedCategory(category)}
          />
        ))}
      </Form>
    </div>
  );
}

export default Sidebar;
