import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap'

const Followers = (props) => {
    return (
        <div className="followercards">
            {props.followers.map(follower => (
                <Card color="info" key={follower.id}>
                    <CardImg src={follower.avatar_url} alt="avatar"></CardImg>
                    <CardBody>
                        <CardTitle>{follower.login}</CardTitle>
                        <a href={follower.html_url}><Button color="info">Github</Button></a>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

export default Followers;