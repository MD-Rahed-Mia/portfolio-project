import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function AnimationFactory({ children, dir, dirValue }) {
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });

  const [direction, setDirection] = useState(null);

  useEffect(() => {
    if (dir == "right") {
      setDirection(`translateX(-${dirValue})`);
    } else {
      setDirection(`translateX(${dirValue})`);
    }

    console.log(direction);
  }, []);

  return (
    <div
      style={{
        transform: isView ? "none" : direction,
        opacity: isView ? "1" : 0,
        transition: "all 0.3s ease-in",
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}
