import React, { Component } from 'react';
import ComponentA from "./component/componentA"
import ComponentB from "./component/componentB"
import ImageList from "./component/imageList"
import { Fragment } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Header from "./layouts/header/Header"

class App extends Component {

    render() {
        console.log("lol")
        return (
            <div>
                <Header />
                    <Route exact path="/ww" component={ComponentA} />
                    <Route  exact path="/" component={ImageList} />
                    <Route exact path="/dashboard/photos/favorites" component={ComponentB} />
            </div>
        )
    }
}
export default App;


