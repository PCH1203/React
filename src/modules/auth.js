import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

// 액션 함수 생성
export const sampleAction = createAction(SAMPLE_ACTION);

//초기값 설정
const initialState = {};

// 리듀서 코드
const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
