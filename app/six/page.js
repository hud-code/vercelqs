import Link from "next/link";

export default function Six() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Question Six
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            A customer is creating a site and would like their project not to be
            indexed by search engines. Please write a reply to the customer.
            Separately, list any relevant documentation you found and any
            feedback or information you’d like to share about your decision
            making process.
          </p>
        </div>
        <br />
        <p>Hello there!</p>
        <br />
        <p>
          Thank you for reaching out to Vercel Support! It’d be happy to assist
          you with this.{" "}
        </p>
        <br />
        <p>
          Simply put, preview deployments will automatically prevent indexing by
          default, however, for production deployments you will need to manually
          add <code>x-robots-tag: noindex</code> to your header to prevent the
          site from being indexed. This can also be done by adding{" "}
          <code>x-robots-tag: noindex</code> to your <code>header</code> object
          in a <code>vercel.json</code> file.{" "}
        </p>
        <br />
        <p>
          We also have a great article that goes more in depth on this process
          that can be found here that should help with any additional questions:{" "}
          <Link href="https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines">
            https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
          </Link>
        </p>
        <br />
        <p>
          I hope this information is helpful, but if there’s anything else I can
          help you with, please don’t hesitate to ask!
        </p>
        <br />
        <p>Cheers,</p>
        <br />
        <Link className="block mt-4 text-blue-600 hover:underline" href="/">
          Back to Home
        </Link>
      </article>
    </div>
  );
}
