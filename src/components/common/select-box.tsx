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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BoardTypes } from "@/constants/board-type";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export default function SelectBox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>();

  return (
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
  );
}
