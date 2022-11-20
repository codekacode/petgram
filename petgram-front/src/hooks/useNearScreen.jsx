import { useEffect, useRef, useState } from "react";

export const useNearScreen = () => {
    const [show, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(
      function () {
        import("intersection-observer").then(() => {
          //esta o no en el viewport
          const observer = new window.IntersectionObserver(function (entries) {
            const { isIntersecting } = entries[0];
            console.log({ isIntersecting });
            if (isIntersecting) {
              setShow(true);
              observer.disconnect();
            }
          });
          observer.observe(elementRef.current);
        });
      },
      [elementRef]
    );
  return [show, elementRef];
}