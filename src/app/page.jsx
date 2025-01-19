// import { useSplitTreatments } from "@splitsoftware/splitio-react";

import Provider from "@/components/provider";

// interface User {
//   id: string;
//   country: string;
// }

const users = [
  {
    id: "shawn",
    country: "usa",
  },
  { id: "bob", country: "UK" },
];

export default async function Home() {
  return (
    <div className="flex flex-col gap-2">
      {users.map((user, index) => (
        <Provider key={index} user={user} />
      ))}
    </div>
  );
}
