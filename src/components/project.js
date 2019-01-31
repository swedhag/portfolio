import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions,  Button } from 'react-mdl';

class Project extends Component {
    render() {
        return (
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: this.props.projectPicture, backgroundColor: 'rgb(0, 0, 0)'  }}>{this.props.projectTitle}</CardTitle>
                <CardText>
                    {this.props.projectDescription}
                </CardText>
                <CardActions border>
                    <Button href={this.props.gitHub} colored target="_blank">GitHub</Button>
                    <Button href={this.props.demo} colored target="_blank">Live Demo</Button>
                </CardActions>
            </Card>
            )
    }
}

export default Project;