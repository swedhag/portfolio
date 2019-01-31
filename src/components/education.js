import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <Grid style={{paddingBottom: '0px', paddingTop: '0px'}}>
                <Cell style={{marginBottom: '0px', marginTop: '0px', paddingBottom: '0px'}} col={2}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell style={{marginBottom: '0px', marginTop: '0px', paddingBottom: '0px'}} col={10}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
            )
    }
}

export default Education;