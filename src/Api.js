import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async postSnack(snack) {
    const { id, name, description, recipe, serve} = snack;
    const result = await axios.post(`${BASE_API_URL}/snacks`, {
      id,
      name,
      description,
      recipe,
      serve
    });
    return result.data;
  }

  static async postDrink(drink) {
    const { id, name, description, recipe, serve } = drink;
    const result = await axios.post(`${BASE_API_URL}/drinks`, {
      id,
      name,
      description,
      recipe,
      serve
    });
    return result.data;
  }

}

export default SnackOrBoozeApi;
