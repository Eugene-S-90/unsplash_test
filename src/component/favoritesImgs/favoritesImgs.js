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
        console.log("xui")
        // const { getListImg } = this.props
       
        console.log("DidMount")
        // fetch('https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw', {
        //     mode: 'cors',
        //     headers: {
        //       'Access-Control-Allow-Origin':'*'
        //     }
        //   })
        //     .then(
        //         function (response) {
        //             if (response.status !== 200) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 return;
        //             }

        //             // Examine the text in the response  
        //             response.json().then(function (data) {
        //                 console.log('dataaaa',data);
        //             });
        //         }
        //     )
        //     .catch(function (err) {
        //         console.log('Fetch Error :-S', err);
        //     });
        //     fetch('https://api.mlab.com/api/1/databases/unsplash_api/collections/unsplash_favorites?apiKey=h0wNitZSLer0T8vVl1QwY-NOERfUSoXw', {  
        //         method: 'post',  
        //         headers: {  
        //           "Content-type": "application/json"  
        //         },  
        //         body: JSON.stringify( { x : 1 } ) 
        //       })
    }
    render() {
       const { favoritesList } = this.props
        console.log('favbs',favoritesList)
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