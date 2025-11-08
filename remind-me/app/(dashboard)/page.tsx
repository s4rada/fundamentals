import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Temporary - remove this after prisma generate works
let prisma: any = null;
try {
  const { prisma: prismaClient } = await import("@/lib/prisma");
  prisma = prismaClient;
} catch (error) {
  console.log("Prisma not initialized yet");
}

export default async function Home() {
  return (
    <>
      <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
      </Suspense>
      <Suspense fallback={<div>Loading collections...</div>}>
        <CollectionList />
      </Suspense>
    </>
  );
}

async function WelcomeMsg() {
  const user = await currentUser();
  await wait(100);
  
  if (!user) return <div>error...</div>;
  
  return (
    <div className="text-2xl font-bold mb-4">
      Welcome, {user.firstName} {user.lastName}
    </div>
  );
}

function WelcomeMsgFallback() {
  return (
    <div className="text-2xl font-bold mb-4">
      Loading...
    </div>
  );
}

async function CollectionList() {
  // If prisma isn't ready, show a message
  if (!prisma) {
    return (
      <Alert>
        <AlertTitle>Database initializing...</AlertTitle>
        <AlertDescription>Please run "prisma generate" to set up the database.</AlertDescription>
      </Alert>
    );
  }

  const user = await currentUser();
  
  if (!user) {
    return (
      <Alert>
        <AlertTitle>Please sign in to view collections</AlertTitle>
      </Alert>
    );
  }

  try {
    const collections = await prisma.collection.findMany({
      where: {
        userId: user.id,
      }
    });

    if (collections.length === 0) {
      return (
        <Alert>
          <AlertTitle>There are no collections yet!</AlertTitle>
          <AlertDescription>Create a collection to get started.</AlertDescription>
        </Alert>
      );
    }

    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Collections</h2>
        <div className="space-y-2">
          {collections.map((collection: any) => (
            <div key={collection.id} className="p-4 border rounded-lg">
              <h3 className="font-medium">{collection.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );

  } catch (error) {
    console.error("Error fetching collections:", error);
    return (
      <Alert variant="destructive">
        <AlertTitle>Error loading collections</AlertTitle>
        <AlertDescription>
          There was a problem loading your collections. Please try again.
        </AlertDescription>
      </Alert>
    );
  }
}