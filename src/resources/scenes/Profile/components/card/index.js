import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye, faFolder, faStar } from '@fortawesome/free-solid-svg-icons'    
import './index.scss'

const Sidebar = (props) => {
    return (
        <Col className='card col-12 mb-4'>
            <Row>
                <Col className='item title repo'>
                    <FontAwesomeIcon icon={faFolder} />
                    <span>{props.repo.name}</span>
                    <p className='description'>{props.repo.description}</p>
                </Col>
            </Row>
                
            <Row className='mt-4'>
                <Col className='col-12 col-lg-2 item code'>
                    <FontAwesomeIcon icon={faCode} />
                    <span>{props.repo.language}</span>
                </Col>
                <Col className='col-12 col-lg-2 item watchers'>
                    <FontAwesomeIcon icon={faEye} />
                    <span>{props.repo.watchers}</span>
                </Col>
                <Col className='col-12 col-lg-2 item stars'>
                    <FontAwesomeIcon icon={faStar} />
                    <span>{props.repo.stargazers_count}</span>
                </Col>
            </Row>
        </Col>
    )
}

export default Sidebar