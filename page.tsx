import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileUp, ArrowRight } from "lucide-react";
import { getTool, tools } from "@/data/tools";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Online`,
    description: `${tool.description} Learn about the ${tool.name} workflow on PDF Point.`,
    alternates: { canonical: `/${tool.slug}` },
    openGraph: { title: `${tool.name} Online | PDF Point`, description: tool.description },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();
  const related = tools.filter((item) => item.category === tool.category && item.slug !== tool.slug).slice(0, 4);

  return <>
    <header className="site-header"><div className="container nav-wrap">
      <Link href="/" className="brand"><span className="brand-mark"><span /></span><span>PDF <b>Point</b></span></Link>
      <nav className="main-nav"><Link href="/#tools">Tools</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
    </div></header>
    <main>
      <section className="tool-page-hero"><div className="container">
        <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/#tools">Tools</Link> / {tool.name}</div>
        <span className="section-kicker" style={{ color: "#BBD7C1", marginTop: 26 }}>{tool.category.toUpperCase()}</span>
        <h1>{tool.name} Online</h1>
        <p>{tool.detail} PDF Point is building a straightforward, secure workflow for this tool.</p>
      </div></section>
      <section className="tool-workspace"><div className="container">
        <div className="upload-panel">
          <span className="upload-symbol"><FileUp size={25} /></span>
          <h2>Your {tool.name} workspace</h2>
          <p>Supported workflow: {tool.formats}</p>
          <div className="status-note"><strong>Development status:</strong> This page is part of the initial platform foundation. File processing for this tool has not been connected yet. Upload and conversion are not available in this version.</div>
          <p style={{ marginTop: 20 }}><Link href="/#tools" style={{ color: "#0C2314", fontWeight: 700 }}>Browse available tools <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }} /></Link></p>
        </div>
      </div></section>
      <section className="tool-info"><div className="container">
        <span className="section-kicker">ABOUT THIS TOOL</span>
        <h2>What does {tool.name} do?</h2>
        <p>{tool.detail} This tool page provides the dedicated location and information architecture for the feature. The processing engine, supported file edge cases, and final output validation will be implemented and tested before the feature is described as available.</p>
        <h2 style={{ marginTop: 35 }}>How to use {tool.name}</h2>
        <p>When the processing engine is released, the workflow will guide you through selecting a supported file, choosing any required options, processing the document, and downloading the result. Do not upload confidential documents to this development version.</p>
        <h2 style={{ marginTop: 35 }}>Related tools</h2>
        <div className="related-grid">{related.map((item) => <Link key={item.slug} href={`/${item.slug}`}>{item.name} <ArrowRight size={13} style={{ display: "inline", verticalAlign: "middle" }} /></Link>)}</div>
      </div></section>
    </main>
    <footer className="site-footer"><div className="container footer-bottom"><span>© {new Date().getFullYear()} PDF Point</span><Link href="/">Back to home</Link></div></footer>
  </>;
}
