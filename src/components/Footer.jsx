import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="px-[32px] py-[16px] flex items-center justify-between w-full">
      <div>
        <p>© 2021, All rights reserved</p>
      </div>
      <div className="flex items-center gap-[24px] text-3xl text-primary-main">
        <Icon icon="mdi:twitter" />
        <Icon icon="ri:instagram-fill" />
        <Icon icon="ic:baseline-facebook" />
      </div>
    </footer>
  );
};

export default Footer;
