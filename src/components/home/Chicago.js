import "./Chicago.css";
import OverlappingImageStack from "../common/OverlappingImageStack";
import Title from "../common/Title";
import aboutProps from "../../props/AboutProps";

export default function Chicago() {
  return (
    <section className="chicago">
      <section className="stack">
        <section className="description">
          <Title />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </section>
        <OverlappingImageStack {...aboutProps} />
      </section>
    </section>
  );
}
