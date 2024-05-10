'use client';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
 } from "@/components/ui/navigation-menu";
import data from "./menu";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();
  return (
    <header className="px-20 py-8 border-b border[#BDBDBD]">
     <div className="container mx-auto flex justify-between align-middle">
      <h1 className="font-semibold">OWN FINANCE</h1>
        <NavigationMenu>
          <NavigationMenuList className="gap-10 text-sm">
            {
              data.map((item) => {
                return(
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink href={item.path} className={item.path === pathname ? 'font-bold' : 'font-normal text-[#BDBDBD]'}>{item.title}</NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })
            }
          </NavigationMenuList>
        </NavigationMenu>
     </div>
    </header>
  );
}
