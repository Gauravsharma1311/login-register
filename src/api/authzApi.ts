import axios from "axios";

const BASE_URL = "http://localhost:4000/api/auth";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const register = async (
  username: string,
  password: string,
  email: string,
  mobile: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      username,
      password,
      email,
      mobile,
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};
