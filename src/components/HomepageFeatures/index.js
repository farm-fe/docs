import React from "react";
import clsx from "clsx";
// import Image from "@theme/IdealImage";
import Rocket from "@site/static/img/rocket.png";
import Plug from "@site/static/img/plug.png";
import FeaturePng from "@site/static/img/feature.png";
import Box from "@site/static/img/box.png";
import Compatibility from "@site/static/img/compatible.png";
import Consistency from "@site/static/img/consistency.png";
import styles from "./styles.module.css";
const FeatureList = [
  {
    title: "Super Fast",
    Img: Rocket,
    description: (
      <>
        Super Fast: Written in Rust, start a React / Vue project in milliseconds
        and perform an HMR update within 10ms for most situations.
      </>
    ),
    className:
      "w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2",
  },
  {
    title: "Rich Features",
    Img: FeaturePng,
    description: (
      <>
        Farm support compiling Html, Css, Js/Jsx/Ts/Tsx, Json, Static Assets out
        of box, support sass, less, react-refresh by official plugins, support
        lazy compiling, partial bundling and more
      </>
    ),
    className:
      "w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2",
  },
  {
    title: "Fully Pluggable",
    Img: Plug,
    description: (
      <>
        Fully Pluggable: Everything inside Farm is powered by plugins, achieve
        anything you want by creating a plugin. Supports both Rust and
        JavaScript plugins.
      </>
    ),
    className:
      " w-full flex h-52 rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-auto",
  },
  {
    title: "Partial Bundling",
    Img: Box,
    description: (
      <>
        Partial Bundling: Bundle your project into a few reasonable bundles,
        speeding up resource loading without losing caching granularity.
      </>
    ),
    className:
      "w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2",
  },
  {
    title: "Consistency",
    Img: Consistency,
    description: (
      <>
        Consistency: What you see in development will be the same as what you
        get in production.
      </>
    ),
    className:
      " w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2",
  },
  {
    title: "Compatibility",
    Img: Compatibility,
    description: (
      <>Compatibility: Supports both legacy (ES5) and modern browsers.</>
    ),
    className:
      " w-full flex h-52 rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-auto",
  },
];

function Feature({ Img, title, description, className }) {
  return (
    <div
      className={clsx(
        "rounded-lg shadow-lg overflow-hidden flex items-center flex-col",
        styles.card,
        styles.farmButton,
        className
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center absolute",
          styles.backgroundImage
        )}
      >
        <img src={Img} className={clsx("text--center w-20 h-20")} role="img" />
      </div>
      <img src={Img} className={clsx("text--center w-16 h-16")} role="img" />
      <div className="p-6 flex-grow flex-shrink">
        <h3 className="text-lg font-bold mt-4 mb-2">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className="my-4">
      <div className="max-w-7xl mx-auto flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {FeatureList.map((feature, index) => (
            <Feature
              key={index}
              {...feature}
              className="flex-grow flex-shrink my-4"
            />
          ))}
          <div className={styles.carda}>
            <div className={styles["carda-content"]}>
              <h3 className={styles["carda-title"]}>
                I know exactly what I'm doing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
