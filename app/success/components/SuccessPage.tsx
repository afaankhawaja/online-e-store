"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SuccessPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 4000);
  return (
    <section className="h-[calc(100vh-375px)]">
      <h1 className="text-center text-3xl mt-10">
        Your checkout was sucessfull
      </h1>
      <div className="flex-col items-center w-full justify-center max-w-fit mx-auto">
        <div className="h-40 w-40 mx-auto">
          <DotLottieReact
            src="https://lottie.host/9e1060b5-e003-4e2b-ad4a-477fd66a449d/OAnNJNti3v.lottie"
            loop
            autoplay
          />
        </div>
        <p>Taking you back to homepage...</p>
      </div>
    </section>
  );
};

export default SuccessPage;
