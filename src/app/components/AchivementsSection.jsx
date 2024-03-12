"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);

const achieventsList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100000",
    },
    {
        metric: "Awards",
        value: "10",
        postfix: "+",
    },
    {
        metric: "Years",
        value: "2",
        postfix: "+",
    },
];

const AchivementsSection = () => {
    return (
        <div className="py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {achieventsList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4"
                        >
                            <h2 className="text-white tesxt-4xl font-bold flex flex-row">
                                {item.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(item.value)}
                                    locale="en-US"
                                    className="text-white  font-bold"
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1),
                                        };
                                    }}
                                />
                                {item.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">
                                {item.metric}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchivementsSection;
