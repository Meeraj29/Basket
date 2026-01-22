import logo from "./assets/Images/Logo.svg";
import Home from "./assets/Images/Home.png";
import Nodes from "./assets/Images/Nodes.png";
import NodeLogo from "./assets/Images/NodeLogo.svg"
import Clubs from "./assets/Images/Clubs.png"
import ClubLogo from './assets/Images/ClubLogo.svg'
import ClubSiteLogo from './assets/Images/ClubSiteLogo.svg'
import Clubsite from './assets/Images/ClubSite.png'
import TreasurLogo from './assets/Images/TreasurLogo.svg'
import Treasure from './assets/Images/Treasure.png'
import CheckMail from './assets/Images/CheckMail.png'
import growthlogo from './assets/Images/growthlogo.svg'
import ccm from './assets/Images/ccm.svg'
import eng from './assets/Images/eng.svg'
import cdc from './assets/Images/cdc.svg'
import Club1 from './assets/Images/Club1.svg'
import Assets from './assets/Images/Assets.svg'
import Node1 from './assets/Images/Node1.svg'
import Modules from './assets/Images/Modules.svg'
import email from './assets/Images/email.svg'
import phone from './assets/Images/phone.svg'
import Arrow from './assets/Images/Arrow.svg'
import sidebar from './assets/Images/sidebar.svg'
import { useState } from "react";
import Frame2 from './assets/Images/Frame2.png'
import image from './assets/Images/image.png'
import cloud1 from './assets/Images/cloud1.png'
import cloud2 from './assets/Images/cloud2.png'
import metal from './assets/Images/metal.png'
import male1 from './assets/Images/male1.jpg'
import male2 from './assets/Images/male2.jpg'
import male3 from './assets/Images/male3.jpg'
import sky from './assets/Images/sky.jpg'
import female from './assets/Images/female.jpg'
import node2 from './assets/Images/node2.svg'
import club2 from './assets/Images/club2.svg'
import spin from './assets/Images/spin.jpg'
import steps from './assets/Images/steps.jpg'
import step2 from './assets/Images/step2.jpg'
import line1 from './assets/Images/line1.svg'
import line3 from './assets/Images/line3.svg'



