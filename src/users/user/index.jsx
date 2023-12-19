import React from 'react'
import "./style.css"
import Card from 'react-bootstrap/Card';
import {Col,Button} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { addFriendActionCreator, removeFriendActionCreator } from '../../reducer/userReducer';
const User = ({ user }) => {

    const {friendList}=useSelector(state=>state.user);

    const { firstName, picture, id, lastName, title } = user;
    const dispatch=useDispatch();
    const fullName = `${title} ${firstName} ${lastName}`
    const isFriend = friendList.includes(id);

    const addFriend=()=>{
        const payload={id,name:`${firstName} ${lastName}`};
        dispatch(addFriendActionCreator(payload));
    }

    const removeFriend=()=>{
        const payload={id,name:`${firstName} ${lastName}`};
        dispatch(removeFriendActionCreator(payload));

    }

    return (
        <Col key={user.id} sm={6} md={5} lg={3} xl={3} >
           <Card className='c2' style={{ width: '19rem' }}>
            <Card.Body className='user-card'>
                <img className='pf1' variant="top" src={picture}/>
                <div className= 'c1'>
                <div>{fullName}</div>
                {isFriend? <Button onClick={removeFriend} variant="danger">remove friend</Button> :<Button onClick={addFriend} variant="primary">Add friend</Button>}
                
                
                </div>
            </Card.Body>
        </Card> 
        </Col>
     
    )
}

export default User