import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Kalkulatory extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div>
          <h1>Licznik kalorii</h1>
          <h3>Jak obliczyc ilosc kalorii potrawy?</h3>

          <p>Dieta w insulinooporności opiera się przede wszystkim na produktach z niskim indeksem i ładunkiem glikemicznym. Istnieją specjalne tabele mówiące nam o ich wartościach w produktach, jednak jak obliczyć je dla całego posiłku składającego się z kilku produktów? I dlaczego możemy spożywać niektóre produkty jak gotowane  buraki, marchewkę czy arbuza?</p>
<p>Kluczem jest odpowiednie łączenie potraw i sprytne obniżanie indeksu  o tym pisałam tutaj Sposoby na obniżenie indeksu glikemicznego.</p>
<p>Jak zatem mamy obliczyć indeks i ładunek całej potrawy ? Przedstawię to po kolei na przykładach</p>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div>
          <h1>Kalkulator IG</h1>
          <h3>Jak wyliczyć indeks glikemiczny potrawy?</h3>

          <p>Dieta w insulinooporności opiera się przede wszystkim na produktach z niskim indeksem i ładunkiem glikemicznym. Istnieją specjalne tabele mówiące nam o ich wartościach w produktach, jednak jak obliczyć je dla całego posiłku składającego się z kilku produktów? I dlaczego możemy spożywać niektóre produkty jak gotowane  buraki, marchewkę czy arbuza?</p>
<p>Kluczem jest odpowiednie łączenie potraw i sprytne obniżanie indeksu  o tym pisałam tutaj Sposoby na obniżenie indeksu glikemicznego.</p>
<p>Jak zatem mamy obliczyć indeks i ładunek całej potrawy ? Przedstawię to po kolei na przykładach</p>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return(
        <div>
          <h1>Kalkulator ładunku glikemicznego</h1>
          <h3>Jak wyliczyć ładunek glikemiczny potrawy?</h3>

          <p>Dieta w insulinooporności opiera się przede wszystkim na produktach z niskim indeksem i ładunkiem glikemicznym. Istnieją specjalne tabele mówiące nam o ich wartościach w produktach, jednak jak obliczyć je dla całego posiłku składającego się z kilku produktów? I dlaczego możemy spożywać niektóre produkty jak gotowane  buraki, marchewkę czy arbuza?</p>
<p>Kluczem jest odpowiednie łączenie potraw i sprytne obniżanie indeksu  o tym pisałam tutaj Sposoby na obniżenie indeksu glikemicznego.</p>
<p>Jak zatem mamy obliczyć indeks i ładunek całej potrawy ? Przedstawię to po kolei na przykładach</p>
        </div>
      )
    }
}
render() {
    return (
        <div className="demo-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Kalkulator kalorii</Tab>
                <Tab>Kalkulator IG</Tab>
                <Tab>Kalkulator ładunku glikemicznego</Tab>
            </Tabs>
            {  /*  <section className="projects-grid"> */}
              <h1>Kalkulatory</h1>
                  <Grid>
                    <Cell col={12}>
                      <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                  </Grid>
              {/*}  </section> */}

        </div>
    );
}
}

export default Kalkulatory;
