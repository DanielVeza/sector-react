import React, { Component } from 'react';

const API = 'http://sector-react.ddev.local:8089/jsonapi/';
const DEFAULT_QUERY = 'menu_link_content/menu_link_content?filter[menu_name]=main-menu';

class FetchApproach extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hits: data.data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;
    console.log(hits);

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.id}>
            <a href={"/node/" + hit.id}>{hit.attributes.title}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default FetchApproach;
