import InputForm from "./components/InputForm";
import UserElement from "./components/UserElement";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const userDataHandler = (newUserData) => {
    setData((prevData) => [newUserData, ...prevData]);
  };

  return (
    <div>
      <InputForm userData={userDataHandler} />
      <UserElement newUserData={data} />
    </div>
  );
}

export default App;
