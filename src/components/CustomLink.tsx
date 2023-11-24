import { ReactNode, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

interface CustomLinkProp {
  to: string;
  children?: ReactNode;
}

const CustomLink = (prop: CustomLinkProp) => {
  // return (
  //   <Link to={prop.to} style={{ textDecoration: "none", color: "inherit" }} >
  //     {prop.children}
  //   </Link>
  // );
  //

  const nav = useNavigate();
  const load_ref = useRef(null);

  const go = () => {
    //@ts-ignore
    load_ref.current.complete();
    setTimeout(function () {
      nav(prop.to);
      window.scrollTo(0, 0)
    }, 500);
  };

  return (
    <>
      <LoadingBar color="var(--primary-red)" ref={load_ref} />
      <div
        onClick={() => {
          //@ts-ignore
          load_ref.current.continuousStart(24, 10);
          go();
        }}
      >
        {prop.children}
      </div>
    </>
  );
};

export default CustomLink;
