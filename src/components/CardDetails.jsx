import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CardDetails = ({ terminfo, active, setActive }) => {
  return (
    <div>
      {/* Term content */}
				<div className="w-full h-5/6 p-2 md:p-5 flex-col flex rounded-xl items-center justify-evenly bg-white md:flex-row">
					{/* Term image */}
					<img
						srcSet={terminfo[active].termimage}
						className=" hidden md:block md:w-[45%] md:h-3/4"
						alt=""
					/>
					{/* Term description */}
					<p className="w-11/12 break-all text-justify h-full text-[12px] md:w-[45%] overflow-hidden  md:h-3/4 lg:text-base">
						{terminfo[active].termdescription}
					</p>
				</div>


        {/* Navigation buttons */}
				<div className="w-2/12 mx-auto flex justify-center items-center h-1/6">
					{/* Previous button */}
					<button
						disabled={active === 0}
						onClick={() => setActive(active - 1)}
						className={
							" w-fit h-fit text-black cursor-pointer hover:text-red-500 disabled:text-red-200 "
						}>
						<IoIosArrowBack className="w-7 h-7" />
					</button>
					{/* Page indicator */}
					<p className="w-10/12 h-fit text-center ">
						{active + 1}/{terminfo.length}
					</p>
					{/* Next button */}
					<button
						disabled={active === terminfo.length - 1}
						onClick={() => setActive(active + 1)}
						className=" w-fit h-fit text-black cursor-pointer hover:text-red-500 disabled:text-red-200">
						<IoIosArrowForward className="w-7 h-7" />
					</button>
				</div>
    </div>
  );
};

export default CardDetails;
