import React, { useEffect, useState } from "react";
import { SnackBarDiv } from "./SnackBar.elments";
const Logo = ({ type }) => {
  switch (type) {
    case "error":
      return <div>🚨</div>;
    case "warning":
      return <div>⚠</div>;
    case "success":
      return <div>👍</div>;
    case "info":
      return <div>ℹ</div>;
    default:
      return;
  }
};
const SnackBar = ({ type, message, toggleShow, deleteCard }) => {
  const [killTimeOut, setKillTimeOut] = useState(null);
  const timeDelay = 2;

  const stopTimeOut = () => {
    clearTimeout(killTimeOut);
  };

  const startTimeOut = () => {
    const killCode = setTimeout(() => {
      toggleShow();
    }, timeDelay * 1000);
    setKillTimeOut(killCode);
  };

  useEffect(() => {
    startTimeOut();
  }, []);

  return (
    <SnackBarDiv
      $type={type}
      onMouseEnter={stopTimeOut}
      onMouseLeave={startTimeOut}
    >
      <Logo type={type} /> <p>{message}</p>
      {type === "error" && <button onClick={deleteCard}>Delete</button>}
    </SnackBarDiv>
  );
};

export default SnackBar;
