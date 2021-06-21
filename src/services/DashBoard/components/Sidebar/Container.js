import React, { useState, useEffect } from "react";
import Presentation from "./Presentation";
import { db } from "../../../../config/firebaseConfig";
const Container = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("ROOMS").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  console.log(channels);
  return (
    <div>
      <Presentation channels={channels} />
    </div>
  );
};

export default Container;
