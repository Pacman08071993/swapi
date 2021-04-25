/* eslint no-console: "error" */
class Swapi {
  #baseURL ='https://swapi.dev/api/';

    getPeople = async() => {
      try {
        const response = await fetch(`${this.#baseURL}people/`);

        if (!response.ok) {
          throw new Error('something went wrong in people');
        }
        return await response.json();
      } catch (e) {
        throw new Error(e.message);
      }
    }

    getPlanets = async() => {
      try {
        const response = await fetch(`${this.#baseURL}planets/`);

        if (!response.ok) {
          throw new Error('something went wrong in planets');
        }
        return await response.json();
      } catch (e) {
        throw new Error(e.message);
      }
    }

    getStarship = async() => {
      try {
        const response = await fetch(`${this.#baseURL}starships/`);

        if (!response.ok) {
          throw new Error('something went wrong in starship');
        }
        return await response.json();
      } catch (e) {
        throw new Error(e.message);
      }
    }
}

export default new Swapi();