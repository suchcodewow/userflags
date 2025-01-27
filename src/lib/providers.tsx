"use client";
import { HeroUIProvider } from "@heroui/react";
// import { SplitRumAgent } from "@splitsoftware/browser-rum-agent";
import { SplitFactory, SplitFactoryProvider } from "@splitsoftware/splitio-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  // SplitRumAgent.setup(process.env.NEXT_PUBLIC_SPLIT_KEY).addIdentities([{ key: user.id, trafficType: process.env.NEXT_PUBLIC_TRAFFIC_TYPE }]);
  const factory = SplitFactory({
    core: {
      authorizationKey: process.env.NEXT_PUBLIC_SPLIT_KEY || "",
      key: "anonymous",
    },
    // debug: true,
  });
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <SplitFactoryProvider factory={factory}>{children}</SplitFactoryProvider>
    </HeroUIProvider>
  );
}
