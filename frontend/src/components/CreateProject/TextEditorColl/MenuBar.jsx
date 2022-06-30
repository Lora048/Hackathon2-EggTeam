/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import "./MenuBar.scss";

import React, { Fragment } from "react";

import MenuItem from "./MenuItem";

export default ({ editor }) => {
  const items = [
    {
      icon: "bold",
      title: "Bold",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleBold().run();
      },
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: "italic",
      title: "Italic",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleItalic().run();
      },
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: "strikethrough",
      title: "Strike",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleStrike().run();
      },
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: "code-view",
      title: "Code",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleCode().run();
      },
      isActive: () => editor.isActive("code"),
    },
    {
      icon: "mark-pen-line",
      title: "Highlight",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleHighlight().run();
      },
      isActive: () => editor.isActive("highlight"),
    },
    {
      type: "divider",
    },
    {
      icon: "h-1",
      title: "Heading 1",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      },
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: "h-2",
      title: "Heading 2",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: "paragraph",
      title: "Paragraph",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().setParagraph().run();
      },
      isActive: () => editor.isActive("paragraph"),
    },
    {
      icon: "list-unordered",
      title: "Bullet List",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleBulletList().run();
      },
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: "list-ordered",
      title: "Ordered List",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleOrderedList().run();
      },
      isActive: () => editor.isActive("orderedList"),
    },
    {
      icon: "list-check-2",
      title: "Task List",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleTaskList().run();
      },
      isActive: () => editor.isActive("taskList"),
    },
    {
      icon: "code-box-line",
      title: "Code Block",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleCodeBlock().run();
      },
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      type: "divider",
    },
    {
      icon: "double-quotes-l",
      title: "Blockquote",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().toggleBlockquote().run();
      },
      isActive: () => editor.isActive("blockquote"),
    },
    {
      icon: "separator",
      title: "Horizontal Rule",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().setHorizontalRule().run();
      },
    },
    {
      type: "divider",
    },
    {
      icon: "text-wrap",
      title: "Hard Break",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().setHardBreak().run();
      },
    },
    {
      icon: "format-clear",
      title: "Clear Format",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().clearNodes().unsetAllMarks().run();
      },
    },
    {
      type: "divider",
    },
    {
      icon: "arrow-go-back-line",
      title: "Undo",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().undo().run();
      },
    },
    {
      icon: "arrow-go-forward-line",
      title: "Redo",
      action: (e) => {
        e.preventDefault();
        editor.chain().focus().redo().run();
      },
    },
  ];

  return (
    <div className="editor__header">
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === "divider" ? (
            <div className="divider" />
          ) : (
            <MenuItem {...item} />
          )}
        </Fragment>
      ))}
    </div>
  );
};
