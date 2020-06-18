const initialState = {
  students: []
}

export default function studentReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_STUDENT':
      return {
        ...state,
        students: state.students.concat([action.studentInfo])
      } 
    default:
      return state;
  }
}

export function addStudent(studentInfo) {
  return {
    type: 'ADD_STUDENT',
    studentInfo
  }
}
