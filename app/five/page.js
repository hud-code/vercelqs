import Link from "next/link";

export default function Five() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Question Five
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Imagine that the customer from Question 4 responds with the
            following email: <br />
            <br />
            <i>
              I’m so frustrated. I’ve been trying to make this work for hours
              and I just can’t figure it out. It must be a platform issue so why
              don't you just fix it for me instead of asking me questions.
            </i>{" "}
            <br />
            <br />
            What response would you write back?
          </p>
        </div>
        <br />
        <p>Hi there,</p>
        <p>
          {" "}
          <br /> Thank you for your response - I’m sorry to hear you’re still
          having difficulty with implementing this change.
        </p>{" "}
        <br />{" "}
        <p>
          I understand the questions I’m asking may not seem relevant or may
          appear to delay fixing the issue, but I assure you that these will
          help us in finding and resolving the issue quickly.
        </p>{" "}
        <br />
        <p>
          If this is a highly urgent issue and needs resolution quickly, I think
          it would be be beneficial to have a conference call* so that we are
          able to get a better understanding of your code and get better context
          of the issue.
        </p>{" "}
        <br />
        <p>
          In the meantime, providing answers to the questions will greatly
          increase our ability to assist you. I look forward to hearing from you
          soon.
        </p>{" "}
        <br />
        <p>Cheers, </p>
        <br />
        <p>
          <i>
            *I don’t know if this is something Vercel Support offers, but this
            is something we offered at CircleCI and often found it beneficial!
          </i>
        </p>
        <br />
        <Link className="block mt-4 text-blue-600 hover:underline" href="/">
          Back to Home
        </Link>
      </article>
    </div>
  );
}
