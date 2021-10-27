import React from 'react';
import Typewriter from 'typewriter-effect';
import Layout from '../components/Layout';


export const Index = (): JSX.Element => {
  return (
    <Layout>
      <div className="bg-gray-50 bg-opacity-95 border-4 text-center border-gray-400 dark:border-gray-50 dark:bg-gray-900 dark:bg-opacity-75 rounded-2xl p-4 my-20 mx-auto max-w-8xl">
        <h1 className="lg:text-7xl text-5xl dark:text-gray-50 colorful font-bold mx-auto ">
          <span className=" text-6xl bg-gradient-to-r bg-clip-text from-gray-600 to-gray-400 dark:from-gray-200 dark:to-gray-500">
            Thomas Leon Highbaugh
          </span>
        </h1>
        <div className="flex justify-center items-center ">
          <svg
            className="  text-gray-300"
            width="400"
            height="400"
            viewBox="0 0 160 160"
            fill="url(#Gradient2)"
            stroke="#00000066"
            strokeWidth="2px"
          >
            <defs>
              <linearGradient id="Gradient3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#e9efff" stopOpacity="10" />
                <stop offset="60%" stopColor="#8b9cbe" stopOpacity="10" />
                <stop offset="100%" stopColor="#555e70" stopOpacity="10" />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="1" y2="1">
                <stop offset="0%" stopColor="#b2bfd9" stopOpacity="30" />
                <stop offset="70%" stopColor="#8b9cbe" stopOpacity="80" />
                <stop offset="100%" stopColor="#555e70" stopOpacity="90" />
              </linearGradient>
              <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#e9efff" stopOpacity="80" />
                <stop offset="50%" stopColor="#b2bfd9" stopOpacity="100" />
                <stop offset="100%" stopColor="#8b9cbe" stopOpacity="80" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="50" fill="url(#Gradient2)" />
            <g transform=" matrix(0.866, -0.5, -0.25, -0.443, 80, 80)">
              <path
                d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                fill="url(#Gradient1)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 -10 10"
                  to="0 0 0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            <path
              d="M 50,0 A 50,50 0 0,0 -50,0Z"
              fill="url(#Gradient3)"
              transform="matrix(0.836, -0.495, 0.495, 0.836, 80, 80)"
              stroke="none"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <div className="text-gray-700 dark:text-gray-50 text-center xl:text-3xl lg:text-2xl text-xl">
            <Typewriter
              options={{
                autoStart: true,
                cursor: '|',
                loop: true,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(500)
                  .typeString(
                    'Web Developer | Linux Professional | Digital Artist'
                  )
                  .changeDeleteSpeed(0.01)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
