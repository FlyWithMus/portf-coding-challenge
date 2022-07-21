import { useState } from "react";

import BeersData from "./BeersData";

/**It currently only fetchs data the first time you click on Submit */
const Main = () => {
  const [brewedAfter, setBrewedAfter] = useState("");
  const [brewedBefore, setBrewedBefore] = useState("");
  var [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <h1>Beers from PunkAPI</h1>
      <p>
        Select the time period to retrieve information about the beers that were
        brewed for the first time
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentPage(1);
        }}
      >
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
      {currentPage === 1 ? (
        <BeersData
          brewedAfter={brewedAfter}
          brewedBefore={brewedBefore}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <p>No data to show</p>
      )}
    </>
  );
};

export default Main;
