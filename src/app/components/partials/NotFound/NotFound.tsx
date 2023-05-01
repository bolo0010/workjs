import React from "react";
import Alert from "react-bootstrap/esm/Alert";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound__alert">
                <Alert key='danger' variant='danger'>
                    <h2>Błąd 404. Nie odnaleziono takiej strony.</h2>
                </Alert>
            </div>
        </div>
    );
}

export default NotFound;