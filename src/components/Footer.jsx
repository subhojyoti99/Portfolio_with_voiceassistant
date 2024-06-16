import React from "react";
import "./styles/footer.css";
import sign from "../images/sign.png";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div class="achknowledge">
          <p>
            This page is still under-going upgrades. Work on bug fixing is still
            going-on.
          </p>
          <h4>
            <a id="email" href="mailto:www.subhajyotisingha@gmail.com">
              subhajyotisingha@gmail.com
            </a>
          </h4>
        </div>

        <div class="handles">
          <ul>
            <li>
              <a
                id="Instagram"
                href="https://www.instagram.com/p/B-UqLfkgtbmjcdPXnr-qHmTSq03ckjccCQLkao0/"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a
                id="LinkedIn"
                href="https://www.linkedin.com/in/subhajyoti-singha-27a5b31b1/"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                id="GitHub"
                href="https://github.com/subhojyoti99"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </li>
            <li>
              <a
                id="Facebook"
                href="https://www.facebook.com/subho.singha.10"
                target="_blank"
                rel="noreferrer"
              >
                FACEBOOK
              </a>
            </li>
          </ul>
        </div>

        <div class="timezone">
          {/* <---------  create clock  -------->   */}
          <h1>You are in my TimeZone</h1>
          <div id="clock"></div>

          <div id="greeting" class="greet"></div>
        </div>

        <div class="footsign">
          <img
            width="50%"
            // viewBox="0 0 259 51"
            fill="none"
            src={sign}
            alt="sign"
          />
        </div>

        <div class="address">
          <h4>
            Ballygunge,
            <br /> KOLKATA-700019
          </h4>
          <p>22°32'19.3"N 88°21'47.3"E 22.538704, 88.363126</p>

          <p>
            last Site Update <p> Apr 26, 2022</p>
          </p>

          <a href="#opening">Back to TOP</a>
        </div>
      </section>

      <footer>
        <p>&copy; subhojyotisingha || 2024</p>
      </footer>
    </>
  );
}
