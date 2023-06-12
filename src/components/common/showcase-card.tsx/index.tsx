import { For } from "solid-js";
import "./index.scss";

export type ShowcaseCardData = {
  title: string;
  subtitle: string;
  websiteUrl?: string;
  apkUrl?: string;
  sourceUrl: string;
  image: string;
};

export const ShowcaseCard = ({
  title,
  subtitle,
  websiteUrl,
  apkUrl,
  sourceUrl,
  image,
}: ShowcaseCardData) => {
  return (
    <div class="showcase-card thumbnail">
      <img src={image} />
      <div class="showcase-description">
        <h2>{title}</h2>
        <section class="collapse">
          <p>{subtitle}</p>
          <div class="url-container">
            <a
              href={sourceUrl}
              class="source-btn thumbnail"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            {websiteUrl && (
              <a
                href={websiteUrl}
                class="website-btn thumbnail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
            {apkUrl && (
              <a
                href={apkUrl}
                class="website-btn thumbnail"
                target="_blank"
                rel="noopener noreferrer"
              >
                APK
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export const ShowcaseCardContainer = ({
  data,
}: {
  data: ShowcaseCardData[];
}) => {
  return (
    <div class="showcase-card-container">
      <For each={data}>{(cardData) => <ShowcaseCard {...cardData} />}</For>
    </div>
  );
};
