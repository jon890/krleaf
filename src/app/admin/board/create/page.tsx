"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BoardTypes } from "@/constants/board-type";
import { cn } from "@/lib/utils";
import createBoardAction from "@/server/create-board.action";
import { Editor } from "@tinymce/tinymce-react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRef, useState } from "react";
import { Editor as TinyMCEEditor } from "tinymce";

export default function AdminNoticeCreatePage() {
  const [editor, setEditor] = useState<TinyMCEEditor | undefined>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>();

  const titleRef = useRef<HTMLInputElement>(null);

  async function handleSave() {
    if (!editor) {
      console.error("editor is not initialiized");
      return;
    }

    if (!value) {
      alert("게시판 타입을 입력해주세요");
      return;
    }

    const titleValue = titleRef?.current?.value;
    if (!titleValue || titleValue === "") {
      alert("제목을 입력해주세요");
      return;
    }

    const content = editor.getContent();
    if (!content || content === "") {
      alert("내용을 입력해주세요");
      return;
    }

    const data = {
      title: titleValue,
      content,
      boardType: value,
    };
    console.log("board write to database... data:", data);
    const response = await createBoardAction(data);

    alert(response.message);
  }

  return (
    <>
      <section
        className={cn(
          "container px-10 flex flex-col gap-10",
          "pc lg:my-[100px]",
          "mobile my-[80px]"
        )}
      >
        <h1 className="text-3xl font-bold">게시판 글쓰기</h1>

        <Input type="text" placeholder="제목을 입력하세요" ref={titleRef} />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? BoardTypes.find((boardType) => boardType.code === value)?.text
                : "게시판 유형을 선택하세요"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command value={value} onValueChange={setValue}>
              <CommandInput placeholder="Search framework..." />
              <CommandList>
                <CommandEmpty>해당 게시판을 찾을 수 없습니다</CommandEmpty>
                <CommandGroup>
                  {BoardTypes.map((boardType) => (
                    <CommandItem
                      key={boardType.code}
                      value={boardType.code}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === boardType.code ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {boardType.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Editor
          id="tinymce_editor"
          apiKey="q1p30nxndfzs0gtqhe49xmb7clpexl0h9dxoy3b9qwaynqvg"
          onInit={(_evt, editor) => setEditor(editor)}
          init={{
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request: any, respondWith: any) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant")
              ),
          }}
          initialValue="Welcome to TinyMCE!"
        />

        <Button onClick={() => handleSave()}>저장</Button>
      </section>
    </>
  );
}
