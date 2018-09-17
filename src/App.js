import React, { Component } from 'react';
import ImageList from "./component/imageList"

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
                    <Route  exact path="/" component={ImageList} />
            </div>
        )
    }
}
export default App;


