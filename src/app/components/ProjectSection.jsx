import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "Sample Title 1",
        description: "Description for sample item 1",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "Sample Title 2",
        description: "Description for sample item 2",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/4.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 5,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/5.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 6,
        title: "Sample Title 3",
        description: "Description for sample item 3",
        image: "/images/projects/6.jpg",
        tag: ["All", "Web"],
    },
    // Add more objects as needed
];

const ProjectSection = () => {
    return (
        <>
            <h2>My Projects</h2>
            <div>
                {projects.map((item) => {
                    return (
                        <ProjectCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            imgUrl={item.image}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ProjectSection;
