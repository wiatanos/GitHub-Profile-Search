import React, {Fragment, useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoadingOverlay from 'react-loading-overlay'
import Sidebar from './components/sidebar'
import Repos from './components/repos'

const useFetch = (login) => {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function callAPI(login) {
            let profileCall = await fetch('https://api.github.com/users/'+login, {
                headers: new Headers({
                    'Authorization': 'token aa30d112baf0914aad664311d53940b11c56fd57'
                })
            });
            profileCall = await profileCall.json();

            let reposCall = await fetch(profileCall.repos_url)
            reposCall = await reposCall.json();

            setProfile(profileCall)
            setRepos(reposCall)
            setLoading(false)
        }

        callAPI(login);
    }, []);

    return { profile, repos, loading };
}

const Profile = (props) => {

    const { profile, repos, loading } = useFetch(props.match.params.login)

    return (
        <Container>
            <LoadingOverlay
            active={loading}
            spinner
            text='Carregando...'
            />
            {(() => {
                if(profile && repos) return (
                    <Fragment>
                        <Row>
                            <Sidebar profile={profile}/>
                            <Repos repos={repos}/>
                        </Row>
                    </Fragment>
                )
            })()}
            
        </Container>
    )
}

export default Profile;