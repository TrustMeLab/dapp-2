/* eslint-disable no-console */
import axios from 'axios'
import { IUser } from "@components/form/mint-form";

export const postRegister = async (values: IUser): Promise<any> => {
  try {
    return await axios.post('/api/register', { values })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const checkHandleUniqueness = async (handle: string): Promise<any> => {
  try {
    return await axios.get('/api/check-handle-uniqueness', { params: { handle } })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const checkEligibility = async (handle: string, address: string): Promise<any> => {
  try {
    return await axios.get('/api/check-eligibility', { params: { handle, address } })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const getUser = async (address: string): Promise<any> => {
  try {
    return await axios.get('/api/get-user', { params: { address } })
  } catch (err) {
    console.error(err)
    throw err
  }
}
