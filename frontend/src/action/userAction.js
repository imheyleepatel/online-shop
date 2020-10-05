import Cookie from 'js-cookie';
const { default: Axios } = require("axios");
const { USER_SIGIN_REQUEST, USER_SIGIN_SUCCESS, USER_SIGIN_FAIL , USER_REGISTER_REQUEST , USER_REGISTER_SUCCESS , USER_REGISTER_FAIL } = require("../constants/userConstant");


const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGIN_REQUEST, payload: { email, password } });
  try {
    console.log("this is signin data" , email)
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGIN_FAIL, payload: error.message });
  }
}


const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", { name, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

export {signin ,register}