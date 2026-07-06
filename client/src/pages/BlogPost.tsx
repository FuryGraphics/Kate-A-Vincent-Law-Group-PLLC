/**
 * BlogPost — Kate A Vincent Law Group PLLC
 * URL: /blog/:slug
 * Renders individual blog articles from the shared posts data.
 */
import { useParams } from "wouter";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import {
  PageLayout,
  CTABand,
  Reveal,
} from "../components/Layout";

interface BlogPostData {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  metaDescription: string;
  content: string;
}

const blogPosts: BlogPostData[] = [
  {
    title: "What to Do If You're Arrested in Florida",
    slug: "what-to-do-if-arrested-in-florida",
    category: "Criminal Defense",
    date: "June 15, 2025",
    readTime: "5 min read",
    metaDescription: "Arrested in Florida? Know your rights. This guide covers what to do — and what not to do — immediately after an arrest in Florida.",
    content: `
Being arrested in Florida is a frightening experience. The decisions you make in the moments immediately following an arrest can significantly impact the outcome of your case. Here is what you need to know.

## Exercise Your Right to Remain Silent

The Fifth Amendment gives you the right to remain silent. Use it. Do not answer questions from police officers beyond providing your name and identification. Anything you say can and will be used against you in court. Politely but firmly tell the officer: "I am exercising my right to remain silent and would like to speak with an attorney."

## Do Not Consent to Searches

You have the right to refuse a search of your person, vehicle, or home. If an officer asks for permission to search, clearly state: "I do not consent to a search." This does not mean the officer cannot search — they may have legal authority to do so — but refusing consent preserves important legal arguments for your defense attorney.

## Ask for an Attorney Immediately

As soon as you are arrested, ask for an attorney. Say clearly: "I want an attorney." Once you invoke this right, police are required to stop questioning you until an attorney is present. Do not wait to see what happens — ask immediately.

## Do Not Resist Arrest

Even if you believe the arrest is unlawful, do not physically resist. Resisting arrest is a separate criminal charge in Florida and can make your situation significantly worse. The time to challenge an unlawful arrest is in court, not on the street.

## Contact a Criminal Defense Attorney as Soon as Possible

Early intervention by a criminal defense attorney can make a critical difference. An attorney can:

- Advise you on whether to cooperate with investigators
- Challenge the legality of your arrest
- Negotiate with prosecutors before charges are formally filed
- Work to secure your release on bond

If you or a loved one has been arrested in Florida, contact Kate A Vincent Law Group PLLC immediately at (786) 709-3423. We are available 24/7 for urgent criminal matters.

## What Happens After an Arrest in Florida

After an arrest in Florida, you will typically be:

1. **Booked** — fingerprinted, photographed, and processed
2. **Held** — either released on your own recognizance, held pending a bond hearing, or held without bond for serious offenses
3. **Arraigned** — formally charged and asked to enter a plea

The arraignment typically occurs within 24-72 hours of arrest. Having an attorney present at this stage is critical.

## The Bottom Line

The most important thing you can do after an arrest in Florida is to remain calm, stay silent, and contact a criminal defense attorney immediately. The decisions made in the first hours after an arrest can shape the entire trajectory of your case.

*Prior results do not guarantee a similar outcome. This article is for informational purposes only and does not constitute legal advice.*
    `,
  },
  {
    title: "Can You Refuse a Breathalyzer in Florida?",
    slug: "can-you-refuse-breathalyzer-florida",
    category: "Criminal Defense",
    date: "May 28, 2025",
    readTime: "4 min read",
    metaDescription: "Florida's implied consent law means refusing a breathalyzer has consequences. Learn what happens if you refuse and how it affects your DUI case.",
    content: `
Florida's implied consent law is one of the most important things every driver in the state should understand. Here is what you need to know about breathalyzer refusals in Florida.

## Florida's Implied Consent Law

Under Florida Statute § 316.1932, any person who accepts the privilege of operating a motor vehicle in Florida is deemed to have given their consent to submit to an approved chemical or physical test of their breath, blood, or urine for the purpose of determining the presence of alcohol or controlled substances.

In plain terms: by driving in Florida, you have already agreed to submit to a breathalyzer if lawfully requested by a law enforcement officer.

## What Happens If You Refuse?

Refusing a breathalyzer in Florida carries automatic consequences:

**First Refusal:**
- Automatic one-year driver's license suspension
- The refusal can be used as evidence against you in court

**Second or Subsequent Refusal:**
- Automatic 18-month driver's license suspension
- Criminal charge of refusing to submit to testing (first-degree misdemeanor)

## Should You Refuse?

This is one of the most common questions DUI defense attorneys receive, and the honest answer is: it depends.

**Arguments for refusing:**
- Without a breathalyzer result, prosecutors have less direct evidence of your BAC
- A skilled DUI attorney may be able to challenge the stop, the field sobriety tests, and other evidence

**Arguments against refusing:**
- The refusal itself is admissible evidence and can suggest consciousness of guilt
- You will face an automatic license suspension regardless of whether you are convicted of DUI
- Prosecutors can still pursue a DUI conviction based on officer observations, field sobriety tests, and other evidence

## The Bottom Line

There is no universally correct answer. The decision depends on your specific circumstances, your prior driving record, and the strength of the evidence against you. What is clear is that you need an experienced DUI defense attorney as soon as possible after a DUI stop.

If you have been arrested for DUI in Florida, contact Kate A Vincent Law Group PLLC at (786) 709-3423 for a free consultation.

*Prior results do not guarantee a similar outcome. This article is for informational purposes only and does not constitute legal advice.*
    `,
  },
  {
    title: "What to Do After a Car Accident in Florida",
    slug: "what-to-do-after-car-accident-florida",
    category: "Personal Injury",
    date: "May 10, 2025",
    readTime: "6 min read",
    metaDescription: "The steps you take after a car accident in Florida can make or break your personal injury claim. Here's a practical guide to protecting your rights.",
    content: `
A car accident is one of the most disorienting experiences a person can go through. In the immediate aftermath, it can be difficult to think clearly. But the steps you take in the hours and days following an accident can significantly affect your ability to recover compensation. Here is a practical guide.

## Step 1: Check for Injuries and Call 911

Your safety and the safety of others comes first. Check yourself and your passengers for injuries. If anyone is injured — even if the injuries seem minor — call 911 immediately. A police report is critical evidence in a personal injury claim.

## Step 2: Do Not Admit Fault

Even if you think you may have contributed to the accident, do not apologize or admit fault at the scene. Fault is a legal determination, and statements made at the scene can be used against you.

## Step 3: Document the Scene

If it is safe to do so, document the accident scene thoroughly:
- Photograph all vehicles from multiple angles
- Photograph the road conditions, traffic signs, and any skid marks
- Photograph any visible injuries
- Get the names, contact information, and insurance information of all drivers involved
- Get contact information from any witnesses

## Step 4: Seek Medical Attention Immediately

Even if you feel fine, seek medical attention as soon as possible after an accident. Many serious injuries — including whiplash, concussions, and internal injuries — do not present symptoms immediately. Delaying medical treatment can both harm your health and damage your legal claim.

## Step 5: Report the Accident to Your Insurance Company

Florida law requires you to report accidents to your insurance company. However, be careful about what you say. Stick to the facts and do not speculate about fault or the extent of your injuries.

## Step 6: Contact a Personal Injury Attorney Before Giving a Recorded Statement

Insurance adjusters are trained to minimize payouts. Before giving a recorded statement to any insurance company — including your own — consult with a personal injury attorney. A single statement can significantly affect the value of your claim.

## Florida's No-Fault Insurance System

Florida is a no-fault insurance state, which means your own Personal Injury Protection (PIP) insurance pays for your medical bills and lost wages regardless of who caused the accident — up to your policy limits. However, if your injuries are serious, you may be able to step outside the no-fault system and pursue a claim against the at-fault driver.

## The Statute of Limitations

Florida's 2023 tort reform reduced the statute of limitations for most personal injury claims from four years to two years. Do not delay in consulting with an attorney.

If you have been injured in a car accident in Florida, contact Kate A Vincent Law Group PLLC at (786) 709-3423 for a free case review.

*Prior results do not guarantee a similar outcome. This article is for informational purposes only and does not constitute legal advice.*
    `,
  },
  {
    title: "How Long Do I Have to File a Personal Injury Claim in Florida?",
    slug: "florida-personal-injury-statute-of-limitations",
    category: "Personal Injury",
    date: "April 22, 2025",
    readTime: "4 min read",
    metaDescription: "Florida's 2023 tort reform reduced the statute of limitations for personal injury claims. Learn the deadlines and why acting quickly matters.",
    content: `
Florida's 2023 tort reform legislation made significant changes to the state's personal injury laws, including a critical reduction in the statute of limitations. If you have been injured in Florida, understanding these deadlines is essential.

## The New Two-Year Statute of Limitations

Effective March 24, 2023, Florida reduced the statute of limitations for most negligence-based personal injury claims from four years to two years. This means you generally have two years from the date of your injury to file a lawsuit.

**This applies to:**
- Car accidents
- Slip and fall accidents
- Truck accidents
- Motorcycle accidents
- Pedestrian accidents
- Most other negligence-based injury claims

## Exceptions and Special Rules

Some claims have different deadlines:

- **Medical malpractice:** Two years from when you discovered or should have discovered the injury (with a four-year absolute limit)
- **Claims against government entities:** Much shorter notice requirements — often 3-6 months
- **Wrongful death:** Two years from the date of death
- **Product liability:** Two years from the date of injury

## Why You Should Act Quickly — Even Before the Deadline

The statute of limitations is the absolute deadline, but there are many reasons to act quickly:

1. **Evidence preservation** — Accident scenes change, surveillance footage is overwritten, and witnesses' memories fade
2. **Medical documentation** — Prompt treatment creates a clear record linking your injuries to the accident
3. **Insurance deadlines** — Insurance policies often have their own notice requirements
4. **Investigation time** — Building a strong case takes time

## What Happens If You Miss the Deadline?

If you file a lawsuit after the statute of limitations has expired, the defendant will almost certainly move to dismiss your case. Florida courts strictly enforce these deadlines, and missing them typically bars your claim permanently.

## Contact an Attorney Immediately

If you have been injured in Florida, do not wait to consult with a personal injury attorney. Contact Kate A Vincent Law Group PLLC at (786) 709-3423 for a free case review. We will evaluate your claim, explain your rights, and ensure you do not miss any critical deadlines.

*Prior results do not guarantee a similar outcome. This article is for informational purposes only and does not constitute legal advice.*
    `,
  },
  {
    title: "Understanding Florida's Timesharing Laws",
    slug: "understanding-florida-timesharing-laws",
    category: "Family Law",
    date: "April 5, 2025",
    readTime: "7 min read",
    metaDescription: "Florida replaced 'custody' with 'timesharing' and 'parental responsibility.' Learn how Florida's timesharing laws work and what they mean for your family.",
    content: `
If you are going through a divorce or separation in Florida and have children, understanding the state's timesharing laws is essential. Florida has replaced the traditional concepts of "custody" and "visitation" with a framework centered on "timesharing" and "parental responsibility."

## Timesharing vs. Parental Responsibility

Florida law distinguishes between two related but distinct concepts:

**Timesharing** refers to the schedule that determines when each parent spends time with the children. This is what most people think of as "physical custody."

**Parental Responsibility** refers to the authority to make major decisions about the children's lives — including education, healthcare, and religious upbringing. This is what most people think of as "legal custody."

## Florida's Presumption of Shared Parental Responsibility

Florida law presumes that shared parental responsibility is in the best interests of the child. This means both parents are presumed to have equal rights to make decisions about their children's lives, unless the court finds that shared responsibility would be detrimental to the child.

## The Best Interests of the Child Standard

All timesharing decisions in Florida are governed by the "best interests of the child" standard. Florida Statute § 61.13 lists the factors courts consider, including:

- Each parent's demonstrated capacity to facilitate a close parent-child relationship
- The anticipated division of parental responsibilities after litigation
- The demonstrated capacity of each parent to determine, consider, and act upon the needs of the child as opposed to the needs or desires of the parent
- The length of time the child has lived in a stable, satisfactory environment
- The geographic viability of the parenting plan
- The mental and physical health of the parents
- The home, school, and community record of the child
- The reasonable preference of the child, if the court deems the child to be of sufficient intelligence, understanding, and experience

## The Parenting Plan

In Florida, all divorcing parents with minor children must submit a parenting plan to the court. The parenting plan must address:

- How the parents will share and be responsible for the daily tasks associated with the upbringing of the child
- The time-sharing schedule
- Designation of who will be responsible for healthcare, school-related matters, and other activities
- Communication between the parents

## What If Parents Cannot Agree?

If parents cannot agree on a parenting plan, the court will create one after considering all relevant factors. Florida courts generally favor arrangements that allow both parents to maintain a meaningful relationship with their children.

## Modifying a Timesharing Order

Once a timesharing order is in place, it can be modified if there has been a substantial, material, and unanticipated change in circumstances. The parent seeking modification must show that the change is in the best interests of the child.

If you are navigating a divorce or custody matter in Florida, contact Kate A Vincent Law Group PLLC at (786) 709-3423 for a free consultation. Kate has extensive experience with Florida's timesharing laws and will fight to protect your parental rights.

*Prior results do not guarantee a similar outcome. This article is for informational purposes only and does not constitute legal advice.*
    `,
  },
  {
    title: "Do I Need a Reason to Divorce in Florida?",
    slug: "do-i-need-reason-to-divorce-florida",
    category: "Family Law",
    date: "March 18, 2025",
    readTime: "5 min read",
    metaDescription: "Florida is a no-fault divorce state. You don't need to prove adultery or abuse to get divorced. Here's what you do need to know about the Florida divorce process.",
    content: `
One of the most common questions people ask when considering divorce in Florida is whether they need a specific reason — or "grounds" — to file. The short answer is no. Florida is a no-fault divorce state.

## What Is a No-Fault Divorce State?

In a no-fault divorce state, neither spouse is required to prove that the other did something wrong to justify the divorce. You do not need to allege or prove adultery, abuse, abandonment, or any other fault-based ground.

In Florida, the only ground for divorce is that the marriage is "irretrievably broken." This simply means that the marriage cannot be saved. Either spouse can make this claim, and the other spouse cannot prevent the divorce by denying it.

## What Do You Need to File for Divorce in Florida?

To file for divorce in Florida, you must:

1. **Meet the residency requirement** — At least one spouse must have lived in Florida for at least six months before filing
2. **File a Petition for Dissolution of Marriage** — This is the formal legal document that initiates the divorce process
3. **Serve the other spouse** — The other spouse must be formally served with the divorce papers

## Contested vs. Uncontested Divorce

**Uncontested divorce** — Both spouses agree on all issues, including property division, alimony, and (if applicable) child custody and support. This is typically faster and less expensive.

**Contested divorce** — The spouses cannot agree on one or more issues. The court will resolve the disputed issues after considering evidence and arguments from both sides.

## What Issues Are Resolved in a Florida Divorce?

A Florida divorce resolves several key issues:

- **Equitable distribution** — Division of marital assets and debts
- **Alimony** — Whether one spouse will pay support to the other, and in what amount
- **Parenting plan and timesharing** — If the couple has minor children
- **Child support** — Calculated under Florida's child support guidelines

## How Long Does a Florida Divorce Take?

The timeline varies significantly depending on whether the divorce is contested or uncontested, the complexity of the financial issues, and the court's schedule. An uncontested divorce can sometimes be finalized in as little as 30-60 days. A contested divorce can take a year or more.

## Do You Need an Attorney for a Florida Divorce?

While you are not legally required to have an attorney, having experienced legal representation is strongly advisable — especially if there are children, significant assets, or any disagreement between the spouses. The decisions made in a divorce can affect you for years, and having an attorney ensures your rights are protected.

Contact Kate A Vincent Law Group PLLC at (786) 709-3423 for a free consultation. Kate will guide you through the Florida divorce process with clarity, strategy, and compassion.

*Prior results do not guarantee a similar outcome. This article is for informational purposes only and does not constitute legal advice.*
    `,
  },
];

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl mt-10 mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold mb-2" style={{ color: "#F5F0E8", fontFamily: "'Inter', sans-serif" }}>
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-none space-y-2 mb-4 pl-0">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#C8C0B0" }}>
              <span style={{ color: "#C9A84C", marginTop: "0.25rem", flexShrink: 0 }}>—</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F5F0E8">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 mb-4 pl-0 list-none">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "#C8C0B0" }}>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
              >
                {j + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F5F0E8">$1</strong>') }} />
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      elements.push(
        <p key={i} className="text-xs italic mt-8 pt-6" style={{ color: "#6B6358", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
          {line.slice(1, -1)}
        </p>
      );
    } else if (line.length > 0) {
      elements.push(
        <p key={i} className="text-base mb-4 leading-relaxed" style={{ color: "#C8C0B0" }}>
          <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F5F0E8">$1</strong>') }} />
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <PageLayout title="Article Not Found | Kate A Vincent Law Group" description="">
        <div
          className="min-h-screen flex flex-col items-center justify-center"
          style={{ background: "#0a0a0a" }}
        >
          <h1 className="text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
            Article Not Found
          </h1>
          <Link href="/blog" className="btn-gold">
            Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${post.title} | Kate A Vincent Law Group`} description={post.metaDescription}>
      {/* Article Header */}
      <section
        className="pt-32 pb-12"
        style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(201,168,76,0.1)" }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "860px" }}>
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8"
              style={{ color: "#9A9080", textDecoration: "none" }}
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded mb-4"
              style={{
                background: "rgba(201,168,76,0.12)",
                color: "#C9A84C",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {post.category}
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", lineHeight: 1.15 }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm" style={{ color: "#6B6358" }}>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "860px" }}>
          <Reveal>
            <div className="article-body">
              {renderMarkdown(post.content)}
            </div>
          </Reveal>

          {/* Author / CTA box */}
          <Reveal delay={0.1}>
            <div
              className="mt-12 p-6 rounded-lg"
              style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <p className="text-sm mb-1" style={{ color: "#9A9080" }}>Written by</p>
              <p className="font-semibold mb-1" style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}>
                Kate A Vincent Law Group PLLC
              </p>
              <p className="text-sm mb-4" style={{ color: "#9A9080" }}>
                Criminal defense, personal injury, and family law in Hollywood, FL.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold text-sm">
                  Free Consultation
                </Link>
                <a href="tel:+17867093423" className="btn-outline text-sm">
                  Call (786) 709-3423
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "#C9A84C", textDecoration: "none" }}
              >
                <ArrowLeft size={14} />
                Back to All Articles
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Have a legal question? Get a free consultation today." />
    </PageLayout>
  );
}
