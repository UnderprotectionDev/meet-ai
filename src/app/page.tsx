"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => {
          window.alert("User created successfully");
        },
        onError: () => {
          window.alert("Something went wrong");
        },
      }
    );
  };

  const onSignIn = async () => {
    await authClient.signIn.email({
      email,
      password,
    });
  };

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user?.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4 p-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSignIn}>Sign In</Button>
      </div>
      <div className="flex flex-col gap-y-4 p-4">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Create User</Button>
      </div>
    </div>
  );
}
