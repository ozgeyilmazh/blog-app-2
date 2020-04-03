import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Link5 extends Component {
    render(){
        return(
             <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        <div className="article3">
                            <div className="col-md-12 col-sm-12 col-xs-12-offset">
                            <h2>Link5</h2>    
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <br />
                            <a href="https://tr.lipsum.com/" className="mail">
                            <i>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</i>
                            </a>
                            </p>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }  
}

export default Link5;