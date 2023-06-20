import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:'todo',
    initialState:{value:[],item:'',todoUpdate:''},
    reducers:{
        itemName:(state,action)=>{
            state.item = action.payload
        },
        todoUpdate:(state,action)=>{
            state.todoUpdate = action.payload
        },
        addToDo:(state,action)=>{
           state.value.push(action.payload);     
        },

        deleteToDo:(state,action)=>{
            state.value = state.value.filter((user)=> user.id !== action.payload.id)
        },
        updateToDo:(state,action)=>{
            state.value.map((user)=>{
                if(user.id===action.payload.id){
                   user.item=action.payload.item;
                }
                 return state.value
            })
        },
        markCompletedToDo:(state,action)=>{
            let updatedList=[...state.value];
            const Length=updatedList.length
            if(action.payload.status){
                updatedList.push(updatedList.splice(action.payload.id, 1)[0])
                updatedList[Length-1].status=true
                
                state.value=[...updatedList]                

            }else{
                updatedList[action.payload.id].status=false
                updatedList.unshift(updatedList.splice(action.payload.id, 1)[0])            
                
                state.value=[...updatedList]
                
            }
            
        }
    }

})


export const {itemName,todoUpdate,addToDo,deleteToDo,updateToDo,markCompletedToDo}=todoSlice.actions;
export default todoSlice.reducer;