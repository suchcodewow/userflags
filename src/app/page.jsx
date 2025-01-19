"use client";

import Provider from "@/components/provider";
import { Switch } from "@heroui/switch";
import { useEffect, useState } from "react";
import { genConfig } from "react-nice-avatar";

const avatarDefault = {
  earSize: "big",
  eyeStyle: "oval",
  noseStyle: "long",
  shirtStyle: "polo",
  glassesStyle: "none",
  hatStyle: "none",
  hatColor: "#D2EFF3",
  eyeBrowStyle: "up",
  shirtColor: "#9287FF",
  bgColor: "#DFDFDF",
};

const users = [
  { id: "ABurr", country: "US", avatar: genConfig({ sex: "woman", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "thick", hairColor: "#fff", ...avatarDefault }) },
  { id: "RHart", country: "GB", avatar: genConfig({ sex: "woman", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "womanShort", hairColor: "#fff", ...avatarDefault }) },
  { id: "WOz", country: "US", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#77311D", ...avatarDefault }) },
  { id: "MPoppins", country: "DK", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "WWonka", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "thick", hairColor: "#fff", ...avatarDefault }) },
  { id: "HHill", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#000", ...avatarDefault }) },
  { id: "EDoolittle", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "womanShort", hairColor: "#fff", ...avatarDefault }) },
  { id: "OTwist", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "laugh", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "SKrelborn", country: "DK", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "PKing", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "mohawk", hairColor: "#fff", ...avatarDefault }) },
  { id: "SOlsson", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
];

export default function Home() {
  const [isOpen, setOpen] = useState(() => {
    // Get initial value from local storage on component mount
    const storedValue = localStorage.getItem("myValue");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  useEffect(() => {
    // Update local storage whenever value changes
    localStorage.setItem("myValue", JSON.stringify(isOpen));
  }, [isOpen]);
  // const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Switch isSelected={isOpen} onValueChange={() => (isOpen ? setOpen(false) : setOpen(true))} size="sm" color="success" />
      <div className="flex flex-col gap-1">
        {users.map((user, index) => (
          <Provider isOpen={isOpen} key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
