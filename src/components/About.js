import OverlappingImageStack from "./OverlappingImageStack";
import Title from "./Title";
import aboutProps from "../props/AboutProps";

export default function About() {
  return (
    <section className="about">
      <div className="description">
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
      </div>
      <OverlappingImageStack {...aboutProps} />
    </section>
  );
}
