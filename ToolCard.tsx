import Link from "next/link";
import { ArrowUpRight, FileText, Image, LockKeyhole, Layers, PenLine, QrCode, RefreshCw, ShieldCheck, Scissors, RotateCw, FileSpreadsheet } from "lucide-react";
import type { Tool } from "@/data/tools";

const iconByCategory = {
  "Convert PDF": RefreshCw,
  "Organize PDF": Layers,
  "Optimize PDF": FileText,
  "Edit PDF": PenLine,
  Security: ShieldCheck,
  "Sign PDF": PenLine,
  "QR Code": QrCode,
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const Icon = iconByCategory[tool.category];
  return (
    <Link href={`/${tool.slug}`} className="tool-card group">
      <span className="tool-icon"><Icon size={21} strokeWidth={1.8} /></span>
      <span className="tool-card-arrow"><ArrowUpRight size={17} /></span>
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
      <span className="tool-format">{tool.formats}</span>
    </Link>
  );
}
