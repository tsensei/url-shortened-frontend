import axios from "axios";

const sendUrl = (url) => {
  const response = axios.post(`/shorten`, {
    url: url,
  });
  return response.then((returnedObject) => returnedObject.data.uuid);
};

export default { sendUrl };
