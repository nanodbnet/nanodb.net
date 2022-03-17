import * as site from 'site.config.js';
// import Image from 'next/image';

const Logo = () => (
    <>
        {/* <div className="w-[22px] h-[22px] relative dark:hidden">
            <Image
                src="/logo.svg"
                alt={site.siteName}
                layout="fill"
                objectFit="contain"
            />
        </div> */}
        <span className="sr-only">{site.siteName}</span>
        <div className="dark:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 28"
                width="23"
                height="28"
                fill="none"
            >
                <path
                    d="M17.2 0H5.7C2.6 0 0 2.6 0 5.7v5.7c0 3.2 2.6 5.7 5.7 5.7h11.5c3.2 0 5.7-2.6 5.7-5.7V5.7C23 2.6 20.4 0 17.2 0zM5.7 14.4c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm11.5-5.8H5.7c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9h11.5c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9zm3.5 9.6c-1 .7-2.2 1.2-3.5 1.2H5.7c-1.3 0-2.5-.4-3.5-1.2-.9-.7-2.3 0-2.3 1.2v2.9C0 25.4 2.6 28 5.7 28h11.5c3.2 0 5.7-2.6 5.7-5.7v-2.9c.1-1.2-1.3-1.9-2.2-1.2zm-15 6.9c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z"
                    fill="#1c1f23"
                />
            </svg>
        </div>
        <div className="hidden dark:block">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 28"
                width="23"
                height="28"
                fill="none"
            >
                <path
                    d="M17.2 0H5.7C2.6 0 0 2.6 0 5.7v5.7c0 3.2 2.6 5.7 5.7 5.7h11.5c3.2 0 5.7-2.6 5.7-5.7V5.7C23 2.6 20.4 0 17.2 0zM5.7 14.4c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zm11.5-5.8H5.7c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9h11.5c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9zm3.5 9.6c-1 .7-2.2 1.2-3.5 1.2H5.7c-1.3 0-2.5-.4-3.5-1.2-.9-.7-2.3 0-2.3 1.2v2.9C0 25.4 2.6 28 5.7 28h11.5c3.2 0 5.7-2.6 5.7-5.7v-2.9c.1-1.2-1.3-1.9-2.2-1.2zm-15 6.9c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z"
                    fill="#ffffff"
                />
            </svg>
        </div>
    </>
);

export default Logo;
