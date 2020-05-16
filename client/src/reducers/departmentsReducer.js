const departmentsReducer = (state=[],action) => {
    switch(action.type){
        case 'SET_DEPARTMENTS': return [].concat(state,action.payload)

        case 'REMOVE_DEPARTMENT': return state.filter(department=>{
            return department._id != action.payload._id
        })

        case 'ADD_DEPARTMENT': return [...state,action.payload]

        case 'EDIT_DEPARTMENT': return state.map(department=>{
                                    if(department._id == action.payload._id){
                                            return Object.assign({},department,action.payload)
                                    } else {
                                    return Object.assign({},department)
                                    }
                             })
        default: return [...state]
    }
}

export default departmentsReducer