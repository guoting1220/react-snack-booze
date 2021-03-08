import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import "./FoodMenu.css";
import {capitalize} from './helpers'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ food }) {
  const { foodtype } = useParams();
  const foodSelected = food[foodtype];

  // if the food type is invalid, redirect to the home page
  if (!foodSelected) return <Redirect to="/" />

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {capitalize(foodtype)} Menu
          </CardTitle>
          <CardText>
            <b>Enjoy our yummy {foodtype}</b>: 
          </CardText>
          <ListGroup>
            {foodSelected.map(f => (
              <Link to={`/${foodtype}/${f.id}`} key={f.id}>
                <ListGroupItem>{f.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
