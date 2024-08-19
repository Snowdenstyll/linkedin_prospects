import React from 'react';
import Table from 'react-bootstrap/Table';

const TableComponent = ({ data }) => {
  var headers = Object.keys(data[0]).filter((key) => {
    return key !== 'created_at' && key !== 'updated_at';
    }).map((key) => (
      <th key={key}>
        {key}
      </th>
    ));


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody>
      {data.map((row, index) => (
        <tr>
        {Object.keys(row).filter((key) => {
          return key !== 'created_at' && key !== 'updated_at';
        }).map((key) => (
          // Create a table cell for each property name
          <td>{row[key]}</td>
        ))}
          </tr>
      ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;