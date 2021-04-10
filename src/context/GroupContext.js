import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";

const groupReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return action.payload;

    case "create":
      return state;

    case "readGroups":
      return action.payload;

    case "readGroup":
      return action.payload;

    default:
      return state;
  }
};

const ReadGroups = (dispatch) => async (loading) => {
  const groups = await dadosApi.get("/grupos");

  dispatch({ type: "readGroups", payload: groups.data });
  if (loading) loading();
};

const CreateGroup = (dispatch) => async (callback, loading) => {
  await dadosApi.post("/novogrupo");

  dispatch({ type: "create" });

  if (loading) loading();
  if (callback) callback();
};

const ChangeGroup = (dispatch) => async (_id, loading, callback) => {
  await dadosApi.get(`/grupo/fase/${_id}`);
  const groups = await dadosApi.get("/grupos");

  dispatch({ type: "change", payload: groups.data });

  if (loading) loading();
  if (callback) callback();
};

export const { Context, Provider } = createDataContext(
  groupReducer,
  { CreateGroup, ReadGroups, ChangeGroup },
  []
);
