import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";

export default async function Settings() {
  const session = await auth();

  return (
    <div className="p-4">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
