"use client";
import { SplitFactory, SplitFactoryProvider } from "@splitsoftware/splitio-react";
import NavBar from "./navbar";

export default function Provider({ user, isOpen }) {
  const factory = SplitFactory({
    core: {
      authorizationKey: process.env.NEXT_PUBLIC_SPLIT_KEY || "",
      key: user.id,
    },
  });
  return (
    <SplitFactoryProvider factory={factory}>
      <NavBar user={user} isOpen={isOpen} />
    </SplitFactoryProvider>
  );
}
