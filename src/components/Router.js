import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './StorePicker/StorePicker';

const Router = () => (
    
    <BrowserRouter>
        <Switch>

            <Route exact path='/' component={StorePicker}/>
            <Route path='/store/:storeId' />

        </Switch>
    </BrowserRouter>
)

export default Router