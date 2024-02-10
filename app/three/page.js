import Link from "next/link";

export default function Three() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Question Three
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            When would you choose to use Edge Functions, Serverless Functions,
            or Edge Middleware with Vercel?
          </p>
        </div>
        <br />
        <p>
          <b>Edge Functions</b>
        </p>
        <p>
          Edge Functions run at the edge of the network, closer to the user,
          which significantly reduces latency by executing logic near the user's
          location. They are ideal for high performance, low latency,
          geotargeting, or even to implement authentication, such as redirects.
        </p>
        <br />
        <p>
          <b>Serverless Functions</b>
        </p>
        <p>
          Serverless Functions run in a cloud environment and are designed to
          scale automatically with demand. They are best used for creating
          RESTful or GraphQL APIs that can scale automatically, handling tasks
          that require more processing power or longer execution times, or
          connecting your application with third-party services or APIs.
        </p>
        <br />
        <p>
          <b>Edge Middleware</b>
        </p>
        <p>
          Edge Middleware allows you to run code before a request is completed,
          enabling you to modify the request or response on the fly at the edge.
          They are particularly useful for inspecting and modifying incoming
          requests at the edge, altering the response before it reaches the user
          (which can be useful for custom redirects), or implementing custom
          analytics or logging mechanisms.
        </p>
        <br />
        <p>
          It's worth noting that these technologies can be combined within the
          same project to leverage the strengths of each, depending on the
          specific requirements of different parts of an application.
        </p>
        <br />
        <Link className="block mt-4 text-blue-600 hover:underline" href="/">
          Back to Home
        </Link>
      </article>
    </div>
  );
}
