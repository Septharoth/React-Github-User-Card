import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap'

const User = (props) => {
    return (
        <div  className="user">
            <Card color="info">
                <CardImg src={props.user.avatar_url} alt="avatar"></CardImg>
                <CardBody>
                <CardTitle>{props.user.name}</CardTitle>
                <CardText>Followers {props.user.followers} | Following {props.user.following}</CardText>
                <a href={props.user.html_url}><Button color="info">Github</Button></a>
                </CardBody>
            </Card>
         </div>
    )
}

export default User;