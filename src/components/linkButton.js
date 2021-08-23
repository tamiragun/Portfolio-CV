import React from "react";

export function LinkButton(props) {
  const { url, title } = props;
  const clickHandler = (e) => {
    e.preventDefault();
    const url = e.target.value;
    window.open(url, "_blank");
  };
  return (
    <button value={url} onClick={clickHandler} type="submit">
      {title}
    </button>
  );
}
