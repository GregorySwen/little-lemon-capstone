import "./CustomersSay.css";
import testimonialsProps from "../../props/TestimonialsProps";
import TestimonialCard from "./TestimonialCard";

export default function CustomersSay() {
  return (
    <section className="customers-say">
      <h1>Testimonials</h1>
      <section className="stack">
        {testimonialsProps.map((client, idx) => (
          <TestimonialCard key={client.name + idx} {...client} />
        ))}
      </section>
    </section>
  );
}
