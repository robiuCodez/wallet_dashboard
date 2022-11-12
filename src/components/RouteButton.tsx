import React from "react";
import { useNavigate } from "react-router-dom";

const RouteButton = ({ route, text }: { route: string; text: string }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${route}`);
  };
  return <button onClick={handleNavigate}>{text}</button>;
};

export default RouteButton;
