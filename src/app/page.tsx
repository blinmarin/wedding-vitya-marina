import { MemeImage } from "@/components/MemeImage";
import { ScheduleItem } from "@/components/ScheduleItem";
import { RSVPForm } from "@/components/RSVPForm";
import { MemeCarousel } from "@/components/MemeCarousel";
import { MapReveal } from "@/components/MapReveal";
import { WishlistAccordion } from "@/components/WishlistAccordion";
import { ScheduleAccordion } from "@/components/ScheduleAccordion";
import { NyanCat } from "@/components/NyanCat";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep overflow-x-hidden relative">
      <NyanCat />
      <div>
        {/* ============ HERO SECTION ============ */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center px-[18px] md:px-2 py-16 overflow-hidden"
        >
          {/* Background image - mobile: rotated, natural size, repeating */}
          <div
            className="absolute inset-0 md:block"
            style={{
              backgroundImage: "url(/images/carpet2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Background image - desktop: cover, no rotation */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: "url(/images/carpet.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Main content */}
          <div className="text-center mb-12 relative z-10">
            <p className="text-lg text-white font-semibold mb-2 tracking-widest uppercase">
              Приглашение на свадьбу
            </p>
            <h1 className="font-['Lobster'] text-7xl md:text-9xl text-white mb-4">
              Витя <span className="text-white">&</span> Марина
            </h1>
          </div>

          {/* Childhood photos in Polaroid style */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 relative z-10">
            <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="polaroid">
                <img
                  src="/images/marina-child.png"
                  alt="Марина в детстве"
                  className="w-48 md:w-56 h-auto"
                />
                <p className="absolute bottom-4 left-0 right-0 text-center font-['Caveat'] text-xl text-gray-700">
                  Уже тогда знала, что будет принцессой
                </p>
              </div>
            </div>

            <div className="transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="polaroid">
                <img
                  src="/images/vitya-child.png"
                  alt="Витя в детстве"
                  className="w-48 md:w-56 h-auto"
                />
                <p className="absolute bottom-4 left-0 right-0 text-center font-['Caveat'] text-xl text-gray-700">
                  Уже тогда был готов нести пакеты
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INVITATION SECTION ============ */}
        <section className="pt-16 md:pt-32 pb-16 md:pb-32 px-[18px] md:px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            

            {/* Mobile grid: 2 columns with text in middle */}
            <div className="md:hidden">
              {/* Row 1: [2][3] */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="transform rotate-3">
                  <img src="/scrin/2.png" alt="Скриншот 2" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="transform -rotate-3">
                  <img src="/scrin/3.png" alt="Скриншот 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
              {/* Row 2: [4][5] */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="transform -rotate-2">
                  <img src="/scrin/4.png" alt="Скриншот 4" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="transform rotate-2">
                  <img src="/scrin/5.png" alt="Скриншот 5" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
              {/* Text in middle */}
              <div className="text-center px-4 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Наконец-то! Вы долго ждали этого — и вот время пришло. Мы
                  решили устроить главную вечеринку нашей жизни, и нам важно,
                  чтобы ты разделил с нами этот день. Ждём тебя, твоё отличное
                  настроение и готовность веселиться от всей души!
                </p>
              </div>
              {/* Row 3: [1][9] */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="transform rotate-3">
                  <img src="/scrin/1.png" alt="Скриншот 1" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="transform -rotate-3">
                  <img src="/scrin/9.jpg" alt="Скриншот 9" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
              {/* Row 4: [7][8] */}
              <div className="grid grid-cols-2 gap-3">
                <div className="transform -rotate-2 -mt-[60px]">
                  <img src="/scrin/7.png" alt="Скриншот 7" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="transform rotate-2">
                  <img src="/scrin/8.png" alt="Скриншот 8" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Desktop grid: original 3x3 layout */}
            <div
              className="hidden md:grid"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {/* Row 1 */}
              <div className="transform hover:scale-105 transition-transform duration-300 rotate-6">
                <img
                  src="/scrin/1.png"
                  alt="Скриншот 1"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg justify-self-end"
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300 -rotate-6">
                <img
                  src="/scrin/2.png"
                  alt="Скриншот 2"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg justify-self-center"
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300 rotate-6">
                <img
                  src="/scrin/3.png"
                  alt="Скриншот 3"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Row 2 */}
              <div className="transform hover:scale-105 transition-transform duration-300 -rotate-3 translate-x-[-100px]">
                <img
                  src="/scrin/7.png"
                  alt="Скриншот 7"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg justify-self-end"
                />
              </div>
              <div></div>
              <div
                className="text-center px-8"
                style={{
                  position: "absolute",
                  width: "600px",
                  left: "50%",
                  transform: "translate(-50%, -25%)",
                  zIndex: 10,
                }}
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Наконец-то! Вы долго ждали этого — и вот время пришло. Мы
                  решили устроить главную вечеринку нашей жизни, и нам важно,
                  чтобы ты разделил с нами этот день. Ждём тебя, твоё отличное
                  настроение и готовность веселиться от всей души!
                </p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300 -rotate-6 translate-x-[100px]">
                <img
                  src="/scrin/4.png"
                  alt="Скриншот 4"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Row 3 */}
              <div className="transform hover:scale-105 transition-transform duration-300 rotate-6">
                <img
                  src="/scrin/8.png"
                  alt="Скриншот 8"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg justify-self-end"
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300 -rotate-6">
                <img
                  src="/scrin/9.jpg"
                  alt="Скриншот 9"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg justify-self-center"
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300 rotate-6">
                <img
                  src="/scrin/5.png"
                  alt="Скриншот 5"
                  className="max-w-[77%] h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ DATE SECTION ============ */}
        <section
          className="py-20 px-[18px] md:px-2 relative"
          style={{
            backgroundImage: "url(/images/pepe.jpg)",
            backgroundSize: "auto 100%",
            backgroundPosition: "top left",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="w-fit mx-auto relative z-10 bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6">
            {/* Calendar and Carousel row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Calendar with subtitle */}
              <div className="flex flex-col items-center">
                <p className="text-accent font-semibold uppercase tracking-widest mb-4 text-center md:self-start md:ml-[5px]">
                  📅 Дата свадьбы
                </p>
                <img
                  src="/images/cal-Photoroom.png"
                  alt="30 мая 2026 - дата свадьбы"
                  className="w-64 md:w-80 h-auto drop-shadow-xl"
                />
                <p className="text-gray-500 mt-4 text-lg text-center">
                  Суббота • Начало в 12:30
                </p>
              </div>

              {/* Meme Carousel with title above */}
              <div className="flex flex-col items-center w-full md:w-auto">
                {/* Title above carousel */}
                <h3 className="text-center text-2xl md:text-3xl font-bold text-deep mb-4">
                  Угадай, что за день
                </h3>

                {/* Carousel */}
                <MemeCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* ============ LOCATION SECTION ============ */}
        <section className="py-20 px-[18px] md:px-2 bg-emerald-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center md:text-left flex-1">
                <p className="text-mint font-semibold uppercase tracking-widest mb-2">
                  📍 Место проведения
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-deep mb-4">
                  Площадка<br className="md:hidden" /> «Остров Любви»
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Московская область,
                  <br />
                  Дмитровский городской округ,
                  <br />
                  село Ольгово
                </p>

                {/* Travel image - mobile only, shown before buttons */}
                <img
                  src="/images/trevel.jpg"
                  alt="Путешествие"
                  className="md:hidden h-[200px] w-auto rounded-2xl shadow-xl mx-auto my-4"
                />

                <MapReveal />
              </div>

              {/* Travel image - desktop only */}
              <img
                src="/images/trevel.jpg"
                alt="Путешествие"
                className="hidden md:block h-[338px] w-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ============ SCHEDULE SECTION ============ */}
        <section
          className="py-20 px-[18px] md:px-2 relative"
          style={{
            backgroundImage: "url(/images/galaxy.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-6 md:mb-16 bg-white/50 backdrop-blur-sm rounded-2xl px-6 py-6">
              <p className="text-gray-800 font-semibold uppercase tracking-widest mb-2">
                📅 Расписание
              </p>
              <h2 className="font-['Lobster'] text-5xl text-deep">
                Как пройдёт этот день
              </h2>
            </div>

            <div className="relative">
              {/* Schedule items */}
              <div className="space-y-2">
                {/* 12:30 - Bus — мем справа */}
                <div className="p-4">
                  {/* Mobile accordion */}
                  <ScheduleAccordion
                    time="12:30"
                    title="🚌 Сбор на автобус"
                    subtitle="Метро Физтех"
                    memeImg="/images/1.jpg"
                    memeAlt="Мем 1"
                    showHint={true}
                  />
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[1fr_430px_1fr] gap-4 items-center">
                    <div></div>
                    <div className="flex items-center gap-4 justify-self-start bg-white/50 backdrop-blur-sm rounded-2xl p-3 w-full h-24 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="text-3xl font-bold text-gray-900 w-24">
                        12:30
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-deep">
                          🚌 Сбор на автобус
                        </h3>
                        <p className="text-gray-800">Метро Физтех</p>
                      </div>
                    </div>
                    <img
                      src="/images/1.jpg"
                      alt="Мем 1"
                      className="w-56 h-auto rounded-xl shadow-lg justify-self-start -my-6"
                    />
                  </div>
                </div>

                {/* 14:30 - Welcome — картинка слева */}
                <div className="p-4">
                  {/* Mobile accordion */}
                  <ScheduleAccordion
                    time="14:30"
                    title="🥂 Велком"
                    subtitle="Встречаем гостей, напитки и закуски"
                    memeImg="/images/2.jpg"
                    memeAlt="Мем 2"
                  />
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[1fr_430px_1fr] gap-4 items-center">
                    <div className="flex justify-end">
                      <img
                        src="/images/2.jpg"
                        alt="Мем 2"
                        className="w-56 h-auto rounded-xl shadow-lg -my-6"
                      />
                    </div>
                    <div className="flex items-center gap-4 justify-self-start bg-white/50 backdrop-blur-sm rounded-2xl p-3 w-full h-24 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="text-3xl font-bold text-gray-900 w-24">
                        14:30
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-deep">
                          🥂 Велком
                        </h3>
                        <p className="text-gray-800">
                          Встречаем гостей, напитки и закуски
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>

                {/* 15:30 - Ceremony — картинка справа */}
                <div className="p-4">
                  {/* Mobile accordion */}
                  <ScheduleAccordion
                    time="15:30"
                    title="💍 Выездная регистрация"
                    subtitle="Самый торжественный момент"
                    memeImg="/images/3.jpg"
                    memeAlt="Мем 3"
                  />
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[1fr_430px_1fr] gap-4 items-center">
                    <div></div>
                    <div className="flex items-center gap-4 justify-self-start bg-white/50 backdrop-blur-sm rounded-2xl p-3 w-full h-24 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="text-3xl font-bold text-gray-900 w-24">
                        15:30
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-deep">
                          💍 Выездная регистрация
                        </h3>
                        <p className="text-gray-800">
                          Самый торжественный момент
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/3.jpg"
                      alt="Мем 3"
                      className="w-56 h-auto rounded-xl shadow-lg justify-self-start -my-6"
                    />
                  </div>
                </div>

                {/* 16:30 - Banquet — картинка слева */}
                <div className="p-4">
                  {/* Mobile accordion */}
                  <ScheduleAccordion
                    time="16:30"
                    title="🍽️ Банкет"
                    subtitle="Вкусная еда, тосты и веселье"
                    memeImg="/images/4.jpg"
                    memeAlt="Мем 4"
                  />
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[1fr_430px_1fr] gap-4 items-center">
                    <div className="flex justify-end">
                      <img
                        src="/images/4.jpg"
                        alt="Мем 4"
                        className="w-56 h-auto rounded-xl shadow-lg -my-6"
                      />
                    </div>
                    <div className="flex items-center gap-4 justify-self-start bg-white/50 backdrop-blur-sm rounded-2xl p-3 w-full h-24 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="text-3xl font-bold text-gray-900 w-24">
                        16:30
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-deep">
                          🍽️ Банкет
                        </h3>
                        <p className="text-gray-800">
                          Вкусная еда, тосты и веселье
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>

                {/* 21:30 - Disco — картинка справа */}
                <div className="p-4">
                  {/* Mobile accordion */}
                  <ScheduleAccordion
                    time="21:30"
                    title="🪩 Дискотека"
                    subtitle="Танцуем до упаду!"
                    memeImg="/images/5.jpg"
                    memeAlt="Мем 5"
                  />
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[1fr_430px_1fr] gap-4 items-center">
                    <div></div>
                    <div className="flex items-center gap-4 justify-self-start bg-white/50 backdrop-blur-sm rounded-2xl p-3 w-full h-24 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="text-3xl font-bold text-gray-900 w-24">
                        21:30
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-deep">
                          🪩 Дискотека
                        </h3>
                        <p className="text-gray-800">Танцуем до упаду!</p>
                      </div>
                    </div>
                    <img
                      src="/images/5.jpg"
                      alt="Мем 5"
                      className="w-56 h-auto rounded-xl shadow-lg justify-self-start -my-6"
                    />
                  </div>
                </div>

                {/* 22:30 - End — картинка слева */}
                <div className="p-4">
                  {/* Mobile accordion */}
                  <ScheduleAccordion
                    time="22:30"
                    title="🌙 Завершение вечера"
                    subtitle="Автобус отвезёт обратно к метро"
                    memeImg="/images/6.jpg"
                    memeAlt="Мем 6"
                  />
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[1fr_430px_1fr] gap-4 items-center">
                    <div className="flex justify-end">
                      <img
                        src="/images/6.jpg"
                        alt="Мем 6"
                        className="w-56 h-auto rounded-xl shadow-lg -my-6"
                      />
                    </div>
                    <div className="flex items-center gap-4 justify-self-start bg-white/50 backdrop-blur-sm rounded-2xl p-3 w-full h-24 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="text-3xl font-bold text-gray-900 w-24">
                        22:30
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-deep">
                          🌙 Завершение вечера
                        </h3>
                        <p className="text-gray-800">
                          Автобус отвезёт обратно к метро
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ GIFT SECTION ============ */}
        <section className="py-20 px-[18px] md:px-2 bg-yellow-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center md:text-left flex-1">
                <p className="text-sunny font-semibold uppercase tracking-widest mb-2">
                  🎁 Подарки
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-deep mb-4">
                  Ваше присутствие — самый дорогой для нас подарок
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Но если вы всё же хотите порадовать нас материально, то вот
                  наши пожелания...
                </p>
                <WishlistAccordion />
              </div>
            </div>
          </div>
        </section>

        {/* ============ DRESS CODE SECTION ============ */}
        <section
          className="py-20 px-[18px] md:px-2 relative"
          style={{
            backgroundImage: "url(/images/doggy.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-left flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-5">
                <p className="text-accent font-semibold uppercase tracking-widest mb-2 text-center md:text-left">
                  👗 Дресс-код
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-deep mb-4 text-center md:text-left">
                  Надевайте любимое!
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Строгого дресс-кода нет — надевайте свои любимые и яркие
                  наряды. Чем смелее, тем лучше.
                </p>
                <div className="bg-white/40 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="font-semibold text-deep">
                    ⚠️ Только одна просьба:
                  </p>
                  <p className="text-gray-600">
                    Белый цвет — под запретом (белые рубашки тоже)
                  </p>
                </div>
              </div>

              {/* Fashion image */}
              <img
                src="/images/fashion.jpeg"
                alt="Мода"
                className="w-auto h-[180px] md:h-[250px] rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ============ TELEGRAM SECTION ============ */}
        <section className="py-20 px-[18px] md:px-2 bg-blue-50">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block">
              <p className="text-blue-500 font-semibold uppercase tracking-widest mb-2">
                💬 Чат гостей
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-deep mb-4">
                Присоединяйтесь к чату!
              </h2>
              <p className="text-gray-600 mb-6">
                Там будем делиться новостями, отвечать на вопросы
                <br className="hidden md:inline" />
                {" "}и координироваться в день свадьбы
              </p>

              <a
                href="https://t.me/+XXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold text-xl md:text-3xl font-['Nunito'] py-3 md:py-4 px-6 md:px-10 rounded-3xl transition-colors"
              >
                Открыть чат в{" "}
                <img
                  src="/images/Max.webp"
                  alt="MAX"
                  className="h-5 md:h-8 w-auto inline-block align-middle ml-2 md:ml-5"
                  style={{ transform: "translateY(-3px) scale(1.3)" }}
                />
              </a>

              {/* Maxwell gif - mobile only */}
              <img
                src="/images/maxwell.gif"
                alt="Maxwell Cat"
                className="md:hidden w-48 h-auto mx-auto mt-6 rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* ============ RSVP SECTION ============ */}
        <section
          className="py-10 md:py-20 px-[18px] md:px-2 relative overflow-hidden"
          style={{
            backgroundImage: "url(/images/windows.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 md:mb-12">
              <p className="text-deep font-bold uppercase tracking-widest mb-2">
                ✍️ Подтверждение
              </p>
              <h2 className="font-['Lobster'] text-5xl text-deep font-bold mb-4">
                Вы придёте?
              </h2>
              <p className="text-deep font-bold text-lg">
                Пожалуйста, заполните форму до
                <br className="md:hidden" />
                {" "}<span className="text-red-900">30 марта 2026</span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              <div className="hidden md:block flex-shrink-0">
                <img
                  src="/images/maxwell.gif"
                  alt="Maxwell Cat"
                  className="w-80 h-auto rounded-lg"
                />
              </div>
              <div className="flex-shrink-0 scale-[0.833] md:scale-100 origin-top -mb-20 md:mb-0">
                <RSVPForm />
              </div>
              <div className="hidden md:block flex-shrink-0">
                <img
                  src="/images/oiia-cat.gif"
                  alt="Cat"
                  className="w-80 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINAL SECTION ============ */}
        <section className="py-20 px-[18px] md:px-2 bg-deep text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <img
                src="/images/couple.jpg"
                alt="Витя и Марина"
                className="w-full max-w-[960px] md:max-w-[1152px] h-auto mx-auto rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>

            <h2 className="font-['Lobster'] text-4xl md:text-6xl mb-6">
              Ждём вас на нашей свадьбе!
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-lg mx-auto">
              <p className="text-lg">
                🔬{" "}
                <span className="font-bold">Британские учёные доказали:</span>
              </p>
              <p className="text-xl mt-2 text-sunny">
                Эту свадьбу вы запомните
              </p>
            </div>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="bg-deep/95 text-white/50 py-6 text-center text-sm">
          <p className="text-xs">
            © 2026 • Все мемы использованы с любовью и ностальгией
          </p>
        </footer>
      </div>
    </main>
  );
}
