import { useState } from "react";

const Main = () => {
  const [brewedAfter, setBrewedAfter] = useState("");
  const [brewedBefore, setBrewedBefore] = useState("");
  const [beers, setBeers] = useState([]);
  let totalData = [];
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
          console.log("Fetching is finished. Data:", totalData);
          setBeers(totalData);
        } else {
          totalData = [...totalData, body];
          currentPage = currentPage + 1;
          console.log(totalData);
          fetchData();
        }
        if (!res.ok) {
          throw new Error(body.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log("hi, I'm callling!");
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
      {beers.length > 1 ? (
        <>
          <p>{beers[0][0].name}</p>
          <p>{beers.length}</p>
        </>
      ) : (
        <p> no data to show</p>
      )}
    </>
  );
};

export default Main;
