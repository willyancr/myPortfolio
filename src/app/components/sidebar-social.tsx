import { FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function SideBarSocial() {
  return (
    <div className="flex h-[740px]">
      <aside className="flex flex-col-reverse gap-6 min-w-16 sm:flex pl-3">
        <a
          href="https://x.com/WillyanCosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/willyan.cr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/willyancr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </aside>
    </div>
  );
}