"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import DashboardLayout from "@/components/dashboard/dashboard-layout";

const DashboardPage = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) redirect("/login");
  console.log(session);
  console.log(user);

  return (
    <div>
      <DashboardLayout />
    </div>
  );
};

export default DashboardPage;
