import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Globe,
  Lightbulb,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import UnivImage from "@/public/univ-msila.jpg";
import styles from "./carousel.module.css";

/**
 *
 * Header Banner Logo
 * Will probably be replaced by an svg later
 *
 */

function HeaderBannerLogo() {
  return (
    <div className="flex justify-center mb-4">
      <div
        className="inline-flex items-center justify-center p-3 rounded-full shadow-lg"
        style={{
          backgroundColor: "var(--primary-500)",
          color: "var(--foreground)",
        }}
      >
        <Cpu className="h-8 w-8" />
      </div>
    </div>
  );
}

/**
 *
 * Header banner, Contains the title of the conference and other important info
 * ex(Date, Location)
 *
 */

function HeaderBanner() {
  return (
    <>
      <div className="mb-8 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
          The 2<sup>nd</sup> International Conference of
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          Advanced Technology in Electronic and
          <br />
          Electrical Engineering (ICATEEE2025)
        </h1>
        <div className="flex items-center justify-center space-x-2 md:text-xl font-semibold">
          <Calendar className="h-5 w-5" />
          <p>15th to 16th December 2025</p>
          <span className="mx-2">•</span>
          <MapPin className="h-5 w-5" />
          <p>M&apos;sila, ALGERIA</p>
        </div>
      </div>
    </>
  );
}

/**
 * Carousel component (Currently only supports 2 images and is CSS only)
 */

function CarouselPlayground() {
  return (
    <div
      className={styles.slider}
      style={{ "--width": "100vw", "--height": "300px" } as React.CSSProperties}
    >
      <div
        className={styles.tinter}
        style={{ "--width": "100%", "--height": "100%" } as React.CSSProperties}
      ></div>
      <div className="w-full h-full absolute z-101 flex items-center justify-center">
        <HeaderBanner></HeaderBanner>
      </div>
      <img
        src="https://www.univ-msila.dz/site/wp-content/uploads/2023/09/umbm.jpg"
        alt=""
        aria-hidden
        className=""
        style={
          {
            "--height": "100%",
            "--width": "100%",
            "--index": 0,
          } as React.CSSProperties
        }
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2b/La_facult%C3%A9_de_technologie_%28Univ-Msila%29.JPG"
        alt=""
        aria-hidden
        className=""
        style={
          {
            "--height": "100%",
            "--width": "100%",
            "--index": 1,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

/**
 *
 * Main Component
 *
 */

export default function ConferenceHeader() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="relative mx-auto text-center flex items-center justify-center flex-col">
        <CarouselPlayground />
        <div className="p-6 mb-8 bg-secondary">
          <p className="text-sm md:text-base text-black">
            Hosted by the Faculty of Technology-M&apos;sila University, the IEEE
            Algeria Section, the{" "}
            <span className="font-medium text-primary">
              International Conference of Advanced Technology in Electronic and
              Electrical Engineering (ICATEEE2025)
            </span>{" "}
            will be held from 15th to 16th December 2025 at M&apos;sila,
            Algeria.
          </p>
        </div>
        <div className="flex gap-4 w-full flex-col justify-center max-w-[1200px]">
          <div className="">
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-lg md:text-xl font-semibold mx-3 text-black">
                The main aim of the{" "}
                <span className="font-bold text-primary">ICATEEE2025</span>
              </h2>
              <div className="h-px w-12 bg-primary/70"></div>
            </div>
            <p className="text-sm md:text-base mb-4 max-w-3xl mx-auto text-primary">
              is to bring together all potential participants: from industry,
              experts, researchers, academics, manufacturers and suppliers of
              several countries to review the latest developments that achieved
              in these areas, and to exchange research ideas in Electronic and
              Electrical engineering and theirs wide applications.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center bg-secondary/70 rounded-full text-primary p-2 px-4  font-medium mb-6">
              <BookOpen className="h-5 w-5 mr-2" />
              Topics of Interest
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10 w-[75%] mx-auto">
            <div className="shadow-sm bg-foreground rounded-lg">
              <div className="bg-primary p-4 flex items-center justify-center rounded-t-lg">
                <h3 className="font-semibold flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Signal Processing & Communications
                </h3>
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Pattern recognition & Computer vision
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Radar and remote sensing</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Signal, image and speech processing
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Circuits and embedded Systems</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">IoT & its applications</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Power Electronics and its applications
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Transmission and Distribution</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Telecommunication systems</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Antenna and Wave propagation</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Electrical Machine drives</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Fault detection & diagnosis</p>
                </div>
              </div>
            </div>
            <div className="bg-foreground shadow-sm rounded-lg">
              <div className="bg-primary p-4 flex items-center justify-center rounded-t-lg">
                <h3 className="font-semibold flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Advanced Technologies & Applications
                </h3>
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Electromagnetics & CND</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Renewable Energy Systems & environment
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Smart grids Technologies & Applications
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Microelectronics and its applications
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">Nanotechnology and Nanomaterials</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Mathematical Modeling for electrical engineering
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Materials in electronics and electrical engineering
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Mobile Communication Networks & IoT Evolution
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Electrical networks & High voltage engineering
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p className="text-black">
                    Advanced Control, Automation & Robotics
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 items-center">
            <div className="relative group w-[300px] py-4 md:px-4 md:py-2 md:w-fit flex items-center gap-3 justify-center bg-gradient-to-br from-[#003875] to-[#013976] text-white p-2 rounded-full overflow-hidden border border-zinc-700 hover:ring-1 hover:ring-zinc-600 hover:shadow-xl duration-300">
              <div className="h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />

              <div className="text-left px-2">
                <div className="text-sm md:text-base">
                  {" "}
                  <Calendar className="h-5 w-5 inline mr-2" />
                  15-16 December 2025
                </div>
              </div>
            </div>
            <div className="relative group w-[300px] py-4 md:px-4 md:py-2 md:w-fit  flex items-center gap-3 justify-center bg-gradient-to-br from-[#003875] to-[#013976] text-white p-2 rounded-full overflow-hidden border border-zinc-700 hover:ring-1 hover:ring-zinc-600 hover:shadow-xl duration-300">
              <div className="h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />
              <div className="text-left px-2">
                <div className="text-sm md:text-base">
                  <MapPin className="h-5 w-5 inline mr-2" /> M&apos;sila,
                  ALGERIA
                </div>
              </div>
            </div>
            <div className="relative group w-[300px] py-4 md:px-4 md:py-2 md:w-fit  flex items-center gap-3 justify-center bg-gradient-to-br from-[#003875] to-[#013976] text-white p-2 rounded-full overflow-hidden border border-zinc-700 hover:ring-1 hover:ring-zinc-600 hover:shadow-xl duration-300">
              <div className="h-[120px] w-10 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />

              <div className="text-left px-2">
                <div className="text-sm md:text-base">
                  {" "}
                  <Users className="h-5 w-5 inline mr-2" />
                  IEEE Algeria Section
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
