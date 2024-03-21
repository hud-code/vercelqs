import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <nav className="flex h-full items-center space-x-4" />
      </header>
      <main className="flex-1 w-full">
        <div className="container py-7">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Zach Hudson
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Welcome to my website. <br /> On this branch we test the toolbar.
            </p>
            <div className="flex flex-wrap justify-center mt-8 space-x-4">
              <Link className="button-inset [&:focus]:outline-none" href="/one">
                One
              </Link>
              <Link className="button-inset [&:focus]:outline-none" href="/two">
                Two
              </Link>
              <Link
                className="button-inset [&:focus]:outline-none"
                href="/three"
              >
                Three
              </Link>
              <Link
                className="button-inset [&:focus]:outline-none"
                href="/four"
              >
                Four
              </Link>
              <Link
                className="button-inset [&:focus]:outline-none"
                href="/five"
              >
                Five
              </Link>
              <Link className="button-inset [&:focus]:outline-none" href="/six">
                Six
              </Link>
              <Link
                className="button-inset [&:focus]:outline-none"
                href="/seven"
              >
                Seven
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
