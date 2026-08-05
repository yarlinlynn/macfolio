
// QUESTIONS AND ANSWES: FAQ
export const faq = [
    {
        question: "Tell me about yourself.",
        answer: "I'm a software developer specializing in frontend with a passion for building responsive and interactive web applications."
    },
    {
        question: "What technologies do you use?",
        answer: "HTML, CSS, JavaScript, React, Git/GitHub, Tailwind CSS, Bootstrap"
    },
    {
        question: "What are you currently learning?",
        answer: "I'm expanding my frontend knowledge by learning GSAP for better and immersive animations and frontend experiences while building full-scale web applications using HTML, CSS & JavaScript"
    },
    {
        question: "Are you available for work?",
        answer: "Yes! I'm currently looking for frontend developer opportunities."
    }
]

// SKILL STACK
export const techStack = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS","CSS", "Bootstrap"],
  },
  {
    category: "Framework",
    items: ["React.js"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

// SOCIAL MEDIA LINKS
export const socials = [
    {
        id: "phone",
        name: "Phone",
        img: "/assets/apps/phone.png",
        icon: "ri-phone-fill",
        url: "tel:+27846333377",
    },
    {
        id: "gmail",
        name: "Gmail",
        img: "/assets/apps/gmail.png",
        icon: "ri-mail-fill",
        url: "mailto:yarlinlynn.com",
    },
    {
        id: "github",
        name: "GitHub",
        img: "/assets/apps/github.png",
        icon: "ri-github-fill",
        url: "https://github.com/yarlinlynn",
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        img: "/assets/apps/linkedin.png",
        icon: "ri-linkedin-box-fill",
        url: "https://www.linkedin.com/in/yarlin-lynn",
    },
    {
        id: "instagram",
        name: "Instagram",
        img: "/assets/apps/instagram.png",
        icon: "ri-instagram-fill",
        url: "https://www.instagram.com/yarlin.lynn_",
    },
    {
        id: "twitter",
        name: "X",
        img: "/assets/apps/twitter.png",
        icon: "ri-twitter-x-fill",
        url: "https://x.com/yourusername",
    },
    {
        id: "discord",
        name: "Discord",
        img: "/assets/apps/discord.png",
        icon: "ri-discord-fill",
        url: "https://discord.com/users/1362060392846856325",
    },
    {
        id: "tiktok",
        name: "TikTok",
        img: "/assets/apps/tiktok.png",
        icon: "ri-tiktok-fill",
        url: "https://www.tiktok.com/@yarlin.lynn_",
    },
];

// DOCK APPS
export const dockIcons = [
    {
        id: "phone",
        name: "Phone",
        icon: "/assets/apps/phone.png",  
        url: "tel:+27846333377",  
        canOpen: false,
    },
    {
        id: "finder",
        name: "Finder",
        icon: "/assets/apps/finder.png",    
        canOpen: true,
    },
    {
        id: "launchpad",
        name: "Launchpad",
        icon: "/assets/apps/launchpad.png",    
        canOpen: false,
    },
    {
        id: "safri",
        name: "Safri",
        icon: "/assets/apps/safri.png",    
        canOpen: false,
    },
    {
        id: "messages",
        name: "Messages",
        icon: "/assets/apps/messages.png",    
        canOpen: false,
    },
    {
        id: "maps",
        name: "Maps",
        icon: "/assets/apps/maps.png",    
        canOpen: false,
    },
    {
        id: "photos",
        name: "Photos",
        icon: "/assets/apps/photos.png",    
        canOpen: false,
    },
    {
        id: "player",
        name: "Player",
        icon: "/assets/apps/player.png",    
        canOpen: false,
    },
    {
        id: "gmail",
        name: "Gmail",
        icon: "/assets/apps/gmail.png",    
        canOpen: true,
    },
    {
        id: "facetime",
        name: "FaceTime",
        icon: "/assets/apps/facetime.png",    
        canOpen: false,
    },
    {
        id: "calendar",
        name: "Calendar",
        icon: "/assets/apps/calendar-dektop.png",    
        canOpen: false,
    },
    {
        id: "reminders",
        name: "Reminders",
        icon: "/assets/apps/reminders.png",    
        canOpen: false,
    },
    {
        id: "preview",
        name: "Preview",
        icon: "/assets/apps/preview.png",    
        canOpen: false,
    },
    {
        id: "notes",
        name: "Notes",
        icon: "/assets/apps/notes.png",    
        canOpen: true,
    },
    {
        id: "appstore",
        name: "App Store",
        icon: "/assets/apps/appstore.png",    
        canOpen: false,
    },
    {
        id: "settings",
        name: "Settings",
        icon: "/assets/apps/settings.png",    
        canOpen: false,
    },
    {
        id: "siri",
        name: "Siri",
        icon: "/assets/apps/siri.png",    
        canOpen: false,
    },
    {
        id: "spotify",
        name: "Spotify",
        icon: "/assets/apps/spotify.png",    
        canOpen: true,
    },
    {
        id: "trash",
        name: "Trash",
        icon: "/assets/apps/trash-full.png",    
        canOpen: false,
    },
];

// WORK FOLDER WITH INDIVIDUAL PROJECTS
export const WORK_FOLDER = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/assets/icons/work.svg",
    kind: "folder",
    children: [
        // PROJECT 1:
        {
            id: 5,
            name: "Kanban Task Board",
            icon: "/assets/docs/folder.png",
            kind: "folder",
            position: "left: calc(.25rem * 5); top: calc(.25rem * 10);",  //->icon position inside Finder
            //windowPosition: "top-[45vh] left-[50rem]",  ->optional: Finder desktop window position
            children: [
                {
                    id: 1,
                    name: "Kanban.txt",
                    icon: "/assets/docs/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "left: calc(.25rem * 10); top: calc(.25rem * 5);", //->file position in finder window
                    description: [ 
                        // insert project text here ...
                        "A modern task management web application built with HTML5, Tailwind CSS, JavaScript and LocalStorage API. The app allows users to create, organize, and prioritize tasks with an intuitive interface and dark/light theme support.",

                        "The main features include a task management system where users can create new tasks via a dynamic modal form which includes a task title, description, status (Todo, In Progress, Done), priority (High, Medium, Low) where aasks are automatically sorted by priority for better organization and validation ensures a task cannot be created without a title. User interface was fully styled using Tailwind CSS for a responsive, clean, and modern look with dark and light mode with smooth toggle functionality which syncs theme preference across both desktop and mobile toggles and user’s theme choice is saved to localStorage and persists on reload. Project has a show/hide sidebar functionality for distraction-free task focus, tasks that are saved in localStorage so data persists across page reloads and newly created tasks are automatically stored and re-rendered into the DOM",

                        "This project was developed as part of learning JavaScript, showcasing the concepts and skills I’ve learned along the way. It reflects my growth in building interactive applications, handling data persistence, and creating user-friendly interfaces.",
                    ]
                },
                {
                    id: 2,
                    name: "Kanban.img",
                    icon: "/assets/docs/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top: calc(.25rem * 49); right: calc(.25rem * 80);", //->file position in finder window
                    imageUrl: "/assets/images/projectImages/kanban-light.png", //inert image path here
                },
                {
                    id: 3,
                    name: "kanban.com",
                    icon: "/assets/docs/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://kanban-taskboard-made-simple.netlify.app/", //add project live link
                    position: "top: calc(.25rem * 10); right: calc(.25rem * 20);", //->file position in finder window
                },
            ]
        },

        // PROJECT 2:
        {
            id: 6,
            name: "Space Tourism",
            icon: "/assets/docs/folder.png",
            kind: "folder",
            position: "top: calc(.25rem * 40); right: calc(.25rem * 80);",  //->icon position inside Finder
            //windowPosition: "top-[10vh] left-10",  ->optional: Finder desktop window position
            children: [
                {
                    id: 1,
                    name: "Space Tourism.txt",
                    icon: "/assets/docs/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top: calc(.25rem * 5); right: calc(.25rem * 10);", //->file position in finder window
                    description: [ 
                        // insert project text here ...
                        "A responsive multi-page space tourism website built as a front-end project to showcase modern web development practices, responsive design, and interactive user experiences. The application allows users to explore space destinations, meet crew members, and discover cutting-edge space technology through an engaging and visually immersive interface.",

                        "Each page features rich imagery, responsive layouts, and interactive content that creates an engaging experience while demonstrating strong front-end development skills.",
                    ]
                },
                {
                    id: 2,
                    name: "Space Tourism.img",
                    icon: "/assets/docs/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "left: calc(.25rem * 80); top: calc(.25rem * 45);", //->img position in finder window
                    imageUrl: "/assets/images/projectImages/space-tourism.png", //inert image path here
                },
                {
                    id: 3,
                    name: "Space Tourism.com",
                    icon: "/assets/docs/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://space-tourism-website-multi-page.netlify.app/", //add project live link
                    position: "left: calc(.25rem * 20); top: calc(.25rem * 20);", //->file position in finder window
                },
            ]
        },

        // PROJECT 3:
        
    ]
};

// ABOUT ME FOLDER
export const ABOUT_FOLDER = {
    id: 2,
    type: "work",
    name: "About me",
    icon: "/assets/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "About me",
            icon: "/assets/docs/folder.png",
            kind: "folder",
            fileType: "folder",
            mobileMode: "profile",
            position: "left: calc(.25rem * 5); top: calc(.25rem * 10);", //->file position in finder window

            children: [
                {
                    id: 1,
                    name: "profile.txt",
                    icon: "/assets/docs/txt.png",
                    kind: "file",
                    fileType: "txt",
                    // finderHidden: true,
                    position: "top: calc(.25rem * 5); left: calc(.25rem * 10);", //->file position in finder window
                    description: [ 
                        // insert project text here ...
                        "Hey there I'm Yarlin, a software developer who enjoys building sleek, interactive websites that actually work well",

                        "I specialize in frontend developement using tools like HTML, CSS and JavaScript, and working to add GSAP into my arsenal of tools.", 
                        
                        "Currenly in the process of building creatve projects to further my learning by going back to building basic websites with HTML, CSS & JavaScript to solidify my foundation to tackle Node.js. In doing this I will be able to build fullstack projects.",
                        
                        "Interested? Keep a look out for more on my Github or feel free to browse further",
                    ],
                    imageUrl: "/assets/images/profileImages/profile.jpg",
                },
                {
                    id: 2,
                    name: "profile.img",
                    icon: "/assets/docs/image.png",
                    kind: "file",
                    fileType: "img",
                    // finderHidden: true,
                    position: "top: calc(.25rem * 52); right: calc(.25rem * 80);", //->img position in finder window
                    imageUrl: "/assets/images/profileImages/profile-2.jpg", //inert image path here
                },
                {
                    id: 3,
                    name: "profile.img",
                    icon: "/assets/docs/image.png",
                    kind: "file",
                    fileType: "img",
                    // finderHidden: true,
                    position: "top: calc(.25rem * 52); right: calc(.25rem * 80);", //->img position in finder window
                    imageUrl: "/assets/images/profileImages/profile.jpg", //inert image path here
                },
            ]
        },
    ]
};

