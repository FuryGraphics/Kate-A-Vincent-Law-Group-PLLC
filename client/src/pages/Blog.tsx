/**
 * Blog Index — Kate A Vincent Law Group PLLC
 * URL: /blog
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import {
  PageLayout,
  HeroSection,
  CTABand,
  Reveal,
  SectionHeader,
} from "../components/Layout";

type Category = "All" | "Criminal Defense" | "Personal Injury" | "Family Law";

const blogPosts = [
  {
    title: "What to Do If You're Arrested in Florida",
    slug: "what-to-do-if-arrested-in-florida",
    category: "Criminal Defense" as Category,
    date: "June 15, 2025",
    excerpt: "Being arrested in Florida is a frightening experience. Knowing your rights and what to do — and what not to do — in the moments after an arrest can significantly impact the outcome of your case.",
    readTime: "5 min read",
  },
  {
    title: "Can You Refuse a Breathalyzer in Florida?",
    slug: "can-you-refuse-breathalyzer-florida",
    category: "Criminal Defense" as Category,
    date: "May 28, 2025",
    excerpt: "Florida's implied consent law means refusing a breathalyzer has consequences — but so does taking the test. Here's what you need to know before you're ever in that situation.",
    readTime: "4 min read",
  },
  {
    title: "What to Do After a Car Accident in Florida",
    slug: "what-to-do-after-car-accident-florida",
    category: "Personal Injury" as Category,
    date: "May 10, 2025",
    excerpt: "The steps you take in the hours and days after a car accident in Florida can make or break your personal injury claim. Here's a practical guide to protecting your rights.",
    readTime: "6 min read",
  },
  {
    title: "How Long Do I Have to File a Personal Injury Claim in Florida?",
    slug: "florida-personal-injury-statute-of-limitations",
    category: "Personal Injury" as Category,
    date: "April 22, 2025",
    excerpt: "Florida's 2023 tort reform reduced the statute of limitations for personal injury claims. Understanding these deadlines is critical — missing them can permanently bar your claim.",
    readTime: "4 min read",
  },
  {
    title: "Understanding Florida's Timesharing Laws",
    slug: "understanding-florida-timesharing-laws",
    category: "Family Law" as Category,
    date: "April 5, 2025",
    excerpt: "Florida replaced the concept of 'custody' with 'timesharing' and 'parental responsibility.' Understanding how these work is essential for any parent going through a divorce or custody dispute.",
    readTime: "7 min read",
  },
  {
    title: "Do I Need a Reason to Divorce in Florida?",
    slug: "do-i-need-reason-to-divorce-florida",
    category: "Family Law" as Category,
    date: "March 18, 2025",
    excerpt: "Florida is a no-fault divorce state — meaning you don't need to prove adultery, abuse, or any other fault to get divorced. Here's what you do need to know about the Florida divorce process.",
    readTime: "5 min read",
  },
];

const categories: Category[] = ["All", "Criminal Defense", "Personal Injury", "Family Law"];

// Gold-only category system — all categories use Broward Gold variants
const categoryColors: Record<Category, string> = {
  "All": "#C9A84C",
  "Criminal Defense": "#C9A84C",
  "Personal Injury": "#B8924A",
  "Family Law": "#D4B96A",
};

// Category label variants for visual distinction within the gold family
const categoryLabels: Record<Category, string> = {
  "All": "All Articles",
  "Criminal Defense": "Criminal Defense",
  "Personal Injury": "Personal Injury",
  "Family Law": "Family Law",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <PageLayout
      title="Florida Legal Tips | Kate A Vincent Law Group Blog"
      description="Legal insights and resources from Kate A Vincent Law Group PLLC — criminal defense, personal injury, and family law tips for Florida residents."
    >
      <HeroSection
        h1="Legal Insights & Resources"
        subhead="Practical legal information for Florida residents — from the attorneys at Kate A Vincent Law Group PLLC."
        backgroundImage="/manus-storage/hero-main_a33af5b3.jpg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Category Filter */}
      <section className="py-8 section-navy" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded text-sm font-semibold transition-all"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: activeCategory === cat ? "#C9A84C" : "rgba(201,168,76,0.08)",
                  color: activeCategory === cat ? "#0a0a0a" : "#9A9080",
                  border: `1px solid ${activeCategory === cat ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1280px" }}>
          <SectionHeader
            label="Latest Articles"
            title="Legal Insights"
            subtitle="Practical guidance on criminal defense, personal injury, and family law in Florida."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div
                    className="h-2 w-full"
                    style={{ background: categoryColors[post.category] }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
                        style={{
                          background: `${categoryColors[post.category]}20`,
                          color: categoryColors[post.category],
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        <Tag size={10} />
                        {post.category}
                      </span>
                    </div>
                    <h3
                      className="text-lg mb-3 leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "#9A9080" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs" style={{ color: "#6B6358" }}>
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold"
                        style={{ color: "#C9A84C" }}
                      >
                        Read More <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Pagination placeholder */}
          <Reveal>
            <div className="mt-12 flex justify-center">
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "#6B6358" }}
              >
                <span
                  className="px-3 py-1.5 rounded"
                  style={{ background: "#C9A84C", color: "#0a0a0a", fontWeight: 600 }}
                >
                  1
                </span>
                <span className="px-3 py-1.5 rounded" style={{ background: "#111827", color: "#9A9080" }}>
                  2
                </span>
                <span className="px-3 py-1.5 rounded" style={{ background: "#111827", color: "#9A9080" }}>
                  3
                </span>
                <span style={{ color: "#6B6358" }}>...</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand headline="Have a legal question? Get a free consultation today." />
    </PageLayout>
  );
}
