import useFetch from "../hooks/useFetch";

const BeersData = ({
  brewedAfter,
  brewedBefore,
  currentPage,
  setCurrentPage,
}) => {
  const { data: beers, error } = useFetch(
    brewedAfter,
    brewedBefore,
    currentPage,
    setCurrentPage
  );

  return <>{/* <p>{beers[0][0].name}</p> */}</>;
};
export default BeersData;
