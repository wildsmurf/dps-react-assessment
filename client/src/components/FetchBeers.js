import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Beers from './Beers';
import { getBeers } from '../actions/beers';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchBeers extends Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getBeers(this.setLoaded))
  }
  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    if(this.state.loaded) {
      return(
        <Segment>
          <Route exact path='/all_beers' component={Beers} />
        </Segment>
      )
    } else {
      return(
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default FetchBeers;
