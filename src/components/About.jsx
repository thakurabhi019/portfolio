import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import HelloAnimation from "./HelloAnimation";
import { SiLeetcode } from "react-icons/si";
const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Abhishek Thakur.", "Frontend Developer & Graphic designer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 120,
      backDelay: 120,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="flex justify-between items-center w-full h-auto lg:h-[90vh]  bg-[#B4F2F1] "
      id="home"
    >
      <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-between items-center  mx-4 mt-4 lg:mx-44 w-[90%] lg:w-full ">
        <div className="flex flex-col justify-between gap-5 items-center lg:items-start font-semibold ">
          <h1 className=" font-kalam">
            <HelloAnimation />
          </h1>
          <h1 className="text-2xl lg:text-6xl  font-kalam">
            I'm <span ref={el}></span>
          </h1>
          <p className="text-xl text-gray-500">
          Creating visually stunning, user-friendly websites and designs, blending development expertise with creativity to deliver impactful digital experiences.
          </p>

          <div className="flex gap-6 ">
            <div>
              <a
                href="https://www.canva.com/design/DAF-nlv9wkE/tFgZZeaoyWY2QMb09APp3g/view?utm_content=DAF-nlv9wkE&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-lg bg-orange-500 text-white font-semibold h-10 w-28 text-center items-center ">
                  View CV
                </button>
              </a>
            </div>
          </div>
          {/* <div className="flex text-center justify-center gap-2 cursor-pointer text-4xl">
            <a
              href="https://www.linkedin.com/in/gauravkumar44/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className=" hover:fill-white hover:bg-white hover:rounded-full hover:border-white"
                width="45px"
                height="45px"
                viewBox="0 -2 44 44"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>LinkedIn-color</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-702.000000, -265.000000)"
                      fill="#007EBB"
                    >
                      {" "}
                      <path
                        d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                        id="LinkedIn"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>

            <a
              href="https://github.com/gk12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className=" hover:fill-white hover:bg-white hover:rounded-full hover:border-white"
                width="45px"
                height="45px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#000000"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/gk12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className=" hover:fill-white hover:bg-white hover:rounded-full hover:border-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="leetcode"
                width="50"
                height="50"
              >
                <path
                  fill="#B3B1B0"
                  d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                ></path>
                <path
                  fill="#E7A41F"
                  d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                ></path>
                <path
                  fill="#070706"
                  d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.codechef.com/users/giri_12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className=" hover:bg-white hover:rounded-full hover:border-white"
                fill="#000000"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M11.257.004c-.37.01-.735.04-1.1.095-.54.054-1.08.325-1.675.595-.757.324-1.515.649-2.218.703-1.19.378-1.568.919-1.892 1.351 0 .054-.054.108-.054.108-.433.865-.487 1.73-.325 2.595.162.541.378 1.029.54 1.515.38 1.028.758 2 .92 3.136.163.325.324.757.432 1.19.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01-.02-.584c.648-.974 1.566-1.623 2.864-1.893.52-.11 1.081-.15 1.663-.128a8.773 8.773 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785.027.354.04.695.032 1.036 0 .064-.004.128-.007.193l.136.068a.639.639 0 0 0 .206-.19l.003-.003.006-.008c.04-.054.075-.124.11-.194.02-.037.038-.086.056-.129.205-.462.362-1.153.538-1.963.054-.27.11-.487.163-.703.433-.973 1.027-1.838 1.622-2.65.973-1.35 1.892-2.595 1.784-4.055-1.784-3.461-4.272-4.002-5.57-4.272-.216-.054-.323-.054-.485-.108-1.338-.244-2.494-.396-3.605-.365zM16.3 14.383a9.86 9.86 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.536 9.536 0 0 0-1.744-.236 6.761 6.761 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1 .065-.005.136-.005.204-.009.117-.013.266-.044.444-.044 1.607 0 3.268.534 4.877 1.648.039-.274.06-.549.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011-.23-.002-.459.003-.687.016.103-.006.205-.024.308-.027zm.498.015zM10.44.13c-.076.009-.153.013-.229.024-.817.117-1.774.701-2.75 1.045.355-.132.714-.296 1.075-.45.54-.27 1.135-.541 1.621-.595.094-.014.189-.013.283-.024zm-.229.24c.162 0 .379 0 .541.054a.995.995 0 0 0-.37-.014 1.174 1.174 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149a57.37 57.37 0 0 0 .463 2.72c-.703-1.784-1.406-4.921-1.515-7.354-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354-.054.54 0 1.73.054 2.595 0 .216.054.432.054.649 0-.217-.054-.379-.054-.595-.433-3.244-.974-7.136.918-10.002zm3.352.379c-.27 2.162-1.405 3.19-1.783 5.3-.108 1.676-.325 3.622-.379 5.298-.054-1.676 0-3.46.27-5.245.27-1.838.865-3.677 1.892-5.353zM6.32 1.45zm.21.197a.856.856 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384-.204.968.255 3.032.04 4.67.076 1.548.071 3.18.849 4.459-.98-1.51-1.176-3.438-1.322-5.236-.113-1.09-.204-2.097-.464-2.903-.144-.305-.269-.575-.384-.822-.024-.037-.044-.079-.07-.114a.582.582 0 0 1-.162-.377c0-.054.053-.162.108-.162.054-.054.161-.056.215-.11a1.013 1.013 0 0 1 .21-.018zm-1.347.613c-.06.02-.092.041-.14.061.177-.034.362.034.52.318-.188.892.436 3.369.428 5.104.313 1.848.55 3.85 1.572 5.115-1.19-1.351-1.676-3.73-2.054-5.731-.325-1.568-.596-2.92-1.136-3.352-.054-.108-.108-.163-.108-.271 0-.162 0-.379.108-.595-.277.634-.405 1.267-.37 1.901a3.844 3.844 0 0 1 .37-1.901c0-.054.054-.054.054-.108.012-.016.031-.035.044-.051a.878.878 0 0 1 .226-.257c.055-.061.096-.12.159-.182-.053.056-.088.11-.134.165.027-.018.052-.037.084-.052a.49.49 0 0 1 .377-.164zm-.377.164c-.004.007-.008.01-.012.018l.037-.03-.025.012zm14.76 1.134-.005.015c.038-.005.075-.017.113-.015-.037-.002-.076.01-.115.02-.863 2.642-1.887 5.284-2.911 7.926a.018.018 0 0 1-.002.003c-.087.465-.234.884-.54 1.19.433-.487.486-1.191.54-2.056.054-.811.054-1.676.487-2.542 0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018.418-1.29 1.14-3.166 2.013-3.34.016-.006.034-.019.05-.022zM8.374 16.21l-.324.108c.162.217.27.38.378.433a.784.784 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054.108 0 .162 0 .27.054l.271.27.27-.054c-.108-.162-.27-.323-.378-.377-.108-.054-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054-.054-.054-.163-.162-.271-.325zm-2.596.541c-.27.162-.649.433-1.19.649-.54.216-.973.433-1.19.649-.215.216-.323.432-.323.649 0 .108.054.163.162.217.054.054.163.054.217.108a27.9 27.9 0 0 1 2.216 1.08c.109.054.217.163.272.217.054.054.107.054.161.054.109 0 .27-.053.378-.162.108-.108.163-.217.163-.325 0-.108-.055-.161-.163-.215 0 0-.433-.217-1.19-.541a11.967 11.967 0 0 1-1.188-.595c.162-.27.486-.487.973-.703.54-.216.92-.433 1.081-.595.054-.054.054-.108.054-.162a.412.412 0 0 0-.108-.217.415.415 0 0 0-.27-.108zm11.247 0a.408.408 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378.27.054.54.163.811.217.324.108.54.27.649.486v.055c0 .054-.109.162-.325.27-.108.054-.325.217-.595.433-.27.162-.433.323-.595.377-.216.109-.378.217-.432.326-.054.054-.054.107-.054.161 0 .108.054.108.108.216s.162.11.216.11c.054 0 .108-.056.162-.056.27-.162.65-.378 1.082-.757.486-.378.865-.648 1.082-.81.216-.108.323-.217.323-.38 0-.053 0-.161-.108-.215-.378-.433-.918-.702-1.567-.919-.108-.054-.27-.109-.595-.163-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218-.216.162-.27.432-.216.757 0 .27.108.486.27.703.162.216.379.325.595.325.162 0 .27-.056.433-.11.27-.162.379-.432.379-.918 0-.379-.109-.649-.271-.81a.915.915 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217-.217.162-.27.432-.216.757 0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11.27-.162.378-.432.378-.918 0-.433-.108-.703-.27-.81a.915.915 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27 0 .162-.163.27-.27.27-.163 0-.27-.108-.27-.27s.107-.27.27-.27zm4.38.054c.162 0 .271.107.271.27 0 .108-.109.27-.27.27-.163 0-.27-.108-.27-.27 0-.163.107-.27.27-.27zm-2.703 2.108.162.324a.947.947 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054.054-.054.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163.054-.054.054-.108.108-.162 0-.054.054-.108.054-.108-.054.108-.162.216-.216.324-.108.054-.161.163-.27.163-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216zm-.866 1.028c-1.136 0-1.838 1.514-3.46.162-.432 2.65 2.758 2.866 4.11 1.73.92-.81.648-1.946-.65-1.892zm2.866 0c-1.297-.054-1.568 1.082-.648 1.893 1.351 1.135 4.54.918 4.108-1.731-1.622 1.352-2.27-.162-3.46-.162z"></path>
                </g>
              </svg>
            </a>
            <a
              href="https://www.hackerrank.com/profile/gk44035"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className=" hover:fill-white hover:bg-white hover:rounded-full hover:border-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50px"
                height="50px"
                id="hackerrank"
              >
                <path
                  fill="#2FC363"
                  d="M11.999 0C10.626 0 2.195 4.818 1.513 6c-.682 1.182-.686 10.819 0 12 .686 1.181 9.115 6 10.486 6 1.371 0 9.8-4.824 10.487-6 .686-1.176.686-10.83 0-12-.687-1.17-9.115-6-10.487-6zm2.841 19.415v.002c-.188 0-1.939-1.677-1.8-1.814.041-.041.296-.069.832-.086 0-1.23.028-3.215.045-4.046.002-.095-.021-.161-.021-.274h-3.787c0 .333-.022 1.697.065 3.416.011.213-.075.279-.272.278-.48-.001-.96-.005-1.44-.004-.194 0-.278-.072-.272-.286.043-1.567.14-3.938-.007-9.969v-.149c-.46-.016-.778-.045-.82-.086C7.225 6.26 9 4.583 9.187 4.583c.187 0 1.951 1.677 1.813 1.814-.041.041-.374.07-.795.086v.148c-.114 1.207-.096 3.731-.124 4.94h3.803c0-.213.018-1.628-.057-3.921-.005-.159.046-.242.199-.244.525-.004 1.049-.006 1.575-.003.164.001.216.081.213.252-.173 8.967-.031 8.341-.031 9.86.42.016.797.045.838.086.136.136-1.593 1.814-1.781 1.814z"
                ></path>
              </svg>
            </a>
            <a
              href="https://codeforces.com/profile/gk44"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className=" hover:bg-white hover:rounded-full hover:border-white"
                width="50px"
                height="50px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="code-forces"
              >
                <path
                  fill="#F44336"
                  d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"
                ></path>
                <path
                  fill="#2196F3"
                  d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"
                ></path>
                <path
                  fill="#FFC107"
                  d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/gk44035/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className=" hover:bg-white hover:rounded-full hover:border-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#43a047"
                  d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"
                ></path>
              </svg>
            </a>
          </div> */}
        </div>
        <div className="h-[30%] w-[30%] text-center  ">
          {/* <img
            src="https://res.cloudinary.com/gk35044/image/upload/v1721730188/gaurav_portfolio/wk9pbr362djsehhd6puy.jpg"
            alt="avatar_Image"
            className=" rounded-[15%] h-full w-full shadow-2xl "
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;