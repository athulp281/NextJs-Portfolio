"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

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
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eveniet beatae dolore sed soluta cum magnam quidem
                        eum dolor vero ducimus. Iure nemo voluptate autem
                        architecto, inventore veritatis vero totam eaque.
                    </p>
                    <div className="flex flex-row mt-8">
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
                            selectTab={() => handleTabChange("Experiance")}
                            active={tab === "Experiance"}
                        >
                            Experiance
                        </TabButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
