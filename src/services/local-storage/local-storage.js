const getLocalStorageItem = key => JSON.parse(localStorage.getItem(key));

const setLocalStorageItem = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));

const removeLocalStorageItem = key => localStorage.removeItem(key);

export { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem };
