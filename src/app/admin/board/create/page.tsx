"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { Editor as TinyMCEEditor } from "tinymce";

export default function AdminNoticeCreatePage() {
  const [editor, setEditor] = useState<TinyMCEEditor | undefined>();

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

        <Input type="text" placeholder="제목을 입력하세요" />

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

        <Button onClick={() => console.log(editor?.getContent())}>저장</Button>
      </section>
    </>
  );
}
