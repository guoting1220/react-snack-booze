import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Food from "./FoodItem";
import AddForm from "./AddForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  const [fetchDataSignal, setFetchDataSignal] = useState(false);

  // fetch the food (snacks and drinks) from API on loading
  useEffect(() => {
    async function getFood() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setFood({snacks, drinks});
      setIsLoading(false);
    }
    getFood();
  }, [fetchDataSignal]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const addNewFood = async (foodData) => {
    const { foodType } = foodData;
    if (foodType === "snacks") {
      await SnackOrBoozeApi.postSnack(foodData);
    }
    else if (foodType === "drinks") {
      await SnackOrBoozeApi.postDrink(foodData);
    }
    setFetchDataSignal(!fetchDataSignal);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacksNum={food["snacks"].length} drinksNum={food["drinks"].length}/>
            </Route>

            <Route exact path="/add">
              <AddForm addNewFood={addNewFood} />
            </Route>

            <Route exact path="/:foodtype">
              <Menu food={food} />
            </Route>
            
            <Route exact path="/:foodtype/:id">
              <Food food={food} />
            </Route>                  
            
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
