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
    case 'EDIT_STUDENT':
      {
        const students = [].concat(state.students);
        students[action.studentIndex] = action.payload;
        return {
          ...state,
          students
        }
      }
    case 'DELETE_STUDENT':
      return {
        students: state.students.filter((student, i) => i !== action.index )
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

export function editStudent(studentIndex, payload) {
  return {
    type: 'EDIT_STUDENT',
    studentIndex,
    payload
  }
}

export function deleteStudent(index) {
  return {
    type: 'DELETE_STUDENT',
    index
  }
}