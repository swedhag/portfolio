import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project - Librari</CardTitle>
                        <CardText>
                           Application made for organizing books read by the user. Created with React.js and utilizing the Google Books API. For the course DH2642 Interaction Programming and the Dynamic Web.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/swedhag/Librari" colored target="_blank">GitHub</Button>
                            <Button href="https://librari-41dab.firebaseapp.com/" colored target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2 - BierGarten*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1109/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover' }}>JavaScript/HTML Project - BierGarten</CardTitle>
                        <CardText>
                            Mobile application running on the browser made for finding the closest park in Stockholm in which you could enjoy a mildly cold, alcoholic beverage. For the course DM2518 Mobile Development with Web Technologies.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/lindbergerik/biergarten" colored target="_blank">GitHub</Button>
                            <Button href="http://biergarten.nu/" colored target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                

                {/*Project 3 - Portfolio*/ }
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project - Portfolio</CardTitle>
                    <CardText>
                        My software engineering porfolio. Created with React.js.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/swedhag/Librari" colored target="_blank">GitHub</Button>
                        <Button href="https://librari-41dab.firebaseapp.com/" colored target="_blank">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
              </div>
                )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/*Project 1 - Students Groupings*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/d3/d3-logo/master/d3.png) center / cover' }}>D3 Project - Student Groupings</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec varius dui, in luctus leo. Vestibulum lobortis dui at finibus auctor. Quisque lorem massa, gravida eu neque sed, rhoncus vulputate lacus.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/swedhag/dh2321-project1" colored target="_blank">GitHub</Button>
                            <Button href="https://swedhag.github.io/dh2321-project1/" colored target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
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
                <Tabs activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab>Web Development</Tab>
                    <Tab>Data Visualization</Tab>
                    <Tab>Placeholder2</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        {this.toggleCategories()}
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default Projects