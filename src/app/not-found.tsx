import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-[#C2F800]">404</h1>
      <p className="mt-3 text-xl font-bold">PAGE NOT FOUND</p>
      <p className="mt-2 text-sm text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/Workouts"
        className="mt-5 rounded-full bg-[#C2F800] px-5 py-2 text-sm font-semibold text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;