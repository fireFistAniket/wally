"use client";

import React, { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex flex-col gap-[3vmin] min-w-[40vmax]"
      onSubmit={handelSubmit}
    >
      <div className="flex flex-col gap-[2vmin]">
        <label
          htmlFor="firstName"
          className="capitalize font-semibold text-[2.2vmin] cursor-pointer"
        >
          user name
        </label>
        <input
          type="text"
          placeholder="Enter your user name"
          id="firstName"
          value={userName}
          className="border rounded-xl px-[2vmin] py-[1.6vmin] border-neutral-600"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[2vmin]">
        <label
          htmlFor="password"
          className="capitalize font-semibold text-[2.2vmin] cursor-pointer"
        >
          password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          className="border rounded-xl px-[2vmin] py-[1.6vmin] border-neutral-600"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="capitalize text-neutral-800 font-semibold py-[1.6vmin] bg-yellow-400 text-[2.2vmin]"
      >
        submit
      </button>
    </form>
  );
};

export default LoginForm;
