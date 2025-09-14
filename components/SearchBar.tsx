import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-3 justify-center mt-4 w-4/5 max-w-2xl m-auto">
      <div className="px-6 rounded-lg flex items-center w-full max-w-md mr-4 focus-visible:border-none focus-visible:ring-neutral-0/50 focus-visible:ring-[2px] dark:bg-neutral-800">
        <Image
          src="/assets/images/icon-search.svg"
          alt="logo"
          width={18}
          height={18}
        />
        <Input
          type="text"
          placeholder="Search for a place..."
          className="py-5 text-neutral-200 placeholder:text-neutral-200 border-none dark:bg-transparent focus-visible:border-none focus-visible:ring-0 font-medium"
        />
      </div>
      <Button className="py-5 bg-blue-500 hover:bg-blue-700 cursor-pointer text-foreground">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
