import React from "react";
import Card from "./Card";

const Newitem = ({ title, description, src, url }) => {
  return (
    <div>
      <Card title={title} description={description} src={src} url={url} />
    </div>
  );
};

export default Newitem;
