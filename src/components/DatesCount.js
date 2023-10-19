import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'

const DatesCount = ({ person }) => {
    return (
        <>
            <Row className="justify-content-center my-2">
                <Col sm="8" >
                    <Badge pill bg="info" className='m-1'>
                        Info
                    </Badge>{' '}
                    Vous avez
                    <Badge pill bg="info" className='m-1'>
                        {person.length}
                    </Badge>
                    rendez-vous.
                </Col>
            </Row>
        </>
    )
}

export default DatesCount