export default function App() {
  const [openIndex, setOpenIndex] = useState(null);


  return (
    <div className="min-h-screen text-slate-900 font-['Plus_Jakarta_Sans'] relative ">
      <div className="bg-black px-20">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#D2F0E3] to-white">
          {/* Background Image */}


          <div className=" absolute top-0 left-0  w-full min-h-screen -translate-x-[25vw] -translate-y-[25vh] bg-cover  bg-center opacity-100  pointer-events-none  z-0"
            style={{ backgroundImage: `url(${cloud1})` }}
          />

          {/* ===== Background Layer 2 (Rotated) ===== */}
          <div className=" absolute top-0 left-0 w-full min-h-screen translate-x-[35vw] -translate-y-[25vh]  bg-cover bg-center opacity-100 pointer-events-none z-0"
            style={{ backgroundImage: `url(${cloud2})` }}
          />










          {/* Header */}<div className="relative z-10">
            <header className="sticky top-6 ">
              <div className="mx-auto max-w-7xl px-10 grid grid-cols-[auto_1fr_auto] items-center h-16 ">



                {/* Logo */}
                <div className="flex items-center  ">
                  <img src={logo} className="w-68 h-68" />
                  <h1 className="text-xl font-semibold leading-none text-[#212529] w-24 h-7.5">
                    Clubwise
                  </h1>
                </div>

                {/* Center Navigation */}
                <div className="flex justify-center">
                  <nav className="flex items-center gap-16 px-8 py-5 rounded-full border border-[#22B573]">
                    <a className="text-[#22B573] font-medium hover:text-emerald-600 transition">
                      Home
                    </a>
                    <a className="text-black font-medium hover:text-emerald-600 transition">
                      Features
                    </a>
                    <a className="text-black font-medium hover:text-emerald-600 transition">
                      About us
                    </a>
                  </nav>
                </div>

                {/* Right Buttons */}
                <div className="flex items-center gap-4 ">
                  <button className="px-8  rounded-lg w-25 h-12 bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
                    Login
                  </button>
                  <button className="px-8 py-2  w-46 h-12 rounded-lg border border-[#22B573] text-[#22B573] font-medium hover:bg-emerald-50 transition">
                    Create an account
                  </button>
                </div>

              </div>
            </header>

            {/* Hero Section */}
            <main className="flex flex-col items-center text-center w-full mx-auto mt-40 gap-4">

              <h1 className=" ml-4 text-5xl  font-semibold font-poppins leading-relaxed tracking-wide">
                Build, Manage, and Grow Your Club <br />
                Community —{" "}
                <span className="relative inline-block">

                  {/* Text */}
                  <span className="relative z-10">All in One Place</span>

                  {/* Green underline with spacing */}
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-[#22B573] rounded-full z-0"></span>

                </span>
              </h1>


              <p className=" font-poppins font-normal text-slate-600 text-center max-w-2xl mx-auto  leading-relaxed">


                Clubwise helps organizations run clubs, nodes, manage members, host discussions, post opportunities, and keep communities active without chaos.
              </p>


              <div className="mt-6 flex gap-4">

                <button className="px-8 py-3 rounded-lg bg-[#22B573] text-white font-semibold hover:opacity-90 transition">
                  Create an account
                </button>
                <button className="px-8 py-3 rounded-lg border border-emerald-500 text-emerald-500 font-semibold hover:bg-emerald-50 transition">
                  Learn more
                </button>
              </div>
              <img src={node2}
                className="w-14 h-14 absolute rounded-full opacity-100 "
                style={{ top: "414px", left: "335px" }} />

              <img src={line1}
                className="w-61.58 h-250.8 absolute rounded-full opacity-100 "
                style={{ top: "435px", left: "255px" }} />

              <img src={line3}
                className="w-61.58 h-247.04 absolute rounded-full opacity-100 "
                style={{ top: "438.5px", left: "1076.69px" }} />
              <img src={club2}
                className="w-14 h-14 absolute rounded-full opacity-100 "
                style={{ top: "419px", left: "1063px" }} />




              <div className="mx-auto mt-20 max-w-6xl h-full rounded-2xl shadow-[-8px_-8px_12px_#22B57350,8px_-8px_12px_#22B57350,-8px_0_12px_#22B57350]">

                <div className="relative rounded-2xl overflow-hidden">

                  {/* Image */}
                  <img
                    src={Home}
                    alt="Dashboard"
                    className=" object-cover object-top "
                  />

                  {/* Bottom fog ONLY */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-24 bg-gradient-to-t from-white via-white/70 to-transparent">
                  </div>



                </div>
              </div>












              <section className=" pb-10 relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden">

                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${Frame2})` }}
                />


                <div className="relative z-10   mt-40 text-center max-w-5xl mx-auto">
                  <p className="px-30 mr-20 font-poppins font-semibold text-4xl text-black leading-relaxed tracking-snug">
                    From workplace teams to global networks, we build spaces where ideas thrive.
                    Together, we’re shaping the future of community building.
                  </p>

                  <div className="flex justify-center mt-40">
                    <button className="bg-green-500 hover:bg-green-400 text-white w-32 h-12 font-medium rounded-md">
                      Learn More
                    </button>
                  </div>
                </div>
                <img src={metal}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "123px", left: "175px" }}
                />
                <img src={male1}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "67px", left: "497px" }}
                />
                <img src={male2}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "67px", left: "753px" }}
                />
                <img src={male3}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "105px", left: "1047px" }}
                />
                <img src={sky}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "32px", left: "1216px" }}
                />
                <img src={female}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "338px", left: "100px" }}
                />
                <img src={spin}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "420px", left: "336px" }}
                />
                <img src={steps}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "420px", left: "1160px" }}
                />
                <img src={step2}
                  className="w-14 h-14 absolute rounded-full opacity-100"
                  style={{ top: "264px", left: "1284px" }}
                />


              </section>






              <div
                className="  pb-30 relative  bg-white/70 opacity-100  min-h-screen w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${image})` }}
              >

                {/* Features Button */}
                <button className="bg-white text-black mt-12 font-medium font-poppins rounded-full py-2 px-6 shadow-md opacity-100 hover:bg-gray-100" >
                  Features
                </button>

                {/* Heading */}
                <h1 className="font-poppins font-semibold text-[32px] text-center leading-relaxed mt-6">
                  <span className="block">
                    Everything Your Community Needs —
                  </span>
                  <span className="block">
                    Nothing It Doesn’t
                  </span>
                </h1>


                <p className="font-poppins font-normal text-base text-black/70 text-center leading-relaxed max-w-7xl">
                  <span className="block">Create and manage multiple clubs under one platform.Assign admins, manage members,</span>
                  <span className="block"> and control visibility.</span>
                </p>




                <section className="mx-auto mt-10 max-w-7xl flex-col md:flex-row flex items-center justify-between gap-12">

                  {/* LEFT CONTENT */}
                  <div className=" flex max-w-7xl flex-col gap-1 px-10">

                    {/* Title Group */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <img src={NodeLogo} alt="Nodes icon" className="h-6 w-6" />
                        <h2 className="font-poppins text-2xl font-bold text-black">
                          Nodes
                        </h2>
                      </div>

                      {/* Subtitle - Directly below title */}
                      <p className=" flex items-start w-full mt-1 font-poppins text-base italic text-black/90">
                        For internal company communities!
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-poppins text-base  text-black">
                      Structure large communities into focused sub-groups.
                    </p>

                    {/* Bullet points - Standard sizing */}
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-start gap-1 font-poppins  text-black text-base ">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Create chapters, teams, or sub-groups within a club
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Assign leaders for each node
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Keep discussions and activities organized
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5  rounded-full bg-emerald-500"></span>
                        Scale without losing clarity or control
                      </li>
                    </ul>

                    {/* Learn more - Matching the first photo's underline style */}
                    <div className="mt-2 flex items-start">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 border-b-2 border-emerald-500 pb-0.5 font-poppins text-base font-semibold text-black  hover:text-emerald-600"
                      >
                        Learn more
                        <img src={sidebar} />
                      </a>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className=" flex w-full md:w-1/2 md:justify-end ">
                    <div className="rounded-2xl bg-emerald-50">
                      <img
                        src={Nodes}
                        alt="Nodes UI preview"
                        className="h-auto w-full rounded-lg shadow-sm"
                      />
                    </div>
                  </div>

                </section>



                <section className="mx-auto mt-10 w-full max-w-7xl flex-col md:flex-row flex items-center justify-between gap-10">
                  <div className=" flex w-full md:w-1/2 md:justify-end">
                    <div className="rounded-2xl bg-emerald-50">
                      <img src={Clubs} className="h-auto w-full rounded-lg shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-10  flex max-w-7xl flex-col gap-1 px-20">

                    {/* Title Group */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center  gap-1">
                        <img src={ClubLogo} alt="Nodes icon" className="h-6 w-6" />
                        <h2 className="font-poppins text-2xl font-bold text-black ">
                          Join Clubs
                        </h2>
                      </div>
                      <p className=" flex items-center w-full mt-1 font-poppins text-base italic text-black/90">
                        For global shared interests!
                      </p>
                    </div>

                    <p className="text-start font-poppins text-base text-black tracking-tight">
                      Create, manage, and run clubs without operational mess.
                    </p>

                    {/* Bullet points - Standard sizing */}
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-start gap-2 font-poppins  text-black text-base/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Create and manage multiple clubs from one platform
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Assign roles to admins, moderators, and members
                      </li>
                      <li className="flex text-start gap-2 font-poppins text-base text-black tracking-tight">
                        <span className="mt-2 h-2 w-2.5 rounded-full bg-[#22B573]"></span>
                        Share updates, announcements, and activities centrally
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5  rounded-full bg-emerald-500"></span>
                        Control member access and visibility
                      </li>
                    </ul>

                    <div className="mt-2 flex items-start">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 border-b-2 border-emerald-500 pb-0.5 font-poppins text-base font-semibold text-black hover:text-emerald-600"
                      >
                        Learn more
                        <img src={sidebar} />
                      </a>
                    </div>



                  </div>
                </section>



                <section className="mx-auto mt-10 w-full max-w-7xl flex-col md:flex-row flex items-center justify-between gap-10">

                  {/* LEFT CONTENT */}
                  <div className=" flex max-w-xl flex-col gap-1 px-10">

                    {/* Title Group */}
                    <div className="mt-8 flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <img src={ClubSiteLogo} alt="Nodes icon" className="h-8 w-8" />
                        <h2 className="font-poppins text-2xl font-bold text-black">
                          Clubsites
                        </h2>
                      </div>
                      <p className="text-start font-poppins text-base text-black tracking-tight">
                        Showcase your club’s identity, work, and achievements publicly.
                      </p>

                      {/* Subtitle - Directly below title */}


                    </div>




                    {/* Bullet points - Standard sizing */}
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-start gap-1 font-poppins  text-black text-base ">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Custom public page for each club & Nodes
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Highlight achievements, events, and leadership
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Build credibility and attract new members
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5  rounded-full bg-emerald-500"></span>
                        Share your club link anywhere
                      </li>
                    </ul>

                    {/* Learn more - Matching the first photo's underline style */}
                    <div className="mt-2 flex items-start">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 border-b-2 border-emerald-500 pb-0.5 font-poppins text-base font-semibold text-black hover:text-emerald-600"
                      >
                        Learn more
                        <img src={sidebar} />
                      </a>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className=" flex w-full md:w-1/2 md:justify-end">

                    <img
                      src={Clubsite}
                      alt="Nodes UI preview"
                      className="h-auto w-full rounded-lg "
                    />
                  </div>


                </section>


                <section className="mx-auto mt-10 w-full max-w-7xl  flex-col md:flex-row flex items-center justify-between gap-10">
                  <div className=" flex w-full md:w-1/2 md:justify-end">
                    <div className="rounded-2xl ">
                      <img src={Treasure} className="h-auto w-full rounded-lg "
                      />
                    </div>
                  </div>

                  <div className="mt-10   flex max-w-7xl  flex-col gap-1 px-20">

                    {/* Title Group */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center  gap-1">
                        <img src={TreasurLogo} alt="Nodes icon" className="h-6 w-6" />
                        <h2 className="font-poppins text-2xl font-bold text-black">
                          Treasure House
                        </h2>
                      </div>
                      <p className=" flex text-start w-full mt-1 font-poppins text-base  text-black/90">
                        A centralized space for assets and modules shared across all clubs. </p>

                    </div>



                    {/* Bullet points - Standard sizing */}
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-start gap-2 font-poppins  text-black text-base/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Store common assets, templates, and resources globally
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        Share reusable modules across clubs and nodes
                      </li>
                      <li className=" flex items-start gap-2  font-poppins text-base  text-black/">
                        <span className="mt-2 h-2.5 w-2.5  rounded-full bg-emerald-500 "></span>
                        Maintain consistency in documents and workflows
                      </li>
                      <li className="flex items-start gap-2 font-poppins text-base text-black/">
                        <span className="mt-2 h-2.5 w-2.5  rounded-full bg-emerald-500"></span>
                        Reduce duplication and save operational time
                      </li>
                    </ul>

                    <div className="mt-2 flex items-start">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 border-b-2 border-emerald-500 pb-0.5 font-poppins text-base font-semibold text-black hover:text-emerald-600"
                      >
                        Learn more
                        <img src={sidebar} />
                      </a>
                    </div>





                  </div>
                </section>
              </div>








              <h1 className=" mt-20 mx-auto max-w-7xl font-poppins text-5xl font-semibold leading-none text-center text-black">
                Why Clubs Choose  <span className="text-emerald-700">Clubwise</span>
              </h1>
              <p className=" mx-auto max-w-3xl font-poppins text-base font-normal leading-relaxed tracking-wide gap-4 text-center text-black/70 opacity-100">
                Most platforms are generic.{" "}Clubwise is purpose-built for clubs and communities that need structure, engagement, and visibility in one system.
              </p>









              <section className="p-20 mt-10 relative w-full h-full  flex flex-col lg:flex-row gap-4 ">

                {/* ================= LEFT IMAGE ================= */}
                <div className="pl-10  w-full lg:w-1/2  sm:grid-cols-2 gap-4   overflow-hidden gap-2">
                  <div className="rounded-2xl bg-emerald-50 h-full w-full object-cover">
                    <img
                      src={CheckMail}

                    />
                  </div>
                </div>


                {/* ================= RIGHT CARDS ================= */}
                <div>
                  {/* ROW 1 */}
                  <div className=" mt-8  flex flex-wrap gap-2 ">
                    <div className="max-w-md lg:w-1/3  ">
                      <div className="rounded-2xl border border-[#E6E6E6] bg-gradient-to-b from-white to-[#D4FFEC]  p-5 min-h-56 flex flex-col gap-3">
                        <img src={growthlogo} className="h-9 w-9 hover:bg-gray-900 rounded-full" />
                        <div className="w-50 border-t border-dashed border-gray-400 opacity-100 "></div>

                        <p className="text-sm uppercase text-black/60 text-start">Scales With Your Growth</p>
                        <p className="text-sm font-semibold text-black font-poppins leading-snug text-start tracking-normal">
                          From a small club to a large network, Clubwise grows without breaking workflows.
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm h-full lg:w-2/3 gap-2">
                      <div className="rounded-2xl border border-[#E6E6E6] bg-[#F9FFF4] p-5 min-h-56 flex items-start gap-4">

                        {/* Logo */}
                        <img src={ccm} className="h-9 w-9 hover:bg-gray-900 rounded-full" />

                        {/* Vertical dashed line */}
                        <div className="border-l border-dashed border-gray-400 h-40 "></div>

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                          <p className="mt-4 text-sm uppercase text-black/60 text-start">Centralized Club Management</p>
                          <span className="mt-4  text-md font-semibold text-black text-start leading-snug tracking-normal font-poppins">
                            Manage members, roles, updates, and activities from one dashboard.
                            No spreadsheets.
                            No confusion.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ROW 2 */}
                  <div className="flex flex-wrap gap-2">
                    <div className="max-w-sm lg:w-2/3 gap-2">
                      <div className="rounded-2xl border border-[#E6E6E6] bg-[#F9FFF4] p-5 min-h-56 flex items-start gap-4">

                        {/* Logo */}
                        <img src={eng} className="h-9 w-9 hover:bg-gray-900 rounded-full" />

                        {/* Optional vertical dashed line (same as above card) */}
                        <div className="border-l border-dashed border-gray-400 h-40"></div>

                        {/* Content */}
                        <div className=" mt-4 flex flex-col gap-2">
                          <p className="text-sm uppercase text-black/60 text-start">
                            Engagement That Actually Works
                          </p>
                          <p className="mt-4  text-md font-semibold text-black text-start leading-snug tracking-normal font-poppins line-clamp-4">
                            Discussions, debates, and issue-raising tools keep members active instead of passive.
                          </p>
                        </div>

                      </div>
                    </div>






                    <div className="max-w-md lg:w-1/3 gap-2">
                      <div className="rounded-2xl border border-[#E6E6E6] bg-gradient-to-b from-white to-[#D4FFEC] p-5 min-h-56 flex flex-col gap-3">
                        <img src={cdc} className="h-9 w-9 hover:bg-gray-900 rounded-full" />
                        <div className="w-50 border-t border-dashed border-gray-400 opacity-100"></div>
                        <p className="text-sm uppercase text-black/60 text-start">Opportunity-Driven Communities</p>
                        <p className="text-sm font-semibold text-black leading-snug text-start">
                          Share jobs, internships, events, and collaborations directly within the club ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>



              </section>
              <div className="mt-10 w-full h-full bg-[#DEFFE1] py-20 bg-cover">
                <div className="mx-auto w-full max-w-6xl">

                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center  hover:bg-gray-200 shadow-[0_4px_20px_rgba(16,185,129,0.25)]">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-400 text-green text-xl">
                        <img src={Club1} />
                      </div>
                      <p className="font-poppins text-2xl font-semibold text-black">50+</p>
                      <p className="mt-1 font-poppins text-sm text-black/70 ">Active Clubs</p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center  hover:bg-gray-200 shadow-[0_4px_20px_rgba(16,185,129,0.25)]">

                      {/* Icon frame */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#22B573]">
                        <img src={Node1} />
                      </div>

                      <p className="font-poppins text-2xl font-semibold text-black">100+</p>
                      <p className="mt-1 font-poppins text-sm text-black/70">Nodes</p>
                    </div>


                    {/* Card 3 */}
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center  hover:bg-gray-200 shadow-[0_4px_20px_rgba(16,185,129,0.25)]">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 text-white text-xl">
                        <img src={Assets} />
                      </div>
                      <p className="font-poppins text-2xl font-semibold text-black">500+</p>
                      <p className="mt-1 font-poppins text-sm text-black/70">Assets</p>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center  hover:bg-gray-200 shadow-[0_4px_20px_rgba(16,185,129,0.25)]">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 text-white text-xl">
                        <img src={Modules} />
                      </div>
                      <p className="font-poppins text-2xl font-semibold text-black">60+</p>
                      <p className="mt-1 font-poppins text-sm text-black/70">Modules</p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="min-h-screen bg-white py-24">
                <div className="mx-auto w-11/12 max-w-4xl text-center">

                  {/* Heading */}
                  <h2 className="text-3xl font-semibold text-black">
                    Frequently Asked Questions
                  </h2>

                  <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 leading-relaxed text-center">
                    Clear answers for both Clubs and Nodes—designed for transparency and confident decision-making.
                  </p>


                  {/* Toggle Buttons */}
                  <div className="mt-8 flex justify-center gap-4">
                    <button className="rounded-full bg-[#22B573] px-6 py-2 text-sm font-medium text-white  hover:bg-emerald-600">
                      Club
                    </button>
                    <button className="rounded-full border border-emerald-500 px-6 py-2 text-sm font-medium text-[#22B573]  hover:bg-emerald-200">
                      Node
                    </button>
                  </div>



                  <div className="w-[65rem] h-18 opacity-100 flex gap-2.5 rounded-lg px-6 py-4  hover:text-gray-500">
                    {/* content */}
                  </div>

                  {/* FAQ 1 */}
                  <div className="mt-10 mx-auto max-w-full rounded-xl bg-gray-100 px-5 py-5  hover:text-gray-500">
                    <div className="flex items-center justify-between ">
                      <p className="text-sm font-medium ">
                        What is a Club in ClubWise?
                      </p>

                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === 0 ? null : 0)
                        }
                        className="flex h-8 w-8items-center justify-center rounded-full bg-emerald-500 "
                      >
                        <img
                          src={Arrow}
                          className={`transition-transform ${openIndex === 0 ? " rotate-180" : ""
                            }`}
                        />
                      </button>
                    </div>

                    {openIndex === 0 && (
                      <p className="mt-3 text-sm text-gray-700 text-start leading-tight ">
                        A Club represents an organisation that manages members, activities, payments, and engagement. ClubWise provides clubs with a centralized system to streamline operations and maintain accountability.
                      </p>
                    )}
                  </div>





                  <div className="mt-2 mx-auto mx-w-full rounded-xl bg-gray-100 px-5 py-5  hover:text-gray-500">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-poppins font-medium">
                        How does ClubWise help manage members?
                      </p>
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === 1 ? null : 1)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500"
                      >
                        <img
                          src={Arrow}
                          className={`transition-transform ${openIndex === 1 ? "rotate-180" : ""
                            }`}
                        />
                      </button></div>

                    {openIndex === 1 && (
                      <p className="mt-3 text-sm text-gray-700 text-start">
                        ClubWise allows clubs to manage member profiles, subscriptions, attendance, communication, and renewals from a single dashboard—reducing manual effort and administrative overhead.
                      </p>
                    )}
                  </div>


                  <div className="mt-2 mx-auto mx-w-full rounded-xl bg-gray-100 px-5 py-5  hover:text-gray-500">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-poppins font-medium">
                        Can multiple staff members access the club account?
                      </p>
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === 2 ? null : 2)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500"
                      >
                        <img
                          src={Arrow}
                          className={`transition-transform ${openIndex === 2 ? "rotate-180" : ""
                            }`}
                        />
                      </button></div>

                    {openIndex === 2 && (
                      <p className="mt-3 text-sm text-gray-700 text-start">
                        Yes. Clubs can assign role-based access to administrators, trainers, and managers, ensuring responsibilities are clearly defined and controlled.
                      </p>
                    )}
                  </div>

                  <div className="mt-2 mx-auto mx-w-full rounded-xl bg-gray-100 px-5 py-5  hover:text-gray-500">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-poppins font-medium">
                        How do members interact with the club?
                      </p>
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === 3 ? null : 3)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500"
                      >
                        <img
                          src={Arrow}
                          className={`transition-transform ${openIndex === 3 ? "rotate-180" : ""
                            }`}
                        />
                      </button></div>

                    {openIndex === 3 && (
                      <p className="mt-3 text-sm text-gray-700 text-start">
                        Members can view schedules, receive updates, manage their profiles, and stay informed through a mobile-friendly interface.
                      </p>
                    )}
                  </div>

                  <div className="mt-2 mx-auto mx-w-full rounded-xl bg-gray-100 px-5 py-5  hover:text-gray-500">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-poppins font-medium ">
                        What kind of support is available for clubs?
                      </p>
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === 4 ? null : 4)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500"
                      >
                        <img
                          src={Arrow}
                          className={`transition-transform ${openIndex === 4 ? "rotate-180" : ""
                            }`}
                        />
                      </button></div>

                    {openIndex === 4 && (
                      <p className="mt-3 text-sm text-gray-700 text-start ">
                        Clubs receive guided onboarding, documentation, and ongoing support to ensure smooth day-to-day operations.
                      </p>
                    )}
                  </div>
                </div></div>





              <div className="w-full bg-linear-to-r from-emerald-100 via-emerald-50 to-sky-100  ">
                <div className="bg-gradient-to-br pt-10 from-[#D2F0E2] to-[#DEE6F7]">

                  <div className="mx-auto w-11/12 max-w-8xl">

                    {/* Top Content */}
                    <div className="flex flex-col gap-12 md:flex-row md:justify-between">

                      {/* Left Section */}
                      <div className="max-w-md text-left">
                        <div className="flex items-center gap-1">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg  text-black">
                            <img src={logo} />
                          </div>
                          <h3 className="text-lg font-semibold text-black">Clubwise</h3>
                        </div>

                        <p className="   mt-4 text-sm text-gray-700 text-poppins  tracking-normal leading-relaxed">
                          Simplifying club and membership management through reliable technology,thoughtful processes, and a commitment to long-term growth.
                        </p>

                        <button className="mt-4  rounded-lg bg-[#22B573] px-5 py-2  text-sm font-medium hover:bg-green-400">
                          Book a Guided Demo →
                        </button>
                      </div>

                      {/* Quick Links */}
                      <div>
                        <h4 className="text-sm font-semibold text-black">Quick links</h4>
                        <ul className=" mt-3 space-y-2 text-start text-sm text-gray-700  ">
                          <li>Home </li>
                          <li>Features</li>
                          <li>About us</li>
                          <li>Contact us</li>
                        </ul>
                      </div>

                      {/* Contact Us */}
                      <div>
                        <h4 className="text-start text-sm font-semibold">Contact us</h4>
                        <div className="mt-3 space-y-2 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <span><img src={email} /></span>
                            <span>support@clubwise.com</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span><img src={phone} /></span>
                            <span>+91 9874563210</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Divider */}
                    <div className="mt-16 border-t border-black/10"></div>

                    {/* Bottom */}
                    <p className="mt-6 text-center text-xs text-gray-600">
                      © 2025 ClubWise. All rights reserved.
                    </p>

                  </div>
                </div>
              </div>











            </main>
          </div>
        </div>
      </div>

    </div>

  );
}





