import React from "react";
import Default from "./Variants/Default";
import Outline from "./Variants/Outline";
import Text from "./Variants/Text";

function Button({
  text,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color
}) {
  return (
    <>
      {variant === "outline" ? (
        <Outline
          text={text}
          disableShadow={disableShadow}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          size={size}
          color={color}
        />
      ) : variant === "text" ? (
        <Text
          text={text}
          disableShadow={disableShadow}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          size={size}
          color={color}
        />
      ) : (
        <Default
          text={text}
          disableShadow={disableShadow}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          size={size}
          color={color}
        />
      )}
    </>
  );
}

export default Button;
