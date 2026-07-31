# 🖥️ Macfolio — macOS Inspired Portfolio

A fully interactive macOS-inspired portfolio website built from scratch using **HTML, CSS, and JavaScript**.

Macfolio recreates the desktop experience of macOS inside the browser, featuring draggable windows, Finder-style navigation, desktop applications, responsive layouts, and interactive UI elements.

🌐 Live Demo: https://ios-macfolio.netlify.app/

📂 Repository: https://github.com/yarlinlynn/macfolio

___

## ✨ Overview

Macfolio is a personal portfolio designed to feel like a native desktop operating system rather than a traditional website.

The project focuses on recreating the familiar macOS workflow:
- Desktop environment
- Application windows
- Finder navigation
- File browsing 
- Window controls
- Window drag interactions
- esponsive mobile file browser 
- Interactive portfolio content

The goal was to transform a traditional portfolio into an immersive experience where users can explore projects, resume information, and personal details through a familiar operating system interface.

--- 

## 🚀 Features
### 🖥️ Desktop Environment

- macOS-inspired desktop layout
- Application dock
- Desktop icons
- Window management system
- Dynamic window layering using z-index
- Draggable application windows
- Window open, close, and focus states

<br/>

## 📂 Finder Application

The desktop version includes a Finder-style file explorer.
#### Features:

- Sidebar navigation
- Folder hierarchy
- File previews
- Project folders
- Image previews
- Text document previews
- PDF resume viewing
- External project links

<br/>

## Mobile Files Application

A separate mobile-focused file browser was created instead of simply shrinking the desktop Finder.
#### Features:

- Mobile-friendly navigation
- Breadcrumb navigation
- Folder traversal
- File previews inside the application
- Responsive layouts

<br/>

## 🪟 Window Components

Each application is built as a reusable window component.
Implemented windows include:

- Finder
- Files
- Notes
- Resume viewer
- Image viewer
- Text viewer
- Gmail-inspired application

Each window contains:

- Custom header
- Window controls
- Drag functionality
- Dynamic content rendering

--- 

## 🏗️ Architecture

Macfolio uses a custom JavaScript window management system.

#### Window Manager

A central ``WindowManager`` controls:

- Window registration
- Opening windows
- Closing windows
- Focusing windows
- Passing data into components

Example workflow:
```
 User clicks file
            | 
            ↓
    Finder detects file type
            | 
            ↓
    WindowManager.open()
            | 
            ↓
    Relevant window component renders
            | 
            ↓
    Content displayed inside window
```

--- 

## 📁 File Data Structure
Portfolio content is stored using JavaScript objects rather than hardcoded HTML.
Example:
```
{
    name: "Project 1.txt",
    kind: "file",
    fileType: "txt",
    description:[
        "Project description..."
    ]
}
```

This allows Finder and Files applications to dynamically render:
- folders
- images
- text files
- PDFs
- external links

--- 

## 🛠️ Technologies Used
Core Technologies
- HTML5
- CSS3
- JavaScript ES6+
- DOM manipulation
- Responsive design

<br/>

## 📚 External Libraries
**PDF.js**

Used for rendering PDF documents directly inside the portfolio window.
Features:
- Embedded resume viewer
- Canvas-based PDF rendering
- Custom PDF controls

**date-fns**

Used for formatting dates and times dynamically.
Features:
- Desktop date and time
- Date formatting
- Time display

**Tippy.js**

Used for interactive tooltips.
Features:
- Application hover information
- Desktop icon hints
- UI enhancements

**GSAP**

Used for advanced animations and interactions.
Features:
- Smooth transitions
- UI animations
- Draggable interactions

Libraries:
- GSAP Core
- GSAP Draggable

***

## 🎨 Design Decisions
Desktop and Mobile Have Different Experiences
Instead of forcing one layout to work everywhere:

Desktop:
```
Desktop
 ├── Finder Window
 ├── Apps
 └── Floating Windows
```

Mobile:
```
Files App
 ├── Breadcrumb Navigation
 ├── Folder View
 └── File Preview
```

The mobile experience was designed around how users naturally browse files on smaller screens.

## 📸 Screenshots
```screenshots or GIF demonstrations here will go here```

___

⭐ If you like this project: 
- Consider giving the repository a star!
- Customize it and make it your own!
- Share it with other developers

### 📄 License

This project is open-source and free to use.


