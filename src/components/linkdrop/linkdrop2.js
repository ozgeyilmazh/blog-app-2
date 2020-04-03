import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Link2 extends Component {
    render(){
        return(
             <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        <div className="article3">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <h2>Link2</h2>
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12-offset">
                                <div class="cardd">
                                  <div class="card-body">
                                    <h5 class="card-title">Lorem İpsum</h5>
                                    <a href="mailto:egemen.cakir@cakirlegal.com" className="btn-iletisim">info@gmail.com</a>
                                  </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div class="cardd">
                                  <div class="card-body">
                                    <h5 class="card-title">Lorem İpsum</h5>
                                    <a href="mailto:izel.cakir@cakirlegal.com" className="btn-iletisim">info@gmail.com</a>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }  
}

export default Link2;