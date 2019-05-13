import React from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const data = [
  { index: 0, text: "Hi" },
  { index: 1, text: "my" },
  { index: 2, text: "name" },
  { index: 3, text: "is" },
  { index: 4, text: "Developer" }
];

const handleClick = () => {
    console.log('Clicked!!!');
};

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title="Some Title"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Previous" onClick={() => handleClick()} />
      <FlatButton label="Next" onClick={() => handleClick()} />
    </CardActions>
    <CardText expandable={true}>
      <ul>
        {data.map((ele, i) => (
          <li key={i}>{ele.text}</li>
        ))}
      </ul>
    </CardText>
  </Card>
);

export default CardExampleExpandable;
