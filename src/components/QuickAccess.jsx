import React from 'react';
import { quickAccessData } from '../db';
import chevronLeft from "../assets/chevron logo.svg";

const QuickAccess = () => {
  return (
    <>
      <main className='border-[1px] border-[#E2E2E2] h-[106px] rounded-[10px] px-3 pt-3 pb-2'>
        <h2 className='font-[500] text-[#121212] text-[16px]'>Your Quick Access</h2>

        <section className='flex justify-between overflow-x-auto md:overflow-x-visible flex-nowrap gap-2 pt-3'>
          {quickAccessData.map((datum) => {
            const { id, img, title } = datum;
            return (
              <div
                key={id}
                className='flex items-center px-3 rounded-[4px] gap-3 bg-[#F1F7FF] h-[45px] min-w-[250px] md:min-w-[278px] flex-shrink-0'
              >
                <img src={img} alt={title} />
                <h2 className='font-[500] text-[#121212] text-[14px]'>{title}</h2>
                <img src={chevronLeft} alt="arrow right" />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default QuickAccess;
