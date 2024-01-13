"use client";

import { User } from "@prisma/client";

import Image from "next/image";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative flex items-center justify-center h-10 w-10 md:h-12 md:w-12">
      <div className="rounded-full overflow-hidden h-6 w-6 md:h-8 md:w-8 m-1">
        <Image
          width={40}
          height={40}
          src={user?.image ?? "/images/placeholder.jpg"}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </div>
      <span className="absolute rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3"></span>
    </div>
  );
};

export default Avatar;
