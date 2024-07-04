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
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  values: { code: string; text: string }[];
  emptyText?: string;
  hasSearch?: boolean;
  searchText?: string;
};

export default function SelectBox({
  values,
  emptyText,
  hasSearch,
  searchText,
}: Props) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-[200px] justify-between text-base !py-3 !border-[#DDDDDD] !h-auto"
        >
          {values.find((it) => it.code === selectedValue)?.text ??
            "항목을 선택하세요"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command value={selectedValue} onValueChange={setSelectedValue}>
          {hasSearch && <CommandInput placeholder={searchText} />}

          <CommandList>
            {emptyText && <CommandEmpty>{emptyText}</CommandEmpty>}

            <CommandGroup>
              {values.map((value) => (
                <CommandItem
                  key={value.code}
                  value={value.code}
                  onSelect={(currentValue) => {
                    setSelectedValue(currentValue);
                    setPopoverOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValue === value.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {value.text}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
