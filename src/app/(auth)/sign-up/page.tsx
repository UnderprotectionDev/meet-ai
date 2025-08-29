import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

import { headers } from "next/headers";

import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    return redirect("/");
  }

  return <SignUpView />;
}
