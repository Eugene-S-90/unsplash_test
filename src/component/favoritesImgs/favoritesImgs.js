import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { drawFavoritesImg } from '../../actions/action_drawFavoritesImg'
import '../imageList/ImageList.less'


class FavoritesImgs extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
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
            console.log('damn')
        }
        
        return (
            <div>
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
    drawFavoritesImg

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesImgs);