"use client";

import OneUser from "@/components/oneuser";
import { useEffect, useState } from "react";
import { genConfig } from "react-nice-avatar";

// so fun :)
// https://nice-avatar.wwayne.com/
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
  bgColor: "#CDCDCD",
};

const users = [
  { id: "ABurr", country: "US", avatar: genConfig({ sex: "woman", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "thick", hairColor: "#DEBE99", ...avatarDefault }) },
  { id: "RHart", country: "GB", avatar: genConfig({ sex: "woman", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "womanShort", hairColor: "#f1c27d", ...avatarDefault }) },
  { id: "WOz", country: "US", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#77311D", ...avatarDefault }) },
  { id: "MPoppins", country: "DK", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "normal", hairColor: "#9a3300", ...avatarDefault }) },
  { id: "WWonka", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#ffdbac", hairStyle: "thick", hairColor: "#fde8b6", ...avatarDefault }) },
  { id: "HHill", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#e0ac69", hairStyle: "normal", hairColor: "#000", ...avatarDefault }) },
  {
    id: "EDoolittle",
    country: "FR",
    avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "womanShort", hairColor: "#f1c27d", ...avatarDefault }),
  },
  { id: "OTwist", country: "GB", avatar: genConfig({ sex: "woman", mouthStyle: "laugh", faceColor: "#ffdbac", hairStyle: "normal", hairColor: "#c37c56", ...avatarDefault }) },
  { id: "SKrelborn", country: "DK", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#DEBE99", ...avatarDefault }) },
  { id: "PKing", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "mohawk", hairColor: "#fff", ...avatarDefault }) },
  { id: "SOlsson", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#9a3300", ...avatarDefault }) },
  { id: "STodd", country: "FR", avatar: genConfig({ sex: "woman", mouthStyle: "laugh", faceColor: "#e0ac69", hairStyle: "thick", hairColor: "#9a3300", ...avatarDefault }) },
  { id: "DWarbucks", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "laugh", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#DEBE99", ...avatarDefault }) },
  { id: "AOakley", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#9a3300", ...avatarDefault }) },
];

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  // const router = useRouter();
  useEffect(() => {
    const storedValue = localStorage.getItem("myValue");
    if (storedValue === "true") {
      setOpen(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("myValue", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <div>
      <div className="flex flex-col gap-1">
        {users.map((user, index) => (
          // <Provider isOpen={isOpen} setOpen={setOpen} key={index} user={user} />
          <OneUser isOpen={isOpen} setOpen={setOpen} key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
