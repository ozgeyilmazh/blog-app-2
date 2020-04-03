
import React , {Component} from 'react';

import { Grid, Cell } from 'react-mdl';

class Anasayfa extends Component {
    render(){
        return(
            <div style={{width:'100%' , margin:'auto'}}> 
                <Grid className="anasayfa-grid">
                    <Cell col={12}>
                        
                        
                        <div className="general">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12 baslik">
                                        <h3> Blog Template 2 </h3>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12 buton">
                                        <a href="/link" className=" btn btn-header">Link</a></div>
                                    <div className="col-md-6 col-sm-12 col-xs-12 buton">
                                        <a href="/blog" className="btn btn-header">Blog</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        
                        <div className="slider">
                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong2">Lorem ipsum dolor sit amet</button></div>
            
                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong3">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong4">Lorem ipsum dolor sit amet</button></div>
            
                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong5">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong6">Lorem ipsum dolor sit amet</button></div>

                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong7">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong8">Lorem ipsum dolor sit amet</button></div>
                            
                                
                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong9">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong10">Lorem ipsum dolor sit amet</button></div>
            
                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong11">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong12">Lorem ipsum dolor sit amet</button></div>
            
                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong13">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong14">Lorem ipsum dolor sit amet</button></div>
            
                            <div className="col-md-8 col-xs-8 col-sm-6">
                            <button className="p-left" data-toggle="modal" data-target="#exampleModalLong15">Lorem ipsum dolor sit amet</button></div>
                            <div className="col-md-4 col-xs-4 col-sm-6">
                            <button className="p-right" data-toggle="modal" data-target="#exampleModalLong16">Lorem ipsum dolor sit amet</button></div>                              
                        </div>

                            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle2" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div clasNames="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle2">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="modal fade" id="exampleModalLong3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle3" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle3">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="modal fade" id="exampleModalLong4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle4" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle4">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle5" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle5">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle6" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle6">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong7" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle7" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle7">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong8" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle8" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle8">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong9" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle9" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle9">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong10" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle9" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle10">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
            
                            <div className="modal fade" id="exampleModalLong11" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle11" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle11">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong12" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle12" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div class="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle12">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                             <div className="modal fade" id="exampleModalLong13" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle13" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle13">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
            
                            <div className="modal fade" id="exampleModalLong14" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle14" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle14">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <div className="modal fade" id="exampleModalLong15" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle15" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle15">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        
            
                        
                            <div className="modal fade" id="exampleModalLong16" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle16" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle16">Lorem ipsum dolor sit amet</h2>
                                  </div>
                                  <div className="modal-body">
                                    <ol className="ol-class-ana">
                                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                                    </ol>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kapat</button>
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

export default Anasayfa;