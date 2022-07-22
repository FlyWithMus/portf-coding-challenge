import { useState } from "react";

// import BeersData from "./BeersData";

/**It currently only fetchs data the first time you click on Submit */
const Main = () => {
  const [brewedAfter, setBrewedAfter] = useState("");
  const [brewedBefore, setBrewedBefore] = useState("");
  const [data, setData] = useState([]);
  // var [currentPage, setCurrentPage] = useState(1);

  const functionData = (e) => {
    let currentPage = 1;
    e.preventDefault();
    const fetchData = async () => {
      try {
        console.log("fetching");
        console.log(currentPage);

        const res = await fetch(
          `https://api.punkapi.com/v2/beers?brewed_after=${brewedAfter}&brewed_before=${brewedBefore}&page=${currentPage}&per_page=80`
        );
        const body = await res.json();
        console.log(body);

        if (body.length === 0) {
          console.log("Fetching is finished. Data:", data);
          return data;
        } else {
          setData(...data, body);
          currentPage = currentPage + 1;
          console.log(data);
          fetchData();
        }
        if (!res.ok) {
          throw new Error(body.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <>
      <h1>Beers from PunkAPI</h1>
      <p>
        Select the time period to retrieve information about the beers that were
        brewed for the first time
      </p>

      <form onSubmit={functionData}>
        <label htmlFor="date_from">Date from:</label>
        <input
          id="date_from"
          value={brewedAfter}
          onChange={(e) => {
            setBrewedAfter(e.target.value);
          }}
        />

        <label htmlFor="date_to">Date to:</label>
        <input
          id="date_to"
          value={brewedBefore}
          onChange={(e) => {
            setBrewedBefore(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
      {/* {currentPage === 1 ? (
        <BeersData
          brewedAfter={brewedAfter}
          brewedBefore={brewedBefore}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <p>No data to show</p>
      )} */}
    </>
  );
};

export default Main;
