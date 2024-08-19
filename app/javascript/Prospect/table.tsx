import React from 'react';
import Table from 'react-bootstrap/Table';

const ProspectTable = ({ prospects }) => {
    var headers = Object.keys(prospects[0]).filter((key) => {
        return key !== 'created_at' && key !== 'updated_at';
        }).map((key) => (
          <th key={key}>
            {key}
          </th>
        ));

    return (
        //prospects.length === 0 ? <p>No data</p> : prospects.length
        <Table striped bordered hover>
        <thead>
            <tr>
            {headers}
            </tr>
        </thead>
        <tbody>
        {prospects.map((row, index) => (
            <tr key={index}>
            {Object.keys(row).filter((key) => {
            return key !== 'created_at' && key !== 'updated_at';
            }).map((key) => (
            // Create a table cell for each property name
                <td key={Math.random()}>{row[key]}</td>
            ))}
            </tr>
        ))}
      </tbody>
    </Table>
    );
};

export default ProspectTable;

