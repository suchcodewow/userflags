"use client";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Badge } from "@heroui/react";
import { useSplitTreatments } from "@splitsoftware/splitio-react";
import { CA, DK, GB, US } from "country-flag-icons/react/3x2";
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
    default:
      return <p>!</p>;
  }
}
export const StarIcon = ({ size, height, width, ...props }) => {
  return (
    <svg fill="#FFFFFF" height={size || height || 24} viewBox="0 0 24 24" width={size || width || 24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.2919 3.84263C11.5213 3.40737 11.636 3.18973 11.7892 3.11868C11.9226 3.05679 12.0765 3.05679 12.21 3.11868C12.3632 3.18973 12.4779 3.40737 12.7073 3.84263L14.1143 6.51208C14.2134 6.70001 14.2629 6.79397 14.3367 6.85654C14.4018 6.91178 14.48 6.94942 14.5637 6.96588C14.6586 6.98453 14.763 6.96467 14.9717 6.92494L17.936 6.36063C18.4193 6.26862 18.661 6.22262 18.8121 6.29809C18.9437 6.36382 19.0396 6.48415 19.0744 6.62705C19.1144 6.79113 19.0158 7.0165 18.8185 7.46725L17.6087 10.2317C17.5235 10.4263 17.481 10.5236 17.478 10.6203C17.4754 10.7056 17.4947 10.7902 17.5341 10.866C17.5787 10.9518 17.6593 11.021 17.8205 11.1594L20.1099 13.1252C20.4832 13.4457 20.6698 13.606 20.705 13.7711C20.7357 13.915 20.7014 14.065 20.6114 14.1813C20.508 14.3149 20.2703 14.3783 19.7949 14.5051L16.8793 15.2828C16.674 15.3376 16.5714 15.365 16.494 15.423C16.4257 15.4741 16.3716 15.542 16.3369 15.62C16.2976 15.7084 16.2937 15.8145 16.286 16.0268L16.1765 19.0424C16.1587 19.5341 16.1498 19.7799 16.0426 19.9104C15.9492 20.0241 15.8106 20.0909 15.6635 20.093C15.4946 20.0954 15.2969 19.9491 14.9013 19.6565L12.4754 17.8619C12.3046 17.7356 12.2192 17.6724 12.1256 17.648C12.043 17.6265 11.9562 17.6265 11.8736 17.648C11.78 17.6724 11.6946 17.7356 11.5238 17.8619L9.09789 19.6565C8.70233 19.9491 8.50456 20.0954 8.3357 20.093C8.18864 20.0909 8.04997 20.0241 7.95661 19.9104C7.84941 19.7799 7.84049 19.5341 7.82264 19.0424L7.71317 16.0268C7.70547 15.8145 7.70161 15.7084 7.66231 15.62C7.62762 15.542 7.57353 15.4741 7.50518 15.423C7.42777 15.365 7.32514 15.3376 7.11989 15.2828L4.20427 14.5051C3.72887 14.3783 3.49117 14.3149 3.38781 14.1813C3.29778 14.065 3.26354 13.915 3.29418 13.7711C3.32936 13.606 3.51601 13.4457 3.88931 13.1252L6.17874 11.1594C6.33991 11.021 6.42049 10.9518 6.46509 10.866C6.50445 10.7902 6.52376 10.7056 6.52116 10.6203C6.51823 10.5236 6.47565 10.4263 6.39048 10.2317L5.18069 7.46725C4.98343 7.0165 4.8848 6.79113 4.92477 6.62705C4.95957 6.48415 5.05553 6.36382 5.18711 6.29809C5.33817 6.22262 5.57985 6.26862 6.06319 6.36063L9.02753 6.92494C9.23621 6.96467 9.34055 6.98453 9.43545 6.96588C9.51924 6.94942 9.59741 6.91178 9.66252 6.85654C9.73627 6.79397 9.78579 6.70001 9.88484 6.51208L11.2919 3.84263Z"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function NavBar({ user, isOpen }) {
  const featureName = "OneView";
  const { treatments, isReady } = useSplitTreatments({ names: ["OneView", "Contact_Us"] });
  const OneView = treatments["OneView"].treatment;
  const ContactUs = treatments["Contact_Us"];
  const ContactUsValue = JSON.parse(ContactUs.config);
  console.log("ContactUs: ", ContactUsValue);
  return isReady ? (
    <div>
      <Card radius="none" className="mt-1 mx-1 rounded-t-lg border-t-1 border-r-1 border-l-1 border-slate-300 ">
        <CardBody className="p-0 ">
          <Navbar className="bg-slate-200 overflow-hidden">
            {isOpen ? (
              <NavbarContent justify="start">
                <NavbarItem>Menu</NavbarItem>
                <NavbarItem isActive>Contact</NavbarItem>
              </NavbarContent>
            ) : (
              <NavbarContent justify="start" className="gap-2">
                <NavbarItem>Menu</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
                {OneView === "on" && (
                  <Badge size="sm" color="primary" placement="top-right" content="new">
                    <NavbarItem>OneView</NavbarItem>
                  </Badge>
                )}
              </NavbarContent>
            )}
            <NavbarContent justify="end" className="gap-1">
              <NavbarItem className="text-xs text-slate-500 ">{user.id}</NavbarItem>
              <Avatar className="w-8 h-8" {...user.avatar} />
              <FlagAtar country={user.country} />
            </NavbarContent>
          </Navbar>
        </CardBody>
        {isOpen && (
          <Card radius="none" fullWidth shadow="none" className="h-40  border-b-1 border-r-1 border-l-1 border-slate-300">
            <CardBody className="flex flex-row">
              {/* <div className="flex flex-row shadow-inner h-40 w-full"> */}
              <Card radius="none" fullWidth shadow="none">
                <CardBody>{ContactUsValue.message}</CardBody>
              </Card>
              <Card radius="none" fullWidth shadow="none">
                <CardBody>
                  <Image alt="alt image" src={ContactUsValue.image} />
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        )}
      </Card>
    </div>
  ) : (
    <div>... </div>
  );
}
