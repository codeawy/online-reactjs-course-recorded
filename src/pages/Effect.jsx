import { useEffect, useState } from "react";

const Effect = () => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmount");
    };
  }, [inputVal]);

  console.log("render");
  return (
    <div>
      <h1>Effect</h1>
      <input
        type="text"
        name=""
        id=""
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default Effect;
