import React,{ Fragment, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Experience", href: "#experience", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href, close) => {
    // Close mobile menu if provided
    let navbarHeight = -55; // Increased offset for more space

    if (close) {
      close();
      navbarHeight = -350; // Increased offset for more space
    }
    
    // Handle smooth scroll with offset for navbar
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition + navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "sticky top-0 z-50 transition-colors duration-300 shadow-md",
        isSticky ? "bg-cyan-800 text-white" : "bg-white text-gray-800"
      )}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div
                className={classNames(
                  "text-xl font-bold",
                  isSticky ? "text-white" : "text-cyan-800"
                )}
              >
                Saikumar Pendyala
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={classNames(
                      "font-bold transition-colors cursor-pointer",
                      isSticky
                        ? "text-white hover:underline hover:drop-shadow-md"
                        : "text-cyan-800 hover:text-cyan-600"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile panel */}
          <Disclosure.Panel className="md:hidden bg-white shadow-md">
            {({ close }) => (
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, close);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-cyan-800 hover:bg-cyan-100 hover:text-cyan-900 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
