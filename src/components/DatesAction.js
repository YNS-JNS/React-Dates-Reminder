import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesAction = ({dispalyOn, dispalyOff}) => {
    return (
        <>
            <Row className="justify-content-center my-2">
                <Col sm="8" className='d-flex justify-content-between'>
                    <button onClick={dispalyOn} className='btn-style p-2' >Ajouter</button>
                    <button onClick={dispalyOff} className='btn-style p-2' >Supprimer</button>
                </Col>
            </Row>
        </>
    )
}

export default DatesAction