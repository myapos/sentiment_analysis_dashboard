const SOCIALS = {
  FACEBOOK: "facebook",
  TWITTER: "twitter",
  LINKEDIN: "linkedin",
};
const login = async (social) => {
  try {
    // const url = "http://localhost:8585/check";
    const url = `http://localhost:8585/login/${SOCIALS[social]}`;

    return (window.location.href = url);
  } catch (e) {
    console.error("error:", e);
  }
};

export default login;
