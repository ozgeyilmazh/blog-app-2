import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Link3 extends Component {
    render(){
        return(
            <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        <div className="article3">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h2>Link3</h2>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }  
}

export default Link3;