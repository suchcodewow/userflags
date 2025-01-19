"use client";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { useSplitTreatments } from "@splitsoftware/splitio-react";

// interface User {
//   id: string;
//   country: string;
// }
export default function NavBar({ user }) {
  const featureName = "OneView";
  const { treatments, isReady } = useSplitTreatments({ names: [featureName] });
  const OneView = treatments[featureName].treatment;
  console.log("OneView: ", OneView);
  return isReady ? (
    <div>
      <Card radius="none" className="m-2">
        <CardBody>
          <Navbar isBlurred={false} className="bg-white">
            <NavbarContent justify="center">
              <NavbarItem>Features</NavbarItem>
              <NavbarItem>Customers</NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>{user.id}</NavbarItem>
              <NavbarItem>
                <Button color="primary" href="#" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </CardBody>
      </Card>
    </div>
  ) : (
    <div>loading</div>
  );
}
