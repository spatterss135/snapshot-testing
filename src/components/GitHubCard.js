import React from "react"
import {
    Card
} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function GitHubCard(){
    return(
        <Card style={{ width: '100rem' }}>
            <Card.Img variant='top' src='pic.jpg' alt="Profile photo" style={{'width': '20%'}}></Card.Img>
            <Card.Body>
                <Card.Title>Samuel R. Patterson</Card.Title>
                <Card.Text>I am a student studying fullstack and testing in React</Card.Text>
                <Button variant="primary" href="https://github.com/spatterss135">My Github!</Button>
            </Card.Body>
        </Card>
    )
}