import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Vismaya",
  description:
    "Detail-oriented Law & Company Secretary Student specializing in legal research, compliance drafting, and policy advocacy. Social advocate and published researcher at After The Silence. BBA.LLB (Hons.) candidate at Symbiosis Law School, Pune.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
