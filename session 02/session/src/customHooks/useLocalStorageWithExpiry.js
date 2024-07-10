import { useState, useEffect } from "react";

const checkStorage = (key) => {
  const item = window.localStorage.getItem(key);
  if (item) {
    const parsedItem = JSON.parse(item);
    const now = new Date();

    if (now.getTime() > parsedItem.expiry) {
      window.localStorage.removeItem(key);
    }
  }
};

const getStoredValue = (key, initialValue) => {
  const item = window.localStorage.getItem(key);

  if (item) {
    const parsedItem = JSON.parse(item);
    const now = new Date();

    if (now.getTime() > parsedItem.expiry) {
      window.localStorage.removeItem(key);
      return initialValue;
    }
    return parsedItem.value;
  }
  return initialValue;
};

const useLocalStorageWithExpiry = (key, initialValue, expiryTime) => {
  const [storedValue, setStoredValue] = useState(() =>
    getStoredValue(key, initialValue)
  );

  useEffect(() => {
    const item = {
      value: storedValue,
      expiry: new Date().getTime() + expiryTime,
    };

    window.localStorage.setItem(key, JSON.stringify(item));
  }, [key, storedValue, expiryTime]);

  const setValue = (value) => {
    setStoredValue(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const item = checkStorage(key);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return [storedValue, setValue];
};

export default useLocalStorageWithExpiry;
