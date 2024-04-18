import { cache } from "react";

export const getServerStuff = cache(() => {
  return "hello";
});
