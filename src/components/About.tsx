import * as React from "react";

type PropsType = {
  setContactWindowActive: (val: boolean) => void;
};

const About: React.FC<PropsType> = function ({ setContactWindowActive }) {
  return (
    <section className="container mx-auto about mb-28" id="about">
      <h1 className="text-5xl mb-4">Давайте сотрудничать!</h1>
      <p className="text-xl max-w-xl mb-4">
        Привет, меня зовут Олег, я веб-разработчик с опытом более 4 лет.
      </p>
      <button
        onClick={() => setContactWindowActive(true)}
        className="ml-auto background-main py-2 px-20 text-white select-none rounded-lg text-xl"
      >
        Написать
      </button>
    </section>
  );
};

export default About;
