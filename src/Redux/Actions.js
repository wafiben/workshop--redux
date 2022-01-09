import { ADD ,DELETE,UPDATE_STUDENT} from "./Types";
 export const add=(student)=>{
    return {type:ADD,payload:student}
}
export const deleteStudent=(id)=>{
    console.log('lanched' ,id)
    return {type:DELETE,payload:id}
}
export const update=(id,newValue)=>{
    return {type:UPDATE_STUDENT,payload:{id,newValue}}
}