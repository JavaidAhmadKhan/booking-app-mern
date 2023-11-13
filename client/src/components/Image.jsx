import React from "react";

export default function Image({ src, ...rest }) {
  src =
    src && src.includes("https://")
      ? src
      : "https://localhost:8080/uploads" + src;

  return <img {...rest} src={src} alt="hotel" />;
}
