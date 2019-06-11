import axios from 'axios'
import { API } from '../constants/system'

const returnData = new Promise((resolve, reject) => {
  resolve("data");
});

const getRequest = (data, controller, token) => {
  return dispatch => {
    //return axios.get(`${API}${controller}`, {params: data, headers: { Authorization: token }});
    return returnData;
  }
}

const getlistRequest = (data, id, controller, token) => {
  return dispatch => {
    //return axios.get(`${API}${controller}/${id}`, {params: data, headers: { Authorization: token }});
    return returnData;
  }
}

const postRequest = (data, controller) => {
  return dispatch => {
    //return axios.post = (`${API}${controller}`, data, { headers: { Authorization: token }});
    return returnData;
  }
}

const putRequest = (data,id,controller) => {
  return dispatch => {
    //return axios.put(`${API}${controller}/${id}`, data, { headers: { Authorization: token }});
    return returnData;
  }
}

const deleteRequest = (data,id,controller) => {
  return dispatch => {
    //return axios.delete(`${API}${controller}/${id}`, {params: data, headers: { Authorization: token }});
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