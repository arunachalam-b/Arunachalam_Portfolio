"use client";

import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import Row from "@/components/common/Row";
import socialLinks from "@/data/socialLinks";
import useIsInViewport from "@/hooks/useIsInViewport";
import dynamic from "next/dynamic";
import Image from "next/image";
const Carousel = dynamic(
  () => import("react-responsive-carousel").then((carousel) => carousel.Carousel),
  {
    ssr: false,
  }
);

const HomeSection6 = ({ current, setCurrent }) => {
  const contactRef = useRef(null);

  const isInView = useIsInViewport(contactRef);

  const onHandleClickUrl = (url) => {
    if (typeof window === "undefined" || !url) return;

    window.open(url, "_blank");
  };

  useEffect(() => {
    if (isInView && current !== "achievements") setCurrent("achievements");

    return () => {
      if (isInView && current === "achievements") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[90vh] items-center justify-center"
      id="achievements"
      elementRef={contactRef}
    >
      <ConstraintedBox classNames="p-4 py-12">
        <h2 className="text-center mx-auto">
          <span className="text-[var(--primaryColor)]">Achievements</span>
        </h2>

        <Column classes="mt-12 w-full">
          <WrappedBox classes="sm:grid-cols-2 w-full mx-auto gap-4">
          <Carousel showArrows={true}>
                <div>
                    <Image
                src={"/images/Daimler_CEO.jpg"}
                alt="profile"
                width={600}
                height={400}
                sizes="100%"
                // placeholder="blur"
                // blurDataURL={About.avatarUrl}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1 / 1",
                }}
              />
                    <p className="legend">Daimler CEO</p>
                </div>
                <div>
                    <img src="/images/Here Maps.JPG" />
                    <p className="legend">Here Maps</p>
                </div>
                <div>
                    <img src="/images/Societe Generale CEO.jpg" />
                    <p className="legend">Societe Generale CEO</p>
                </div>
            </Carousel>
          </WrappedBox>

          {/* <h3 className="text-center mx-auto mt-12">
            I&apos;m{" "}
            <span className="text-[var(--primaryColor)]">Available</span> for
            freelancing.
          </h3> */}
        </Column>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
