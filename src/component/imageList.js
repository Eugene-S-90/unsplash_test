import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getListImg } from '../actions/getListImg'
import axios from 'axios';
import { access_key, secret_key } from '../config/config'
import './ImageList.less'


class ImgList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: []
        };
    }
    componentDidMount() {
        const { getListImg } = this.props
        console.log("DidMount")
        getListImg()
        // setInterval(getListImg,3000)
        
    }
    render() {
        console.log('myyy', this.props.imgFromApuCall.imgList)
        let imgs;
        if (this.props.imgFromApuCall.imgList.length >= 0) {
            imgs = this.props.imgFromApuCall.imgList.map(img =>
                <li className="grid-wrapper" key={img.id}>
                    <a href={img.links.html}>
                        <img className="grid__img" src={img.urls.small} alt="Unsplash Image here" />
                    </a>
                    <p>
                        Photo by
                    <a href={img.user.name}>{img.user.name}</a>
                        <a href={img.links.html}> See on Unsplash</a>
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
    getListImg

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ImgList);