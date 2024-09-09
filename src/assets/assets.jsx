import pixel_logo from './pixel-logo.svg'
import photo_profile from './photo-profile.svg'
import photo_profile2 from './photo-profile2.svg'
import home_image from './home-img.svg'
import card_image from './card-image.png'
import twitter_icon from './twitter.svg'
import facebook_icon from './facebook.svg'
import instagram_icon from './instagram.svg'
import pinterest_icon from './pinterest.svg'
import image_stack from './image-stack.jpg'
import github_icon from './github.svg'
import image1 from './image-1.svg'
import image2 from './image-2.svg'
import image3 from './image-3.svg'
import image_register from './img-register.svg'
import detail_image from './detail_img.svg'
import firstGif from './first.gif'
import secondGif from './second.gif'

export const assets = {
    pixel_logo,
    photo_profile,
    photo_profile2,
    home_image,
    card_image,
    image_stack,
    github_icon,
    image1, image2, image3, image_register, detail_image,
    firstGif, secondGif
}

export const navItems = [
    { label: "Home", href: "/home", select: false },
    { label: "Project", href: "/project", select: false },
    { label: "Task", href: "/task", select: false },
    { label: "Share Project", href: "/project/share", select: false, bg: true },
]

export const footerLinkItems = [
    { label: "Project", href: "/project" },
    { label: "About", href: "/about" },
    { label: "FaQ", href: "/faq" },
    { label: "Help", href: "/help" },
    { label: "Support", href: "/Support" },
]

export const footerIcons = [
    { icon: twitter_icon, href: "https://twitter.com" },
    { icon: facebook_icon, href: "https://facebook.com" },
    { icon: instagram_icon, href: "https://instagram.com" },
    { icon: pinterest_icon, href: "https://pinterest.com" },
]

export const moreItems = [
    "© 2024 Pixel", "Terms", "Privacy", "Cookies",
]

export const projectButtons = [
    { text: "All Project", href: "/projects", select: true },
    { text: "Websites", href: "/websites", select: false },
    { text: "Design", href: "/designs", select: false },
    { text: "Applicatons", href: "/applications", select: false },
    { text: "More", href: "/more", select: false },
]

export const taskButtons = [
    { text: "All Tasks", href: "/tasks", select: true },
    { text: "This Week", href: "/week", select: false },
    { text: "This Month", href: "/month", select: false },
    { text: "Completed", href: "/completed", select: false },
]

export const formFieldItems = [
    { id: "title", title: "Title", placeholder: "ex: Website E-Commerce" },
    { id: "category", title: "Category", placeholder: "Website", option: ["Website", "Design", "Application"] },
    { id: "github", title: "Link Github", placeholder: "https://github.com" },
    { id: "tech", title: "Technology", placeholder: "ex: Next JS" },
    { id: "desc", title: "Description", placeholder: "ex: This is a website for selling clothes" },
    { id: "website", title: "Link Website", placeholder: "https://website.com" },
]

export const userDummy = [
    { id: 1, name: "Rehan Firmansyah", select: true },
    { id: 2, name: "Firman Rehansyah", select: false },
    { id: 3, name: "Rehansyah Firman", select: false },
    { id: 4, name: "Kipli Saputra", select: true },
    { id: 5, name: "Opik Septian", select: true },
]

export const formFieldRegis = [
    { id: 'name', placeholder: "Enter your name" },
    { id: 'email', placeholder: "Enter your email" },
    { id: 'password', placeholder: "Enter your password" },
    { id: 'as', placeholder: "Entered as" },
    { id: 'instance', placeholder: "Insances" },
]

export const radioItems = [
    { id: 1, label: "UI/UX Designer", select: false },
    { id: 2, label: "Front End Developer", select: true },
    { id: 3, label: "Back End Developer", select: false },
    { id: 4, label: "Mobile Developer", select: false },
    { id: 5, label: "Full Stack Developer", select: false },
    { id: 6, label: "Product Manager", select: false },
]

export const cardProjectItems = [
    { id: 'upload', title: "Project Uploaded", value: 10 },
    { id: 'deleted', title: "Project Deleted", value: 0 },
    { id: 'completed', title: "Completed Project", value: 10 }
]


export const sortItems = [
    { id: 'website', category: 'Website' },
    { id: 'design', category: 'Design' },
    { id: 'application', category: 'Application' },
    { id: 'more', category: 'More' }
]

