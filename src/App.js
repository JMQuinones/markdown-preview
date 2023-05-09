import Editor from "./components/Editor";
import React, { useState } from "react";
import Preview from "./components/Preview";
const INITIAL_MARKDOWN =
  '# Welcome to my React Markdown Previewer!\r\n\r\n## This is a sub-heading...\r\n\r\nHeres some inline code, `<div></div>`\r\n\r\n```\r\n// this is multi-line code:\r\n\r\nfunction helloWorld(name) {\r\n  console.log("Hello "+name);\r\n}\r\n```\r\n\r\nYou can also make text **bold**\r\n\r\n\r\nThere\'s also links [links](https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg), and\r\n> Block Quotes!\r\n\r\nEven tables:\r\n\r\nHeader | Header | Another Header\r\n------------ | ------------- | -------------\r\nYour content can | be here, and it | can be here....\r\nAnd here. | Okay. | I think we get it.\r\n\r\n- And of course there are lists.\r\n  - Some are bulleted.\r\n     - With different indentation levels.\r\n        - That look like this.\r\n\r\n![cute cats](https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg)';

function App() {
  const [input, setInput] = useState(INITIAL_MARKDOWN);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    alert("Copied to clipboard");
  };
  const handleDelete = () => {
    setInput("");
  };
  const handleReset = () => {
    setInput(INITIAL_MARKDOWN);
  };

  return (
    <div className="">
      <Editor
        input={input}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleReset={handleReset}
        handleCopy={handleCopy}
      />
      <Preview input={input} />
    </div>
  );
}

export default App;
