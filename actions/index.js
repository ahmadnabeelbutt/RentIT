// import React from 'react';
// import * as firebase from 'firebase';
// export function getAds () {
// 	return(dispatch) => {
// 		firebase.database().ref('/ads').on('value', snapshot => {
// 			dispatch({
// 				type : "ADS_FETCH",
// 				payload : snapshot.val()
// 			})
// 		})
// 	}
// }

// export function deleteAd(key){
//     return (dispatch) => {
//         firebase.database().ref(`/ads/${key}`).remove()
//     }
// }

// export function postAdss (title, description, rent) {
// 	return (dispatch) => {
// 		firebase.database().ref('/ads').push({title, description, rent})
// 	}
// }

// export function editBlog(title, description,key){
//     return (dispatch) => {
//         firebase.database().ref(`/ads`).child(key).update({title, description})
//     }
// }