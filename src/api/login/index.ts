import axios from "axios";
//= Types
import type { Fields } from "@/types";

export async function handleRequest(uid: number, data: Fields) {
  try {
    const response = await axios.post(`https://one-hand/login?uid=${uid}`, data, {
      headers: {
        "X-secret-key": "OH2024"
      }
    });
  } catch (err) {
    console.log(err);
  }

  if (data.email === "admin@admin.com" && data.password === "12345678") return true;
  else return false;
}