import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Prospect = ({ prospect, prospect_status }) => {

  return (
    <Card>
      <Card.Body>
        <Card.Title>{prospect.name}</Card.Title>
        <Card.Text>Company Name: {prospect.company_name}</Card.Text>
        <Card.Title>Status: {prospect_status}</Card.Title>
        <Card.Text>
          <a href={prospect.linkedin_url} target="_blank" rel="noopener noreferrer">{prospect.linkedin_url}</a>
        </Card.Text>
        <Button variant="primary">
          <a className="text-white" href={`/prospects/${prospect.id}`}>View</a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Prospect;