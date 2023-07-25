// import { baseUrl } from "../config";
const baseUrl = "https://api.unsplash.com";

export const fetchImages = (searchWords) => {
  const accessKey = process.env.REACT_APP_ACCESSKEY;

  if (searchWords !== "") {
    let url = `${baseUrl}/search/photos?query=${searchWords}&per_page=8&client_id=${accessKey}`;

    return fetch(url)
      .then((res) => res.json())
      .then((response) => {
        return response.results;
      });
  } else {
    let url = `${baseUrl}/photos/random?&client_id=${accessKey}&per_page=8&count=30`;

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }
};
