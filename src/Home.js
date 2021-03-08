import React from "react";
import { Link } from "react-router-dom";

import { Card, CardBody, CardTitle, Button } from "reactstrap";

function Home({ snacksNum, drinksNum}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <Link to="/snacks"><Button outline color="secondary" size="lg" className="mr-5 mt-5">Snacks ({snacksNum})</Button></Link>
            <Link to="/drinks"><Button outline color="secondary" size="lg" className="mt-5">Drinks ({drinksNum})</Button></Link>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
