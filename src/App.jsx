import React from "react";

const App = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center">
      <div
        className="mainCOntainer"
        class="flex flex-col flex-1 items-center bg-[aqua]"
      >
        <h2 class="mb-[24px] font-Garamond font-bold text-[#3A3845] text-[28px]">
          Up to 40% off our Christmas collection
        </h2>
        <p class="text-[18px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          blanditiis ducimus, corrupti molestiae ab quisquam repellendus.
        </p>
        <button class="top-[30px] m-auto mt-8 mb-[50px] w-[121px] h-[40px] font-bold text-[#3A3845] underline cursor-pointer">
          SHOP NOW
        </button>
      </div>
      <img
        class="flex-1 w-auto h-[348px] object-cover"
        src="/img/christmas.png"
        alt="christmas"
      />
    </div>
  );
};

export default App;
