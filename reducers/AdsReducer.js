// export default function (state = {}, action) {
// 	switch(action.type) {
// 		case "ADS_FETCH":
		
// 			return {
// 				...state,
// 				adsList : action.payload
// 			}
// 		default:
// 			return state
// 	}
// }
import {Add_Ads,Show_Ads} from "../actions/actiontype";
const state={
    value:[]
};
function mainReducer (mState={...state},action){
    switch(action.type){
        case Add_Ads:
            console.log(action.payload,"Adding reducer")
            if(action.payload === null || action.payload ===undefined){
                console.log("Undefine Adding Reducer")
            }else{
                mState.value.push(action.payload)
                console.log(mState.value,"adding value Push")
            }
            return deepCopy(mState);
        default:
            return deepCopy(mState);
        }
    }  
    const deepCopy = obj=>{
        const newObj = JSON.parse(JSON.stringify(obj))
        return newObj;
    }
    export default mainReducer;