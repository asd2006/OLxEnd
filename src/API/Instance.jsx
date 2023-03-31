import axios from "axios";
import * as dotenv from 'dotenv'

const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    'Content-Type': 'application/json'
  }
})

export {instance}