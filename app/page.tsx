import { getServerStuff } from "@/server";

export default function Home() {
  const response = getServerStuff();
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      {response}
    </main>
  );
}
