import { Editor } from "@tiptap/react";
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
    TableIcon,
    ColumnInsertLeftIcon,
    ColumnInsertRightIcon,
    ColumnRemove,
    RowInsertTopIcon,
    RowInsertBottomIcon,
    RowRemoveIcon,
    HeaderRowIcon,
    HeaderColumnIcon,
} from "./Icons";

type MenuBarProps = {
    editor: Editor | null;
};

const MenuBar = ({ editor }: MenuBarProps) => {
    if (!editor) {
        return null;
    }

    const options = [
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
            icon: <Heading1Icon />,
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: editor.isActive("heading", { level: 1 }),
        },
        {
            icon: <Heading2Icon />,
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: editor.isActive("heading", { level: 2 }),
        },
        {
            icon: <Heading3Icon />,
            onClick: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: editor.isActive("heading", { level: 3 }),
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
        {
            icon: <TableIcon />,
            onClick: () => editor.chain().focus().insertTable().run(),
            isActive: editor.isActive("table"),
        },
        {
            icon: <HeaderRowIcon />,
            onClick: () => editor.chain().focus().toggleHeaderRow().run(),
        },
        {
            icon: <HeaderColumnIcon />,
            onClick: () => editor.chain().focus().toggleHeaderColumn().run(),
        },
        {
            icon: <ColumnInsertLeftIcon />,
            onClick: () => editor.chain().focus().addColumnBefore().run(),
        },
        {
            icon: <ColumnInsertRightIcon />,
            onClick: () => editor.chain().focus().addColumnAfter().run(),
        },
        {
            icon: <ColumnRemove />,
            onClick: () => editor.chain().focus().deleteColumn().run(),
        },
        {
            icon: <RowInsertTopIcon />,
            onClick: () => editor.chain().focus().addRowBefore().run(),
        },
        {
            icon: <RowInsertBottomIcon />,
            onClick: () => editor.chain().focus().addRowAfter().run(),
        },
        {
            icon: <RowRemoveIcon />,
            onClick: () => editor.chain().focus().deleteRow().run(),
        },
    ];

    return (
        <div className="p-2 border-b-3 border-b-gray-200 flex flex-wrap justify-between gap-3">
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

export default MenuBar;
