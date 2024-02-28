import { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";

export const Event = ({ event }) => {
    const [ev, setEv] = useState(event);
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setEv({
            ...ev,
            nbParticipants: ev.nbParticipants + 1,
            nbTickets: ev.nbTickets - 1,
        });

        setTimeout(() => {
            setShow(true);
        }, 2000)
        setShow(false)
    };
    return (
        <>
            {show && (
                <Alert variant="success">You have booked an event</Alert>
            )}
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`/images/${event.img}`} />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <Card.Text>Price: {event.price}</Card.Text>
                    <Card.Text>Tickets: {event.nbTickets}</Card.Text>
                    <Card.Text>Participants: {event.nbParticipants}</Card.Text>
                    <Button variant="outline-dark" onClick={handleClick}>
                        Book an Event
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};
