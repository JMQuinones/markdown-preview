import React, { useState } from "react";
const INITIAL_MARKDOWN =
  '# Welcome to my React Markdown Previewer!\r\n\r\n## This is a sub-heading...\r\n\r\nHeres some inline code, `<div></div>`\r\n\r\n```\r\n// this is multi-line code:\r\n\r\nfunction helloWorld(name) {\r\n  console.log("Hello "+name);\r\n}\r\n```\r\n\r\nYou can also make text **bold**\r\n\r\n\r\nThere\'s also links [links](https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg), and\r\n> Block Quotes!\r\n\r\nEven tables:\r\n\r\nHeader | Header | Another Header\r\n------------ | ------------- | -------------\r\nYour content can | be here, and it | can be here....\r\nAnd here. | Okay. | I think we get it.\r\n\r\n- And of course there are lists.\r\n  - Some are bulleted.\r\n     - With different indentation levels.\r\n        - That look like this.\r\n\r\n![cute cats](https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg)';
function Editor(props) {
  return (
    <div className="col-5">
      <h1 className="title">Editor</h1>
      <textarea
        id="editor"
        value={props.input}
        onChange={props.handleChange}
        className="form-control"
      ></textarea>
      <div className="row px-3 ">
        <button
          className="btn btn-danger col-sm-4"
          onClick={props.handleDelete}
        >
          Clear
        </button>
        <button className="btn btn-success col-sm-4" onClick={props.handleCopy}>
          Copy
        </button>
        <button className="btn btn-info col-sm-4" onClick={props.handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Editor;
