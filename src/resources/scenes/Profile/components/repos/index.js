import React from 'react'
import {Col} from 'react-bootstrap'
import Card from '../card'
import './index.scss'
import reposData from './data'

const Repos = (props) => {
    return (
        <Col id='repos' className='col-8 col-lg-9'>
            {props.repos.map((repo) => {
                return <Card repo={repo} />
            })}
        </Col>
    )
}

export default Repos