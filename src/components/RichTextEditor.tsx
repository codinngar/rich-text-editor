import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import { all, createLowlight } from "lowlight";
import StarterKit from "@tiptap/starter-kit";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BlockQuoteIcon,
  BoldIcon,
  CodeBlockIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  HighlighterIcon,
  HorizontalLineIcon,
  ItalicIcon,
  OrderedListIcon,
  ParagraphIcon,
  StrikeThroughIcon,
  UnOrderedListIcon,
} from "./Icons";

const lowlight = createLowlight(all);

type MenuBarProps = {
  editor: Editor | null;
};

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  const options = [
    {
      icon: <Heading1Icon />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2Icon />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3Icon />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <ParagraphIcon />,
      onClick: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive("paragraph"),
    },
    {
      icon: <BoldIcon />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: <ItalicIcon />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      icon: <StrikeThroughIcon />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
    },
    {
      icon: <AlignLeftIcon />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenterIcon />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRightIcon />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <UnOrderedListIcon />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: <OrderedListIcon />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      icon: <HighlighterIcon />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      isActive: editor.isActive("highlight"),
    },
    {
      icon: <BlockQuoteIcon />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive("blockquote"),
    },
    {
      icon: <CodeBlockIcon />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive("codeBlock"),
    },
    {
      icon: <HorizontalLineIcon />,
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      isActive: editor.isActive("horizontal"),
    },
  ];

  return (
    <div className="p-2 border-b-3 border-b-gray-200 flex flex-wrap justify-around items-center gap-1">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={option.onClick}
          className={
            option.isActive
              ? "p-2 rounded-lg bg-gray-200 cursor-pointer"
              : "p-2 rounded-lg bg-transparent hover:bg-gray-100 cursor-pointer"
          }
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
};

const RichTextEditor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "p-8 outline-none font-inter",
      },
    },
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
  });

  return (
    <div className="border-3 border-gray-200 rounded-2xl">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
