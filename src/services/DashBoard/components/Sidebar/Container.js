import React, { useState, useEffect } from "react";
import Presentation from "./Presentation";
import { db } from "../../../../config/firebaseConfig";
import { useStateValue } from "../../../../Utility/StateProvider";
const Container = () => {
  const [{ user }] = useStateValue();
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
      <Presentation channels={channels} user={user} />
    </div>
  );
};

export default Container;
