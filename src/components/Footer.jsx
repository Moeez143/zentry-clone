import React from 'react';
import { FaTwitch, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const links = [
    { href: 'https://twitch.tv', icon: <FaTwitch /> },
    { href: 'https://discord.com', icon: <FaDiscord /> },
    { href: 'https://twitter.com', icon: <FaTwitter /> },
    { href: 'https://github.com', icon: <FaGithub /> },
];

function Footer() {
    return (
        <footer className='w-screen bg-violet-300 py-4 text-black'>
            <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-10 md:flex-row'>
                <p className='text-center text-sm md:text-left'>
                    &copy; Nova 2024 Zentry. All rights reserved.
                </p>
                <div className='flex justify-center gap-4 md:justify-start'>
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-black transition-colors duration-500 ease-in-out hover:text-white'
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href='#privacy' className='text-center text-sm hover:underline md:text-right'>
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer;