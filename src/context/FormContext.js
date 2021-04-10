import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";
const formReducer = (state, action) => {
  switch (action.type) {
    case "register":
      return state;

    default:
      return state;
  }
};

const RegisterForm = (dispatch) => async (values, id, loading, callback) => {
  const response = await dadosApi.post("/novoFormulario/", {
    questionario: values,
    familyId: id,
  });

  dispatch({ type: "register", payload: response });
  if (loading) {
    loading();
  }

  if (callback) {
    callback();
  }
};

export const { Context, Provider } = createDataContext(
  formReducer,
  { RegisterForm },
  []
);
