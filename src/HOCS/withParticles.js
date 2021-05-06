import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { createUseStyles } from "react-jss";

import { styles } from "./styles";

const useStyles = createUseStyles({ ...styles });

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const withParticles = (Component) => {
  const EnhancedWithParticles = (props) => {
    const classes = useStyles();
    const [backgroundWidth, setBackgroundWidth] = useState(window.innerWidth);
    const [backgroundHeight, setBackgroundHeight] = useState(
      window.innerHeight
    );
    useEffect(() => {
      // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
      const debouncedHandleResize = debounce(function handleResize() {
        setBackgroundWidth(window.innerWidth);
        setBackgroundHeight(window.innerHeight);
      }, 100);

      window.addEventListener("resize", debouncedHandleResize);

      return (_) => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    });

    const EnhancedFnComponent = (props) => (
      <>
        <Particles
          id="tsparticles"
          className={classes.particles}
          // height="100%"
          width={`${backgroundWidth}px`}
          height={`${backgroundHeight}px`}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 15,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Component {...props} />
      </>
    );

    EnhancedFnComponent.displayName = "EnhancedFnComponent";

    return EnhancedFnComponent(props);
  };
  EnhancedWithParticles.displayName = "Enhanced";
  return EnhancedWithParticles;
};

export default withParticles;
