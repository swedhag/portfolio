import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Employer from './employer';
import Skill from './skills';
class Resume extends Component {
    render() {
        return (
            <div className="resume-grid">
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <Cell col={7} style={{ display:'block', float: 'left'}}>
                            <h2 style={{ paddingTop: '3%', paddingLeft:"16px", display: 'block', float:'left' }}>Carl Svedhag</h2>
                            <h4 style={{ color: 'black', paddingLeft:"16px" }}>Programmer</h4>
                            <hr style={{ borderTop: '3px solid black', width: '50%', marginLeft:"16px"}} />
                            <p style={{ paddingLeft:"16px", width: '80%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor facilisis scelerisque. Donec ornare molestie dui in semper. Pellentesque rhoncus nibh et tincidunt pharetra. Fusce aliquam, dolor ac tempus maximus, ligula velit sodales eros, a eleifend neque risus a lorem. Maecenas gravida ex ut aliquet maximus. Integer dictum nisl ac lorem ultrices ultricies.
                            </p>
                            <hr style={{ borderTop: '3px solid black', width: '50%', marginLeft:"16px"}} />
                            <List>
                                <ListItem style={{paddingLeft: '20px'}}>
                                    <ListItemContent style={{fontSize: '20px'}}>
                                        <i className="fa fa-location-arrow" style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true"/>
                                        <p style={{display:'block', float:'left'}}>Brinellv�gen 8, 114 28 Stockholm</p>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px'}}>
                                        <i className="fa fa-phone-square"  style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true"/>
                                        <p style={{display:'block', float:'left'}}>+46 707 99 ** **</p>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px' }}>
                                            <i className="fa fa-facebook-square" style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true" />
                                            <p style={{display:'block', float:'left'}}>Calle Svedhag</p>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px' }}>
                                        <i className="fa fa-envelope" style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true" />
                                        <p style={{display:'block', float:'left'}}>SpammableEmailAccount@gmail.com</p>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                            <hr style={{ borderTop: '3px solid black', width: '50%', marginLeft:"16px"}} />
                        </Cell>
                        <Cell col={5} style={{display:'block', float: 'left'}}>
                        <img src="https://librari-41dab.firebaseapp.com/static/media/calle.27c30049.png" alt="avatar" className="avatar-img" style={{paddingTop: '5%', display:'block', width:'200px', height:'200px', marginLeft:'auto', marginRight:'auto'}}/>
                        </Cell>  
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{ fontSize: '36px', paddingLeft:"16px" }}>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2015}
                            schoolName="Norra Real"
                            schoolDescription="Naturvetenskap inr. Naturvetenskap"
                        />

                        <Education
                            startYear={2015}
                            endYear={2020}
                            schoolName="KTH (Royal Institute of Technology)"
                            schoolDescription="Masters Degree in Computer Science with Specialization in Media Technology"
                        />
                        <hr style={{ borderTop: '3px dotted grey' }} />
                        <h2 style={{ fontSize: '36px', paddingLeft:"16px" }}>Employers</h2>
                        <Employer
                            startYear="Jan 2016"
                            endYear="June 2016"
                            jobName="MyAcademy"
                            jobDescription="A tutoring job for students attending Swedish high school. I was primarily tutoring maths and natural sciences."
                        />
                        <Employer
                            startYear={2017}
                            endYear={NaN}
                            jobName="Ivarsudde Kollo"
                            jobDescription="A summer camp located in the archipelago of the Swedish town Norrt�lje. Tasks consisted of everything, from setting up campsites and cooking lunch for 60 people, to putting homesick kids to bed. A job demanding of many responsibilities. However, the responsibilites may vary based on the day to day activities."
                        />
                        <hr style={{ borderTop: '3px dotted grey' }} />
                        <h2 style={{ fontSize: '36px', paddingLeft:"16px" }}>Skills</h2>
                        <Skill
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skill
                            skill="JavaScript"
                            progress={75}
                        />
                        <Skill
                            skill="React.js"
                            progress={40}
                        />
                        <Skill
                            skill="D3.JS"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
            )
    }

}
export default Resume