import React, { useState } from 'react'
import Axios from "axios";
import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
} from "reactstrap"
import {toast} from "react-toastify"
import UserCard from '../components/UserCard';
import Repos from '../components/Repos';


const Home = () => {

    const [query,setQuery] = useState("")
    const [user,setUser] = useState(null);

    const fetchDetails = async () => {
        try{
            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data);

        }
        catch(error){
            toast.error("Not able to locate user")
        }
    }

  return (
    <Container>
        <Row className='mt-3'>
            <Col md="5">
                <InputGroup>
                <Input 
                    type='text'
                    value = {query}
                    onChange = {e=>setQuery(e.target.value)}
                    placeholder = "please provide username"
                    />
                    <Button onClick={fetchDetails} color="primary">
                        Search
                    </Button>
                </InputGroup>
                {user? <UserCard user={user}/>:null }
            </Col>
            <Col md="7">{user ? <Repos repos_url = {user.repos_url}/> : null}</Col>
        </Row>
    </Container>
  )
}

export default Home