// RESUME FOLDER
export const RESUME_FOLDER = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/assets/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/assets/docs/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "left: calc(.25rem * 5); top: calc(.25rem * 10);", //->file position in finder window
            pdfUrl: "/assets/files/Resume-2026.pdf"
        },
    ]
};

// TRASH PROJECTS FOLDER
export const TRASH_FOLDER = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/assets/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "portfolio.png",
            icon: "/assets/docs/image.png",
            kind: "file",
            fileType: "img",
            imageUrl: "./assets/images/projectImages/old-portfolio.png", //inert image path here
            position: "top: calc(.25rem * 10); left: calc(.25rem * 10);", //->file position in finder window
        },
        {
            id: 2,
            name: "portfolio.com",
            icon: "/assets/docs/plain.png",
            kind: "file",
            fileType: "url",
            href: "https://portfolio-yarlinlynn.netlify.app/", //inert image path here
            position: "top: calc(.25rem * 40); left: calc(.25rem * 80);", //->file position in finder window
        }
    ]
};

export const locations = {
  work: WORK_FOLDER,
  about: ABOUT_FOLDER,
  resume: RESUME_FOLDER,
  trash: TRASH_FOLDER,
};

// WINDOW INDEX
export const INITIAL_Z_INDEX = 1000;

// ALL WINDOWS
export const WINDOW_CONFIG = {
    finder: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    files: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    notes: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    resume: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    gmail: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    txtfile: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    imgfile: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    aboutme: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    aboutText: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    aboutImage1: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    },
    aboutImage2: {
        isOpen: false,
        zIndex: INITIAL_Z_INDEX,
        data: null
    }
};