import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "my-Internet",
      handler: props.actionProvider.handleMyInternet,
      id: 1,
    },
    { text: "SkyPro", handler:props.actionProvider.handleSkyPro, id: 2 },
    { text: "Abacus", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;