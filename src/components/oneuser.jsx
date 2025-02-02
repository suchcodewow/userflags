"use client";
import { FlagAtar } from "@/lib/user-library";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Badge } from "@heroui/react";
import { useSplitClient } from "@splitsoftware/splitio-react";
import Avatar from "react-nice-avatar";

export default function OneUser({ user, isOpen, setOpen }) {
  const treatmentAttributes = {
    Region: user.country,
    Preview: user.preview,
  };
  const { client, isReady } = useSplitClient({ splitKey: user.id, attributes: treatmentAttributes });
  const treatments = client.getTreatmentsWithConfig(["OmniView", "Contact_Us"]);
  const avatarConfig = user.avatar;
  if (user.preview) {
    avatarConfig.bgColor = "linear-gradient(45deg, #fb923c 0%, #fdba74 100%)";
  } else {
    avatarConfig.bgColor = "linear-gradient(45deg, #e2e8f0 0%, #f1f5f9 100%)";
  }
  const OmniView = treatments.OmniView.treatment;
  console.log(user.id, treatmentAttributes, OmniView);
  const ContactUs = treatments.Contact_Us;
  const ContactUsValue = JSON.parse(ContactUs.config);

  return isReady ? (
    <div>
      <Card radius="none" className="mt-1 mx-2 rounded-t-lg border-t-1 border-r-1 border-l-1 border-slate-300 ">
        <CardBody className="p-0  h-10">
          <Navbar onClick={() => (isOpen ? setOpen(false) : setOpen(true))} isBordered className="bg-slate-100 overflow-hidden ">
            <NavbarContent justify="start">
              <NavbarItem className="cursor-pointer">Menu</NavbarItem>
              <NavbarItem className="cursor-pointer" isActive={isOpen}>
                Contact Us
              </NavbarItem>
              {OmniView === "on" && (
                <Badge size="sm" color="primary" shape="rectangle" showOutline="false" isDot variant="flat" content="beta">
                  <NavbarItem className="text-sm cursor-pointer">OmniView</NavbarItem>
                </Badge>
              )}
            </NavbarContent>
            <NavbarContent justify="end" className="gap-1">
              <NavbarItem className="text-sm  text-slate-600 ">{user.id}</NavbarItem>
              <Avatar className="w-6 h-6" {...avatarConfig} />
              <FlagAtar country={user.country} />
            </NavbarContent>
          </Navbar>
        </CardBody>
      </Card>
      {isOpen ? (
        // Show Contact Us Page
        <div>
          <Card
            radius="none"
            shadow="none"
            className=" rounded-b-lg mx-2 px-12 py-0 h-32 border-b-1 border-r-1 border-l-1 border-slate-300 bg-gradient-to-t from-slate-200 toslate-100"
          >
            <CardBody className="p-2 flex-row">
              <Image
                alt="heroui logo"
                height={110}
                width={160}
                src={ContactUsValue.image}
                className="rounded-tr-none rounded-br-none"
              />
              <div className="w-full  flex align-middle bg-blue-400 text-white rounded-tr-xl rounded-br-xl">
                <p className=" mx-auto text-base p-3 place-self-center">{ContactUsValue.message}</p>
              </div>
            </CardBody>
          </Card>
        </div>
      ) : (
        <div>
          <Card radius="none" shadow="none" className="bg-gradient-to-b from-slate-400 bg-opacity-0  mx-2 h-2 ">
            <CardBody></CardBody>
          </Card>
        </div>
      )}
    </div>
  ) : (
    <div>... </div>
  );
}
