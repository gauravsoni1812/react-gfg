import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './user';
import { Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loaderActionCreator } from '../reducer/userReducer';
// https://dummyapi.io/data/v1/user?limit=10
// 650416ff6faf68e0a9b714a6

const Users = () => {
 
    const dispatch=useDispatch();
    const [search]=useSearchParams();
    const [users, setUsers] = useState([]);
    const instance = axios.create({ baseURL: "https://dummyapi.io/data/v1/user?limit=10", headers: { "app-id": "650416ff6faf68e0a9b714a6" } });

    useEffect(() => {
        (async () => {
            dispatch(loaderActionCreator(true))
            const { data } = (await instance.get()).data;
            dispatch(loaderActionCreator(false))
            console.log(data);
            setUsers(data)
        })()
    }, [])
    const filterUsers=(user)=>{
    const searchTerm=(search.get('name')||'').toLowerCase();
    const {firstName,lastName}=user;
    return firstName.toLowerCase().includes(searchTerm) || lastName.toLowerCase().includes(searchTerm)
    }

    return (
        <>
            <Container>
                <Row>
                    {users.filter(filterUsers).map((user) => {
                        return <>
                            <User user={user} key={user.id} />
                        </>
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Users