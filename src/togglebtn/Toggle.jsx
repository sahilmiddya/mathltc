import "./toggle.css";

// import { useState } from "react";

const Toggle = ({onChange, checked}) => {
  // const [isToggled, setIsToggled] = useState(false);
  // const onToggle = () => setIsToggled(!isToggled);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="switch" />
    </label>
  );
};

export default Toggle;
