import React from 'react';
import navBar from './navBar';
import Pin from './Pin';
import PinList from './PinList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <navBar />
            <Switch>
                <Route component={Error404} />
            </Switch>
            <PinList />
        </div>
    );
}


export default App;