"use-client";
import AllProjects from "@/components/main/AllProjects";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AllProjects />
        <Footer />
      </div>
    </main>
  );
}
