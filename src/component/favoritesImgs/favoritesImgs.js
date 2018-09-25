import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { drawFavoritesImg } from '../../actions/action_drawFavoritesImg'
import { deleteAllFavsImg } from '../../actions/action_deleteAllFavs'
import '../imageList/ImageList.less'
import './favorites.less'

class FavoritesImgs extends Component {
    constructor(props) {
        super(props);
        this.deleteAndUpdate = this.deleteAndUpdate.bind(this);
    }
    componentDidMount() {
        this.props.drawFavoritesImg()
    }
    deleteAndUpdate(){
        this.props.deleteAllFavsImg()
        this.props.drawFavoritesImg()
    }
    render() {
       const { favoritesList } = this.props
        let imgs;
        if (typeof(favoritesList) != "undefined"){
                imgs = this.props.favoritesList.map(img =>
                    <li className="grid-wrapper" key={img.id}>
                        <a href={img.link}>
                            <img className="grid__img" src={img.url} alt="Unsplash Image here" />
                        </a>
                        <p>
                            <a href={img.link}>See on Unsplash</a>
                        </p>
                    </li>
                );
        } else {
            imgs ="Loading..."
        }
        return (
            <div>
                <div className="delete-wrapper"><a className="delete__btn" onClick={this.deleteAndUpdate}>CLEAR ALL FAVORITES</a></div>
            <ul  className="img-list">
                {imgs}
            </ul>
        </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        favoritesList: state.drawFavoritesImg.favs,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    drawFavoritesImg,
    deleteAllFavsImg


}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesImgs);