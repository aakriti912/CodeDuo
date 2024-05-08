module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Modify this to include your component files
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)", color: "#ffffff" },
          "50%": { transform: "translateY(-10px)", color: "#ff6347" },
        },
      },
      animation: {
        wave: "wave 2s infinite",
      },
    },
  },
};

