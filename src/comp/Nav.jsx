import React from "react";

function Nav() {
  return (
    <div>
      <nav className="flex justify-between w-[85%] mx-auto mt-5">
        <div>
          <h1 className="text-3xl font-bold ">Edusity</h1>
        </div>
        <div>
          <ul className="flex gap-7 h-[3rem] text-center ">
            {["Home", "Program", "About us", "Campus", "Testimonials"].map(
              (item) => (
                <li
                  key={item}
                  className="px-4 py-2 flex items-center justify-center"
                >
                  {item}
                </li>
              )
            )}

            <li className="bg-slate-800 text-white px-4 py-2 rounded-full flex items-center justify-center">
              Contact Us
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
