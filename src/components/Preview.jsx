import React, { useState } from "react";
import { marked } from "marked";
import remarkGfm from "remark-gfm";
//import ReactMarkdown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function Preview(props) {
  const createMarkup = () => {
    marked.setOptions({
      breaks: true,
    });
    var rawMarkup = marked.parse(props.input);
    //return { __html: rawMarkup };
    //return rawMarkup;
  };
  return (
    <div className="col-7">
      <h1 className="title">Preview</h1>
      {/*<div dangerouslySetInnerHTML={this.createMarkup()} id="preview" />*/}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.input}</ReactMarkdown>
    </div>
  );
}

export default Preview;
