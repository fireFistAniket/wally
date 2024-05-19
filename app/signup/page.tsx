import SignupForm from "@/components/SignupForm";
import React from "react";

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-[3vmin] my-[3vmax]'>
      <h1 className='text-[4vmax] font-bold'>
        Welcome to <span className='text-yellow-500'>Wally</span>
      </h1>
      <p className='text-[2.5vmin] font-medium capitalize'>
        sign up now to create an account
      </p>
      <SignupForm />
    </main>
  );
};

export default page;
