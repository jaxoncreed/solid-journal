export const BASE_URI =
  process.env.REACT_APP_POD_PROTOCOL && process.env.REACT_APP_POD_HOST
    ? `${process.env.REACT_APP_POD_PROTOCOL}://${process.env.REACT_APP_POD_HOST}`
    : window.location.origin;
