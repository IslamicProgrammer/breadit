import { buttonVariants } from "@/components/ui/Button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl lg:text-4xl">Your feed</h1>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
        {/* Feed */}
        <h1 className="text-red-900">Hello 1</h1>
        <h1 className="text-red-900">Hello 2</h1>
        <h1 className="text-red-900">Hello 3</h1>
        {/* Subreddit info */}
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
          <div className="bg-emerald-100 px-6 py-4">
            <p className="font-semibold py-3 flex items-center gap-1.5">
              <HomeIcon />
              Home
            </p>
          </div>
          <div className="-m-y-3 divide-gray-100 px-6 py-4 leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500">
                Your personal Breadit homepage. Come here to check in your
                favorite communities.
              </p>
            </div>
            <Link
              href="/r/create"
              className={buttonVariants({
                className: "mt-4 mb-4 w-full",
              })}
            >
              Create Community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
