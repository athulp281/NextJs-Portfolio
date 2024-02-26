import React from "react";
import Image from "next/image";

const AboutSection = () => {
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
                    <h2>About Me</h2>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
