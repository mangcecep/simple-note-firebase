const initialState = {
    popup : false,
    isLogin: false,
    user: 'Solihin'
  }

const reducer = (state = initialState, action) => {
    if(action.type === 'CHANGE_POPUP' ) {
      return {
        ...state,
        popup : action.value
      }
    }

    if(action.type === 'CHANGE_ISLOGIN' ) {
      return {
        ...state,
        popup : action.value
      }
    }

    if(action.type === 'CHANGE_USER') {
      return {
        ...state,
        user: action.value
      }
    }
    return state

  }

  export default reducer