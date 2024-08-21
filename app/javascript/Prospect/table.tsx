import React, { useState, useCallback } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalComponent from "../Components/ModalComponent";

const ProspectTable = ({ prospects, all_statuses }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedRow, setSelectedRow] = useState(null);

	const handleStatusClick = useCallback((row) => {
		setSelectedRow(row);
		setShowModal(true);
	}, []);

	var headers = Object.keys(prospects[0])
		.filter((key) => {
			return key !== "created_at" && key !== "updated_at";
		})
		.map((key) => <th key={key}>{key.replace(/_/g, " ").toUpperCase()}</th>);

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>{headers}</tr>
				</thead>
				<tbody>
					{prospects.map((row, index) => (
						<tr key={index}>
							{Object.keys(row)
								.filter((key) => {
									return key !== "created_at" && key !== "updated_at";
								})
								.map((key) => (
									// Create a table cell for each property name
									<td key={Math.random()} className="align-middle">
										{key == "linkedin_url" ? (
											<a href={row[key]} target="_blank" rel="noopener noreferrer">
												{row[key]}
											</a>
										) : (
											row[key]
										)}
										{key == "status" ? (
											<Button className="float-end btn-sm" variant="primary" onClick={() => handleStatusClick(row)}>
												Edit
											</Button>
										) : null}
									</td>
								))}
						</tr>
					))}
				</tbody>
            </Table>

			{showModal && <ModalComponent onClose={() => setShowModal(false)} prospect={selectedRow} all_statuses={all_statuses} />}
		</div>
	);
};

export default ProspectTable;
