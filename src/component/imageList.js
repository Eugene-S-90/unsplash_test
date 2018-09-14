import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getListImg } from '../actions/getListImg'
import axios from 'axios';
import { access_key, secret_key } from '../config/config'

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
        // fetch('https://api.unsplash.com/search/photos/?query=skull&per_page=20&client_id=' + access_key)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({ imgs: data.results });
        //     })
        //     .catch(err => {
        //         console.log('Error happened during fetching!', err);
        //     });
    }
    render() {

        return (
            <div>
                <ul className="img-list">
                   "t"
                </ul>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getListImg

}, dispatch)

export default connect(null, mapDispatchToProps)(ImgList);