import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
class ItemCard extends React.Component {
  render() {
    // const priceColor = this.props.promo ? 'text-danger' : 'text-dark';
    const sellPrice = this.props.promo
      ? this.props.promotion
      : this.props.price;
    return (
      <Card style={{ margin: 5 }} >
        <CardActionArea>
          <CardMedia
            style={{height:140}}
            image={this.props.img}
            title={this.props.imgalt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{minHeight:60}}>
              {this.props.Description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary"
            onClick={() => {
              this.props.showBuyModal(this.props.ID, sellPrice);
            }}
          >
            Buy
          </Button>
          <Typography>
            {numberWithCommas(this.props.price)} ₩
          </Typography>
          
        </CardActions>
      </Card>
    );
  }
}

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch(this.props.location)
      .then(res => res.json())
      .then(result => {
        this.setState({
          cards: result,
        });
      });
  }

  render() {
    const { cards } = this.state;
    const items = cards.map(card => (
      <Grid item xs={12} sm={4} direction="row" justify="center" alignItems="stretch" >
        <ItemCard
          key={card.id}
          {...card}
          promo={this.props.promo}
          showBuyModal={this.props.showBuyModal}
        />
      </Grid>
    ));
    return (
      <div>
        <Grid container>
          {items}
        </Grid>
      </div>
    );
  }
}
