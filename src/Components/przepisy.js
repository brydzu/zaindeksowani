import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Przepisy extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
        <h1>Sałatki i surówki</h1>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://t4.ftcdn.net/jpg/00/98/23/31/240_F_98233181_SuuKVOk4tIZevFBC3Ssc3xMxd5RMERgX.jpg) center / cover' }}>Zupa pomidorowa</CardTitle>
            <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover' }}>React Project #2</CardTitle>
            <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover' }}>React Project #3</CardTitle>
            <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
        <h1>Zapiekanki i pizze</h1>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://t4.ftcdn.net/jpg/00/98/23/31/240_F_98233181_SuuKVOk4tIZevFBC3Ssc3xMxd5RMERgX.jpg) center / cover' }}>Zupa pomidorowa</CardTitle>
            <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover' }}>React Project #2</CardTitle>
            <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover' }}>React Project #3</CardTitle>
            <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return(
        <div>
          <h1>Zupy</h1>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return(
        <div>
          <h1>Coś na słodko</h1>
        </div>
      )
    } else if(this.state.activeTab === 4) {
      return(
        <div>
          <h1>Dania obiadowe</h1>
        </div>
      )
    } else if(this.state.activeTab === 5) {
      return(
        <div>
          <h1>Lunch box</h1>
        </div>
      )
    }

}
render() {
    return (
        <div className="demo-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Sałatki/Surówki</Tab>
                <Tab>Zapiekanki i pizze</Tab>
                <Tab>Zupy</Tab>
                <Tab>Coś na słodko</Tab>
                <Tab>Dania obiadowe</Tab>
                <Tab>Lunch box</Tab>
            </Tabs>
            {  /*  <section className="projects-grid"> */}
              <h1>Przepisy</h1>
                  <Grid>
                    <Cell col={12}>
                      <div>&nbsp; </div>
                      <div className="content">{this.toggleCategories()}</div>
                      <div>&nbsp; </div>
                    </Cell>
                    <div>&nbsp; </div>
                    <div>&nbsp; </div>
                    <div>&nbsp; </div>
                    <div>&nbsp; </div>
                  </Grid>
              {/*}  </section> */}

        </div>
    );
}
}

export default Przepisy;
