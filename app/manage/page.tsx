"use client";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/navigation";

const Manage = () => {
  const router = useRouter();

  const buttonClickHandler = (todayTarget: string) => {
    router.push(`/manage/${todayTarget}`);
  };

  return (
    <main className="flex justify-center w-screen h-screen">
      <div className="flex min-h-full flex-col justify-evenly w-72 px-12 py-12 lg:px-8">
        <button
          className="h-24 border-solid border-2 rounded-md text-lg border-indigo-600"
          onClick={buttonClickHandler.bind(null, "upper")}
        >
          상체
        </button>
        <button
          className="h-24 border-solid border-2 rounded-md text-lg border-indigo-600"
          onClick={buttonClickHandler.bind(null, "lower")}
        >
          하체
        </button>
      </div>
      <Navigation />
    </main>
  );
};

export default Manage;
