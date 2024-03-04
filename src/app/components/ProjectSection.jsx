"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Sample Title 1",
        description: "Description for sample item 1",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Sample Title 2",
        description: "Description for sample item 2",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/4.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/5.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/6.jpg",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    // Add more objects as needed
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projects.filter((item) => item.tag.includes(tag));
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((item) => {
                    return (
                        <ProjectCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            imgUrl={item.image}
                            gitUrl={item.gitUrl}
                            previewUrl={item.previewUrl}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ProjectSection;
