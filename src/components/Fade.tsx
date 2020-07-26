import React from "react";
import css from "@emotion/css";

export const FadeInSection: React.FC = (props) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const domRefDiv = domRef.current as HTMLDivElement;
    observer.observe(domRefDiv);
    return () => observer.unobserve(domRefDiv);
  }, []);
  return (
    <div ref={domRef} css={[fadeInCss, isVisible ? fadeInVisibleCss : ""]}>
      {props.children}
    </div>
  );
};

const fadeInCss = css`
  opacity: 0;
  /* transform: translateY(15vh); */
  visibility: hidden;
  transition: opacity 1.5s ease, transform 1.2s ease-out;
  will-change: opacity, visibility;
`;

const fadeInVisibleCss = css`
  opacity: 1;
  transform: none;
  visibility: visible;
`;
