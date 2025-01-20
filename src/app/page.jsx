"use client";

import Provider from "@/components/provider";
import { useRouter } from "next/navigation";
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
  bgColor: "#999999",
};

const users = [
  { id: "ABurr", country: "US", avatar: genConfig({ sex: "woman", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "thick", hairColor: "#fff", ...avatarDefault }) },
  { id: "RHart", country: "GB", avatar: genConfig({ sex: "woman", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "womanShort", hairColor: "#fff", ...avatarDefault }) },
  { id: "WOz", country: "US", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#77311D", ...avatarDefault }) },
  { id: "MPoppins", country: "DK", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "WWonka", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "thick", hairColor: "#fff", ...avatarDefault }) },
  { id: "HHill", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#000", ...avatarDefault }) },
  { id: "EDoolittle", country: "FR", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "womanShort", hairColor: "#fff", ...avatarDefault }) },
  { id: "OTwist", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "laugh", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "SKrelborn", country: "DK", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "PKing", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#F9C9B6", hairStyle: "mohawk", hairColor: "#fff", ...avatarDefault }) },
  { id: "SOlsson", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "STodd", country: "FR", avatar: genConfig({ sex: "man", mouthStyle: "laugh", faceColor: "#AC6651", hairStyle: "thick", hairColor: "#999", ...avatarDefault }) },
  { id: "DWarbucks", country: "GB", avatar: genConfig({ sex: "man", mouthStyle: "laugh", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
  { id: "AOakley", country: "CA", avatar: genConfig({ sex: "man", mouthStyle: "peace", faceColor: "#AC6651", hairStyle: "normal", hairColor: "#fff", ...avatarDefault }) },
];

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
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
      {/* <Switch isSelected={isOpen} onValueChange={() => (isOpen ? setOpen(false) : setOpen(true))} size="sm" color="success" />
      <Button onPress={() => router.refresh()}>refrash</Button> */}
      <div className="flex flex-col gap-1">
        {users.map((user, index) => (
          <Provider isOpen={isOpen} setOpen={setOpen} key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
