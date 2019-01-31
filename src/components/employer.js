import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Employer extends Component {
    render() {
        return (
            <Grid style={{paddingBottom: '0px', paddingTop: '0px'}}>
                <Cell style={{marginBottom: '0px', marginTop: '0px'}} col={2}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell style={{marginBottom: '0px', marginTop: '0px'}} col={10}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Employer;