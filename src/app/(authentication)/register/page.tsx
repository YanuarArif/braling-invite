"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import RegisterCard from "@/components/auth/register-card";

const RegisterPage = async () => {
  const session = await auth();
  const user = session?.user;
  if (user) redirect("/dashboard");
  console.log(session);
  console.log(user);

  return (
    <div>
      <RegisterCard />
    </div>
  );
};

export default RegisterPage;
