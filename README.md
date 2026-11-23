# PDF Point

**PDF Work Made Easy.**

A Next.js + TypeScript foundation for an international PDF tools platform.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build check

```bash
npm run build
```

## Current implementation status

This starter establishes the brand, responsive homepage, category filtering, search, shared tool-card system, and all 22 dedicated English tool routes.

**Important:** The current tool pages are honest interface foundations. Their document-processing engines are not yet connected, so they do not claim to convert or modify uploaded files. PDF engines, secure temporary storage, automatic deletion, rate limits, and production file handling must be implemented and tested in subsequent phases.

## Architecture

- `src/app`: Next.js App Router pages and metadata
- `src/components`: shared UI components
- `src/data`: central tool catalogue
- `src/lib`: shared metadata and helpers
- `src/app/[locale]`: localized route foundation

## Planned processing architecture

Keep the public web application separate from heavy document processing. A dedicated processing service/container can host tools such as pypdf, PyMuPDF, LibreOffice, OCR/table extraction dependencies, and image conversion. Do not put untrusted file processing in a public static site or expose uploaded files through public URLs.

## Launch checklist

- [ ] Implement and test each processing engine with real sample files
- [ ] Add server-side MIME/signature validation and file-size limits
- [ ] Add isolated processing, rate limits, and abuse protection
- [ ] Implement private temporary storage and verified automatic deletion
- [ ] Add privacy policy and terms reviewed for the actual implementation
- [ ] Add translated, human-reviewed content before publishing localized pages
- [ ] Configure domain, HTTPS, analytics, and Search Console
- [ ] Run accessibility, device, security, and production tests

## Routes

Every tool has a dedicated route, for example `/pdf-to-word`, `/merge-pdf`, and `/qr-code-generator`.
