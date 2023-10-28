"use client";

import { Session } from "next-auth";
import React from "react";
import UserAvatar from "./UserAvatar";
import { Input } from "./ui/Input";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { ImageIcon, Link2 } from "lucide-react";

interface MiniCreatePostProps {
  session: Session | null;
}

const MiniCreatePost: React.FC<MiniCreatePostProps> = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="overflow-hidden rounded-md bg-white shadow mt-3">
      <div className="w-full h-full px-6 py-4 flex justify-between gap-6">
        <div className="relative">
          <UserAvatar
            user={{
              image: session?.user?.image,
              name: session?.user?.name,
            }}
          />
          <span className="absolute bottom-0 right-0 rounded-full bg-green-500 outline outline-2 outline-white w-4 h-4" />
        </div>
        <Input
          readOnly
          onClick={() => router.push(`${pathname}/submit `)}
          placeholder="Create post"
        />
        <Button
          onClick={() => router.push(`${pathname}/submit `)}
          variant="ghost"
        >
          <ImageIcon className="text-zinc-600" />
        </Button>
        <Button
          onClick={() => router.push(`${pathname}/submit `)}
          variant="ghost"
        >
          <Link2 className="text-zinc-600" />
        </Button>
      </div>
    </div>
  );
};

export default MiniCreatePost;