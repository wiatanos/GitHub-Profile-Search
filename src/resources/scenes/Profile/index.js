import React, {Fragment, useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './components/sidebar'
import profileData from './data'
import Repos from './components/repos'

const useFetch = (login) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect((login = 'NaomiReeves') => {
        async function callAPI(login) {
            // let response = await fetch('https://api.github.com/users/'+login, {
            //     headers: new Headers({
            //         'Authorization': 'token bb398dbc80363889fd71525977f671b3a63b64f4'
            //     })
            // });
            // response = await response.json();

            console.log(profileData)

            let response = profileData
            setData(response)
            setLoading(false)
        }

        callAPI(login);
    }, []);

    return { data, loading };
}

const Profile = (props) => {
    const { data, loading } = useFetch(props.match.params.login)
    return (
        <Container>
            {(() => {
                if(loading) return 'loading...'
                if(data) return (
                <Fragment>
                    <Row>
                        <Sidebar profile={data}/>
                        <Repos />
                    </Row>
                </Fragment>
                )
            })()}
            
        </Container>
    )
}

export default Profile;