import testimonialsProps from "../props/TestimonialsProps";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="cards">
        {testimonialsProps.map((client, idx) => (
          <TestimonialCard key={client.name + idx} {...client} />
        ))}
      </div>
    </section>
  );
}
