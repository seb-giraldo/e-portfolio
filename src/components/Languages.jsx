const Languages = () => {
  return (
    <section id="languages">
      <div class="container">
        <div class="row">
          <h1 class="section__title">
            This is my <span class="text--green">Technology Stack</span>
          </h1>
          <div class="language__list">
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  width="256px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1280px-HTML5_Badge.svg.png?_=20110131171049"
                  alt="Html Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">HTML</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt="CSS Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">CSS</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt="JavaScript Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">JavaScript</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
                  alt="TypeScript Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">TypeScript</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  alt="React Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">React</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
                  alt="Nuxt Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">Next.js</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  width="256px"
                  src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                  alt="MobX Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">Tailwind CSS</span>
            </div>
            <div class="language">
              <figure class="language__img--wrapper">
                <img
                  src="https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=000000"
                  alt="Vue Logo"
                  class="language__img"
                />
              </figure>
              <span class="language__name">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
