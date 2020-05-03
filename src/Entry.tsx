import React from "react";

export const Entry = (props: any) => {
  console.log(props.data);

  const renderTitle = () => {
    if (props.data.title) {
      return <div className="title">{props.data.title}</div>;
    }
    return null;
  };
  const renderEntryDescription = () => {
    if (props.data.entryDescription) {
      return <p>{props.data.entryDescription}</p>;
    }
    return null;
  };
  return (
    <div className="container">
      <div className="box">
        <div className="content is-medium">
          {renderTitle()}
          {renderEntryDescription()}
        </div>
      </div>
    </div>
  );
};
