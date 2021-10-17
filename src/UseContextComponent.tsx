import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

const ConsumerComponent = () => {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First:{user.first}</div>
      <div>Last:{user.last}</div>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: "Jane",
    last: "Smith",
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <ConsumerComponent />
        <button
          onClick={() =>
            setUser({
              first: "Josie",
              last: "Smith",
            })
          }
        >
          Change User
        </button>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextComponent;
