import { ADD ,DELETE ,UPDATE_STUDENT} from "./Types";
const initState = [
  { id: 0, firstName: "omar", lastName: "nasri" },
  { id: 1, firstName: "mabrouka", lastName: "ammari" },
];
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
      case DELETE:
        return state.filter((element)=>element.id!=action.payload)
        case UPDATE_STUDENT:
          return state.map((elt)=>{
            if(elt.id==action.payload.id){
              return [...state,action.payload.newValue];
            }
          })
    default:
      return state;
  }
};
export default Reducer;
