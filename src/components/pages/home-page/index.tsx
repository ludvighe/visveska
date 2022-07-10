import SocialComponent from "../../social/social-component";
import ballIcon from "../../../assets/icons/ball.png";
import "./index.scss";
import { changeColorScheme } from "../../../services/color-scheme";
import { createSignal } from "solid-js";

const HomePage = () => {
  const [svgColor, setSvgColor] = createSignal([136, 20, 26]);
  const [svgPos, setSvgPos] = createSignal(-5);
  document.addEventListener("scroll", (e) => {
    const offset = window.scrollY / 10;
    setSvgColor([136, 20 + offset, 26 + offset]);
    if (svgPos() > -100) setSvgPos(svgPos() - 0.005);
  });
  return (
    <div class="home-page">
      <svg
        width="8059"
        height="452"
        viewBox="0 0 8059 452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="line-svg-0"
        style={{ position: "fixed", left: `${svgPos()}vw`, width: "200vw" }}
      >
        <path
          d="M16 287.623C198.5 222.956 679.9 132.423 1145.5 287.623C1727.5 481.623 2003 458.622 2181.5 373.123C2360 287.623 2574 -61.3774 2892 31.6226C3210 124.623 3179 287.623 3423.5 287.623C3619.1 287.623 3769 215.289 3819.5 179.123C3889.83 129.956 4061.1 31.6226 4183.5 31.6226C4336.5 31.6226 4906.5 255 5194 250.5C5481.5 246 5754 111.5 5998.5 102C6243 92.5 6976 347.377 7311 317.5C7579 293.598 7911 163.874 8043.5 102"
          stroke={`rgba(${svgColor()[0]}, ${svgColor()[1]}, ${
            svgColor()[2]
          }, 0.5)`}
          stroke-linecap="round"
        />
      </svg>
      <svg
        width="8059"
        height="452"
        viewBox="0 0 8059 452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="line-svg-1"
        style={{ position: "fixed", left: `${svgPos()}vw`, width: "200vw" }}
      >
        <path
          d="M16 287.623C198.5 222.956 679.9 132.423 1145.5 287.623C1727.5 481.623 2003 458.622 2181.5 373.123C2360 287.623 2574 -61.3774 2892 31.6226C3210 124.623 3179 287.623 3423.5 287.623C3619.1 287.623 3769 215.289 3819.5 179.123C3889.83 129.956 4061.1 31.6226 4183.5 31.6226C4336.5 31.6226 4906.5 255 5194 250.5C5481.5 246 5754 111.5 5998.5 102C6243 92.5 6976 347.377 7311 317.5C7579 293.598 7911 163.874 8043.5 102"
          stroke={`rgba(${svgColor()[0]}, ${svgColor()[1]}, ${
            svgColor()[2]
          }, 0.3)`}
          stroke-linecap="round"
        />
      </svg>

      <img
        src={ballIcon}
        height="50"
        class="ball-icon"
        onClick={() => changeColorScheme()}
      />
      <br />
      <br />
      <br />
      <section class="social-section">
        <SocialComponent />
      </section>
      <div style={{ height: "500vh" }} />
    </div>
  );
};

export default HomePage;
