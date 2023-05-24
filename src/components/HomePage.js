import CallToAction from "./home/CallToAction";
import CustomersSay from "./home/CustomersSay";
import Chicago from "./home/Chicago";
import Specials from "./home/Specials";

export default function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}
