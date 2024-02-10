import Link from "next/link";

export default function Seven() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Question Seven
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            How could we improve or alter this familiarization exercise?
          </p>
        </div>
        <br />
        <p>
          I found this exercise to be both challenging and fun. I didn’t love
          questions 2 and 3, as I felt they were quite broad and could go many
          ways, so I had difficulty deciding on how I wanted to answer them, but
          they did force me to do some more research into Vercel in these
          specific areas, which I think was beneficial for my understanding of
          the product as a whole. Other than that, I think it did a great job of
          encompassing what I could expect while working at Vercel.
        </p>
        <br />
        <p>
          Oh, and I did find it funny that the customer’s response in question 5
          implied that I was asking questions, which forced me to go back and
          alter my response as I was initially recommending only a solution
          without asking for more details. After realizing this, I went back and
          determined I should not assume they were trying to implement the
          redirect the way that I was, and that there are actually multiple
          paths to achieve the desired result.
        </p>

        <br />
        <Link className="block mt-4 text-blue-600 hover:underline" href="/">
          Back to Home
        </Link>
      </article>
    </div>
  );
}
