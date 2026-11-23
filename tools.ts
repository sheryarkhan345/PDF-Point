export type ToolCategory =
  | "Convert PDF"
  | "Organize PDF"
  | "Optimize PDF"
  | "Edit PDF"
  | "Security"
  | "Sign PDF"
  | "QR Code";

export type Tool = {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  detail: string;
  formats: string;
};

export const categories = [
  "All Tools",
  "Convert PDF",
  "Organize PDF",
  "Optimize PDF",
  "Edit PDF",
  "Security",
  "Sign PDF",
  "QR Code",
] as const;

export const tools: Tool[] = [
  { slug: "pdf-to-word", name: "PDF to Word", category: "Convert PDF", description: "Turn PDF documents into editable Word files.", detail: "Convert PDF pages and text into an editable DOCX workflow.", formats: "PDF → DOCX" },
  { slug: "word-to-pdf", name: "Word to PDF", category: "Convert PDF", description: "Create a PDF from a Word document.", detail: "Prepare Word documents for consistent PDF sharing.", formats: "DOCX → PDF" },
  { slug: "jpg-to-pdf", name: "JPG to PDF", category: "Convert PDF", description: "Combine JPG images into a PDF document.", detail: "Turn one or more JPG images into a PDF.", formats: "JPG → PDF" },
  { slug: "pdf-to-jpg", name: "PDF to JPG", category: "Convert PDF", description: "Export PDF pages as JPG images.", detail: "Render PDF pages into image files.", formats: "PDF → JPG" },
  { slug: "png-to-pdf", name: "PNG to PDF", category: "Convert PDF", description: "Convert PNG images into a PDF.", detail: "Create a shareable PDF from PNG images.", formats: "PNG → PDF" },
  { slug: "pdf-to-png", name: "PDF to PNG", category: "Convert PDF", description: "Save PDF pages as PNG images.", detail: "Render PDF pages into PNG image files.", formats: "PDF → PNG" },
  { slug: "excel-to-pdf", name: "Excel to PDF", category: "Convert PDF", description: "Convert spreadsheets into PDF files.", detail: "Prepare spreadsheet documents for PDF export.", formats: "XLSX → PDF" },
  { slug: "pdf-to-excel", name: "PDF to Excel", category: "Convert PDF", description: "Extract PDF tables into spreadsheets.", detail: "Extract tabular data into an editable spreadsheet workflow.", formats: "PDF → XLSX" },
  { slug: "powerpoint-to-pdf", name: "PowerPoint to PDF", category: "Convert PDF", description: "Save presentations as PDF documents.", detail: "Convert presentation slides into a PDF.", formats: "PPTX → PDF" },
  { slug: "merge-pdf", name: "Merge PDF", category: "Organize PDF", description: "Combine multiple PDF files into one.", detail: "Join PDF documents in the order you choose.", formats: "PDF + PDF → PDF" },
  { slug: "split-pdf", name: "Split PDF", category: "Organize PDF", description: "Separate a PDF into smaller files.", detail: "Split a PDF by page ranges or individual pages.", formats: "PDF → PDFs" },
  { slug: "rotate-pdf", name: "Rotate PDF", category: "Organize PDF", description: "Rotate pages to the correct orientation.", detail: "Rotate selected PDF pages without changing the rest.", formats: "PDF → PDF" },
  { slug: "extract-pdf-pages", name: "Extract PDF Pages", category: "Organize PDF", description: "Save selected pages as a new PDF.", detail: "Create a new PDF containing only selected pages.", formats: "PDF → PDF" },
  { slug: "delete-pdf-pages", name: "Delete PDF Pages", category: "Organize PDF", description: "Remove unwanted pages from a PDF.", detail: "Remove selected pages from a PDF document.", formats: "PDF → PDF" },
  { slug: "organize-pdf-pages", name: "Organize PDF Pages", category: "Organize PDF", description: "Reorder pages in your PDF document.", detail: "Arrange PDF pages into the sequence you need.", formats: "PDF → PDF" },
  { slug: "compress-pdf", name: "Compress PDF", category: "Optimize PDF", description: "Reduce PDF file size for easier sharing.", detail: "Optimize a PDF while balancing size and quality.", formats: "PDF → PDF" },
  { slug: "pdf-editor", name: "PDF Editor", category: "Edit PDF", description: "Make practical changes to PDF documents.", detail: "A workspace for supported PDF editing operations.", formats: "PDF → PDF" },
  { slug: "unlock-pdf", name: "Unlock PDF", category: "Security", description: "Remove eligible PDF restrictions with the password.", detail: "Process a protected PDF when you have its correct password and authorization.", formats: "PDF → PDF" },
  { slug: "protect-pdf", name: "Protect PDF", category: "Security", description: "Add password protection to a PDF.", detail: "Set a password for a PDF document.", formats: "PDF → Protected PDF" },
  { slug: "sign-pdf", name: "Sign PDF", category: "Sign PDF", description: "Place your signature on a PDF document.", detail: "Prepare a PDF signature placement workflow.", formats: "PDF → PDF" },
  { slug: "qr-code-generator", name: "QR Code Generator", category: "QR Code", description: "Create downloadable QR codes from text or links.", detail: "Generate QR codes from a URL or text value.", formats: "Text / URL → QR" },
  { slug: "qr-code-scanner", name: "QR Code Scanner", category: "QR Code", description: "Read QR codes from an image or camera.", detail: "Decode QR codes from supported image inputs or a camera.", formats: "Image / Camera → Text" },
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
