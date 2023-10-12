import { setChinpz, initChinpz } from "./action"
import { ToastAndroid, } from 'react-native';
import axios from 'axios';




export const getData = () => {
    return async (dispatch) => {
        dispatch(initChinpz());

        fetch("http://192.168.0.100:4000/api/v1/posts?_sort=createdAt&_order=desc", {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log("*********", responseJson)
                if (responseJson.status) {
                    dispatch(setChinpz(responseJson.body));
                }
            })
            .catch((error) => {
                console.log("error", error)
            });

    };
}

export const addChinpzData = (name) => {
    return async (dispatch) => {
        fetch("http://192.168.0.100:4000/api/v1/posts?_sort=createdAt", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userName": name,
                "caption": "I just had a wonderful breakfast at the Resort Today. How does your day look?",
                "tags": [
                    "#resortNomad",
                    "#breakfast",
                    "#chirpzMorning"
                ]
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("*********", responseJson)
                if (responseJson.status) {
                    ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
                    dispatch(getData());
                }
            })
            .catch((error) => {
                console.log("error", error)
            });

    };
}