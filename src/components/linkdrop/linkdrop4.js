import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Link4 extends Component {
    render(){
        return(
            <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        <div className="article3">
                            <div className="col-md-12 col-sm-12 col-xs-12-offset">
                            <h2>Link4</h2>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }  
}

export default Link4;