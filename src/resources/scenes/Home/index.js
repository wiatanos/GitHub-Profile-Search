import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

import Card from './components/card'
import Search from './components/search'
import gitData from './data'

const Home = (props) => {
    const data = useSelector(state => state.setProfiles.profiles)
    const results = useSelector(state => state.setResults.results)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [profiles, setProfiles] = useState(null);

    async function callAPI () {
        // let response = await fetch('https://api.github.com/orgs/facebook/public_members', {
        //     headers: new Headers({
        //         'Authorization': 'token bb398dbc80363889fd71525977f671b3a63b64f4'
        //     })
        // });
        // response = await response.json();

        let response = gitData

        return response
    }

    if(Object.keys(data).length == 0) {
        callAPI().then(r => {
            dispatch({type: 'SET_PROFILES', profiles: r})
            setProfiles(r)
            setLoading(false)
        })
    }

    useEffect(() => {
        if(Object.keys(results).length !== 0) {
            setProfiles(results)
        }
    })

    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center mt-5 col-12'>
                    <img src="#"/>
                </Col>
                <Col className='col-12'>
                    <p className='text-center'>GitHub Profile Search</p>
                </Col>
                <Col className='col-12 d-flex justify-content-center'>
                    {(() => {
                        if(profiles) return <Search />
                    })()}
                </Col>
            </Row>
            <Row className='p-3 d-flex justify-content-center'>
            {(() => {
                if(loading) return 'loading...'
                
                if(profiles) return profiles.map((profile, i) => {
                    return <Card key={i} profile={profile}/>
                })
            })()}
            </Row>
        </Container>
    )
}

export default Home