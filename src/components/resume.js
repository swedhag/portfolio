import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Employer from './employer';
import Skill from './skills';
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{}}>
                            <img src="https://librari-41dab.firebaseapp.com/static/media/calle.27c30049.png" alt="avatar" className="avatar-img" style={{paddingTop: '5%', display:'block', marginLeft:'auto', marginRight:'auto'}}/>
                            <h2 style={{ paddingTop: '2em' }}>Carl Svedhag</h2>
                            <h4 style={{ color: 'grey' }}>Programmer</h4>
                            <hr style={{ borderTop: '3px solid £833fb2', width: '50%'}} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor facilisis scelerisque. Donec ornare molestie dui in semper. Pellentesque rhoncus nibh et tincidunt pharetra. Fusce aliquam, dolor ac tempus maximus, ligula velit sodales eros, a eleifend neque risus a lorem. Maecenas gravida ex ut aliquet maximus. Integer dictum nisl ac lorem ultrices ultricies.
                            </p>
                            <hr style={{ borderTop: '3px solid £833fb2', width: '50%'}} />
                            <h5>Address</h5>
                            <p>Brinellvägen 8, 114 28 Stockholm</p>
                            <h5>Phone</h5>
                            <p>+46 707 99 ** **</p>
                            <h5>Email</h5>
                            <p>SpammableEmailAccount@gmail.com</p>
                            <hr style={{ borderTop: '3px solid £833fb2', width: '50%'}} />
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
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
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Employers</h2>
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
                            jobDescription="A summer camp located in the archipelago of the Swedish town Norrtälje. Tasks consisted of everything, from setting up campsites and cooking lunch for 60 people, to putting homesick kids to bed. A job demanding of many responsibilities. However, the responsibilites may vary based on the day to day activities."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
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