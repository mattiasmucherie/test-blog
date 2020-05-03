import React from "react";
import MarkDown from "react-markdown";

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
      if (props.data.image) {
        console.log(props.data);
        return (
          <div className="columns">
            <div className="column is-one-quarter">
              <figure className="image is-128x128">
                <img src={props.data.image.url} alt={`Entry ${props.data.title}`} />
              </figure>
            </div>
            <div className="column">
              <MarkDown source={props.data.entryDescription} />
            </div>
          </div>
        );
      }
      return <MarkDown source={props.data.entryDescription} />;
    }
    return null;
  };

  return (
    <div className="section">
      <div className="box">
        <div className="content is-medium">
          {renderTitle()}
          {renderEntryDescription()}
        </div>
      </div>
    </div>
  );
};
