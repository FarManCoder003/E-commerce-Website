import { useEffect, useRef, useState } from "react";
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import CartImg from "../assets/cart.png";
import Container from "./Container";
import Flex from "./Flex";

const Navbar = () => {
  let [cartShow, setCartShow] = useState(false);
  let [usercartShow, setUsercartShow] = useState(false);
  let [userShow, setuserShow] = useState(false);
  let cartref = useRef();
  let userref = useRef();
  let userAccref = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cartref.current.contains(e.target) == true) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
      if (userref.current.contains(e.target) == true) {
        setUsercartShow(!usercartShow);
      } else {
        setUsercartShow(false);
      }
      if (userAccref.current.contains(e.target) == true) {
        setuserShow(!userShow);
      } else {
        setuserShow(false);
      }
    });
  }, [cartShow, usercartShow, userShow]);

  return (
    <nav className="bg-[#F5F5F3] py-4 lg:pt-[65px]">
      <Container>
        <Flex className="items-center">
          <div className="w-[30%] relative">
            <div ref={cartref} className="flex items-center gap-x-3">
              <FaBars />
              <p className="font-sans hidden lg:block text-[16px] lg:text-[#767676] text-[white] hover:text-[#262626]">
                Shop by Category
              </p>
            </div>
            {cartShow && (
              <div className="absolute z-50 top-[30px] left-0 bg-[#262626] w-[170px]">
                <ul className="py-4">
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white ">
                    Accesories
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Furniture
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Electronics
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Clothes
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Bags
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-[40%]">
            <div className="relative">
              <input
                placeholder="Search Products"
                type="search"
                className="w-full h-6 lg:h-[50px] font-sans font-normal text-[#C4C4C4] text-[14px]  outline-none px-2"
              />
              <div className="absolute top-[50%] lg:right-4 right-2 translate-y-[-50%]">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="w-[30%] relative">
            <div className="flex justify-end items-center gap-x-2">
              <div className="flex" ref={userAccref}>
                <FaUser />
                <MdArrowDropDown />
              </div>
              <div ref={userref} className="">
                <FaCartPlus />
              </div>
            </div>
            {userShow && (
              <div className="absolute z-50 top-[30px] right-0 w-[130px] bg-[#262626] py-1 px-3">
                <ul className="font-sans text-[16px] font-normal text-[#FFFFFFB2]">
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    My Account
                  </li>
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    Log in
                  </li>
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    Sign Up
                  </li>
                </ul>
              </div>
            )}

            {usercartShow && (
              <div className="w-[330px] z-50 absolute bg-[#F5F5F3] top-[30px] right-0">
                <div className="p-4 ">
                  <div className="flex justify-around items-center">
                    <div className="">
                      <img src={CartImg} alt="" />
                    </div>
                    <div className="">
                      <h3>Black Smart Watch</h3>
                      <h5>$44.00</h5>
                    </div>
                    <div className="">
                      <RxCross2 />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="pl-4 py-3">
                      Subtotal: <span>$44.00</span>
                    </h3>
                    <div className="flex justify-around gap-3">
                      <div className="">
                        <a
                          className="w-[148px] h-[50px] border-[1px] border-[#262626] inline-block text-center leading-[50px]"
                          href="#"
                        >
                          View Cart
                        </a>
                      </div>
                      <div className="">
                        <a
                          className="w-[148px] h-[50px] border-[1px] border-[#262626] inline-block text-center leading-[50px]"
                          href="#"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;