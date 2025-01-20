"use client";
import { SplitRumAgent } from "@splitsoftware/browser-rum-agent";
import { SplitFactory, SplitFactoryProvider } from "@splitsoftware/splitio-react";

import NavBar from "./navbar";

export default function Provider({ user, isOpen, setOpen }) {
  SplitRumAgent.setup(process.env.NEXT_PUBLIC_SPLIT_KEY).addIdentities([{ key: user.id, trafficType: process.env.NEXT_PUBLIC_TRAFFIC_TYPE }]);
  const factory = SplitFactory({
    core: {
      authorizationKey: process.env.NEXT_PUBLIC_SPLIT_KEY || "",
      key: user.id,
    },
    debug: true,
  });
  return (
    <SplitFactoryProvider factory={factory}>
      <NavBar user={user} isOpen={isOpen} setOpen={setOpen} />
    </SplitFactoryProvider>
  );
}
