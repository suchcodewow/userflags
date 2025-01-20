import { SplitFactory } from "@splitsoftware/splitio";

console.log("Creating new Split Factory on server side");
const splitConfig = {
  core: {
    authorizationKey: process.env.NEXT_PUBLIC_SPLIT_KEY,
  },
  debug: true,
};
const splitFactory = SplitFactory(splitConfig);
// var splitClient = splitFactory.client();

export default splitFactory;
