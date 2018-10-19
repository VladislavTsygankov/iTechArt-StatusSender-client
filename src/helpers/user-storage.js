import {
    getLocalStorageItem,
    setLocalStorageItem,
    removeLocalStorageItem,
  } from '../services/local-storage/local-storage';
  
  const USER_KEY = 'LOGGED_USER';
  
  const getLoggedUser = () => getLocalStorageItem(USER_KEY);
  const setLoggedUser = userData => setLocalStorageItem(USER_KEY, userData);
  const removeLoggedUser = () => removeLocalStorageItem(USER_KEY);
  
  export { getLoggedUser, setLoggedUser, removeLoggedUser };
  