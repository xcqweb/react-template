const ADDNUM = 'cart/ADDNUM';
const INITIALNUM = 'cart/INITIALNUM';

const initialState = {
  num: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALNUM:
      return {
        ...state,
        num: 0,
      };
    case ADDNUM:
      return {
        ...state,
        num: action.data.num,
        text: action.data.text
      };
    default:
      return state;
  }
}



export function addNum(data) {
  return {
    type: ADDNUM,
    data
  };
}
export function initalNum() {
  return {
    type: INITIALNUM
  };
}
