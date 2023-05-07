import { useEffect, useRef } from "react";
import "../First/scss/Title.scss";

import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const splitText = new SplitType(titleRef.current);

      // Function to animate the characters
      const animateChars = () => {
        // Set the initial state of the characters
        gsap.set(".char", { y: "-50%" });

        // Animate the characters
        gsap.to(".char", {
          y: 0,
          stagger: 0.05,
          duration: 0.1,
        });
      };

      // Start the animation immediately
      animateChars();

      // Create ScrollTrigger instance with a callback function
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: animateChars,
        onEnterBack: animateChars,
        scrub: true,
      });
    }
  }, []);

  return (
    <section>
      <div className="container">
        <nav className="navbar">
          <h1>HOME</h1>
          <h1 className="middle">YON DEV</h1>
          <h1>PROJECT</h1>
        </nav>
        <h1 className="split" ref={titleRef}>
          CATHARSIS
        </h1>
      </div>
    </section>
  );
};

export default Title;
