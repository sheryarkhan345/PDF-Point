import Link from "next/link";
export const metadata = { title: "Privacy Policy", description: "PDF Point privacy policy information." };
export default function PrivacyPage() {
  return <><header className="site-header"><div className="container nav-wrap"><Link href="/" className="brand"><span className="brand-mark"><span /></span><span>PDF <b>Point</b></span></Link></div></header><main className="container legal-content"><h1>Privacy Policy</h1><p>This is a pre-launch placeholder page, not a complete legal policy. Before accepting user documents, PDF Point must publish a policy that accurately describes its implemented upload, processing, storage, retention, deletion, analytics, and contact practices. No document-processing service is connected in this development foundation.</p><p><Link href="/">Return to PDF Point</Link></p></main></>;
}
