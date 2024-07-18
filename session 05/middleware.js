export const middleware = (store) => (next) => (action) => {
  //logic
};

export const middleware1 = function (store) {
  return function (next) {
    return function (action) {
      // logic
    };
  };
};
