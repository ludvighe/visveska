import SocialComponent from "../../social/social-component";
import ballIcon from "../../../assets/icons/ball.png";
import "./index.scss";
import { changeColorScheme } from "../../../services/color-scheme";
import { createSignal } from "solid-js";
import {
  ShowcaseCardContainer,
  ShowcaseCardData,
} from "../../common/showcase-card.tsx";
import CssesserImg from "../../../assets/images/cssesser.web.app_grader.png";
import VispassImg from "../../../assets/images/vispass.web.app_.png";
import CodicesImg from "../../../assets/images/visvis.org_.png";
import PeaceinapodImg from "../../../assets/images/peaceinapod_bg.png";
import MurmelpassImg from "../../../assets/images/murmelpass_screenshot.png";

const siteShowcaseData: ShowcaseCardData[] = [
  {
    title: "Vispass",
    subtitle: "A password manager that doesn't store any passwords.",
    websiteUrl: "https://vispass.web.app/",
    sourceUrl: "https://github.com/ludvighe/vispass",
    image: VispassImg,
  },
  {
    title: "Cssesser",
    subtitle: "Graphical tools for generating and converting css.",
    websiteUrl: "https://cssesser.web.app/",
    sourceUrl: "https://github.com/ludvighe/cssesser",
    image: CssesserImg,
  },
  {
    title: "Peaceinapod",
    subtitle: "An app for listening to podcasts.",
    apkUrl: "https://drive.proton.me/urls/VB9MPSTS20#8F3illUKhCUn",
    sourceUrl: "https://github.com/ludvighe/peaceinapod",
    image: PeaceinapodImg,
  },
  {
    title: "Codices",
    subtitle: "A note taking app.",
    websiteUrl: "https://visvis.org/",
    sourceUrl: "https://github.com/ludvighe/codices",
    image: CodicesImg,
  },
  {
    title: "Password Manager Extension",
    subtitle:
      "A Chrome extension to generate domain and user specific password.",
    websiteUrl:
      "https://chrome.google.com/webstore/detail/murmelpass/mapffpggohioipkafngincgbnleljnfh",
    sourceUrl: "https://github.com/ludvighe/murmelpass-extension",
    image: MurmelpassImg,
  },
];

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
      <section class="showcase-section">
        <ShowcaseCardContainer data={siteShowcaseData} />
      </section>
      <section class="social-section">
        <SocialComponent />
      </section>
      <div style={{ height: "500vh" }} />
    </div>
  );
};

export default HomePage;
