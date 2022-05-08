import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../components/Home';
import MovieDetail from '../components/MovieDetail';
import Print from '../components/Print';
import SeatSelection from '../components/SeatSelection';

export const Routes = () => (
    <Router>
        <Route exact path='/' component={Home}/>
        
        <Route exact path='/SeatSelection' component={SeatSelection}/>

        <Route exact path='/Print' component={Print}/>
        

           
        
    </Router>
)