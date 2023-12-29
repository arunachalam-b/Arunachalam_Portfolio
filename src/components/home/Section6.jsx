"use client";

import { useRef, useEffect } from "react";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";
import achievements from "@/data/achievements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import ReadMoreText from "../common/ReadMoreText";

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
          <WrappedBox classes="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mt-12">
            {achievements.map((achievement, index) => {
              return (
                <Column
                  key={`service-${index}`}
                  classes="bg-[var(--textColor10)] p-4 px-8 rounded-[var(--borderRadius)] w-full cursor-pointer"
                  onClick={() => {
                    window.open(achievement.link, "_blank");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-2xl md:text-3xl text-[var(--primaryColor)]"
                  />

                  <small className="font-bold mt-4 text-[var(--textColorLight)]">
                    {achievement.duration}
                  </small>

                  <h4 className="font-bold mt-1">{achievement.designation}</h4>

                  <p className="mt-1 text-[var(--textColorLight)] font-bold">
                    @ {achievement.company}
                  </p>

                  <ReadMoreText className="mt-4 text-[var(--textColorLight)]">
                    {achievement.description}
                  </ReadMoreText>
                </Column>
              );
            })}
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
