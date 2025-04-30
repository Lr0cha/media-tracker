import FetchCard from "@/components/fetchCard";
import SelectType from "@/components/selectTypeMedia";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchPage = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col sm:ml-[20%] min-h-screen p-6">
        <div className="flex mx-auto gap-2">
          <SelectType />
          <Input placeholder="Search for medias" className="w-2/3 md:w-100" />
          <Button className="bg-secondary hover:scale-105">
            <Search />
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 place-items-center">
          <FetchCard />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
