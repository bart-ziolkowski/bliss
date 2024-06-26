"use client";

import ProductSolution from "./ProductSolution";
import React from "react";
import productSolutions from "@/data/productSolutions";

const Main = () => {
  return (
    <main className="flex flex-col items-center pb-8 border-y-4 border-green">
      <h1 className="text-beige text-3xl lg:text-4xl pt-16 font-basker-ville">
        Why to use the revolutionary banking app?
      </h1>
      <div className="mt-12 flex gap-8 justify-center w-11/12 lg:w-full flex-wrap lg:flex-nowrap px-6 py-8 md:p-8 text-center">
        {productSolutions.map((solution, idx: number) => (
          <ProductSolution key={idx} {...solution} />
        ))}
      </div>
      <div className="bg-beige rounded-3xl m-5">
        <div className="px-6 max-w-2xl py-8 lg:max-w-7xl lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-basker-ville tracking-tight text-gray-900 sm:text-4xl mb-8">
            Product Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full text-center text-black">
            <div className="rounded-lg p-6 bg-gray-100 flex justify-center items-center flex-col border-2 border-bliss-blue">
              <p className="text-2xl">Time Savings</p>
              <span className="text-4xl font-bold text-bliss-blue">
                Save up to 3 hours per day
              </span>
            </div>
            <div className="rounded-lg p-6 bg-gray-100 flex justify-center items-center flex-col border-2 border-bliss-blue">
              <p className="text-2xl">Increased Financial Literacy</p>
              <span className="text-4xl font-bold text-bliss-blue">
                Improve your financial knowledge
              </span>
            </div>
            <div className="rounded-lg p-6 bg-gray-100 flex justify-center items-center flex-col border-2 border-bliss-blue">
              <p className="text-2xl">Enhanced Savings Rate</p>
              <span className="text-4xl font-bold text-bliss-blue">
                Save 30% of your income
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
