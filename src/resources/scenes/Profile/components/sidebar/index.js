import React from 'react'
import moment from 'moment'
import {Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock, faFolder } from '@fortawesome/free-solid-svg-icons'    
import './index.scss'

const Sidebar = (props) => {
    return (
        <nav id='sidebar' className='col-4 col-lg-3'>
            <Row>
                <div className='col-12 sidebar-header'>
                    <figure>
                        <img src={props.profile.avatar_url} />
                    </figure>
                </div>
                <div className='col-12'>
                    <ul>
                        <p>{props.profile.name}</p>
                        <li>
                            <FontAwesomeIcon icon={faUsers} /> <span>{props.profile.followers}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFolder} /> <span>{props.profile.public_repos}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} /> <span>{moment(props.profile.created_at).format('DD/MM/YYY')}</span>
                        </li>
                    </ul>
                </div>
            </Row>
        </nav>
    )
}

export default Sidebar