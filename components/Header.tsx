import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Header = () => {
  return (
    <header className="p-4 mb-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="flex gap-3 items-center">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo" 
            width={0} 
            height={0}
            className="w-36 h-10"
          />
          {/* <h4 className="font-bricolage-grotesque text-xl">Weather Now</h4> */}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="cursor-pointer bg-neutral-800 hover:bg-neutral-800 text-foreground">
              <Image 
                src="/assets/images/icon-units.svg" 
                alt="logo" 
                width={15} 
                height={15} 
                color="black"
              />
              Units
              <Image 
                src="/assets/images/icon-dropdown.svg" 
                alt="logo" 
                width={0} 
                height={0} 
                color="black"
                className="w-3 h-3"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>Switch to Imperial</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem disabled>Temperature</DropdownMenuItem>
              <DropdownMenuItem>
                Celsius (°C)
              </DropdownMenuItem>
              <DropdownMenuItem>
                Farenheit (°F)
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem disabled>Wind Speed</DropdownMenuItem>
              <DropdownMenuItem>km/h</DropdownMenuItem>
              <DropdownMenuItem>mph</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem disabled>Precipitation</DropdownMenuItem>
              <DropdownMenuItem>Millimeters (mm)</DropdownMenuItem>
              <DropdownMenuItem>Inches (in)</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <p>
          <Image src="/icons/gear.svg" alt="units" width={20} height={20} />
          <span>Units</span>
        </p> */}
      </div>
    </header>
  );
};

export default Header;
