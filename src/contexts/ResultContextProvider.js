const { createContext, useState } = require("react");

const resultCont = createContext();
// const baseUrl = "https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true";
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");

  // /videos, /search, /images
  const getResult = async (type) => {
    setIsLoding(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "Get",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
  };
};
