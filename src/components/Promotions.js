import React  from 'react';
import { ads } from '../dataLoader.js';

class Promotions extends React.Component {
    render() {
        return (
            <>
            <div id="ads">

            <div className="promotions tux">
            <img src={ads.Tux} alt="Tux Logo"/>
            <p>Advertisement Space?</p>
            </div>

            <div className="promotions coffee">
            <a href="https://bit.ly/3Fw7B3R">
            <img src={ads.BuyMeACoffee} alt="BuyMeACoffee"/>
            <p>Or a book...</p></a>
            </div>

            </div>

            </>
        );
    }
}

export default Promotions;
