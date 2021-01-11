const userData = {
  title: "awe",
  desc: "awes",
  user: [],
};

const userReducer = (state = userData, action) => {
  switch (action.type) {
    case "REGISTER-DATA":
      return {
        ...state,
        student: [...state.student, action.data],
      };

    default:
      return state;
  }
};

export default userReducer;
