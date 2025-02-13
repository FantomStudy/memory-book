import { create } from "zustand";
import axios from "axios";
import { url } from "../constants/constants";

const useAuthStore = create((set, get) => ({
  login: "",
  email: "",
  password: "",
  repassword: "",

  setLogin: (login) => set({ login }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setRepassword: (repassword) => set({ repassword }),

  registration: async () => {
    const { login, email, password, repassword } = get();

    try {
      const response = await axios.post(
        `${url}/user/register`,
        { login, email, password, repassword },
        { withCredentials: true }
      );
      console.log("Успешная регистрация:", response.data);
    } catch (error) {
      console.log("Ошибка регистрации:", error.response?.data || error.message);
    }
  },
  Login: async () => {
    const { login, password } = get();

    try {
      const response = await axios.post(
        `${url}/user/login`,
        { login, password },
        { withCredentials: true }
      );
      console.log("Успешная авторизация:", response.data);
    } catch (error) {
      console.log("Ошибка авторизация:", error.response?.data || error.message);
    }
  },
}));

export default useAuthStore;
