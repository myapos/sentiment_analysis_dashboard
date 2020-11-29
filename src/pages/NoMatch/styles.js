export const styles = {
  "@keyframes blink": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  message: {
    fontSize: "2rem",
    color: "whitesmoke",
    opacity: "1",
    animationName: "$blink",
    animationDuration: "2s",
    animationIterationCount: "infinite",
  },
};
