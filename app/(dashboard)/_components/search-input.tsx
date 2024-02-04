"use client";

import { ChangeEvent, useEffect, useState } from "react";
import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounce } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true, encode: false }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative flex items-center">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search boards"
        className="w-full max-w-[516px] pl-9"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
