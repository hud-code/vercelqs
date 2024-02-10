import Link from "next/link";

export default function Two() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Question Two
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            How would you compare Next.js with another framework? Feel free to
            compare with a framework of your choice.
          </p>
        </div>
        <br />

        <p>
          When comparing Next.js to something like Angular, you’ll find that
          there are a number of significant differences and intentions when
          utilizing either framework. To break this down a bit more, we can look
          at a few different aspects to compare these frameworks by:
        </p>
        <br />
        <h3>
          <b>Purpose</b>
        </h3>
        <p>
          Each framework serves a different purpose. Angular’s main focus is a
          structural framework for dynamic web apps. It uses HTML as the
          template language and is mainly used for building single-page
          applications. Next.js on the other had provides a server-side
          rendering solution, enabling dynamic and high performance websites
          with an advantages in SEO due to the entire website’s content being
          available to crawlers.
        </p>
        <br />
        <h3>
          <b>Performance</b>
        </h3>
        <p>
          Angular has a client side rendering model which will often result in a
          worse performance for the end user with an increase in resource usage
          such as memory or CPU power. Well designed Next.js should have many
          performance improvements due to the server side rendering.
        </p>
        <br />
        <h3>
          <b>Developer Experience</b>
        </h3>
        <p>
          When it comes to learning a new framework, a developer will likely
          have a better time learning Next.js due to the simplicity of routing,
          deep connection to React.js, and many resources available. Angular’s
          learning curve will be somewhat steeper, although due to how long it’s
          been around, you will find a wealth of resources at your disposal to
          assist you in your journey.
        </p>
        <br />
        <Link className="block mt-4 text-blue-600 hover:underline" href="/">
          Back to Home
        </Link>
      </article>
    </div>
  );
}
