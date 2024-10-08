/* global gtag */
import React, { useEffect } from "react";
import { BsInstagram } from "react-icons/bs";

import {
  AiOutlineMail,
  AiOutlineDown,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "./logo.png";
import { Fade } from "react-reveal";

const Navbar = () => {
  const [navBtn, setNavBtn] = useState(-1);
  const [elementList, setElementList] = useState(-1);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activMobileAnim, setActivMobileMenu] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    if (showMobileMenu) {
      setActivMobileMenu(false);
    } else
      setTimeout(() => {
        setActivMobileMenu(1);
      }, 300);
  }, [showMobileMenu]);

  function gtagSendEvent(url) {
    var callback = function () {
      if (typeof url === "string") {
        window.location = url;
      }
    };
    gtag("event", "conversion_event_contact", {
      event_callback: callback,
      event_timeout: 2000, // This waits up to 2000 milliseconds (2 seconds) for the event to be sent before navigating.
    });
    return false;
  }

  const handlePhoneClick = (e) => {
    e.preventDefault(); // Stop the link from triggering a page load
    const url = e.currentTarget.href; // Extract the URL from the link element
    gtagSendEvent(url); // Call the event function passing the URL
  };

  return (
    <nav className="fixed flex justify-center z-50 top-0 h-[3rem] lg:h-[6rem] w-full bg-black lg:bg-white shadow-lg ">
      <div className="relative flex justify-center items-center top-0 h-[2rem] w-full ">
        <span className="absolute hidden lg:block bottom-0 bg-gray-300 w-full h-[1px] bg-black" />
        <Fade>
          <div className="flex justify-between items-center h-full w-[15rem] lg:w-[20rem] text-[20px] text-gray-200 lg:text-gray-500 ml-[2.5rem] lg:ml-0 mt-[1rem] lg:mt-0">
            <a
              href="https://www.instagram.com/lorenalashstudio/"
              className="cursor-pointer   hover:lg:text-black"
            >
              <BsInstagram />
            </a>
            <a
              href="http://wa.me/+40764038271"
              onClick={handlePhoneClick}
              className="flex cursor-pointer hover:lg:text-black"
            >
              <span className="text-[24px] mt-1 mr-1 ">
                <AiOutlineWhatsApp />
              </span>
              0764038271
            </a>
            <a
              href="mailto:lorenalashstudio@gmail.com"
              className="text-[24px] cursor-pointer  hover:lg:text-black"
            >
              <AiOutlineMail />
            </a>
          </div>
        </Fade>
        <Fade>
          <div className="absolute hidden  top-[2rem] lg:flex w-[60rem] h-[4rem] justify-between items-center font-sans text-[15px] ">
            <Link
              activeClass="active"
              to="Hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              href="Hero"
            >
              <img
                alt="Lorena lash studio"
                src={logo}
                onClick={() => {
                  navigate("/");
                  window.scrollTo({ top: 0, left: 0 });
                }}
                className="w-[120px] mr-[10rem]"
              />
            </Link>
            <Link
              activeClass="active"
              to="Hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              href="Hero"
            >
              <button
                onClick={() => {
                  navigate("/");
                  window.scrollTo({ top: 0, left: 0 });
                }}
                onMouseEnter={() => {
                  setElementList(4);
                }}
                onMouseLeave={() => {
                  setElementList(-1);
                }}
                className="relative  tracking-[4px] px-[.5rem]  py-[1.5rem]"
              >
                ACASA{" "}
                <span
                  className={`absolute  ${
                    elementList === 4
                      ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                      : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                  } bottom-5 left-0 w-full h-[1px] bg-black`}
                />
              </button>
            </Link>
            <Link
              activeClass="active"
              to="DespreNoi"
              spy={true}
              smooth={true}
              offset={-50}
              delay={200}
              duration={500}
              href="DespreNoi"
            >
              <button
                onClick={() => {
                  navigate("/");
                }}
                onMouseEnter={() => {
                  setElementList(5);
                }}
                onMouseLeave={() => {
                  setElementList(-1);
                }}
                className="relative tracking-[4px] px-[.5rem]  py-[1.5rem]"
              >
                DESPRE NOI
                <span
                  className={`absolute  ${
                    elementList === 5
                      ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                      : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                  } bottom-5 left-0 w-full h-[1px] bg-black`}
                />
              </button>
            </Link>
            <div
              onMouseEnter={() => setNavBtn(0)}
              onMouseLeave={() => setNavBtn(-1)}
              className="flex flex-col items-center "
            >
              <button className="relative tracking-[5px] px-[.5rem]  py-[1.5rem] flex">
                ECHIPA{" "}
                <span
                  className={`mt-1 ml-1 ${
                    navBtn === 0
                      ? "animate-[rotateArrow_.2s_ease-in-out_forwards]"
                      : "animate-[rotateArrowReverse_.2s_ease-in-out_forwards]"
                  }`}
                >
                  <AiOutlineDown />
                </span>
                <span
                  className={`absolute  ${
                    navBtn === 0
                      ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                      : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                  } bottom-5 left-0 w-full h-[1px] bg-black`}
                />
              </button>
              <ul
                className={`absolute top-[4rem] w-[18rem] font-montSerrat  ${
                  navBtn === 0
                    ? "animate-[showList_.1s_ease-in-out_forwards] "
                    : "animate-[showListReverse_.1s_ease-in-out_forwards]"
                } overflow-hidden flex flex-col justify-center items-start bg-black text-white font-bold px-[1rem] shadow-lg`}
              >
                <li
                  onClick={() => {
                    navigate("salon");
                    window.scrollTo({ top: 600, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(0);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] mt-[.5rem] cursor-pointer"
                >
                  LORENA DANOIU (Trainer){" "}
                  <span
                    className={`absolute ${
                      elementList === 0
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
                <li
                  onClick={() => {
                    navigate("salon");
                    window.scrollTo({ top: 600, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(1);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                >
                  DIANA ELENA COTET (Master){" "}
                  <span
                    className={`absolute ${
                      elementList === 1
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
                <li
                  onClick={() => {
                    navigate("salon");
                    window.scrollTo({ top: 1200, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(2);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                >
                  STEFANIA URSU (Lash Artist)
                  <span
                    className={`absolute ${
                      elementList === 2
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
                <li
                  onClick={() => {
                    navigate("salon");
                    window.scrollTo({ top: 1200, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(3);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem]  mb-[.5rem] cursor-pointer"
                >
                  CATALINA TRICA (Brow Artist){" "}
                  <span
                    className={`absolute ${
                      elementList === 3
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
                <li
                  onClick={() => {
                    navigate("salon");
                    window.scrollTo({ top: 1500, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(4);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem]  mb-[.5rem] cursor-pointer"
                >
                  GABRIELA ANDREEA GEANTA (Brow + Lash Artist){" "}
                  <span
                    className={`absolute ${
                      elementList === 4
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-6 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
              </ul>
            </div>
            <div
              onMouseEnter={() => setNavBtn(1)}
              onMouseLeave={() => setNavBtn(-1)}
              className="flex flex-col items-center "
            >
              <button className="relative  flex tracking-[4px] px-[.5rem]   py-[1.5rem]">
                ACADEMIE{" "}
                <span
                  className={`mt-1 ml-1 ${
                    navBtn === 1
                      ? "animate-[rotateArrow_.2s_ease-in-out_forwards]"
                      : "animate-[rotateArrowReverse_.2s_ease-in-out_forwards]"
                  }`}
                >
                  <AiOutlineDown />
                </span>{" "}
                <span
                  className={`absolute  ${
                    navBtn === 1
                      ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                      : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                  } bottom-5 left-0 w-full h-[1px] bg-black`}
                />{" "}
              </button>
              <ul
                className={`absolute top-[4rem] w-[18rem] font-montSerrat  ${
                  navBtn === 1
                    ? "animate-[showList_.1s_ease-in-out_forwards] "
                    : "animate-[showListReverse_.1s_ease-in-out_forwards]"
                } overflow-hidden flex flex-col justify-center items-start bg-black text-white font-bold px-[1rem] shadow-lg`}
              >
                <li
                  onClick={() => {
                    navigate("cursuri");
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(10);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] mt-[.5rem] cursor-pointer"
                >
                  CURSURI{" "}
                  <span
                    className={`absolute ${
                      elementList === 10
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
                <li
                  onClick={() => {
                    navigate("curs-de-baza");
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(6);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] mt-[.5rem] cursor-pointer"
                >
                  CURS DE BAZA{" "}
                  <span
                    className={`absolute ${
                      elementList === 6
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
                <li
                  onClick={() => {
                    navigate("curs-de-perfectionare");
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(7);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                >
                  CURS DE EFECTE SPECIALE{" "}
                  <span
                    className={`absolute ${
                      elementList === 7
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
                <li
                  onClick={() => {
                    navigate("curs-vip-de-baza");
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                  onMouseEnter={() => {
                    setElementList(8);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                >
                  CURS VIP
                  <span
                    className={`absolute ${
                      elementList === 8
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                  />
                </li>
              </ul>
            </div>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              href="Contact"
            >
              <button
                onMouseEnter={() => {
                  setElementList(9);
                }}
                onMouseLeave={() => {
                  setElementList(-1);
                }}
                className="relative tracking-[4px] px-[.5rem]  py-[1.5rem]"
              >
                CONTACT
                <span
                  className={`absolute  ${
                    elementList === 9
                      ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                      : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                  } bottom-5 left-0 w-full h-[1px] bg-black`}
                />
              </button>
            </Link>
          </div>
        </Fade>
        <div
          onClick={() => setShowMobileMenu((prev) => !prev)}
          className="absolute lg:hidden  left-[1.5rem]  flex flex-col items-left justify-center h-[2rem]  w-[1.5rem]"
        >
          <span
            className={`relative  top-[.3rem] w-[1.3rem] h-[2px] bg-white`}
          />
          <span
            className={`relative   top-[.6rem] w-[1rem] h-[2px] bg-white`}
          />
          <span
            className={`relative  top-[.9rem] w-[1.3rem] h-[2px] bg-white`}
          />
        </div>
        <div
          className={`absolute ${
            showMobileMenu
              ? "animate-[menuAppear_.3s_ease-in-out_forwards]"
              : "animate-[menuAppearReverse_.3s_ease-in-out_forwards]"
          } ${
            activMobileAnim === 1 && "hidden"
          } whitespace-nowrap left-0 top-[3rem] bg-black h-screen  text-white text-[13px]`}
        >
          <div className=" mt-[2rem] flex flex-col overflow-hidden">
            <div
              onClick={() => setShowMobileMenu(false)}
              className="relative ml-[-rem] flex justify-center items-center w-[20rem] h-[120px] bg-white lg:hidden overflow-hidden"
            >
              <Link
                activeClass="active"
                to="Hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                href="Hero"
                className="w-full  flex justify-center overflow-hidden"
              >
                <img
                  src={logo}
                  onClick={() => {
                    navigate("/");
                    setShowMobileMenu(false);
                  }}
                  className="w-[180px] "
                  alt="Lorena Lash Studio logo"
                />
              </Link>
            </div>
            <Fade>
              <Link
                activeClass="active"
                to="Hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                href="Hero"
                className="w-full flex justify-center"
              >
                <button
                  onClick={() => {
                    navigate("/");
                    setShowMobileMenu(false);
                  }}
                  onMouseEnter={() => {
                    setElementList(4);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative  tracking-[4px] px-[.5rem]  py-[1.5rem]"
                >
                  ACASA{" "}
                  <span
                    className={`absolute  ${
                      elementList === 4
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    } bottom-5 left-0 w-full h-[1px] bg-black`}
                  />
                </button>
              </Link>
              <Link
                activeClass="active"
                to="DespreNoi"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                href="DespreNoi"
                className="w-full flex justify-center"
              >
                <button
                  onClick={() => {
                    navigate("/");
                    setShowMobileMenu(false);
                  }}
                  onMouseEnter={() => {
                    setElementList(5);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative tracking-[4px] px-[.5rem]  py-[1.5rem]"
                >
                  DESPRE NOI
                  <span
                    className={`absolute  ${
                      elementList === 5
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    } bottom-5 left-0 w-full h-[1px] bg-black`}
                  />
                </button>
              </Link>
              <div
                onClick={() => {
                  if (navBtn !== 0) setNavBtn(0);
                  else setNavBtn(-1);
                }}
                className="flex flex-col items-center "
              >
                <button className="relative tracking-[5px] px-[.5rem]  py-[1.5rem] flex">
                  ECHIPA{" "}
                  <span
                    className={`mt-1 ml-1 ${
                      navBtn === 0
                        ? "animate-[rotateArrow_.2s_ease-in-out_forwards]"
                        : "animate-[rotateArrowReverse_.2s_ease-in-out_forwards]"
                    }`}
                  >
                    <AiOutlineDown />
                  </span>
                  <span
                    className={`absolute  ${
                      navBtn === 0
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    } bottom-5 left-0 w-full h-[1px] bg-black`}
                  />
                </button>
                <ul
                  onClick={() => setShowMobileMenu(false)}
                  className={`relative top-0 ml-[-1rem] w-[19rem] font-montSerrat   ${
                    navBtn === 0
                      ? "animate-[showListMobile_.3s_ease-in-out_forwards] "
                      : "animate-[showListMobileReverse_.1s_ease-in-out_forwards]"
                  } overflow-hidden flex flex-col justify-start items-start bg-black text-white font-bold px-[1rem] shadow-lg`}
                >
                  <li
                    onClick={() => {
                      navigate("salon");
                      window.scrollTo({ top: 400, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(0);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] mt-[.5rem] cursor-pointer"
                  >
                    LORENA DANOIU (Trainer){" "}
                    <span
                      className={`absolute ${
                        elementList === 0
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("salon");
                      window.scrollTo({ top: 950, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(1);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                  >
                    DIANA ELENA COTET (Master){" "}
                    <span
                      className={`absolute ${
                        elementList === 1
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("salon");
                      window.scrollTo({ top: 1600, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(2);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                  >
                    STEFANIA URSU(Lash Artist)
                    <span
                      className={`absolute ${
                        elementList === 2
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("salon");
                      window.scrollTo({ top: 2400, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(3);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem]  mb-[.5rem] cursor-pointer"
                  >
                    CATALINA TRICA (Brow Artist){" "}
                    <span
                      className={`absolute ${
                        elementList === 3
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("salon");
                      window.scrollTo({ top: 2800, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(4);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem]  mb-[.5rem] cursor-pointer"
                  >
                    GABRIELA ANDREEA GEANTA (Brow + Lash Artist){" "}
                    <span
                      className={`absolute ${
                        elementList === 4
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                </ul>
              </div>
              <div
                onClick={() => {
                  if (navBtn !== 1) setNavBtn(1);
                  else setNavBtn(-1);
                }}
                className="flex flex-col items-center "
              >
                <button className="relative  flex tracking-[4px] px-[.5rem]   py-[1.5rem]">
                  ACADEMIE{" "}
                  <span
                    className={`mt-1 ml-1 ${
                      navBtn === 1
                        ? "animate-[rotateArrow_.2s_ease-in-out_forwards]"
                        : "animate-[rotateArrowReverse_.2s_ease-in-out_forwards]"
                    }`}
                  >
                    <AiOutlineDown />
                  </span>{" "}
                  <span
                    className={`absolute  ${
                      navBtn === 1
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    } bottom-5 left-0 w-full h-[1px] bg-black`}
                  />{" "}
                </button>
                <ul
                  onClick={() => setShowMobileMenu(false)}
                  className={`relative top-0 ml-[-1rem] w-[18rem] font-montSerrat  ${
                    navBtn === 1
                      ? "animate-[showListMobile_.3s_ease-in-out_forwards] "
                      : "animate-[showListMobileReverse_.1s_ease-in-out_forwards]"
                  } overflow-hidden flex flex-col justify-start items-start bg-black text-white font-bold px-[1rem] shadow-lg`}
                >
                  <li
                    onClick={() => {
                      navigate("cursuri");
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(10);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] mt-[.5rem] cursor-pointer"
                  >
                    CURSURI{" "}
                    <span
                      className={`absolute ${
                        elementList === 10
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("curs-de-baza");
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(6);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] mt-[.5rem] cursor-pointer"
                  >
                    CURS DE BAZA{" "}
                    <span
                      className={`absolute ${
                        elementList === 6
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("curs-de-perfectionare");
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(7);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                  >
                    CURS DE EFECTE SPECIALE{" "}
                    <span
                      className={`absolute ${
                        elementList === 7
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("curs-vip-de-baza");
                      window.scrollTo({ top: 0, left: 0 });
                    }}
                    onMouseEnter={() => {
                      setElementList(8);
                    }}
                    onMouseLeave={() => {
                      setElementList(-1);
                    }}
                    className="relative h-[2rem] flex justify-center items-center ml-[1rem] py-[1.5rem] cursor-pointer"
                  >
                    CURS VIP
                    <span
                      className={`absolute ${
                        elementList === 8
                          ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                          : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                      }  bottom-3 w-full h-[1px] bg-[#FFD700]`}
                    />
                  </li>
                </ul>
              </div>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                href="Contact"
                className="w-full flex justify-center"
              >
                <button
                  onClick={() => setShowMobileMenu(false)}
                  onMouseEnter={() => {
                    setElementList(6);
                  }}
                  onMouseLeave={() => {
                    setElementList(-1);
                  }}
                  className="relative tracking-[4px] px-[.5rem]  py-[1.5rem]"
                >
                  CONTACT
                  <span
                    className={`absolute  ${
                      elementList === 6
                        ? "animate-[underlineAnim_.2s_ease-in-out_forwards]"
                        : "animate-[underlineAnimReverse_.2s_ease-in-out_forwards]"
                    } bottom-5 left-0 w-full h-[1px] bg-black`}
                  />
                </button>
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
