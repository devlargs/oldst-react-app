import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "white",
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        width: "100%",
        height: "0.125rem",
      },
      "#nprogress .peg": {
        display: "block",
        position: "absolute",
        right: "0rem",
        width: "6.25rem",
        height: "100%",
        boxShadow: "0 0 0.625rem white, 0 0 0.313rem white",
        opacity: 1,
        WebkitTransform: "rotate(3deg) translate(0rem, -0.25rem)",
        msTransform: "rotate(3deg) translate(0rem, -0.25rem)",
        transform: "rotate(3deg) translate(0rem, -0.25rem)",
      },
      "#nprogress .spinner": {
        display: "block",
        position: "fixed",
        zIndex: 9999,
        top: "0.938rem",
        right: "0.938rem",
      },
      "#nprogress .spinner-icon": {
        width: "1.125rem",
        height: "1.125rem",
        boxSizing: "border-box",
        border: "solid 0.125rem transparent",
        borderTopColor: "white",
        borderLeftColor: "white",
        borderRadius: "50%",
        WebkitAnimation: "nprogress-spinner 400ms linear infinite",
        animation: "nprogress-spinner 400ms linear infinite",
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "relative",
      },
      ".nprogress-custom-parent #nprogress .spinner": {
        position: "absolute",
      },
      ".nprogress-custom-parent #nprogress .bar": {
        position: "absolute",
      },

      "@-webkit-keyframes nprogress-spinner": {
        "0%": {
          WebkitTransform: "rotate(0deg)",
        },
        "100%": {
          WebkitTransform: "rotate(360deg)",
        },
      },
      "@keyframes nprogress-spinner": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      ".lds-facebook": {
        display: "inline-block",
        position: "relative",
        width: "80px",
        height: "80px",
      },
      ".lds-facebook div": {
        display: "inline-block",
        position: "absolute",
        left: "8px",
        width: "16px",
        background: "#2A4365",
        animation: "lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite",
      },
      ".lds-facebook div:nth-child(1)": {
        left: "8px",
        "animation-delay": "-0.24s",
      },
      ".lds-facebook div:nth-child(2)": {
        left: "32px",
        "animation-delay": "-0.12s",
      },
      ".lds-facebook div:nth-child(3)": {
        left: "56px",
        "animation-delay": 0,
      },
      "@keyframes lds-facebook": {
        "0%": {
          top: "8px",
          height: "64px",
        },
        "50%, 100%": {
          top: "24px",
          height: "32px",
        },
      },
    },
  },
});

export default theme;
