import HeroCard from "./HeroCard";
import Highlight from "./Highlight";

export default function Main() {
  return (
    <main>
      <section className="hero">
        {" "}
        <HeroCard />
      </section>
      <section className="highlight">
        <Highlight />
      </section>
      <section className="testimonials"></section>
      <section className="about"></section>
    </main>
  );
}
