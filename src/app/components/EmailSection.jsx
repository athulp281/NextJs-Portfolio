"use client";
import React, { useState } from "react";
import githubIcon from "../../../public/github.png";
import linkedinIcon from "../../../public/linkedin.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmited, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };
        try {
            const response = await fetch(endpoint, options);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const resData = await response.json();
            console.log(resData);
            if (response.status === 200) {
                console.log("Message send.");
                setEmailSubmitted(true);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="">
                <h5 className="text-xl font-bold text-white my-2">
                    Lets Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, amet. Recusandae ducimus laborum minus dolores
                    quaerat, odio inventore error pariatur hic dolorum, ratione
                    atque et aspernatur natus exercitationem omnis. Praesentium?
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="github.com">
                        <Image
                            src={githubIcon}
                            alt="github Icon"
                            className="bg-white border rounded-full"
                        />
                    </Link>
                    <Link href="linkedin.com">
                        <Image
                            src={linkedinIcon}
                            alt="linkedin icon"
                            className="bg-white border rounded-full"
                        />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col " onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            type="email"
                            className="text-white block mb-2  text-sm font-medium"
                        >
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2  text-sm font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Enter your subject"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Enter your message"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                    {emailSubmited && (
                        <p className="text-green-500 text-sm mt-2">
                            Email send successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
