import * as Types from '../types/types';

const requestPeople = () => ({ type: Types.reqeustPeople });
const getPeople = data => ({ type: Types.getPeople, payload: data });
const getPeopleError = error => ({ type: Types.getPeopleError, payload: error });


const requestStaships = () => ({ type: Types.requestStaships });
const getStarships = data => ({ type: Types.getStarships, payload: data });
const getStarshipsError = error => ({ type: Types.getStarshipsError, payload: error });

const requestPlanetS = () => ({ type: Types.requestPlanetS });
const getPlanets = data => ({ type: Types.getPlanets, payload: data });
const getPlanetsError = error => ({ type: Types.getPlanetsError, payload: error });

export const getDataCard = name => ({ type: Types.currentCard, payload: name });

export const getDataPeople = swapi => () => dispatch => {
  dispatch(requestPeople);
  swapi.getPeople()
    .then(r => dispatch(getPeople(r.results)))
    .catch(e => dispatchEvent(getPeopleError(e)));
};

export const getDataStarships = swapi => () => dispatch => {
  dispatch(requestStaships);
  swapi.getStarships()
    .then(r => dispatch(getStarships(r.results)))
    .catch(e => dispatch(getStarshipsError(e)));
};

export const getDataPlanets = swapi => () => dispatch => {
  dispatch(requestPlanetS);
  swapi.getPlanets()
    .then(r => dispatch(getPlanets(r.results)))
    .catch(e => dispatch(getPlanetsError(e)));
};
