"use client";

import React, { useState } from "react";
import Button from "../UI/Button";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import toast from "react-hot-toast";
const FromBlogPage = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const [createBlog] = useCreateBlogMutation();

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file.name);
    }
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const description = form.description.value;

    const data = {
      title,
      author,
      description,
    };

    try {
      const res: any = await createBlog(data);

      if (res?.data.success === true) {
        setTimeout(() => {
          toast.success(res?.data.message);
          form.reset();
        }, 3000);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <form
      autoComplete="off"
      className="mx-auto lg:max-w-sm  flex flex-col gap-6 dark:text-neutral"
      onSubmit={handleSignUp}
    >
      <input
        className="w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border  placeholder-secondary  focus:outline-none focus:border-primary focus:bg-main-background dark:bg-main-background"
        name="title"
        type="text"
        placeholder="Title"
        required
      />
      <input
        className="w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border  placeholder-secondary  focus:outline-none focus:border-primary focus:bg-main-background dark:bg-main-background"
        name="author"
        type="text"
        placeholder="Author Name"
        required
      />
      <input
        className="w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border  placeholder-secondary  focus:outline-none focus:border-primary focus:bg-main-background dark:bg-main-background"
        name="description"
        type="text"
        placeholder="Description"
        required
      />

      <div className="relative w-full h-full bg-gray-100 rounded-lg px-6 py-3 flex items-center  cursor-pointer border  focus-within:border-primary focus-within:bg-main-background dark:bg-main-background">
        <span className="absolute inset-0"></span>
        <input
          className="absolute bg-gray-100 inset-0 w-full h-full opacity-0 cursor-pointer"
          name="img"
          type="file"
          placeholder="Image"
          accept="image/*"
          onChange={handleFileChange}
        />
        {selectedImage ? (
          <span>
            {selectedImage.slice(0, 20) + ".." + selectedImage.slice(-4)}
          </span>
        ) : (
          <span className="text-secondary">Choose Image</span>
        )}
      </div>

      <Button className="w-full" type="submit">
        Create Blog
      </Button>
    </form>
  );
};

export default FromBlogPage;
