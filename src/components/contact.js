import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Carl Svedhag</h2>
                        <img src="https://librari-41dab.firebaseapp.com/static/media/calle.27c30049.png" alt="avatar" style={{ height: '250px', marginBottom: '2%' }} />
                        <p style={{width: '75%', margin: 'auto', paddintTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor facilisis scelerisque. Donec ornare molestie dui in semper. Pellentesque rhoncus nibh et tincidunt pharetra. Fusce aliquam, dolor ac tempus maximus, ligula velit sodales eros, a eleifend neque risus a lorem. Maecenas gravida ex ut aliquet maximus. Integer dictum nisl ac lorem ultrices ultricies.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +46 707 99 ** **
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        SpammableEmailAccount@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-facebook-square" aria-hidden="true" />
                                         +46 707 99 ** **
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default Contact