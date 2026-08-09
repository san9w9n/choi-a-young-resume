import { Approach } from "./components/Approach";
import { Career } from "./components/Career";
import { Cases } from "./components/Cases";
import { Hero } from "./components/Hero";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Voices } from "./components/Voices";

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        본문으로 건너뛰기
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Approach />
        <Cases />
        <Voices />
        <Career />
      </main>
      <SiteFooter />
    </>
  );
}
