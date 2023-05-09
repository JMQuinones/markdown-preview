import React, { useState } from "react";
import remarkGfm from "remark-gfm";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function Preview(props) {
  return (
    <div className="col-7">
      <h1 className="title">Preview</h1>
      <div id="preview">
        <ReactMarkdown remarkPlugins={[remarkGfm]} id="preview">
          {props.input}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;
