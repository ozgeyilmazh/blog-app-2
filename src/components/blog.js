
import React , {Component} from 'react';

import { Grid, Cell } from 'react-mdl';
import axios from "axios";

class Blog extends Component {
     render(){
        return(
         <div style={{width:'100%' , margin:'0'}}>
             <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        <div className="article3">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                            <h2>Blog</h2>
                            </div>
                           <div className="col-md-12 col-sm-12 col-xs-12-offset" >
                                <div className="col-md-6" style={{float:'right'}}>
            
                                    <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" className="devam">     Devamını okumak için tıklayın...</a>
                                    
                                    <img src='https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' width="60%" className="hakkimizda-resim"/></p>
                                </div>      
                                <div className="col-md-6" style={{float:'right'}}>
                                        <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" className="devam"> Devamını okumak için tıklayın...</a>
                                       
                                        <img src='https://images.unsplash.com/photo-1585660024633-321c071185ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80' width="60%" className="hakkimizda-resim" /> </p>  
                                </div>      
                                
                                <div className="col-md-6" style={{float:'right'}}>
                                        <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" className="devam"> Devamını okumak için tıklayın...</a>
                                       
                                        <img src='https://images.unsplash.com/photo-1585737757692-28c2c33e5d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' width="60%" className="hakkimizda-resim"/> </p>
                                </div>      
                                       
                                     

                                <nav aria-label="Page navigation">
                                      <ul className="pagination">
                                        <li>
                                          <a href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                          </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li>
                                          <a href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                          </a>
                                        </li>
                                      </ul>
                                </nav>
                            </div>
                        </div>
                    </Cell>
                </Grid>
         </div>
         );
    }  
}

export default Blog;