import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import FormPage from './FormPage';
//import FormContainer from './Components/FormContainer';

class Kontakt extends Component {
  render() {
    return(
      <div className="kontakt-body">
        <Grid className="kontakt-grid">
          <Cell col={6} style={{color: '#0a0a0a', opacity: '1'}}>
            <h3 classname="kontakt_h3" style={{opacity: '1', align: 'center'}}>Napisz do nas</h3>
            <p>aaa  aaaa a a  aaaa a aa a a aaaaa aa a a  aaaa a a a a aaaaaaaa
              aa a a aa aaa a  aaaaa aaa  aaaa a a  aaaa a aa a a aaaaa aa a a
              aaaa a a a a aaaaaaaa aa a a aa aaa a  aaaaa  </p>

          </Cell>
          <Cell col={6} style={{color: '#0a0a0a', opacity: '1'}}>
            <h3>Napisz do nas</h3>
            <FormPage/>
          </Cell>
        //  <h1 className="kontakt_form">Kontakt</h1>
        </Grid>
      </div>

    )
  }
}

export default Kontakt;
