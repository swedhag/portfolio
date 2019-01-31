import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skill extends Component {
    render() {
        return (
            <Grid>
                <Cell col={1}>
                    <p style={{ display: 'flex' }}>{this.props.skill}</p>
                </Cell>
                <Cell col={11}>
                    <ProgressBar style={{ margin: 'auto', width: '75%' }} progress={this.props.progress}/>
                </Cell>

            </Grid>
        )
    }
}

export default Skill;