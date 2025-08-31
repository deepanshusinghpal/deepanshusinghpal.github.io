// import React from "react";
// import "./Footer.css";
// import { Fade } from "react-reveal";
// import { greeting } from "../../portfolio.js";
// /* eslint-disable jsx-a11y/accessible-emoji */

// export default function Footer(props) {
//   return (
//     <div className="footer-div">
//       <Fade>
//         <p className="footer-text" style={{ color: props.theme.secondaryText }}>
//           Made with <span role="img">❤️</span> by {greeting.title}
//         </p>
//         {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
//       </Fade>
//     </div>
//   );
// }


import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import SocialMedia from "../socialMedia/SocialMedia";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        {/* You can add a brief closing message if you like */}
        <div className="social-media-div">
          <SocialMedia theme={props.theme} />
        </div>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        {/* <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          © {new Date().getFullYear()} {greeting.title}
        </p> */}
      </Fade>
    </div>
  );
}