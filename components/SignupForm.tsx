"use client";
import React, { useState } from "react";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/users/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          username:
            firstName + lastName + Math.round(Math.random() * 100).toString(),
          age,
          gender,
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
      className="flex flex-col gap-[3vmin] min-w-[30vmax]"
      onSubmit={handelSubmit}
    >
      <div className="flex flex-col gap-[2vmin]">
        <label
          htmlFor="firstName"
          className="capitalize font-semibold text-[2.2vmin] cursor-pointer"
        >
          first name
        </label>
        <input
          type="text"
          placeholder="Enter your first name"
          id="firstName"
          value={firstName}
          className="border rounded-xl px-[2vmin] py-[1.6vmin] border-neutral-600"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[2vmin]">
        <label
          htmlFor="lastName"
          className="capitalize font-semibold text-[2.2vmin] cursor-pointer"
        >
          last name
        </label>
        <input
          type="text"
          placeholder="Enter your last name"
          id="lastName"
          value={lastName}
          className="border rounded-xl px-[2vmin] py-[1.6vmin] border-neutral-600"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[2vmin]">
        <label
          htmlFor="age"
          className="capitalize font-semibold text-[2.2vmin] cursor-pointer"
        >
          age
        </label>
        <input
          type="number"
          placeholder="Enter your age"
          id="age"
          value={age}
          className="border rounded-xl px-[2vmin] py-[1.6vmin] border-neutral-600"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[2vmin]">
        <label
          htmlFor="gender"
          className="capitalize font-semibold text-[2.2vmin] cursor-pointer"
        >
          gender
        </label>
        <select
          name=""
          id="gender"
          value={gender}
          className="border rounded-xl px-[2vmin] py-[1.6vmin] border-neutral-600"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
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

export default SignupForm;
