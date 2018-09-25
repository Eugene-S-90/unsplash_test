import React, { Component } from 'react';
import ImageList from "./component/imageList/imageList"
import FavoritesImg from "./component/favoritesImgs/favoritesImgs"
import GreatingPage from "./component/greeting-page/GreatingPage"
import { Route, BrowserRouter as Router, } from 'react-router-dom'
import Header from "./layouts/header/Header"

class App extends Component {
    render() {
        return (
                <div>
                    <Header />
                    <Route exact path="/" component={GreatingPage} />
                    <Route exact path="/dashboard/photos" component={ImageList} />
                    <Route exact path="/dashboard/photos/favorites" component={FavoritesImg} />
                </div>
        )
    }
}
export default App;


