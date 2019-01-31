import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './project';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/*Project 1 - Librari*/}
                <Project 
                    projectPicture = "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
                    projectTitle = "React Project - Librari"
                    projectDescription = "Application made for organizing books read by the user. Created with React.js and utilizing the Google Books API. For the course DH2642 Interaction Programming and the Dynamic Web."
                    gitHub = "https://github.com/swedhag/Librari"
                    demo = "https://librari-41dab.firebaseapp.com/"
                />

                {/*Project 2 - BierGarten*/}
                <Project 
                    projectPicture = "url(https://cdn-images-1.medium.com/max/1109/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover"
                    projectTitle = "JavaScript/HTML Project - BierGarten"
                    projectDescription = " Mobile application running on the browser made for finding the closest park in Stockholm in which you could enjoy a mildly cold, alcoholic beverage. For the course DM2518 Mobile Development with Web Technologies."
                    gitHub = "https://github.com/lindbergerik/biergarten"
                    demo = "http://biergarten.nu/"
                />

                {/*Project 3 - Portfolio*/ }
                <Project 
                    projectPicture = "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
                    projectTitle = "React Project - Portfolio"
                    projectDescription = "My Portfolio, an application in which I can track my progress by listing past projects, as well as letting others get a hold of them as well. Created with React.js and the React-MDL library."
                    gitHub = "https://github.com/swedhag/portfolio"
                    demo = "https://myportfolio-4a48b.firebaseapp.com/"
                />
              </div>
                )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/*Project 1 - Students Groupings*/}
                <Project 
                    projectPicture = "url(https://i.imgur.com/QCmB47h.png) center / cover"
                    projectTitle = "JavaScript/D3.js Project - Student Groupings"
                    projectDescription = "Application made for grouping students into project groups for the course DH2321 Information Visualization. The application was created using JavaScript and D3.js."
                    gitHub = "https://github.com/swedhag/dh2321-project1"
                    demo = "https://swedhag.github.io/dh2321-project1/"
                />
              </div>
                )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Placeholder2</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs style={{backgroundColor: 'white'}} activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab style={{fontWeight:'bold'}}>Web Development</Tab>
                    <Tab style={{fontWeight:'bold'}}>Data Visualization</Tab>
                    <Tab style={{fontWeight:'bold'}}>Placeholder2</Tab>
                </Tabs>
                <div className="projects-container">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }

}
export default Projects