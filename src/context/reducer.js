export function reducer(action, state) {
  switch (action.type) {
    case 'USER_LOG':
      state.userLog = action.userLog;
      return {...state};
    case 'TODO_DETAIL':
      state.todoDetail = action.todoDetail;
      return {...state};
    default:
      return {...state};
  }
}
