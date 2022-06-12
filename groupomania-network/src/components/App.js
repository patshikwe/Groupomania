

import Routes from "./Routes"
import { UidContext } from "./AppContext"
import { useEffect, useState, React } from "react"
import axios from "axios"


const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: false,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    // if (uid) dispatch(getUser(uid));
  }, [uid]);


  return (
    <UidContext.Provider value={uid} >
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
