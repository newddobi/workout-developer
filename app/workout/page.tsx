import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Workout() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-wrap justify-center">
        <Link href="/workout/upper" className="">
          <button className="h-32 w-32 border-solid border-2 rounded-md text-lg border-indigo-600 m-5">
            상체(가슴)
          </button>
        </Link>
        <Link href="/workout/upper" className="">
          <button className="h-32 w-32 border-solid border-2 rounded-md text-lg border-indigo-600 m-5">
            상체(등)
          </button>
        </Link>
        <Link href="/workout/lower" className="">
          <button className="h-32 w-32 border-solid border-2 rounded-md text-lg border-indigo-600 m-5">
            하체
          </button>
        </Link>
        <Link href="/workout/running" className="">
          <button className="h-32 w-32 border-solid border-2 rounded-md text-lg border-indigo-600 m-5">
            러닝
          </button>
        </Link>
      </div>
      <Navigation />
    </main>
  );
}
