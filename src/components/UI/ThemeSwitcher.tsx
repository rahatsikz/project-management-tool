"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // theme switcher created by abu talha
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--main-bg", "rgb(13, 13, 13)");
      root.style.setProperty("--primary-color", "rgba(47, 185, 210, 1)");
      root.style.setProperty("--secondary-color", "rgba(135, 137, 138, 1)");
      root.style.setProperty("--neutral-color", "rgba(255, 255, 255, 1)");
    }
    if (theme === "light") {
      root.style.setProperty("--main-bg", "rgba(255, 255, 255, 1)");
      root.style.setProperty("--primary-color", "rgba(47, 185, 210, 1)");
      root.style.setProperty("--secondary-color", "rgba(135, 137, 138, 1)");
      root.style.setProperty("--neutral-color", "rgb(13, 13, 13)");
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  function toggleButton() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button onClick={toggleButton}>
      {theme === "light" ? (
        <IoMoonSharp className="text-neutral" size={30} />
      ) : (
        <MdOutlineWbSunny className="text-neutral" size={30} />
      )}
    </button>
  );
};

export default ThemeSwitcher;


