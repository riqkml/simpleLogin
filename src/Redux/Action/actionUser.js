const addUser = (data) => {
  return (dispatch) => {
    dispatch({ type: "REGISTER-USER", data });
  };
};

export { addUser };
