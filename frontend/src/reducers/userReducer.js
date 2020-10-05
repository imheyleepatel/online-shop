import { USER_SIGIN_REQUEST, USER_SIGIN_SUCCESS, USER_SIGIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/userConstant";

function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGIN_REQUEST:
      return { loading: true };
    case USER_SIGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;


  }
}

function userRegisterReducer(state = {}, action) {
  console.log(action.type)
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


export {
  userSigninReducer, userRegisterReducer
}