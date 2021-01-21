import React from 'react';
import './LogInForm.css';
import Input from './Input';
import Container from './container';


function LogInForm() {
    return(
        <>
            <Container>
                <br/>
                <h1>
                    Login
                </h1>

                <Input text='Username' type='text'></Input>
                <br/>
                <br/>
                <Input text='password' type='password'></Input>

            </Container>
        </>
    );
}

export default LogInForm;