"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  animateScroll as scroll,
  Element,
} from "react-scroll";

// import "/app/ui/fullPageComponent.css";
import styles from "@/app/ui/fullPage.module.css";

const FullScreenScroll = () => {
  // const [secIndex, setSecIndex] = useState(1);
  const [scrollDirection, setScrollDirection] = useState(null);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const deltaY = e.deltaY > 0 ? 1 : -1; // 判断滚动方向
    // const deltaY = e.target.scrollTop < 0 ? -1 : 1;
    setScrollDirection(deltaY);
  };

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  //   setSecIndex(1);
  // };

  // const scrollToBottom = () => {
  //   scroll.scrollToBottom();
  //   setSecIndex(5);
  // };

  // const scrollToElement = (elementId) => {
  //   scroller.scrollTo(elementId, {
  //     duration: 500, // 动画持续时间
  //     smooth: "easeInOutQuad", // 动画效果
  //   });
  // };

  // const getNextVisibleIndex = (direction) => {
  //   const containers = document.querySelectorAll(".J_section");
  //   const currentIndex = [...containers].findIndex((container) => {
  //     const rect = container.getBoundingClientRect();
  //     return rect.top <= 0 && rect.bottom >= 0;
  //   });
  //   const nextIndex =
  //     (currentIndex + direction + containers.length) % containers.length;
  //   return nextIndex; // nth-child 是 1-based index
  // };
  const getScrollPx = (direction) => {
    const containers = document.querySelectorAll(".J_section");
    const currentEle = [...containers].find((container) => {
      const rect = container.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= 0;
    });
    const curRect = currentEle.getBoundingClientRect();
    if (direction === 1 && Math.abs(curRect.top) < curRect.height) {
      return Number(curRect.height + curRect.top);
    } else if (direction === -1) {
      return Number(0 - curRect.height);
    }
    return curRect.height;
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      handleScroll(e);

      if (scrollDirection === 1) {
        // 向下滚动

        scroll.scrollMore(getScrollPx(1), {
          duration: 300,
          smooth: "easeInOutQuad",
          // spyThrottle: 300,
        });
      } else if (scrollDirection === -1) {
        // 向上滚动

        scroll.scrollMore(getScrollPx(-1), {
          duration: 300,
          smooth: "easeInOutQuad",
          delay: 0,
          // spyThrottle: 300,
        });
      }
    };
    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });
    // window.addEventListener("scroll", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      // window.removeEventListener("scroll", handleWheel);
    };
  }, [scrollDirection]);

  // useEffect(() => {
  //   Events.scrollEvent.register("begin", function (to, element) {
  //     console.log("begin", to, element);
  //   });

  //   Events.scrollEvent.register("end", function (to, element) {
  //     console.log("22222222");
  //     console.log("end", to, element);
  //     setSecIndex(secIndex + 1 > 5 ? 5 : secIndex + 1);
  //   });
  //   document.addEventListener("scroll", (e) => {});
  // }, []);
  // return (
  //   <div>
  //     <button onClick={scrollToTop}>Scroll to Top</button>
  //     <button onClick={() => scrollToElement("section2")}>
  //       Scroll to Section 2
  //     </button>
  //     <button onClick={() => scrollToElement("section3")}>
  //       Scroll to Section 3
  //     </button>
  //     <button onClick={scrollToBottom}>Scroll to Bottom</button>

  //     <div className="container-wrapper">
  //       <Element name="section1">
  //         <div
  //           id="section1"
  //           style={{ height: "100vh", backgroundColor: "lightblue" }}
  //         >
  //           Section 1
  //         </div>
  //       </Element>

  //       <Element name="section2">
  //         <div
  //           id="section2"
  //           style={{ height: "100vh", backgroundColor: "lightcoral" }}
  //         >
  //           Section 2
  //         </div>
  //       </Element>

  //       <Element name="section3">
  //         <div
  //           id="section3"
  //           style={{ height: "100vh", backgroundColor: "lightgreen" }}
  //         >
  //           Section 3
  //         </div>
  //       </Element>
  //     </div>
  //   </div>
  // );
  return (
    <div
      ref={containerRef}
      className={styles.containerWrapper}
      id="J_contionerWrapper"
    >
      <Element name="section1" className="J_section">
        <div
          className={`${styles.container} J_container`}
          style={{ backgroundColor: "#FF5733" }}
        >
          111111
        </div>
      </Element>
      <Element name="section2" className="J_section">
        <div
          className={`${styles.container} J_container`}
          style={{ backgroundColor: "#33FF57" }}
        >
          222222
        </div>
      </Element>
      <Element name="section3" className="J_section">
        <div
          className={`${styles.container} J_container`}
          style={{ backgroundColor: "#3357FF" }}
        >
          33333
        </div>
      </Element>
      <Element name="section4" className="J_section">
        <div
          className={`${styles.container} J_container`}
          style={{ backgroundColor: "#F3FF33" }}
        >
          4444
        </div>
      </Element>

      {/* <div
        className={`${styles.container} J_container`}
        style={{ backgroundColor: "#33FF57" }}
      >
        <Element name="section2" className="section" />
      </div>
      <div
        className={`${styles.container} J_container`}
        style={{ backgroundColor: "#3357FF" }}
      >
        <Element name="section3" className="section" />
      </div>
      <div
        className={`${styles.container} J_container`}
        style={{ backgroundColor: "#F3FF33" }}
      >
        <Element name="section4" className="section" />
      </div> */}
    </div>
  );
};

export default FullScreenScroll;
