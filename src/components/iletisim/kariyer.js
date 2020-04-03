import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Kariyer extends Component {
    render(){
        return(
            <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        <div className="article3">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                            <h2>Kariyer</h2>
                            </div>
                           <div className="col-md-12 col-sm-12 col-xs-12-offset">
                                <p style={{color:'wheat'}}>
                                <b>Mail: </b><a href="mailto:info@gmail.com" className="mail"><i>info@gmail.com</i></a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }  
}

export default Kariyer;