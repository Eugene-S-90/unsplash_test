import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getListImg } from '../../actions/action_getListImg'
import { addTofav } from '../../actions/action_addToFav'
import './ImageList.less'


class ImgList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getListImg } = this.props
        getListImg(30)
    }

    render() {
        let imgs;
        if (this.props.imgFromApuCall.imgList.length >= 0) {
            imgs = this.props.imgFromApuCall.imgList.map(img =>
                <li className="grid-wrapper" key={img.id}>
                    <a href={img.links.html}>
                        <img className="grid__img" src={img.urls.small} alt="Unsplash Image here" />
                    </a>
                    <p>
                        <input onClick={this.props.addTofav} type="checkbox" data-url={img.urls.small} data-link={img.links.html} id={img.id} />
                        <label htmlFor={img.id}>Add to favorites</label>
                    </p>
                    <p>
                        <a href={img.links.html}>See on Unsplash</a>
                    </p>
                </li>
            );
        } else {
            imgs = <li className='no-imgs'>
                <h3>No Images match your search.</h3>
            </li>;
        }
        return (
            <div>
                <ul className="img-list">
                    {imgs}
                </ul>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        imgFromApuCall: state.getListImg,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getListImg,
    addTofav

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ImgList);