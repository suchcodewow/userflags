"use client";
import { SplitFactory, SplitFactoryProvider } from "@splitsoftware/splitio-react";

import NavBar from "./navbar";

export default function Provider({ user, isOpen }) {
  // SplitRumAgent.setup(process.env.NEXT_PUBLIC_SPLIT_KEY).addIdentities([{ key: user.id, trafficType: "a_traffic_type" }]);
  const factory = SplitFactory({
    core: {
      authorizationKey: process.env.NEXT_PUBLIC_SPLIT_KEY || "",
      key: user.id,
    },
    debug: true,
  });
  return (
    <SplitFactoryProvider factory={factory}>
      <NavBar user={user} isOpen={isOpen} />
    </SplitFactoryProvider>
  );
}
