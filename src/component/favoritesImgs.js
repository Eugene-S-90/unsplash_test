import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getListImg } from '../actions/getListImg'
import './ImageList.less'


class FavoritesImgs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: []
        };
    }
    componentDidMount() {
        const { getListImg } = this.props
        console.log("DidMount")
        getListImg()
        // setInterval(getListImg,3000)
        fetch('https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw', {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
          })
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response  
                    response.json().then(function (data) {
                        console.log('dataaaa',data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
            fetch('https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw', {  
                method: 'post',  
                headers: {  
                  "Content-type": "application/json"  
                },  
                body: JSON.stringify( { x : 1 } ) 
              })
    }
    render() {

        return (
            <div>
                g
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        test: state.getListImg,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getListImg

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesImgs);