import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  return(
    <>
    <Suspense fallback={<WelcomeMsgFallback/>}>
      <WelcomeMsg/>
    </Suspense>
    </>
  );
}

async function WelcomeMsg(){
  const user = await currentUser()
  await wait(100);
  if(!user) return <div>error...</div>;
  return (
    <div>
      Welcome, {user?.firstName} {user?.lastName}
    </div>
  );

}

function WelcomeMsgFallback(){
  return <div>Loading...</div>
}