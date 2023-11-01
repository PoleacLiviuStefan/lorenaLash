import React, { useState, useRef } from "react";
import { SlUserFemale } from "react-icons/sl";
import { GoTasklist } from "react-icons/go";
import { BsCalendar3, BsCalendarCheck } from "react-icons/bs";
import Profesionist from "./Profesionist";
import Service from "./Service";
import Payment from "./Payment";
import data from "./Services.json";
import Calendar from "react-calendar";
import { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import Catalina from "./Images/Catalina.jpeg";
import Diana from "./Images/Diana.jpeg";
import Gabriela from "./Images/Gabriela.jpeg";
import Stefania from "./Images/Stefania.jpeg";

const Appointment = () => {
  const SERVER_IP = "https://backend-production-b11c.up.railway.app";
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);
  const [professional, setProfessional] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const [servicePrice, setServicePrice] = useState(0);
  const [service, setService] = useState("");
  const [clientName, setClientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+40");
  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [selectedData, selectData] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState("");
  const [timer, setTimer] = useState(60);

  const [appointmentsData, setAppointmentsData] = useState([]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const combinedTime = (dateString) => dateString.slice(11, 16);
  const [availableHours, setAvailableHours] = useState([]);
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(false);


  useEffect(() => {

 
    if (professional !== "") {
      setStage(1);
      window.scrollTo({ top: 0, left: 0 });
    }
    console.log(stage);
  }, [professional]);
  useEffect(() => {
    if (service !== "") {
      setStage(2);
      window.scrollTo({ top: 0, left: 0 });
    }
    console.log(stage);
  }, [service]);
  useEffect(() => {
    console.log("paymentStatus:", paymentStatus);
    if (
      selectedHour !== "" &&
      (paymentStatus ||
        service === "Demontare" ||
        service === "Stilizare Sprancene")
    ) {
      setStage(3);

      window.scrollTo({ top: 0, left: 0 });
    }

    console.log(stage);
  }, [selectedHour, paymentStatus]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  const isDigitOrBackspace = (input) => /^[0-9\b]$/.test(input);
  const isLetter = (input) => /^[A-Za-z-]+$/.test(input);

  const handleChange = (e, index) => {
    if (e.target.value.length < 2) {
      otp[index] = e.target.value;
      setOtp([...otp]);
    } else if (
      (e.target.value !== "" && index < 5) ||
      e.target.value.length > 1
    ) {
      otp[index + 1] = e.target.value[e.target.value.length - 1];
      setOtp([...otp]);
      inputRefs[index + 1].current.focus();
    }
  };
  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  function formatDateFromDateString(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }
  const checkAvailableHours = (startTime, finishTime) => {
    console.log("selectedData", selectedData, "newDate", selectedData.getDay());
    if (
      selectedData.getTime() >= new Date().getTime() &&
      selectedData.getDay() !== 0 &&
      selectedData.getDay() !== 6
    ) {
      console.log("appointmentsData:", appointmentsData);
      if (!startTime || !finishTime) {
        console.error("Invalid input data");
        return;
      }

      // Parse the start and finish times as 24-hour time strings
      const [startHour, startMinute] = startTime.split(":").map(Number);
      const [finishHour, finishMinute] = finishTime.split(":").map(Number);

      // Parse the service duration as "1:00"
      const [serviceHour, serviceMinute] = serviceDuration
        .split(":")
        .map(Number);
      const serviceDurationHour = parseInt(serviceDuration[0]);
      const serviceDurationMinute =
        parseInt(serviceDuration[2]) * 10 + parseInt(serviceDuration[3]);

      const appointmentHours = [];
      setAvailableHours([]);

      // Initialize a current time variable in hours and minutes

      let currentHour = startHour;
      let currentMinute = startMinute;

      while (
        currentHour +
          serviceDurationHour +
          (currentMinute + serviceDurationMinute) / 60 <=
          finishHour ||
        (currentHour + serviceDurationHour === finishHour &&
          currentMinute + serviceDurationMinute <= finishMinute)
      ) {
        let isAvailable = true;
        console.log(currentHour + serviceDurationHour);
        for (let j = 0; j < appointmentsData.length; j++) {
          console.log(
            "appointmentsData[j].start.dateTime:",
            appointmentsData[j].start.dateTime
          );
          const appointmentStartHour = parseInt(
            appointmentsData[j].start.dateTime.slice(11, 13)
          );
          const appointmentStartMinute = parseInt(
            appointmentsData[j].start.dateTime.slice(14, 16)
          );
          const appointmentEndHour = parseInt(
            appointmentsData[j].end.dateTime.slice(11, 13)
          );
          const appointmentEndMinute = parseInt(
            appointmentsData[j].end.dateTime.slice(14, 16)
          );
          console.log(currentHour + serviceDurationHour);
          if (
            (currentHour < appointmentEndHour &&
              currentHour + serviceDurationHour > appointmentStartHour) ||
            (currentHour === appointmentStartHour &&
              currentMinute >= appointmentStartMinute) ||
            (currentHour === appointmentEndHour &&
              currentMinute < appointmentEndMinute) ||
            (currentHour +
              serviceDurationHour +
              (currentMinute + serviceDurationMinute) / 60 >
              appointmentStartHour &&
              currentHour +
                serviceDurationHour +
                (currentMinute + serviceDurationMinute) / 60 <
                appointmentEndHour)
          ) {
            isAvailable = false;
            currentHour = appointmentEndHour;
            currentMinute = appointmentEndMinute;
            break;
          }
        }

        if (isAvailable) {
          const timeString = `${currentHour
            .toString()
            .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
          appointmentHours.push(timeString);
          currentMinute += serviceMinute;
          currentHour += Math.floor(currentMinute / 60);
          currentMinute %= 60;
          currentHour += serviceHour;
        }
      }

      // Do something with appointmentHours, like set it in the state
      setAvailableHours(appointmentHours);

      console.log(appointmentHours);
    } else setAvailableHours([]);
  };

  async function sendCode(e) {
    e.preventDefault();
    await fetch(SERVER_IP + "/api/send-code", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: phoneNumber }),
    }).then((response) => {
      console.log(response);
      if (response.ok === true) {
        setCodeSent(true);
        setStage(4);
        setTimer(60);
      } else console.log("Oh no we have an error");
    });
  }
  const scheduleEvent = async () => {
    try {
      const response = await fetch(SERVER_IP + "/api/schedule_event", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientPhoneNumber: phoneNumber,
          serviceCost: servicePrice,
          clientName: clientName,
          serviceName: service,
          appointmentTime: selectedHour,
          appointmentDate: selectedData,
          serviceDuration: serviceDuration,
        }),
      });
      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  async function verifyOTP() {
    let otpValue = otp.join("");

    await fetch(SERVER_IP + "/api/verify-code", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp: otpValue }),
    }).then((response) => {
      setOtp(["", "", "", "", "", ""]);
      if (response.ok === true) {
        {
          //redirectToCheckout();
          setStage(5);
        }
      }
    });
  }

  async function allAppointments() {
    console.log(
      JSON.stringify({ minDate: formatDateFromDateString(selectedData) })
    );
    console.log("selectedHour", selectedHour);
    console.log("serviceDuration", serviceDuration);
    try {
      const response = await fetch(SERVER_IP + "/api/showEvents", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          minDate: formatDateFromDateString(selectedData),
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setAppointmentsData(data);
        console.log(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const setIndex = async (keyIndex) => {
    try {
      const response = await fetch(SERVER_IP + "/api/setIndex", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyForSet: keyIndex }),
      });
      if (response.ok) {
        allAppointments();
        console.log(keyIndex);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handlePaymentStatus = (settedValue) => {
    setPaymentStatus(settedValue);
    console.log(settedValue);
  };

  useEffect(() => {
    checkAvailableHours("10:00", "18:00");
  }, [appointmentsData]);

  useEffect(() => {
    if (stage === 5) scheduleEvent();
    if (stage === 4) {
      const intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1); // Rename seconds to timer
        }
      }, 1000);

      return () => {
        clearInterval(intervalId); // Clean up the timer when the component unmounts
      };
    }
  }, [stage, timer]);

  useEffect(() => {
    allAppointments();
    console.log(appointmentsData);
  }, [selectedData]);

  return (
    <div className=" flex flex-col items-center justify-center w-screen h-full py-[5rem] lg:py-[10rem]">
      <div className=" flex flex-col items-center   text-center w-[90%] h-full gap-[1rem] lg:gap-[2rem]">
        <ul className="flex w-full lg:w-[40rem] justify-between  ">
          <button
            onClick={() => setStage(0)}
            className={`relative flex flex-col items-center justify-center rounded-[8px]  w-[5rem] lg:w-[6.5rem] h-[3.5rem] lg:h-[4.5rem] ${
              stage === 0 && "bg-green-500 text-white"
            } `}
          >
            <span className="absolute top-0 left-1 font-bold">1</span>
            <span className="text-[18px] lg:text-[22px]">
              <SlUserFemale />
            </span>
            <span className=" text-[14px] lg:text-[18px]">Stilistul</span>
          </button>
          <button
            onClick={() => {
              if (professional) setStage(1);
            }}
            className={`relative flex flex-col items-center justify-center rounded-[8px]  w-[5rem] lg:w-[6.5rem] h-[3.5rem] lg:h-[4.5rem] ${
              stage === 1 && "bg-green-500 text-white"
            } `}
          >
            <span className="absolute top-0 left-1 font-bold">2</span>
            <span className="text-[18px] lg:text-[22px]">
              <GoTasklist />
            </span>
            <span className=" text-[14px] lg:text-[18px]">Serviciul</span>
          </button>
          <button
            onClick={() => {
              if (professional && service) setStage(2);
            }}
            className={`relative flex flex-col items-center justify-center rounded-[8px]  w-[5rem] lg:w-[6.5rem] h-[3.5rem] lg:h-[4.5rem] ${
              stage === 2 && "bg-green-500 text-white"
            } `}
          >
            <span className="absolute top-0 left-1 font-bold">3</span>
            <span className="text-[18px] lg:text-[22px]">
              <BsCalendar3 />
            </span>

            <span className=" text-[14px] lg:text-[18px]">Data si Ora</span>
          </button>
          <button
            onClick={() => {
              if (professional && service && selectedHour) setStage(3);
            }}
            className={`relative flex flex-col items-center justify-center rounded-[8px]  w-[5rem] lg:w-[6.5rem] h-[3.5rem] lg:h-[4.5rem] ${
              stage === 3 && "bg-green-500 text-white"
            } `}
          >
            <span className="absolute top-0 left-1 font-bold">4</span>
            <span className="text-[18px] lg:text-[22px]">
              <BsCalendarCheck />
            </span>
            <span className=" text-[14px] lg:text-[18px]">Finalizare</span>
          </button>
        </ul>
        <h2 className="font-roboto font-[300] text-[22px] lg:text-[36px] ">
          <span className="text-[30px] lg:text-[54px] font-extrabold text-gray-300 ">
            {stage === 0 ? "1" : stage === 1 ? "2" : stage === 2 ? "3" : "4"}{" "}
          </span>{" "}
          {stage === 0
            ? "Alege unul dintre stilisti"
            : stage === 1
            ? "Alege Serviciul"
            : stage === 2
            ? "Alege data si ora"
            : "Finalizarea programarii"}
        </h2>
        {stage === 0 ? (
          <div className=" grid grid-cols-2 lg:flex gap-8 ">
            <Profesionist
              namePro="Gabriela"
              onClick={() => {
                setProfessional("Gabriela");
                setService("");
                setSelectedHour("");
                setIndex(3);
              }}
              artistPhoto={Gabriela}
              selected={professional === "Gabriela"}
            />
            <Profesionist
              namePro="Stefania"
              onClick={() => {
                setProfessional("Stefania");
                setService("");
                setSelectedHour("");
                setIndex(0);
              }}
              artistPhoto={Stefania}
              selected={professional === "Stefania"}
            />
            <Profesionist
              namePro="Diana"
              onClick={() => {
                setProfessional("Diana");
                setService("");
                setSelectedHour("");
                setIndex(1);
              }}
              artistPhoto={Diana}
              selected={professional === "Diana"}
            />
            <Profesionist
              namePro="Catalina"
              onClick={() => {
                setProfessional("Catalina");
                setService("");
                setSelectedHour("");
                setIndex(2);
              }}
              artistPhoto={Catalina}
              selected={professional === "Catalina"}
            />
          </div>
        ) : stage === 1 ? (
          <div className={` flex flex-col items-center w-full h-full`}>
            {data.profesionisti.map(
              (provider) =>
                provider.name === professional &&
                provider.services.map((serviciu) => (
                  <Service
                    nameServ={serviciu.name}
                    price={serviciu.price}
                    duration={serviciu.duration}
                    selected={service === serviciu.name}
                    onClick={() => {
                      setService(serviciu.name);
                      setServiceDuration(serviciu.duration);
                      setServicePrice(serviciu.price);
                      setSelectedHour("");
                      console.log(serviciu.duration);
                    }}
                  />
                ))
            )}
          </div>
        ) : stage === 2 ? (
          <div
            className={`flex flex-col items-center overflow-hidden ${
              stage >= 2 ? "h-full" : "h-0"
            }`}
          >
            <Calendar
              onChange={(data) => {
                selectData(data);
                console.log(data.getMonth());
              }}
              value={selectedData}
            />

            <div className="mt-[.5rem] lg:mt-[1rem] flex justify-center flex-wrap gap-2 w-full lg:w-[25rem] ">
              {
                /*availableHours.map((hour) => {
                return (
                  <div
                    onClick={() => {
                      setSelectedHour(hour);
                    }}
                    className="cursor-pointer p-2 font-bold text-[15px] lg:text-[18px] bg-green-500 text-white hover:bg-green-600 transition ease-in-out "
                  >
                    {hour}
                  </div>
                );
              })
       
              appointmentsData?.map((appointment)=>{
                  return (
                    <div
                    onClick={() => {
                      setSelectedHour(appointment.start.dateTime);
                    }}
                    className="cursor-pointer p-2 font-bold text-[15px] lg:text-[18px] bg-green-500 text-white hover:bg-green-600 transition ease-in-out "
                  >
                    {combinedTime(appointment.start.dateTime)}
                   
                  </div>
                  )
              })
              */
                availableHours?.map((hour) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedHour(hour);
                      }}
                      className={`cursor-pointer p-2 font-bold text-[15px] lg:text-[18px] bg-green-500 text-white hover:bg-green-600 transition ease-in-out ${
                        selectedHour === hour && "bg-green-600 size-[1.1]"
                      }`}
                    >
                      {hour}
                    </div>
                  );
                })
              }
            </div>
            <div
              className={`text-[13px] lg:text-[18px]  ${
                (service === "Demontare" ||
                  service === "Stilizare Sprancene") &&
                "hidden"
              }`}
            >
              <Payment setPaymentStatusSecond={handlePaymentStatus} />
            </div>
          </div>
        ) : stage === 3 ? (
          <div className=" flex flex-col items-start px-2 gap-1 text-[12px] lg:text-[20px] w-[90%] lg:w-[40rem]">
            <h4>Serviciul ales: {service}</h4>
            <h4>Profesionistul: {professional}</h4>
            <h4>
              Data: {selectedData.getDate()}-{selectedData.getUTCMonth() + 1}-
              {selectedData.getUTCFullYear()}{" "}
            </h4>
            <h4>
              Intervalul orar: {selectedHour}-
              {(
                parseInt(selectedHour.split(":")[0]) +
                parseInt(serviceDuration.split(":")[0])
              ).toString() +
                ":" +
                (
                  parseInt(selectedHour.split(":")[1]) +
                  parseInt(serviceDuration.split(":")[1])
                ).toString() +
                ((
                  parseInt(selectedHour.split(":")[1]) +
                  parseInt(serviceDuration.split(":")[1])
                ).toString() === "0"
                  ? "0"
                  : "")}{" "}
            </h4>
            <hr className="w-full bg-black h-[1px]" />
            <form
              onSubmit={(e) => sendCode(e)}
              className="mt-[.8rem] lg:mt-[1.3rem] flex flex-col gap-2 lg:gap-4 w-full "
            >
              <p className="text-left">
                Va rugam sa introduceti mai jos datele necesare pentru a
                finaliza programarea
              </p>
              <input
                type="text"
                placeholder="Nume si prenume"
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
                className="p-2 rounded-[8px] outline-none border-b-[1px] border-gray-200 w-full "
                required
              />
              <input
                type="text"
                minLength={10}
                maxLength={13}
                placeholder="Numar de telefon ex: 0712345689"
                value={phoneNumber}
                onChange={(e) => {
                  if (
                    isDigitOrBackspace(
                      e.target.value[e.target.value.length - 1]
                    ) ||
                    e.target.value === ""
                  )
                    setPhoneNumber(e.target.value);
                }}
                className="p-2 rounded-[8px] outline-none border-b-[1px] border-gray-200 w-full"
                required
              />
              <button
                type="submit"
                className="mt-[.5rem] lg:mt-[1rem] font-montSerrat text-white bg-green-500 text-[14px] lg:text-[22px] w-[7rem] lg:w-[12rem] h-[2.5rem] lg:h-[4rem] rounded-[8px] font-bold hover:bg-green-600 transition ease-in-out duration-300"
              >
                Comfirmare
              </button>
              <p className="text-left">
                Apăsând butonul de mai sus confirmi că ești de acord cu{" "}
                <a>Termenii și condițiile, GDPR </a> și{" "}
                <a onClick={() => navigate("/termeni-si-conditii-avans")}>
                  Politica de confidențialitate.
                </a>
              </p>
            </form>
          </div>
        ) : stage === 4 ? (
          <div className="flex flex-col items-start px-2 gap-1 text-[12px] lg:text-[20px] w-[90%] lg:w-[27rem] ">
            <h4>Serviciul ales: {service}</h4>
            <h4>Profesionistul: {professional}</h4>
            <h4>
              Data: {selectedData.getDate()}-{selectedData.getUTCMonth()}-
              {selectedData.getUTCFullYear()}{" "}
            </h4>
            <h4>
              Intervalul orar: {selectedHour}-
              {(
                parseInt(selectedHour.split(":")[0]) +
                parseInt(serviceDuration.split(":")[0])
              ).toString() +
                ":" +
                (
                  parseInt(selectedHour.split(":")[1]) +
                  parseInt(serviceDuration.split(":")[1])
                ).toString() +
                ((
                  parseInt(selectedHour.split(":")[1]) +
                  parseInt(serviceDuration.split(":")[1])
                ).toString() === "0"
                  ? "0"
                  : "")}{" "}
            </h4>
            <div className="mt-[1rem] flex items-center justify-center gap-1 lg:gap-2">
              <input
                type="text"
                inputMode="numeric"
                className="border-[2px] border-gray-400 w-[2.5rem] lg:w-[4rem] h-[3.3rem] lg:h-[5rem] text-center font-bold text-[24px] lg:text-[36px] rounded-[8px]"
                autoComplete="one-time-code"
                ref={inputRefs[0]}
                value={otp[0]}
                onChange={(e) => handleChange(e, 0)}
                onKeyUp={(e) => handleKeyUp(e, 0)}
              />
              <input
                type="text"
                inputMode="numeric"
                className="border-[2px] border-gray-400 w-[2.5rem] w-[2.5rem] lg:w-[4rem] h-[3.3rem] lg:h-[5rem] text-center font-bold text-[24px] lg:text-[36px] rounded-[8px]"
                autoComplete="one-time-code"
                ref={inputRefs[1]}
                value={otp[1]}
                onChange={(e) => handleChange(e, 1)}
                onKeyUp={(e) => handleKeyUp(e, 1)}
              />
              <input
                type="text"
                inputMode="numeric"
                className="border-[2px] border-gray-400 w-[2.5rem] lg:w-[4rem] h-[3.3rem] lg:h-[5rem] text-center font-bold text-[24px] lg:text-[36px] rounded-[8px]"
                autoComplete="one-time-code"
                ref={inputRefs[2]}
                value={otp[2]}
                onChange={(e) => handleChange(e, 2)}
                onKeyUp={(e) => handleKeyUp(e, 2)}
              />
              <input
                type="text"
                inputMode="numeric"
                className="border-[2px] border-gray-400 w-[2.5rem] lg:w-[4rem] h-[3.3rem] lg:h-[5rem] text-center font-bold text-[24px] lg:text-[36px] rounded-[8px]"
                autoComplete="one-time-code"
                ref={inputRefs[3]}
                value={otp[3]}
                onChange={(e) => handleChange(e, 3)}
                onKeyUp={(e) => handleKeyUp(e, 3)}
              />
              <input
                type="text"
                inputMode="numeric"
                className="border-[2px] border-gray-400 w-[2.5rem] lg:w-[4rem] h-[3.3rem] lg:h-[5rem] text-center font-bold text-[24px] lg:text-[36px] rounded-[8px]"
                autoComplete="one-time-code"
                ref={inputRefs[4]}
                value={otp[4]}
                onChange={(e) => handleChange(e, 4)}
                onKeyUp={(e) => handleKeyUp(e, 4)}
              />
              <input
                type="text"
                inputMode="numeric"
                className="border-[2px] border-gray-400 w-[2.5rem] lg:w-[4rem] h-[3.3rem] lg:h-[5rem] text-center font-bold text-[24px] lg:text-[36px] rounded-[8px]"
                autoComplete="one-time-code"
                ref={inputRefs[5]}
                value={otp[5]}
                onChange={(e) => handleChange(e, 5)}
                onKeyUp={(e) => handleKeyUp(e, 5)}
              />
            </div>
            <div className="flex justify-between w-[16.5rem] lg:w-[27rem] ">
              <button
                onClick={sendCode}
                className={`mt-[.5rem] lg:mt-[1rem] font-montSerrat  text-[14px]  w-[7rem] lg:w-[12rem] h-[2.5rem] lg:h-[4rem] rounded-[8px]   ${
                  timer === 0
                    ? "lg:text-[22px] text-white bg-green-500 hover:bg-green-600 font-bold"
                    : "text-black  bg-transparent lg:text-[18px]"
                } transition ease-in-out duration-300`}
                disabled={timer === 0 ? false : true}
              >
                Retrimite {timer !== 0 && `(${timer})`}
              </button>

              <button
                onClick={verifyOTP}
                className="mt-[.5rem] lg:mt-[1rem] font-montSerrat text-white bg-green-500 text-[14px] lg:text-[22px] w-[7rem] lg:w-[12rem] h-[2.5rem] lg:h-[4rem] rounded-[8px] font-bold hover:bg-green-600 transition ease-in-out duration-300"
              >
                Validare
              </button>
            </div>
          </div>
        ) : (
          stage === 5 && (
            <div className="flex flex-col items-center text-[20px] lg:text-[32px] ">
              <div></div>
              <p>Iti multumim pentru programare</p>
              <p>
                Te asteptam pe data de{" "}
                <span className="font-bold">
                  {selectedData.getDate()}-{selectedData.getMonth() + 1}-
                  {selectedData.getUTCFullYear()} <br />{" "}
                </span>{" "}
                la ora <span className="font-bold">{selectedHour}</span>
              </p>
            </div>
          )
        )}

        {/*<h2 className="font-roboto font-[300] text-[22px] lg:text-[36px] ">
        <span className="text-[30px] lg:text-[54px] font-extrabold text-gray-300 ">2 </span>Alege serviciul
      </h2>*/}

        {/*<h2 className="font-roboto font-[300] text-[22px] lg:text-[36px]">
          <span className="text-[30px] lg:text-[54px] font-extrabold text-gray-300">3 </span>Alege data si ora
      </h2>*/}

        {/* <h2 className="font-roboto font-[300] text-[22px] lg:text-[36px]">
          <span className="text-[30px] lg:text-[54px] font-extrabold text-gray-300">4 </span>Finalizeaza programarea
          </h2>*/}
      </div>
    </div>
  );
};

export default Appointment;
