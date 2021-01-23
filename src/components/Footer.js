import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div id="terms-of-use">
        <p>
          <a href="#">Terms Of Use</a> &#8226;{" "}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
      <p id="copyright">&copy; 2021 Dimitry Knoops</p>
    </footer>
  );
}
