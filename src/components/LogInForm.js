import React from 'react';
import './LogInForm.css';
import Input from './Input';
import Container from './container';
import Button from './Button';


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
                <Input text='Password' type='password'></Input>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button text='Submit'>

                </Button>

                

            </Container>
        </>
    );
}

export default LogInForm;