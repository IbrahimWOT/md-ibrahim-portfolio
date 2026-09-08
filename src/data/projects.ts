// src/data/projects.ts

export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    image: string;
}

export const projectsData = {
    title: "Featured Projects",
    projects: [
        {
            title: "Colorectal Polyp Segmentation & Classification",
            description: "Engineered a hybrid deep learning pipeline integrating U-Net and Vision Transformer (ViT) architectures on a custom-curated merged dataset for precise colorectal polyp segmentation and classification.",
            tags: ["Python", "PyTorch", "U-Net", "ViT", "Deep Learning"],
            githubUrl: "https://www.kaggle.com/datasets/rakibulislam414/polyx-master-dataset",
            image: "/projects/polyp.png",
        },
        {
            title: "FoodDrop - Food Waste Reduction Platform",
            description: "Developed a comprehensive web platform connecting food donors with NGOs to minimize waste, featuring donation tracking and real-time coordination.",
            tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
            githubUrl: "https://github.com/FoodDrop-SDP4/FoodDrop",
            image: "/projects/fooddrop.jpeg",
        },
        {
            title: "KrishiBondhu - Smart Agriculture Tech",
            description: "Engineered a smart agriculture mobile app featuring real-time weather forecasting, AI pest detection, and fair price insights, plus an integrated p2p marketplace.",
            tags: ["Flutter", "Firebase", "AI", "Mobile App"],
            githubUrl: "https://github.com/KrishiBondhu/krishi_bondhu_app_bd",
            image: "/projects/krishibondhu.jpg",
        },
        {
            title: "Employee Management System (EMS)",
            description: "Developed a desktop application featuring CRUD operations, role-based access control, and efficient MongoDB data storage for corporate workflow management.",
            tags: ["Python", "CustomTkinter", "MongoDB"],
            githubUrl: "https://github.com/IbrahimWOT/Employee-Management-System",
            image: "/projects/ems.jpg",
        },
        {
            title: "CityRide - Vulnerable Rideshare Security Lab",
            description: "Engineered an intentionally vulnerable rideshare web app to practice penetration testing, focusing on mitigating SQL Injection and CSRF vulnerabilities.",
            tags: ["PHP", "MySQL", "Burp Suite", "SQLmap"],
            githubUrl: "https://github.com/IbrahimWOT/city_rideshare",
            image: "/projects/cityride.png",
        },
        {
            title: "Apple Shooter Game",
            description: "Developed an interactive target-shooting game featuring precise projectile physics, trajectory calculation, and engaging scoring mechanisms.",
            tags: ["C++", "Graphics", "Game Dev"],
            githubUrl: "https://github.com/IbrahimWOT/Apple-shooter-Game", // তোমার রিয়েল গিটহাব লিংক এখানে বসিয়ে নিবে
            image: "/projects/apple_shooter.png",
        },
    ] as Project[]
};