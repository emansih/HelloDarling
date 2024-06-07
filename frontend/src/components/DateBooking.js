import React from 'react';
import Form from "react-bootstrap/Form";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DateBooking = () => {
    const [users, setUsers] = useState([]);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        daterOne: '',
        daterTwo: '',
        startDate: '',
        startTime: '',
        endTime: '',
        dateLocation: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { startDate, startTime, endTime, ...rest } = formData;
        const combinedStartDateTime = `${formData.startDate}T${formData.startTime}:00.000+00:00`;
        // Assuming the end date is the same as the start date
        const combinedEndDateTime = `${formData.startDate}T${formData.endTime}:00.000+00:00`; 
        const submissionData = {
            ...rest,
            dateStart: combinedStartDateTime,
            dateEnd: combinedEndDateTime
        };
        axios.post('http://localhost:3000/api/v1/users/booking', submissionData)
            .then(response => {
                setModalMessage(response.data.message);
                setShowModal(true);

            })
            .catch(error => {
                setModalMessage(error.response.data.message);
                setShowModal(true);
            });
    };

    useEffect(() => {
        const client = axios.create({
            baseURL: "http://localhost:3000/api/v1" 
        });
        client.get('/users/').then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (
        <>

        <Form onSubmit={handleSubmit}>
            <h1>Date 1</h1>
            <label>
                <select id="daterOne" value={formData.daterOne} onChange={handleInputChange}>
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user.userId} value={user.userId}>{user.firstName} {user.lastName}</option>
                    ))}
                </select>
            </label>
            
            <h1>Date 2</h1>
            <label>
                <select id="daterTwo" value={formData.daterTwo} onChange={handleInputChange}>
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user.userId} value={user.userId}>{user.firstName} {user.lastName}</option>
                    ))}
                </select>
            </label>
            <br />
            <br />
            <Form.Control id="startDate" type="date" value={formData.startDate} onChange={handleInputChange} required />
            <br />
            <br />
            Time Start:
            <br />  
            <Form.Control id="startTime" type="time" value={formData.startTime} onChange={handleInputChange} required />
            <br />
            <br />
            Time End:  
            <br />
            <Form.Control id="endTime" type="time" value={formData.endTime} onChange={handleInputChange} required />
            <br />
            <br />
            Location: 
            <br />
            <br />
            <Form.Control id="dateLocation" type="text" value={formData.dateLocation} onChange={handleInputChange} required />
            <br />
            <br />
            <Button type="submit" variant="primary">Submit</Button>
        </Form>

        <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Submission Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DateBooking;