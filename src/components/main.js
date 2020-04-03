import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Anasayfa from './anasayfa';
import Link1 from './linkdrop/linkdrop1';
import Link2 from './linkdrop/linkdrop2';
import Link3 from './linkdrop/linkdrop3';
import Link4 from './linkdrop/linkdrop4';
import Link5 from './linkdrop/linkdrop5';
import Link from './link';
import BizeUlasin from './iletisim/bizeulasin';
import Kariyer from './iletisim/kariyer';
import Blog from './blog';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route exact path="/linkdrop1" component={Link1} />
        <Route exact path="/linkdrop2" component={Link2} />
        <Route exact path="/linkdrop3" component={Link3} />
        <Route exact path="/linkdrop4" component={Link4} />
        <Route exact path="/linkdrop5" component={Link5} />
        <Route exact path="/link" component={Link} />
        <Route exact path="/bizeulasin" component={BizeUlasin} />
        <Route exact path="/kariyer" component={Kariyer} />
        <Route exact path="/blog" component={Blog} />
    </Switch>

)

export default Main;
