import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";

const familyReducer = (state, action) => {
  switch (action.type) {
    case "register":
      return state;

    case "readFamilies":
      return action.payload;

    default:
      return state;
  }
};

const RegisterFamily = (dispatch) => async (values, loading, callback) => {
  await dadosApi.post("/novafamilia", values);

  dispatch({ type: "register", payload: { values } });

  if (loading) loading();
  if (callback) callback();
};

const ReadFamilies = (dispatch) => async (callback) => {
  const families = await dadosApi.get("/familias");

  dispatch({ type: "readFamilies", payload: families.data });
  if (callback) callback();
};

const DisableFamily = (dispatch) => async (id, loading, callback) => {
  await dadosApi.post("/familia/disable", { id });

  dispatch({ type: "disable" });
  if (loading) loading();
  if (callback) callback();
};

export const { Context, Provider } = createDataContext(
  familyReducer,
  { RegisterFamily, ReadFamilies, DisableFamily },
  []
);
