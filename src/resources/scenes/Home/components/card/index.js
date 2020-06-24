import React from 'react'
import Col from 'react-bootstrap/Col'
import './index.scss'

const Card = (props) => {
    return (
        <Col className='card col-5 col-md-3 col-lg-2 ml-2 mt-2'>
            <figure className='d-flex justify-content-center'>
                <a href={'profile/'+props.profile.login}>
                    <img src={props.profile.avatar_url} />
                </a>
            </figure>
            <div className='text-center'>
                <a href={'profile/'+props.profile.login}>
                    <p>{props.profile.login}</p>
                </a>
            </div>
        </Col>
    )
}

export default Card