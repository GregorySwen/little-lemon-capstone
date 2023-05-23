export default function TestimonialCard(props) {
  return (
    <div
      className="testimonial-card"
      style={{ width: "200px", height: "175px", background: "#edefee" }}
    >
      <div className="row-1">
        <h6>Rating</h6>
      </div>
      <div className="row-2">
        <img
          src={props.image}
          alt={`Client ${props.name}`}
          style={{ objectFit: "cover" }}
          width="45px"
          height="45px"
        ></img>
        <span className="high-light-text">{props.name}</span>
      </div>
      <div className="row-3">
        <span className="call-to-action">Review text</span>
      </div>
    </div>
  );
}
