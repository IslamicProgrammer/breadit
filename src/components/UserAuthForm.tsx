"use client";

import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Icons } from "./Icons";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";

const UserAuthForm = () => {
  const [isLoading, setIsLading] = useState(false);

  const { toast } = useToast();

  const handleSignIn = async () => {
    setIsLading(true);

    try {
      // throw new Error("Error");
      const user = await signIn("google");
    } catch (error: any) {
      toast({
        title: "There was a problem.",
        description: "Couldn't sign in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Button className="w-full" isLoading={isLoading} onClick={handleSignIn}>
        <Icons.google className="w-4 h-4 mr-2" />
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
