const CHANGE_TAB = 'CHANGE_TAB'
const SET_ADD_DISABLED = 'SET_ADD_DISABLED'
const ADD_STR = 'ADD_STR'
const REMOVE_STR = 'REMOVE_STR'

let initialState = {
  activeTab: 0,
  isAddDisabled: false,
  strArr: []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return { ...state, activeTab: action.tabIndex }
    case SET_ADD_DISABLED:
      return { ...state, isAddDisabled: !state.isAddDisabled }
    case ADD_STR:
      return { ...state, strArr: [...state.strArr, action.str] }
    case REMOVE_STR:
      return { ...state, strArr: [...state.strArr.filter((el, i) => i !== action.index)] }
    default:
      return state
  }
}

export const changeTab = (tabIndex) => ({ type: CHANGE_TAB, tabIndex })
export const setAddDisabled = () => ({ type: SET_ADD_DISABLED })
export const addStr = (str) => ({ type: ADD_STR, str })
export const removeStr = (index) => ({ type: REMOVE_STR, index })

export default appReducer
