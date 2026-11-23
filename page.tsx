import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "Online PDF Tools — PDF Work Made Easy",
  description: "Find useful PDF tools in one place. Convert, organize, optimize, edit and work with documents using PDF Point.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeClient />;
}
