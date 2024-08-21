import React, { useState } from "react";
import { Col, Row, Container, Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ModalComponent = ({ onClose, prospect, all_statuses }) => {
	const [status, setStatus] = useState(prospect.status);
	const [statusIndex, setStatusIndex] = useState(all_statuses.indexOf(prospect.status));

	const getCSRFToken = () => {
		return document.querySelector('meta[name="csrf-token"]').getAttribute("content");
	};

	const handleStatusChange = (event) => {
		const selectedIndex = event.target.value;
		const selectedStatus = all_statuses[selectedIndex];
		setStatus(selectedStatus); // Assuming setStatus expects the selected status string
		setStatusIndex(selectedIndex);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		var postdata = {
			name: prospect.name,
			status: status,
			statusIndex: parseInt(statusIndex),
		};

		try {
			const response = await fetch("/prospects#update", {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
					"X-CSRF-Token": getCSRFToken(),
				},
				body: JSON.stringify(postdata),
			});

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
        <Modal show="true" size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="modal">
            <Modal.Header>
                <Modal.Title>{prospect.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form method="patch" onSubmit={handleSubmit}>
                    <Form.Select aria-label="Default select example" onChange={handleStatusChange} value={statusIndex}>
                        {all_statuses.map((s, index) => (
                            <option key={index} value={index}>
                                {s}
                            </option>
                        ))}
                    </Form.Select>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose} className="btn btn-secondary">
                    Close
                </Button >
                <Button  className="btn btn-primary" onClick={handleSubmit} type="submit">
                    Submit
                </Button >
            </Modal.Footer>
        </Modal>
	);
};

export default ModalComponent;
