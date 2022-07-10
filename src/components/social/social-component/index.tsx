import {
  createEffect,
  createMemo,
  createSignal,
  For,
  JSX,
  on,
  onMount,
} from "solid-js";
import "./index.scss";
import GithubSvg from "../../../assets/icons/companies/github.svg";
import LinkedInSvg from "../../../assets/icons/companies/linkedin.svg";
import ProtonMailSvg from "../../../assets/icons/companies/protonmail.svg";
import GlintImg from "../../../assets/icons/glint.png";
import Counter from "../../common/counter";

const Thumbnail = ({
  name,
  href,
  src,
  onClick,
  disabled,
}: {
  name: string;
  href: string;
  src: any;
  onClick: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> | any;
  disabled: boolean;
}) => {
  const [glintState, setGlintState] = createSignal({
    show: false,
    position: [0, 0],
  });
  const [mousePosition, setMousePosition] = createSignal([0, 0]);

  const _onClick = () => {
    if (onClick) {
      if (!disabled) {
        setGlintState({ show: true, position: mousePosition() });
        setTimeout(() => {
          setGlintState({ ...glintState(), show: false });
          window.open(href);
        }, 600);
        onClick();
      }
    }
  };
  return (
    <div
      class="thumbnail"
      title={name}
      onClick={_onClick}
      onMouseMove={(e) => {
        setMousePosition([e.offsetX, e.offsetY]);
      }}
    >
      <img src={src} alt="linkedin-svg" />
      {/* <div class="title">{name}</div> */}
      {glintState().show && (
        <img
          src={GlintImg}
          class="glint"
          style={{
            left: `${glintState().position[0]}px`,
            top: `${glintState().position[1]}px`,
          }}
        />
      )}
    </div>
  );
};

const thumbnails = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ludvig-henriksson-0b7b80178",
    src: LinkedInSvg,
  },
  {
    name: "Github",
    href: "https://github.com/ludvighe",
    src: GithubSvg,
  },
  {
    name: "Email",
    href: "mailto:ludvigfh@pm.me",
    src: ProtonMailSvg,
  },
];

const SocialComponent = () => {
  const [clickCount, setClickCount] = createSignal(0);
  const [canClick, setCanClick] = createSignal(true);

  onMount(() => {
    const initialClickCount = window.localStorage.getItem("clique_count");
    if (initialClickCount) {
      setClickCount(parseInt(initialClickCount));
    }
  });

  createEffect(() => {
    const length = clickCount().toString().split("").length;
    setCanClick(false);
    setTimeout(() => setCanClick(true), 305 * length);
  });
  const handleOnThumbnailClick = (thumbnail: {
    name: string;
    href: string;
    src: any;
  }) => {
    if (canClick()) {
      const value = clickCount() + 1;
      window.localStorage.setItem("clique_count", value.toString());
      setClickCount(value);
    }
  };

  return (
    <div class="social-component">
      {/* <p>A social component</p> */}
      <div class="thumbnails-container">
        <For each={thumbnails}>
          {(item) => (
            <Thumbnail
              name={item.name}
              href={item.href}
              src={item.src}
              onClick={() => handleOnThumbnailClick(item)}
              disabled={!canClick()}
            />
          )}
        </For>
      </div>
      <div class="counter-container">
        <h4>Clique counter</h4>
        <div>
          <Counter value={clickCount} />
        </div>
      </div>
    </div>
  );
};

export default SocialComponent;
