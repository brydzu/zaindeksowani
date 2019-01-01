import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import $ from 'jquery';
import jQuery from 'jquery';

class Tabele extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <h1>Sałatki i surówki</h1>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
          <h1>Zapiekanki i pizze</h1>
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
                <Tab>Tabela kalorii</Tab>
                <Tab>Tabela indeksu glikemicznego</Tab>
            </Tabs>
            {  /*  <section className="projects-grid"> */}
              <h1>Tabele kaloryczne</h1>
                  <Grid>
                    <Cell col={12}>
                      <div>&nbsp; </div>
                      <div className="content">
                        {this.toggleCategories()}
                        <p>dupa dupa dupa</p>
                        <table id="gi-table" class="display" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>Produkt</th>
        <th>Kategoria</th>
        <th>Podkategoria</th>
        <th>Indeks glikemiczny (glukoza = 100)</th>
        <th>Indeks glikemiczny (pieczywo = 100)</th>
        <th>Carbohydrate (dla 100 g)</th>
        <th>Obciążenie glikemiczne (dla porcji)</th>
        <th>Porcja (g)</th>
      </tr>
      </thead>

        <tfoot>
            <tr>
                <th>produkt</th>
                <th>kategoria</th>
                <th>podkategoria</th>
                <th>indeks glikemiczny</th>
                <th>indeks glikemiczny</th>
                <th>carbohydrate</th>
                <th>obciążenie glikemiczne</th>
                <th>porcja</th>
            </tr>
        </tfoot>
</table>
                      </div>
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


function registerColumnSearch(table, tableName){
            var footer = $(tableName + ' tfoot th');
            footer.each( function () {
                var title = footer.eq( $(this).index() ).text();
                $(this).html( '<input type="text" placeholder="Wyszukaj: '+title+'" />' );
            } );
            table.columns().eq( 0 ).each( function ( colIdx ) {
                $('input', table.column( colIdx ).footer() ).on( 'keyup change', function () {
                  table.column( colIdx ).search( this.value ).draw();
                });
            });
        }

        function gi_value(value) {
            var idx = value.indexOf("±");
            if( idx > -1 ){
                var deviation = parseInt(value.substring(idx + 1));
                value = parseInt(value.substring(0, idx));
                return [value, deviation];
            } else {
                return [parseInt(value), 0];
            }
        }

        function comparator(a, b, tie) {
            return ((a < b) ? -1 : ((a > b) ? 1 : tie));
        }

        function gi_comparator(a, b) {
            var gi_a = gi_value(a);
            var gi_b = gi_value(b);
            return comparator(gi_a[0] + gi_a[1], gi_b[0] + gi_b[1], comparator(gi_a[0], gi_b[0], 0))
        }

        jQuery.extend( jQuery.fn.dataTableExt.oSort, {
            "num-gi-asc": function ( a, b ) {
                return gi_comparator(a, b)
            },
            "num-gi-desc": function ( a, b ) {
                return -1 * gi_comparator(a, b)
            }
        } );

        $(document).ready(function() {
            var table = $('#gi-table').dataTable( {
                "ajax": "data/lista_produktow.json",
                "lengthMenu": [ 10, 25, 50, 100, 250, 500, 1000, 2000 ],
                "pageLength": 10,
                "order": [[0, 'asc']],
                "columns": [
                    { "type": "string" },
                    { "type": "string" },
                    { "type": "string" },
                    { "type": "num-gi", "class" : "center" },
                    { "type": "num", "class" : "center" },
                    { "type": "num", "class" : "center" },
                    { "type": "num", "class" : "center" },
                    { "type": "num", "class" : "center" }
                ],
                "rowCallback": function( nRow, aData ) {
                    var colorCell = function (index, highLevel, lowLevel) {
                        var element = $('td:eq('+index+')', nRow);
                        var gi = gi_value(aData[index]);
                        var value = gi[0] + gi[1];
                        if( value >= highLevel ) element.addClass('high');
                        else if( value <= lowLevel ) element.addClass('low');
                        else element.addClass('medium');
                    }
                    colorCell(3, 70, 55);
                    colorCell(6, 20, 10);
                  return nRow;
                }
            } );
            registerColumnSearch(table.api(), "#gi-table")
        });

}
}


export default Tabele;
