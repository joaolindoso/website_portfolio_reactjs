import React from 'react'
import { Row, Col, Card } from 'react-materialize'
import avatar from '../../images/avatar.png'

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset='s2 m2'>
                <img src={avatar} className='circle responsive-img' />
            </Col>
        </Row>
        <Row className='center-align'>
            <h6>Lorem Ipsum</h6>
            <p className='grey darken-2 white-text'>PHP Developer</p>
        </Row>
    </Card>
);

export default UserProfile;