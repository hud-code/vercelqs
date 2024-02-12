import Image from "next/image";
import Link from "next/link";

export default function Four() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Question Four
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            A customer has a project on Vercel and they want to redirect the
            /blog path to another website. Please write a reply to the customer.
            Separately, list any relevant documentation you found and any
            feedback or information you&rsquo;d like to share about your
            decision making process.
          </p>
        </div>
        <br />
        <p>
          <p>Hello there,</p> <br />
          <p>
            Thank you for reaching out to Vercel Support. I&rsquo;m sorry
            you&rsquo;re running into this issue, I can understand how this can
            be frustrating.
          </p>
          <br />
          <p>
            A simple way to redirect would be import the{" "}
            <code>next/navigation</code> library and use the{" "}
            <code>redirect</code> function in your <code>blog/page.js</code>.
          </p>
          <p>In JS would look something like the following:</p>
          <br />
          <div className="bg-gray-300">
            <pre>
              <code>
                import &#123; redirect &#125; from &quot;next/navigation&quot;;
                <br />
                <br />
                export default async function Blog() &#123;
                <br />
                {"  "}redirect(&quot;https://www.blogpage.com&quot;); <br />
                &#125;
              </code>
            </pre>
          </div>
          <br />
          <p>
            This would be an example of a server side implementation, however
            there are options to run this in client side with{" "}
            <code>useRouter</code> and <code>useEffect</code> as well. You can
            find relevant documentation on redirects here:
          </p>
          <br />
          <p>
            <Link href="https://nextjs.org/docs/app/api-reference/functions/redirect">
              -{" "}
              <u>
                https://nextjs.org/docs/app/api-reference/functions/redirect
              </u>
            </Link>
            <br />
            <Link href="https://nextjs.org/docs/app/building-your-application/routing/redirecting">
              -{" "}
              <u>
                https://nextjs.org/docs/app/building-your-application/routing/redirecting
              </u>
            </Link>
            <br />
            <Link href="https://nextjs.org/docs/app/api-reference/next-config-js/redirects">
              -{" "}
              <u>
                https://nextjs.org/docs/app/api-reference/next-config-js/redirects
              </u>
            </Link>
          </p>
          <br />
          <p>
            Finally, if you are still having difficulty after reviewing these
            options, can you provide the following information so that I can
            better assist you? <br /> - Can you confirm if you would like to
            redirect from a <code>page.js</code> or from a component (or
            something else)?
            <br /> - Can you provide any errors you are getting, either server
            or client side?
          </p>{" "}
          <br />
          <p>Cheers, and I look forward to your response!</p>
        </p>
        <br />
        <Link className="block mt-4 text-blue-600 hover:underline" href="/">
          Back to Home
        </Link>
      </article>
    </div>
  );
}
