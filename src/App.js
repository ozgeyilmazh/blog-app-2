import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
      <div>
            <nav className="header-nav header-color ">
              <div className="container-fluid ">
                <div className="navbar-header">
                  <button className="btn-renk" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand" to="/">Blog Template 2</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><Link to="/">Anasayfa <span className="sr-only">(current)</span></Link></li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Link <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/linkdrop1">Link</Link></li>
                        <li><Link to="/linkdrop2">Link</Link></li>
                        <li><Link to="/linkdrop3">Link</Link></li>
                        <li><Link to="/linkdrop4">Link</Link></li>
                        <li><Link to="/linkdrop5">Link</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/link">Link<span className="sr-only">(current)</span></Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">İletişim <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/bizeulasin">Bize Ulaşın</Link></li>
                        <li><Link to="/kariyer">Kariyer</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

                <Main /> 
            </nav>
         <div className="empty-space">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12 col-sm-6 col-xs-6">
                        <div className="social">
                            <ul className="social-icons">
                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/733/733641.svg' /></a></li>
                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/1384/1384005.svg' /></a></li>
                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/733/733635.svg' /></a></li>
                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/1384/1384014.svg' /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-6 col-xs-6">
                        <div id="copyright">
                            <p>Copyright &copy; 2020 <a href="#"> - Erazilek</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  );
}

export default App;
