"use client";

import { User } from "next-auth";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserAccountProps {
  user: Pick<User, "email" | "image" | "name">;
}

const UserAccount: React.FC<UserAccountProps> = ({
  user: { image, name, email },
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar user={{ image, name }} className="h-8 w-8" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              {name && <p className="font-medium">{name}</p>}
              {email && (
                <p className="font-medium w-[200px] text-zinc-700 text-sm">
                  {email}
                </p>
              )}
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/">Feed</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/r/create">Create community</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/sign-in`,
              });
            }}
            className="cursor-pointer"
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAccount;
