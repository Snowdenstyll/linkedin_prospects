import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Prospect = ({ name, company_name, linkedin_url }: { name: string; company_name: string; linkedin_url: string }) => {
  return (
    <Card style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{company_name}</Card.Text>
        <Card.Text>
          <a href={linkedin_url} target="_blank" rel="noopener noreferrer">{linkedin_url}</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Prospect;