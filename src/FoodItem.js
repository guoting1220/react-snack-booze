import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ food }) {
  const { foodtype, id } = useParams();

  // if the food type is invalid, redirect to the home page
  const items = food[foodtype];
  if (!items) return <Redirect to="/" />;

  // if the food id is invalid, redirect to the food menu page
  let item = items.find(item => item.id === id);
  if (!item) return <Redirect to={`/${foodtype}`} />;

  // show the info of the specific food
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>          
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
