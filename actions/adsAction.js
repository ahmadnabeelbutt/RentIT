import {Add_Ads_type,Show_Ads, Add_Title,Add_Date} from "./actiontype";
// import axios from 'axios';
import * as firebase from 'firebase';
export const Add_Ads =(catergory,title,avatarSource,description,rent,dateto,datefrom,privacyPolicy,userid,ads_Id,name,number)=>dispatch=>{
    console.log("Enter action");
    const state={
        Catergory:catergory,
        Title:title,
        Description:description,
        Rent:rent,
        Date_To:dateto,
        Date_from:datefrom,
        PrivacyPolicy : privacyPolicy, 
        UserID:userid,
        AdsID:ads_Id,
        AvatarSource:avatarSource,
        Name:name,
        Number:number
    }
    console.log("before adding data",ads_Id)
             firebase.database().ref('ads').child(ads_Id).set({
                catergory,title,avatarSource,description,rent,dateto,datefrom,privacyPolicy, userid,ads_Id,name,number
                // state
                })
             .then(response => {
                console.log("Responce");
                //  {
                //     dispatch({
                //       type: Add_Ads_type,
                //       payload: state,
                //     });
                //   } 
                //   else {
                //         //   dispatch({
                //         //     type: UPDATE_MEDICINE_ERROR,
                //         //     payload: response.data.msg
                //         //   });
                //         console.log("In else responce false")
                //         }
            })
                    .catch(error => {
                        // dispatch({
                        //   type:Add_Ads_type,
                        //   payload: "Network Error"
                        // });
                        console.log(error);
                      });
                  };

    // dispatch({
    //     type:Add_Title,
    //     title:Title,
    //     description:Description,
    //     rent:Rent,
    // });
    // console.log("Data from state",this.state.Title,this.state.Description,this.state.Rent);
// }
// .then(response => {
//     console.log(response.data, "Upadate Medicine Action ");
//     if (response.data.success === true) {
//       dispatch({
//         type: UPDATE_MEDICINE_SUCCESS,
//         payload: response.data.savedMedicine
//       });
//       window.location.reload();
//     } else {
//       dispatch({
//         type: UPDATE_MEDICINE_ERROR,
//         payload: response.data.msg
//       });
//     }

//     ctrl.setState({ loading: false });
//   })
//   .catch(error => {
//     dispatch({
//       type: UPDATE_MEDICINE_ERROR,
//       payload: "Network Error"
//     });
//     console.log(error);
//   });
// };
// export const showAdsList =()=>dispatch=>{
//     console.log("Api of Showing is fatching");
//     axios.get("https://nodeapii.herokuapp.com/todoApp/addTask/oldTasks").then(response=>{
//         console.log(response.data,"That is responce data");
//         dispatch({
//             type:SHOW_VALUE,
//             payload:response.data
//         })
//         {
//             console.log("console after dispatch")
//         }
//     }).catch(error=>{
//         console.log(error);
//     })
// }