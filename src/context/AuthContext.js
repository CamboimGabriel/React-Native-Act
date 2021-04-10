import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { toke: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  const nick = await AsyncStorage.getItem("nick");

  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Home", { nick });
  } else {
    navigate("Login");
  }
};

const signin = (dispatch) => {
  return async ({ nick, password }) => {
    try {
      const response = await dadosApi.post("/signin", { nick, password });
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("nick", nick);

      dispatch({ type: "signin", payload: response.data.token });
      navigate("Home", { nick });
    } catch (err) {
      dispatch({
        type: "add_error",

        payload: "O usuário ou senha está incorreto",
      });
    }
  };
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("nick");
  dispatch({ type: "signout" });
  navigate("Login");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, tryLocalSignin },
  { token: null, errorMessage: "" }
);
