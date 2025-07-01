import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  href?: string;
};

export default function TLink({ href, children, className, id }: Props) {
  return (
    <a href={href} id={id} className={className}>
      {children}
    </a>
  );
}
