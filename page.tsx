import Link from "next/link";
export const metadata = { title: "Terms of Service", description: "PDF Point terms of service information." };
export default function TermsPage() {
  return <><header className="site-header"><div className="container nav-wrap"><Link href="/" className="brand"><span className="brand-mark"><span /></span><span>PDF <b>Point</b></span></Link></div></header><main className="container legal-content"><h1>Terms of Service</h1><p>This is a pre-launch placeholder page, not binding or complete terms. Production terms must be written to match the actual services, acceptable use rules, processing limits, disclaimers, and applicable legal requirements before launch.</p><p><Link href="/">Return to PDF Point</Link></p></main></>;
}
