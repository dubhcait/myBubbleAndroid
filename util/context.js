import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import {handleCurrentlocation} from './geoLocation';

const initialState = {
  lives: [1, 1, 1],
  homeLocation: {},
  currentLocation: {},
  distanceFromHomeArray: [0],
};

const retriveFromStorage = async setStateObject => {
  try {
    const value = await AsyncStorage.getItem('myBubble');
    console.log('value', value);
    if (value !== null) {
      const storageObject = JSON.parse(value);
      setStateObject(storageObject);
    }
  } catch (e) {
    console.log('Error:', e);
  }
};

const setStateToStorage = async stateObject => {
  try {
    await AsyncStorage.setItem('myBubble', JSON.stringify(stateObject));
  } catch (e) {
    // saving error
    console.log('error:', e);
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'lives':
      return {...state, lives: action.value};
    case 'homeLocation':
      return {...state, homeLocation: action.value};
    case 'currentLocation':
      return {...state, currentLocation: action.value};
    case 'distanceFromHomeArray':
      return {...state, distanceFromHomeArray: action.value};
    case 'all':
      return action.value;
    default:
      throw new Error('Unrecognized action');
  }
};

export const Context = createContext();

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  const setCurrentLocation = location =>
    dispatch({type: 'currentLocation', value: location});

  const setStateObject = storedObject =>
    dispatch({type: 'all', value: storedObject});

  useEffect(() => {
    retriveFromStorage(setStateObject);
    handleCurrentlocation(setCurrentLocation);
  }, []);

  useEffect(() => {
    setStateToStorage(state);
  }, [state]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
