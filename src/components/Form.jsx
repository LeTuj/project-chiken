import { useState } from "react";
import "./form.css";

const Form = () => {
  const [firstname, setFirstname] = useState("");

  return (
    <div className="Form">
      <p>One Piece {firstname}</p>
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        onChange={(e) => setFirstname(e.target.value)}
      />
    </div>
  );
};

export default Form;
