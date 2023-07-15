import axios from "axios";

export async function fetchMediumArtices() {
  console.log("being called");

  try {
    const response = await axios({
      method: "get",
      url: "https://v1.nocodeapi.com/evieperren/medium/mlDVGxgqKHxRbUJX",
      params: {},
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
