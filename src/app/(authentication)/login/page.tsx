"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import LoginCard from "@/components/auth/login-card";

const LoginPage = async () => {
  const session = await auth();
  const user = session?.user;
  if (user) redirect("/dashboard");
  console.log(session);
  console.log(user);

  return (
    <div>
      <LoginCard />
    </div>
  );
};

export default LoginPage;
