import * as Actions from '../types/types';

const initialState = {
  loading: false,
  error: false,
  data: [],
  currentCard: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case Actions.reqeustPeople: {
    return { ...state, loading: true };
  }

  case Actions.getPeople: {
    return { ...state, loading: false, data: action.payload };
  }

  case Actions.getPeopleError: {
    return { ...state, loading: false, error: action.payload };
  }

  case Actions.requestPlanetS: {
    return { ...state, loading: true };
  }

  case Actions.getPlanets: {
    return { ...state, loading: false, data: action.payload };
  }

  case Actions.getPlanetsError: {
    return { ...state, loading: false, error: action.payload };
  }

  case Actions.requestStaships: {
    return { ...state, loading: true };
  }

  case Actions.getStarships: {
    return { ...state, loading: false, data: action.payload };
  }

  case Actions.getStarshipsError: {
    return { ...state, loading: false, error: action.payload };
  }

  case Actions.currentCard: {
    return { ...state, currentCard: state.data.find(item => item.name === action.payload) };
  }
  default : return state;
  }
};

export default reducer;