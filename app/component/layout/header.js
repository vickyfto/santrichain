"use client";
import { Dropdown, Space, Button, Drawer } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const HeaderLayout = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: "icon",
      disabled: true,
    },
  ];
  return (
    <header className="bg-[#15803d] w-full h-[11vh] flex justify-between px-7 items-center">
      <div>
        <img
          className="w-[200px]"
          src="https://marketplace.santrichain.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-sc-beta.589013b2.png&w=256&q=75"
        />
      </div>
      <div>
        <div className="flex justify-end sm:hidden">
          <Button type="primary" onClick={showDrawer}>
            <img width="24" src="menu-hamburger.png" />
          </Button>
        </div>

        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <div className="hidden md:block">
          <Dropdown
            trigger="click"
            menu={{
              items,
            }}
          >
            <a
              className="flex cursor-pointer items-center gap-2 text-white"
              onClick={(e) => e.preventDefault()}
            >
              <img src="/user.png" />
              Fiki Fitrio
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
