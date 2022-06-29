/* eslint-disable react/prop-types */
import { useEditor, EditorContent } from "@tiptap/react";
import { Button, Flex } from "@chakra-ui/react";
import StarterKit from "@tiptap/starter-kit";

function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <Flex w="fit-content" flexWrap="wrap">
      <Button onClick={() => editor.chain().focus().toggleBold().run()}>
        bold
      </Button>
      <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
        italic
      </Button>
      <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
        strike
      </Button>
      <Button onClick={() => editor.chain().focus().toggleCode().run()}>
        code
      </Button>
      <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Button>
      <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Button>
      <Button onClick={() => editor.chain().focus().setParagraph().run()}>
        paragraph
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        h1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        h2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        h3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        h4
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      >
        h5
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      >
        h6
      </Button>
      <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        bullet list
      </Button>
      <Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        ordered list
      </Button>
      <Button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        code block
      </Button>
      <Button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        blockquote
      </Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </Button>
      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button>
      <Button onClick={() => editor.chain().focus().undo().run()}>undo</Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>redo</Button>
    </Flex>
  );
}

function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <Text fontSize="2xl" align="left">
      Détail du projet
    </Text>
    <Text fontSize="2xl" align="left">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti illum sint atque reiciendis dolor laborum quia possimus illo ab sapiente, modi qui eaque suscipit nemo. Nemo, earum. Quos, suscipit molestiae.
    </Text>
    `,
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}

export default Tiptap;
