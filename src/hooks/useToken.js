import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const currentUser = {
    email: user?.email,
  };

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/users/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("airbnb-token", data.token);
          setToken(data.token);
        });
    }
  }, [user?.email]);

  return [token];
};

export default useToken;
