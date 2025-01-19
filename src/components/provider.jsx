"use client";
import { SplitFactory, SplitFactoryProvider } from "@splitsoftware/splitio-react";
import NavBar from "./navbar";

// interface User {
//   id: string;
//   country: string;
// }
export default function Provider({ user }) {
  const factory = SplitFactory({
    core: {
      authorizationKey: process.env.NEXT_PUBLIC_SPLIT_KEY || "",
      key: user.id,
    },
  });
  return (
    <SplitFactoryProvider factory={factory}>
      <NavBar user={user} />
    </SplitFactoryProvider>
  );
}
