import { getServerSession } from "next-auth";
import { authOptions } from "./../api/auth/[...nextauth]/route";
import { defaultConfig } from "next/dist/server/config-shared";

export default async function getSession() {
  return await getServerSession(authOptions);
}
