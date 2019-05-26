import React, { Component } from 'react';
import './HeaderComponent.scss';

const API = 'http://sector-react.ddev.local:8089/jsonapi/';
const DEFAULT_QUERY = 'menu_link_content/menu_link_content?filter[main-menu][condition][path]=parent&filter[main-menu][condition][operator]=IS%20NULL';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuLinks: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ menuLinks: data.data}))
            .catch(error => this.setState({ error: error}));
    }

    render() {
        const { menuLinks, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }
        console.log(menuLinks);
        return (
          <div className="header__wrapper">
            <div className="header">
              <div className="header__logo">
                <a href="/" className="header__logo--link">Sector React</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="43.58" className="logo__brand"
                     viewBox="0 0 220 43.58">
                  <path
                    d="M166.23,2.33a19.44,19.44,0,1,1-19.44,19.44A19.51,19.51,0,0,1,166.23,2.33m0-1.75a21.19,21.19,0,1,0,21.19,21.19A21.16,21.16,0,0,0,166.23.58ZM220,15.73A14.78,14.78,0,0,0,205.2.93H190V43h30l-7.27-14.45A14.86,14.86,0,0,0,220,15.73Zm-2.8,25.4H191.8V2.6h13.4a13.08,13.08,0,0,1,13,13,13.27,13.27,0,0,1-6.31,11.21L205.46,14l-1.58.79ZM140.48,2.6V17h-6.13V41.13h-14v-24H114.2V2.6h26.27M142.23.85H112.45v18h6.13V42.88H136.1v-24h6.13ZM89.16.58a21.19,21.19,0,1,0,21.19,21.19A21.16,21.16,0,0,0,89.16.58Zm0,40.55A19.44,19.44,0,1,1,108.6,21H89.33v1.75h19.18A19.41,19.41,0,0,1,89.16,41.13ZM35,.85v42H64.81V.85Zm1.75,40.29V2.6H63.06v11.3H49.57v1.75H63.06V27.91H49.57v1.75H63.06V41.13ZM25.92,13l6.66-6.83L32,5.57C24.35-1.69,12.7-1.87,5.87,5.14a17.07,17.07,0,0,0-4.73,13A19.71,19.71,0,0,0,6.66,30.53L0,37.37.61,38a19.66,19.66,0,0,0,13.22,5.61h.35a17.12,17.12,0,0,0,12.44-5.17,17,17,0,0,0,4.73-13A19.87,19.87,0,0,0,25.92,13ZM7.09,6.36A15.43,15.43,0,0,1,18.22,1.72,17.55,17.55,0,0,1,30,6.28L7.79,29.22A18.18,18.18,0,0,1,2.89,18,15.5,15.5,0,0,1,7.09,6.36ZM25.4,37.19a15.32,15.32,0,0,1-11.47,4.64A17.31,17.31,0,0,1,2.54,37.28l5.34-5.52L24.7,14.33a17.45,17.45,0,0,1,4.9,11.21A15.16,15.16,0,0,1,25.4,37.19Z"></path>
                </svg>
              </div>
              <nav className="header__menu">
                <ul>
                  {menuLinks.map(menuLink =>
                    <li className="header__menu--link" key={menuLink.id}>
                      <a href={"/node/" + menuLink.id}>{menuLink.attributes.title}</a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        );
    }
}

export default HeaderComponent;
