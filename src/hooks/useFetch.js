import { useState, useEffect } from "react";

const useFetch = (brewedAfter, brewedBefore, currentPage, setCurrentPage) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (e) => {
      try {
        // e.preventDefault();
        console.log("fetching");
        console.log(currentPage);

        const res = await fetch(
          `https://api.punkapi.com/v2/beers?brewed_after=${brewedAfter}&brewed_before=${brewedBefore}&page=${currentPage}&per_page=80`
        );
        const body = await res.json();
        console.log(body);

        setData([...data, body]);

        if (body.length === 80) {
          setCurrentPage((currentPage += 1));
        }
        console.log("despues de fetch, currentPage:", currentPage);
        if (!res.ok) {
          throw new Error(body.error);
        }
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    fetchData();
  }, [currentPage]);

  console.log(data);
  return { data, error };
};

export default useFetch;
