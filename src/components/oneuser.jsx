"use client";
import { FlagAtar } from "@/lib/user-library";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Alert, Badge } from "@heroui/react";
import { useSplitClient } from "@splitsoftware/splitio-react";
import Avatar from "react-nice-avatar";

export default function OneUser({ user, isOpen, setOpen }) {
  const { client, isReady } = useSplitClient({ splitKey: user.id });
  // const { treatments, isReady } = useSplitTreatments({ splitKey: user.id }, { names: ["OneView", "Contact_Us"] });
  const treatments = client.getTreatmentsWithConfig(["OneView", "Contact_Us"]);
  const avatarConfig = user.avatar;
  console.log(user.preview);
  if (user.preview) {
    avatarConfig.bgColor = "linear-gradient(45deg, #fb923c 0%, #fdba74 100%)";
  } else {
    avatarConfig.bgColor = "linear-gradient(45deg, #e2e8f0 0%, #f1f5f9 100%)";
  }
  const OneView = treatments.OneView.treatment;
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
              {OneView === "on" && (
                <Badge size="sm" color="primary" shape="rectangle" showOutline="false" isDot variant="flat" content="beta">
                  <NavbarItem className="text-sm cursor-pointer">OmniView</NavbarItem>
                </Badge>
              )}
            </NavbarContent>
            <NavbarContent justify="end" className="gap-1">
              <NavbarItem className="text-sm  text-slate-600 ">{user.id}</NavbarItem>
              <Avatar className="w-8 h-8" {...avatarConfig} />
              <FlagAtar country={user.country} />
            </NavbarContent>
          </Navbar>
        </CardBody>
      </Card>
      {isOpen ? (
        // Show Contact Us Page
        <div>
          <Card radius="none" shadow="none" className=" rounded-b-lg mx-2 h-32 border-b-1 border-r-1 border-l-1 border-slate-300">
            <CardBody className="flex flex-row">
              <Card radius="none" fullWidth shadow="none">
                <CardBody className="align-middle">
                  <Alert>{ContactUsValue.message}</Alert>
                </CardBody>
              </Card>
              <Card radius="none" fullWidth shadow="none">
                <CardBody>
                  <Image height={70} alt="alt image" src={ContactUsValue.image} />
                </CardBody>
              </Card>
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
