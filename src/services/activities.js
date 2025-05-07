import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAllActivites = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getSingleActivity = async (activityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/activities/${activityId}`)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const createActivity = async (formData) => {
  try {
    return axios.post(`${BASE_URL}/activities`, formData)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateActivity = async (activityId, formData) => {
  try {
    return axios.put(`${BASE_URL}/activities/${activityId}`, formData)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteActivity = async (activityId) => {
  try {
    return axios.delete(`${BASE_URL}/activities/${activityId}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}