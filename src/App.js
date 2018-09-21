import React, { Component } from 'react';
import ImageList from "./component/imageList/imageList"
import FavoritesImg from "./component/favoritesImgs/favoritesImgs"
import GreatingPage from "./component/greeting-page/GreatingPage"

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
                    <Route  exact path="/" component={GreatingPage} />
                    <Route  exact path="/dashboard/photos" component={ImageList} />
                    <Route  exact path="/dashboard/photos/favorites" component={FavoritesImg} />
            </div>
        )
    }
}
export default App;


