
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
            name: "Project 1",
            icon: "/assets/docs/folder.png",
            kind: "folder",
            //position: "top-10 left-5",  ->icon position inside Finder
            //windowPosition: "top-[45vh] left-[50rem]",  ->optional: Finder desktop window position
            children: [
                {
                    id: 1,
                    name: "Project 1.txt",
                    icon: "/assets/docs/txt.png",
                    kind: "file",
                    fileType: "txt",
                    //position: "top-5 left-10", ->file position in finder window
                    description: [ 
                        // insert project text here ...
                    ]
                },
                {
                    id: 2,
                    name: "Project 1.img",
                    icon: "/assets/docs/image.png",
                    kind: "file",
                    fileType: "img",
                    //position: "top-52 right-80", ->img position in finder window
                    imageUrl: "", //inert image path here
                },
                {
                    id: 3,
                    name: "Project 1.com",
                    icon: "/assets/docs/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "", //add project live link
                    //position: "top-10 right-20",
                }
            ]
        },

        // PROJECT 2:
        {
            id: 6,
            name: "Project 2",
            icon: "/assets/docs/folder.png",
            kind: "folder",
            //position: "top-52 right-80",  ->icon position inside Finder
            //windowPosition: "top-[10vh] left-10",  ->optional: Finder desktop window position
            children: [
                {
                    id: 1,
                    name: "Project 2.txt",
                    icon: "/assets/docs/txt.png",
                    kind: "file",
                    fileType: "txt",
                    //position: "top-5 right-10", ->file position in finder window
                    description: [ 
                        // insert project text here ...
                    ]
                },
                {
                    id: 2,
                    name: "Project 2.img",
                    icon: "/assets/docs/image.png",
                    kind: "file",
                    fileType: "img",
                    //position: "top-52 left-80", ->img position in finder window
                    imageUrl: "", //inert image path here
                },
                {
                    id: 3,
                    name: "Project 2.com",
                    icon: "/assets/docs/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "", //add project live link
                    //position: "top-20 left-20",
                }
            ]
        },

        // PROJECT 3:
        {
            id: 7,
            name: "Project 3",
            icon: "/assets/docs/folder.png",
            kind: "folder",
            //position: "top-10 left-80",  ->icon position inside Finder
            //windowPosition: "top-[70vh] right-7",  ->optional: Finder desktop window position
            children: [
                {
                    id: 1,
                    name: "Project 3.txt",
                    icon: "/assets/docs/txt.png",
                    kind: "file",
                    fileType: "txt",
                    //position: "top-5 left-10", ->file position in finder window
                    description: [ 
                        // insert project text here ...
                    ]
                },
                {
                    id: 2,
                    name: "Project 3.img",
                    icon: "/assets/docs/image.png",
                    kind: "file",
                    fileType: "img",
                    //position: "top-52 right-80", ->img position in finder window
                    imageUrl: "", //inert image path here
                },
                {
                    id: 3,
                    name: "Project 3.com",
                    icon: "/assets/docs/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "", //add project live link
                    //position: "top-10 right-20",
                }
            ]
        },
    ]
};

// ABOUT ME FOLDER
export const ABOUT_FOLDER = {
    id: 2,
    type: "work",
    name: "Work",
    icon: "/assets/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "About me",
            icon: "/assets/docs/folder.png",
            kind: "file",
            fileType: "folder"
        }
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
        },
        {
            id: 2,
            name: "Cover Letter",
            icon: "/assets/docs/txt.png",
            kind: "file",
            fileType: "txt",
        }
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
            icon: "/assets/icons/trash.svg",
            kind: "file",
            fileType: "img",
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
};