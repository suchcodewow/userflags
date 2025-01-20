"use client";
// import splitFactory from "@/lib/split";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Alert, Badge } from "@heroui/react";
import { useSplitTreatments } from "@splitsoftware/splitio-react";
import { CA, DK, FR, GB, US } from "country-flag-icons/react/3x2";
import Avatar from "react-nice-avatar";

function FlagAtar({ country }) {
  switch (country) {
    case "US":
      return <US className="h-4  rounded-sm" />;
    case "GB":
      return <GB className="h-4  rounded-sm" />;
    case "CA":
      return <CA className="h-4  rounded-sm" />;
    case "DK":
      return <DK className="h-4  rounded-sm" />;
    case "FR":
      return <FR className="h-4  rounded-sm" />;
    default:
      return <p>!</p>;
  }
}

export default function NavBar({ user, isOpen, setOpen }) {
  // const client = splitFactory.client("shawn");
  // console.log(client);
  const featureName = "OneView";
  const { treatments, isReady } = useSplitTreatments({ names: ["OneView", "Contact_Us"] });
  const OneView = treatments["OneView"].treatment;
  console.log("new Oneview: ", OneView);
  const ContactUs = treatments["Contact_Us"];
  const ContactUsValue = JSON.parse(ContactUs.config);
  return isReady ? (
    <div>
      {isOpen ? (
        <div>
          <Card radius="none" className="mt-1 mx-2 rounded-t-lg border-t-1 border-r-1 border-l-1 border-slate-300 ">
            <CardBody className="p-0 h-10">
              <Navbar onClick={() => (isOpen ? setOpen(false) : setOpen(true))} isBordered className="bg-slate-200 overflow-hidden ">
                <NavbarContent justify="start">
                  <NavbarItem className="cursor-pointer">Menu</NavbarItem>
                  <NavbarItem className="cursor-pointer" isActive>
                    Contact Us
                  </NavbarItem>
                  {OneView === "on" && (
                    <Badge size="sm" color="primary" shape="rectangle" showOutline="false" isDot variant="flat" content="beta">
                      <NavbarItem className="text-sm cursor-pointer">OmniView</NavbarItem>
                    </Badge>
                  )}
                </NavbarContent>
                <NavbarContent justify="end" className="gap-1">
                  <NavbarItem className="text-sm  text-slate-600 ">{user.id}</NavbarItem>
                  <Avatar className="w-8 h-8" {...user.avatar} />
                  <FlagAtar country={user.country} />
                </NavbarContent>
              </Navbar>
            </CardBody>
          </Card>

          <Card radius="none" shadow="none" className=" rounded-b-lg mx-2 h-32 border-b-1 border-r-1 border-l-1 border-slate-300">
            <CardBody className="flex flex-row">
              <Card radius="none" fullWidth shadow="none">
                <CardBody className="align-middle">
                  <Alert>{ContactUsValue.message}</Alert>
                </CardBody>
              </Card>
              <Card radius="none" fullWidth shadow="none">
                <CardBody>
                  <Image height={100} alt="alt image" src={ContactUsValue.image} />
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </div>
      ) : (
        <div>
          <Card radius="none" className="mt-1 mx-2 rounded-t-lg border-t-1 border-r-1 border-l-1 border-slate-300 ">
            <CardBody className="p-0 h-10">
              <Navbar isBordered onClick={() => (isOpen ? setOpen(false) : setOpen(true))} className="bg-slate-200 overflow-hidden">
                <NavbarContent justify="start">
                  <NavbarItem className="cursor-pointer">Menu</NavbarItem>
                  <NavbarItem className="cursor-pointer">Contact Us</NavbarItem>
                  {OneView === "on" && (
                    <Badge size="sm" color="primary" shape="rectangle" showOutline="false" isDot variant="flat" content="beta">
                      <NavbarItem className="text-sm cursor-pointer">OmniView</NavbarItem>
                    </Badge>
                  )}
                </NavbarContent>
                <NavbarContent justify="end" className="gap-1">
                  <NavbarItem className="text-sm  text-slate-600 ">{user.id}</NavbarItem>
                  <Avatar className="w-8 h-8" {...user.avatar} />
                  <FlagAtar country={user.country} />
                </NavbarContent>
              </Navbar>
            </CardBody>
          </Card>
          <Card radius="none" shadow="none" className="bg-gradient-to-b from-slate-400 to-slate-700  mx-2 h-4 ">
            <CardBody></CardBody>
          </Card>
        </div>
      )}
    </div>
  ) : (
    <div>... </div>
  );
}
