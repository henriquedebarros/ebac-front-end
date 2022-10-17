import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';

const Routes = props => {
    return(
        <Router>
            <Switch>
                {/* <Route path="/:country/:city" element={<Home />} /> */}
                <Route path="/portugal/lisboa" element={<Home city={props.city} country={props.country}/>} />
            </Switch>
        </Router>
    )
}

export default Routes;