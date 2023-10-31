import "./Banner.css";
import QuickDonate from "./quick_donate/QuickDonate";

function Banner() {
  // <img src="banner.png" className="banner-image" />
  // <p className="banner-quote">"Caring Communities,Stronger Tomorrow."</p>
  // return (
  //   <div className="banner-container">
  //     <div className="banner-image">
  //       <p className="banner-quote"> "Caring Communities, Stronger Tomorrow." </p>
  //       <QuickDonate />
  //     </div>
  //   </div>
  // );

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
