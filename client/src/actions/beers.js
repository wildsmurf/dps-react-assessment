import axios from 'axios';

export const getBeers = (callback) => {
  return(dispatch) => {
    axios.get('/api/beers')
      .then( res => dispatch({ type: 'BEERS', beers: res.data }))
      .then( callback() )
  }
}
