import React from "react";
import { defaultDisabledStyle } from "./style";
function Outline({
  text,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) {
  const [hover, setHover] = React.useState(false);
  console.log(hover);
  function handleMouseOver() {
    setHover(true);
  }
  function handleMoverLeave() {
    setHover(false);
  }
  const overrideStyles = {
    paddingLeft:
      size === "sm"
        ? "4px"
        : size === "md"
        ? "16px"
        : size === "lg"
        ? "32px"
        : "",
    paddingRight:
      size === "sm"
        ? "4px"
        : size === "md"
        ? "16px"
        : size === "lg"
        ? "32px"
        : "",
    backgroundColor:
      color === "primary"
        ? hover
          ? "#0039CB"
          : "#2962FF"
        : color === "secondary"
        ? hover
          ? "#1C313A"
          : "#455A64"
        : color === "danger"
        ? hover
          ? "#9A0007"
          : "#D32F2F"
        : color === "default"
        ? hover
          ? "#AEAEAE"
          : "#E0E0E0"
        : "",
    border: color && "none",
    color: color && "white",
    boxShadow: disableShadow ? "0 0 0 black" : color === "primary" ? "0 2px 3px #2962FF33" : color === "secondary" ? "0 2px 3px #455A6433" : color === "danger" ? "0 2px 3px #D32F2F33" : color === "default" ? "0 2px 3px #33333333" : ""
  };

  return (
    <button
      style={
        (disableShadow && style) ||
        (disabled && defaultDisabledStyle) ||
        (size && overrideStyles) ||
        (color && overrideStyles)
      }
      disabled={disabled}
      className="p-2 rounded-md bg-transparent border border-[#3D5AFE] text-[#3D5AFE] hover:bg-[#2962FF1A] transition flex justify-center items-center"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMoverLeave}
    >
      {startIcon === "favorite" ? (
        <span className="material-symbols-outlined">favorite</span>
      ) : startIcon === "download" ? (
        <span className="material-symbols-outlined">arrow_downward</span>
      ) : startIcon === "add" ? (
        <span className="material-symbols-outlined">add</span>
      ) : startIcon === "delete" ? (
        <span className="material-symbols-outlined">delete</span>
      ) : startIcon === "stared" ? (
        <span className="material-symbols-outlined">star</span>
      ) : (
        ""
      )}
      {text}{" "}
      {endIcon === "favorite" ? (
        <span className="material-symbols-outlined">favorite</span>
      ) : endIcon === "download" ? (
        <span className="material-symbols-outlined">arrow_downward</span>
      ) : endIcon === "add" ? (
        <span className="material-symbols-outlined">add</span>
      ) : endIcon === "delete" ? (
        <span className="material-symbols-outlined">delete</span>
      ) : endIcon === "stared" ? (
        <span className="material-symbols-outlined">star</span>
      ) : (
        ""
      )}
    </button>
  );
}

export default Outline;
