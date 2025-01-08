import picture from "/picture.jpg";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <div className=" page header-div flex flex-col justify-center items-center  relative">
      <div className="flex justify-center flex-col gap-[10px] w-full md:w-auto">
        <p className="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-center text-shadow-glow font-semibold">
          Mason
        </p>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center ">
          <span
            style={{
              color: "#c997fc",
              backgroundImage:
                "linear-gradient(45deg, #c997fc 35%, #a4bce1 59%, #d4aef9 54%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Full Stack
          </span>{" "}
          Web Developer
        </h1>

        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-center">
          from <span className="font-semibold">Louisville, Kentucky </span>
          <br></br>
        </p>
        <div className="flex justify-center flex-col w-full md:w-auto">
          <img
            className="bg-contain border-2 border-solid border-white w-[150px] h-[150px] rounded-full md:w-[250px] md:h-[250px] mx-auto"
            src={picture}
            alt="Mason Williams"
          />
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/baconatorr"
          >
            <img
              src="https://cdn.svgporn.com/logos/github-icon.svg"
              alt="github"
              className="w-10 h-10"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(99%) sepia(66%) saturate(86%) hue-rotate(124deg) brightness(117%) contrast(100%)",
              }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mason-williams-12095424b/"
          >
            <img
              src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
              alt="linkedin"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
