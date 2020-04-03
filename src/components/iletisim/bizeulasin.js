import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class BizeUlasin extends Component {
    render(){
        return(
             <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        <div className="article3">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                <h2>Bize Ulaşın</h2>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12-offset">
                                <p style={{color:'wheat'}}>
                                <b>Lorem ipsum dolor sit amet, consectetur</b>
                                <br />
                                <b>Tel: </b> 0555 555 55 55
                                <br/>
                                <b>Mail: </b><a href="mailto:info@gmail.com"  className="mail"><i>info@gmail.com</i></a>
                                </p>
                                </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }  
}

export default BizeUlasin;