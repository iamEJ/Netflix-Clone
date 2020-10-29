import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer() {
  const { firebaseApp } = useContext(FirebaseContext);
  const user = firebaseApp.auth().currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
