import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skill extends Component {
    render() {
        return (
            <Grid style={{paddingBottom: '0px', paddingTop: '0px'}}>
                <Cell style={{marginBottom: '0px', marginTop: '0px', paddingBottom: '5px'}} col={1}>
                    <p style={{ display: 'flex', marginBottom: '0px' }}>{this.props.skill}</p>
                </Cell>
                <Cell style={{marginBottom: '0px', marginTop: '2%'}} col={11}>
                    <ProgressBar style={{ margin: 'auto', width: '75%' }} progress={this.props.progress}/>
                </Cell>

            </Grid>
        )
    }
}

export default Skill;