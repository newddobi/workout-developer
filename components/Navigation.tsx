import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-evenly h-14 border-t">
      <Link className="grow text-center leading-[3.5rem]" href="/workout">
        운동
      </Link>
      <Link className="grow text-center leading-[3.5rem]" href="/calendar">
        달력
      </Link>
      <Link className="grow text-center leading-[3.5rem]" href="/manage">
        설정
      </Link>
    </div>
  );
};

export default Navigation;
