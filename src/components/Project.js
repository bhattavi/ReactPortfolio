import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover' }}>My React Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla esse, provident magni expedita consequuntur eligendi neque nostrum accusantium est cumque cupiditate, architecto similique nihil, at fugiat ab porro commodi.</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover' }}>My React Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla esse, provident magni expedita consequuntur eligendi neque nostrum accusantium est cumque cupiditate, architecto similique nihil, at fugiat ab porro commodi.</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover' }}>My React Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla esse, provident magni expedita consequuntur eligendi neque nostrum accusantium est cumque cupiditate, architecto similique nihil, at fugiat ab porro commodi.</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }

    }






    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

              
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

            </div>
        )
    }

}

export default Project;