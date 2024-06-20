import axios from "axios";

export async function AllUser() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/users-assets`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function getUserAssets() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}user/my-assets`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data; // Assurez-vous que votre API renvoie les données attendues
  } catch (error) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des actifs de l'utilisateur."
    );
  }
}
