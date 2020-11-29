import React from "react";

export default function Footer() {
  return (
    <footer>
      <div id="terms-of-use">
        <p>
          <a href="/terms-of-use">Terms of Use</a> &#8226;{" "}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
      <p id="copyright">&copy; 2020 Dimitry Knoops</p>
    </footer>
  );
}
