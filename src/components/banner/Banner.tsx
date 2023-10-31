import "./Banner.css";
import QuickDonate from "./quick_donate/QuickDonate";

function Banner() {

  return (
    <>
      <div className="banner-container">
        <img src="banner1.png" className="banner-img-two" />
        <p className="banner-quote centered">
          {" "}
          Caring Communities, Stronger Tomorrow.{" "}
        </p>
        <QuickDonate />
      </div>
    </>
  );
}

export default Banner;
