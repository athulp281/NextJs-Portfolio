"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Mysql</li>
                <li>Javascript</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className="list-disc pl-2">
                <li>Quest innovative solution</li>
                <li>Bsc cs under Calicut University</li>
                <li>Computer science under kerala State sylabus</li>
            </ul>
        ),
    },
    {
        title: "Certification",
        id: "Certification",
        content: (
            <ul className="list-disc pl-2">
                <li>Full Stack Developer</li>
                <li>Bsc cs Certification</li>
            </ul>
        ),
    },
];
console.log(TAB_DATA);
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
                <Image
                    src="/images/about-img.jpg"
                    alt="about-img"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        I m a passionate front-end developer with expertise in
                        React.js and Node.js. I specialize in creating dynamic
                        and user-friendly web applications that deliver
                        exceptional user experiences. With a keen eye for design
                        and a strong foundation in modern web technologies, I
                        thrive on transforming ideas into functional, visually
                        appealing digital solutions. Lets collaborate to bring
                        your web projects to life
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Education")}
                            active={tab === "Education"}
                        >
                            Education
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("Certification")}
                            active={tab === "Certification"}
                        >
                            Certification
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
