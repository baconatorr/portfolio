export default function Header() {
  return (
    <div className=" header-div flex flex-col justify-center items-center border-b-4 border-white h-[100vh] relative">
      <div className="flex flex-col md:flex-row gap-[20px] items-center justify-center">
        <div className="flex justify-center flex-col w-full md:w-auto">
          <img
            className="rounded-lg border-2 border-solid border-white w-[80%] md:w-[550px] mx-auto"
            src="picture.jpg"
            alt="Mason Williams"
          />
        </div>
        <div className="flex justify-center flex-col gap-[10px] w-full md:w-auto">
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-center md:text-left">
            I'm <span className="font-semibold">Mason Williams,</span> and I'm a
          </p>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center md:text-left">
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
            Web Developer 💻,
          </h1>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center md:text-left">
            <span
              style={{
                color: "#0679c1",
                backgroundImage:
                  "linear-gradient(315deg, #0679c1 42%, #4eb1ef 65%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Student
            </span>{" "}
            🏫, and
          </h1>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center md:text-left">
            <span
              style={{
                color: "#FFD700",
                backgroundImage:
                  "linear-gradient(315deg, #FFD700 24%, #B8860B 95%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Innovator
            </span>
            💡
          </h1>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl text-center md:text-left">
            from <span className="font-semibold">Louisville, Kentucky </span>📍
            <br></br>
          </p>
          <div className="flex justify-center md:justify-start items-center gap-[10px]">
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
      <p className="text-white text-2xl sm:text-3xl md:text-4xl text-center md:text-left font-semibold absolute bottom-0 mb-4">
        learn more 👇
      </p>
    </div>
  );
}
