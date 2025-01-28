"use client";

import OneUser from "@/components/oneuser";
import { users } from "@/lib/user-library";
import { useEffect, useState } from "react";

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
