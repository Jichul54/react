import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState("hello");
  return (
    <div>
      <h1>hello</h1>
      <button
        onClick={() => {
          setValue("Thank You");
        }}
      >
        click me! a
      </button>
    </div>
  );
};

export default Header;
