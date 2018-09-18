import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getListImg } from '../actions/getListImg'
import Img from './Img';
import NoImgs from './NoImgs';
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
    }
    render() {
        console.log('myyy', this.props.imgFromApuCall.imgList)
        let imgs;
        if (this.props.imgFromApuCall.imgList.length >= 0) {
            imgs = this.props.imgFromApuCall.imgList.map(img =>
                <Img
                    url={img.urls.small}
                    user={img.user.links.html}
                    name={img.user.name}
                    link={img.links.html}
                    key={img.id}
                />
            );
        } else {
            imgs = <NoImgs />;
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