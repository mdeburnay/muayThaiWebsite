// import { useState, useEffect } from "react";

// const globalFetchTestComponent = ({
//   loadOnMount = false,
//   clearDataOnLoad = false,
//   fetchFn = null,
// } = {}) => {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   const loadData = async (event) => {
//     setIsLoading(true);
//     setError();
//     if (clearDataOnLoad === true) setData();

//     try {
//       const resp = await fetchFn(event);
//       setData(resp);
//       setIsLoading(false);
//     } catch (e) {
//       setError(e);
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     if (loadOnMount && fetchFn !== null) loadData();
//   }, []);

//   return { data, isLoading, error, loadData };
// };

// export default globalFetchTestComponent;

import { useState, useEffect } from "react";

const useAsyncData = ({
  loadOnMount = false,
  clearDataOnLoad = false,
  fetchFn = null,
} = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async (event) => {
    setIsLoading(true);
    setError();
    if (clearDataOnLoad === true) setData();

    try {
      const resp = await fetchFn(event);
      setData(resp);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (loadOnMount && fetchFn !== null) loadData();
  }, []);

  return { data, isLoading, error, loadData };
};
export default useAsyncData;
