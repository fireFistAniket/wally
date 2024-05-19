import LoginForm from "@/components/LoginForm";
import React from "react";

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-[3vmin] my-[3vmax]'>
      <h1 className='text-[4vmax] font-bold'>
        Welcome back to <span className='text-yellow-500'>Wally</span>
      </h1>
      <p className='text-[2.5vmin] font-medium capitalize'>
        log in now to continue your shopping
      </p>
      <LoginForm />
    </main>
  );
};

export default page;
