import React from "react";

const App = () => {
  return (
    <div>
      <div className="mainCOntainer" class="flex flex-col bg-[aqua] w-[430px]">
        <h2 class="font-Garamond text-[#3A3845] text-[28px] text-center">
          Up to 40% off our Christmas collection
        </h2>
        <p class="text-[18px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          blanditiis ducimus, corrupti molestiae ab quisquam repellendus.
        </p>
        <button class="top-[30px] m-auto mt-8 mb-[50px] w-[121px] h-[40px] underline cursor-pointer">
          SHOP NOW
        </button>
        <img class="w-[100%] h-[348px]" src="/img/christmas.png" alt="" />
      </div>
    </div>
  );
};

export default App;
