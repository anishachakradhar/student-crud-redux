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
    // case 'EDIT_STUDENT':
    //   console.log([action.studentIndex]);
    //   return {
    //     ...state
    //   }
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

export function editStudent(studentIndex) {
  return {
    type: 'EDIT_STUDENT',
    studentIndex
  }
}

export function deleteStudent(index) {
  return {
    type: 'DELETE_STUDENT',
    index
  }
}