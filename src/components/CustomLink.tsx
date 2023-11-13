import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProp {
  to: string;
  children?: ReactNode;
}

const CustomLink = (prop: CustomLinkProp) => {
  return (
    <Link to={prop.to} style={{ textDecoration: "none", color: "inherit" }} >
      {prop.children}
    </Link>
  );
};

export default CustomLink;

interface ConditionalLinkProp {
  to: string, 
  children?: ReactNode,
  condition: boolean,
}

export function ConditionalLink(props: ConditionalLinkProp) {
  return !!props.condition && props.to ? <Link {...props}>{props.children}</Link> : <>{props.children}</>
}
