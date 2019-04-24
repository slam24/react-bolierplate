import axios from 'axios'
//import { API } from '../constants/system'

const returnData = new Promise((resolve, reject) => {
  resolve("data");
});

const getRequest = (data, controller, token) => {
  return dispatch => {
    //return axios.get(`${API}${controller, token}`, {params: data, headers: { Authorization: token }});
    return returnData;
  }
}

const getlistRequest = (data, id, controller, token) => {
  return dispatch => {
    //return axios.get(`${API}${controller, token}/${id}`, {params: data, headers: { Authorization: token }});
    return returnData;
  }
}

const postRequest = (data, controller, token) => {
  return dispatch => {
    //return axios.post = (`${API}${controller, token}`, data, { headers: { Authorization: token }});
    return returnData;
  }
}

const putRequest = (data,id,controller, token) => {
  return dispatch => {
    //return axios.put(`${API}${controller, token}/${id}`, data, { headers: { Authorization: token }});
    return returnData;
  }
}

const deleteRequest = (data,id,controller, token) => {
  return dispatch => {
    //return axios.delete(`${API}${controller, token}/${id}`, {params: data, headers: { Authorization: token }});
    return returnData;
  }
}

export default {
  getRequest,
  getlistRequest,
  postRequest,
  putRequest,
  deleteRequest
}