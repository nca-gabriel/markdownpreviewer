import defaultMarkdown from "./defaultMark";
import { marked } from "marked";
import "./App.css";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <main id="markdown-previewer">
      <section id="editor-wrapper">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </section>

      <section>
        <h2 id="preview-h2">Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked.parse(markdown, { breaks: true }),
          }}
        />
      </section>
    </main>
  );
}

export default App;
