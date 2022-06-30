/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
/* eslint-disable consistent-return */
import "./styles.scss";

// import { HocuspocusProvider } from "@hocuspocus/provider";
// import CharacterCount from "@tiptap/extension-character-count";
// import Collaboration from "@tiptap/extension-collaboration";
// import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Highlight from "@tiptap/extension-highlight";
// import TaskItem from "@tiptap/extension-task-item";
// import TaskList from "@tiptap/extension-task-list";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
// import * as Y from "yjs";

import MenuBar from "./MenuBar";

export default function TxtEditor({ onLoad }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
    ],
  });

  useEffect(() => {
    onLoad(editor);
  }, []);

  // Save current user to localStorage and emit to editor

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      <EditorContent className="editor__content" editor={editor} />
    </div>
  );
}
