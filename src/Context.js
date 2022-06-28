import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [Movies, setMovies] = useState([]);
  const [isError, setisError] = useState({ show: false, msg: "" });
  const [query, setquery] = useState("Titanic");

  const getMoviesAPI = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setisError({ show: false, msg: "" });
        setMovies(data.Search);
      } else {
        setisError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMoviesAPI(`${API_URL}&s=${query}`);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [query]);

  return (
    <>
      <AppContext.Provider
        value={{ isLoading, isError, Movies, query, setquery }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const useCustomHook = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useCustomHook };
