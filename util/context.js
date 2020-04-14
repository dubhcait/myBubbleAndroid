import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import {handleCurrentlocation} from './geoLocation';

const initialState = {
  lives: [1, 1, 1],
  homeLocation: {},
  currentLocation: {},
  distanceFromHomeArray: [0],
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

  useEffect(() => {
    handleCurrentlocation(setCurrentLocation);
  }, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// dispatch({type:"lives", value: newstate})
// const homeFromMemory = async () => {
//   try {
//     const value = await AsyncStorage.getItem('myBubbleHome');
//     if (value !== null) {
//       const storageObject = JSON.parse(value);
//       return storageObject.Home;
//     }
//     return false;
//   } catch (e) {
//     return false;
//   }
// };

// const setMemory = async (label, item) => {
//   try {
//     await AsyncStorage.setItem(
//       `myBubble${label}`,
//       JSON.stringify({label, item}),
//     );
//   } catch (e) {
//     // saving error
//     console.log('error:', e);
//   }
// };
