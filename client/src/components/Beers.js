import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Beers extends Component {
  state = {};

  beers = () => {
    const { beers } = this.props;
    return beers.map( beer => {
      return(
        <Grid.Column key={beer.id} computer={4} mobile={16} tablet={16}>
          <Card>
            {/* <Image src={beer.logo} /> */}
            <Card.Content>
              <Card.Header>{beer.name}</Card.Header>
              <Card.Meta>
                <span>Description: {beer.description}</span>
              </Card.Meta>
              <Card.Description>
                {beer.description}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }

  render() {
  let { beers } = this.state;
  return(
    <Container>
      <Header as='h3' textAlign='center'>Beers</Header>
      <Grid columns={16}>
        <Grid.Row>
          { this.beers() }
        </Grid.Row>
      </Grid>
    </Container>
  )
}
}

const mapStateToProps = (state) => {
  const beers = state.beers;
}

export default connect(mapStateToProps)(Beers);
