import { Card, CardBody } from "@heroui/card";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";

export default function page() {
  return (
    <Card radius="none" className="mt-1 mx-2 rounded-t-lg border-t-1 border-r-1 border-l-1 border-slate-300 ">
      <CardBody className="p-0  h-10">
        {/* <div className="bg-slate-100 mt-1 mx-2 rounded-t-lg border-t-1 border-r-1 border-l-1 border-slate-300 p-2 h-10"> */}
        <Navbar isBordered height="2rem">
          <NavbarContent justify="start">
            <NavbarItem className="cursor-pointer">Menu</NavbarItem>
            <NavbarItem className="cursor-pointer">Contact Us</NavbarItem>

            {/* <Badge size="sm" color="primary" shape="rectangle" isDot variant="flat" content="beta"> */}
            <NavbarItem className=" cursor-pointer">OmniView</NavbarItem>
            {/* </Badge> */}
          </NavbarContent>
          <NavbarContent justify="end" className="gap-1">
            <NavbarItem className="text-sm  text-slate-600 ">WOz</NavbarItem>
            {/* <Avatar className="w-8 h-8" {...user.avatar} /> */}
            {/* <FlagAtar country={user.country} /> */}
          </NavbarContent>
        </Navbar>
        {/* </div> */}
      </CardBody>
    </Card>
  );
}
