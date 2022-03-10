// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)=>{
    switch(action.type){

case "LOAD-TO-GALLERY":
    return {...state,data:action.payload}
// case "SEARCH":
//     return {data:state.data.filter(item=>(item.name).toLowerCase().includes((action.payload).toLowerCase()))}
    default:
        return state
    }
}
