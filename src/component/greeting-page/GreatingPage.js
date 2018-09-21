import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getListImg } from '../../actions/action_getListImg'
import { addTofav } from '../../actions/action_addToFav'
import './GreetingPage.less'
import {
    Link,
} from 'react-router-dom'



class GreatingPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getListImg } = this.props
        getListImg(1)
    }

    render() {
        const { RandomImgGreetingPage } = this.props
        console.log(RandomImgGreetingPage)
        let imgs;
        if (RandomImgGreetingPage.imgList.length >= 0) {

            imgs = RandomImgGreetingPage.imgList.map(img =>
                <li className="greeting-grid-wrapper" key={img.id}>
                    <a href={img.links.html}>
                        <img className="greeting-grid__img" src={img.urls.regular} alt="Unsplash Image here" />
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
                <div className="greeting-text-wrapper">
                    <h2 className="text-to-center">Welcome, Stranger</h2>
                    <p className="text-to-center">Here is yours random photo</p>
                    <p className="text-to-center">If you wanna see more go to the <Link to="/dashboard/photos" className="greeting__link">LIST OF PHOTOS</Link></p>
                    <p className="text-to-center">Now you can only remove or add photos to the favorites</p>
                </div>
                <ul className="greeting-list">
                    {imgs}
                </ul>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        RandomImgGreetingPage: state.getListImg,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getListImg,
    addTofav

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GreatingPage);