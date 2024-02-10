import Link from "next/link";

export default function One() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            Question One
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Describe how you solved a challenge that one of your previous teams
            faced. How did you determine your solution was successful?
          </p>
        </div>
        <br />
        <p>
          When I joined CircleCI, the Support team had a custom Slack app
          designed to assist with our Zendesk Ticket Triage that would ping a
          Slack Channel for new and expiring tickets. This was incredibly
          useful, however, there were a few limitations:
        </p>
        <br />
        <p>
          - The individual who created the application was no longer on the
          team, so it was no longer maintained
        </p>
        <p>
          - The triage process was voluntary, which resulted in a lopsided split
          of the work, with some team members taking triage all the time and
          some none at all
        </p>
        <br />
        <p>
          After my first year at CircleCI working with this system, things with
          this app started to break. The automations were no longer triggering,
          we were missing notifications, and tickets weren’t being triaged in a
          timely manner. Additionally, we had no path to resolve the issues with
          the app ourselves since we were not the code owners. So instead, I
          took on the task to rethink how we were using triage. I wanted to
          ensure we weren’t using more custom applications than we needed to so
          we didn’t end up in the same situation in the future, and I also
          wanted to stop the lopsided nature of how we ran triage to improve the
          day to day for the team as a whole.{" "}
        </p>
        <br />
        <p>
          This resulted in me creating triggers within the Zendesk/Slack
          integration to ensure that when new tickets came in, that our slack
          channel was notified immediately. Since this was out of the box
          functionality, it was reliable, required no additional installs, and
          could easily be managed by my team.{" "}
        </p>
        <br />
        <p>
          Additionally, we implemented a triage assignee schedule with our pager
          system to ensure someone is always assigned to the group. This spread
          out the work, and improved the balance of our day to day for each
          member on the team.
        </p>
        <br />
        <p>
          We knew we were successful, as the triage times improved, mean time to
          resolution decreased, and there were fewer missed SLAs. On top of
          this, work was more evenly spread across the team.{" "}
        </p>
        <br />
        <Link className="block mt-4 text-blue-600 hover:underline" href="/">
          Back to Home
        </Link>
      </article>
    </div>
  );
}
