import React,{ useContext } from 'react';
import "./Join.css";
import { AppContext } from '../../AppContext';
import Fade from 'react-reveal';
import {Form, Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';



const Join =()=>{

    const{
        name,
        room,
        getNameValue,
        getRoomValue
    }=useContext(AppContext);
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        history.push('/chat');
    }

    return(
    <div className='join'>
        <Fade>
        <div className='login'>
            <h3 className='text-white text-center mb-3 pb-2 border-bottom'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control autoFocus onChange={getNameValue} value={name} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Room</Form.Label>
                    <Form.Control onChange={getRoomValue} value={room} required />
                </Form.Group>
                <Button type="submit" className="mt-2 w-100">
                        Sign In
                </Button>
            </Form>
        </div>
        </Fade>
    </div>
    )
}
export default Join;