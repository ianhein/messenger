import prisma from "@/app/libs/prismadb";
import { getSession } from "next-auth/react";

const getUsers = async () => {
  const session = await getSession();
  if (!session?.user?.email) return [];

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    console.log("users", users);
    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;
