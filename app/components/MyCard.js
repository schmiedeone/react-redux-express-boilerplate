import React, {Component} from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const data = [
  { index: 0, text: "awesome placeholder", picture: 'http://schmiede.one/wp-content/uploads/2018/03/Robotic-1200x350-c-default.jpg' },
  { index: 1, text: "another great placeholder", picture: 'http://schmiede.one/wp-content/uploads/2017/10/Leadgen.a76ef047d8d24c03823acdf41c4ee7c8-1200x350-c-default.jpg' },
  { index: 2, text: "what a placeholder", picture: 'http://schmiede.one/wp-content/uploads/2017/10/Sell_Now.a76ef047d8d24c03823acdf41c4ee7c8-1200x350-c-default.jpg' },
  { index: 3, text: "look at this one!", picture: 'http://placekitten.com/200/300' },
  { index: 4, text: "yowza best placeholder ever", picture: 'http://placekitten.com/200/300' }
];


export class CardExampleExpandable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: 0
    };
  }

incrementCard = () => {
    this.setState({ card: this.state.card + 1 });
  }

decreaseCard = () => {
    this.setState({ card: this.state.card - 1 });
  }

render() {
  console.log(this.state.card);
  return (
  <Card>
    <CardHeader
      title="Awesome Carousel"
      subtitle="got stuff displayed!"
    />
    
    <CardText >
      <ul>
          <div>
            <img className="carouselImg" src={data[this.state.card].picture}/>
            <li key={data[this.state.card].index}>{data[this.state.card].text}</li>
          </div>
      </ul>
    </CardText>
    <CardActions>
      <FlatButton label="Previous" onClick={() => this.decreaseCard()} />
      <FlatButton label="Next" onClick={() => this.incrementCard()} />
    </CardActions>
  </Card>
)
        }
      }

export default CardExampleExpandable;
