import { useState } from "react";

const navItems = ["Home", "Profile", "Portofolio", "Contact"];

function App() {
  const [active, setActive] = useState("Home");

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <>
      <main className="min-w-screen max-w-full min-h-screen max-h-full flex flex-col gap-6 lg:gap-28 p-6 backdrop-blur-xl relative">
        <img src="./top.png" alt="" className="absolute" />
        <img src="./left.png" alt="" className="absolute" />
        <img
          src="./right.png"
          alt=""
          className="absolute hidden lg:block -top-[300px] right-[0px]"
        />

        <div
          id="home"
          className="w-full bg-zinc-800/60 backdrop-blur-xl border border-zinc-600 rounded-2xl p-4"
        >
          <div className="w-full flex items-center justify-between lg:justify-center gap-2">
            <div className="w-[25%] shrink-0">
              <img src="./logo.png" className="object-cover" alt="" />
            </div>

            <NavMenuMobile
              navItems={navItems}
              active={active}
              handleScroll={handleScroll}
            />

            <nav className="w-[50%] hidden lg:flex items-center justify-center gap-8 text-white">
              {navItems.map((item) => (
                <div
                  key={item}
                  onClick={() => handleScroll(item)}
                  className={`w-max flex flex-col items-center gap-0.5 cursor-pointer hover:text-fuchsia-400 transition-all ${
                    item === active ? "text-fuchsia-700 font-semibold" : ""
                  }`}
                >
                  <div>{item}</div>
                  {item === active && (
                    <div className="w-5 h-0.5 bg-zinc-100 rounded-xl" />
                  )}
                </div>
              ))}
            </nav>

            <div className="w-[25%] hidden lg:block shrink-0"></div>
          </div>

          <div className="w-full flex items-center flex-col-reverse lg:flex-row lg:justify-between lg:p-28">
            <div className="w-max flex flex-col gap-2 shrink-0">
              <p className="text-xl lg:text-5xl bg-gradient-to-r from-[#5225BA] to-[#C355DE] bg-clip-text text-transparent font-bold">
                Bangun{" "}
                <span className="bg-gradient-to-r from-[#C355DE] to-[#C355DE] bg-clip-text text-transparent">
                  Website
                </span>
                <br /> Bisnismu{" "}
                <span className="bg-gradient-to-r from-[#C355DE] to-[#C355DE] bg-clip-text text-transparent">
                  di Webku.
                </span>
                <span className="text-[#6300C6]">id</span>
              </p>

              <p>
                Layanan pembuatan website cepat, aman, <br /> dan sesuai
                kebutuhan bisnis Anda.
              </p>

              <button
                onClick={() => handleScroll("Contact")}
                className="w-max py-2 px-4 bg-gradient-to-r from-[#B936F5] via-[#C64C85] to-[#F1005B] text-white hover:brightness-110 rounded-xl cursor-pointer mt-8 active:scale-95 transition-all"
              >
                Hubungi Kami
              </button>
            </div>

            <img src="./laptop.png" className="object-cover" alt="" />
          </div>
        </div>

        <div
          id="profile"
          className="w-full flex items-center flex-col lg:flex-row lg:justify-between p-4 gap-6"
        >
          <div className="relative w-full rounded-lg overflow-hidden bg-[url('./blur.png')] bg-cover bg-center p-4">
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h1 className="text-[#AC70FF] text-2xl font-semibold">
                Direktur Utama
              </h1>

              <div className="w-full flex items-center lg:items-start flex-col lg:flex-row lg:justify-between gap-4">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <img
                    src="./akmal.png"
                    alt="Foto Akmal"
                    className="w-[150px] h-max object-cover"
                  />

                  <span className="text-center">
                    [Ahmad Kamaludin] <br /> Direktur Utama [Webku.Id]
                  </span>
                </div>

                <div className="text-center mt-4">
                  Kami berkomitmen menghadirkan solusi pembuatan website yang
                  profesional, efisien dan sesuai kebutuhan bisnis Anda. Dengan
                  tim yang berpengalaman dan proses kerja yang terukur, kami
                  siap menjadi mitra digital terpercaya dalam mendukung
                  pertumbuhan usaha Anda
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full rounded-lg overflow-hidden bg-[url('./blur.png')] bg-cover bg-center p-4">
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h1 className="text-[#AC70FF] text-2xl font-semibold">
                Direktur Teknis
              </h1>

              <div className="w-full flex items-center lg:items-start flex-col lg:flex-row lg:justify-between gap-4">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <img
                    src="./asp.png"
                    alt="Foto Akmal"
                    className="w-[150px] h-max object-cover"
                  />

                  <span className="text-center">
                    [Asep Wahyudi] <br /> Direktur Teknis [Webku.Id]
                  </span>
                </div>

                <div className="text-center mt-4">
                  Kami memastikan setiap website dibangun dengan standar
                  teknologi terbaik struktur yang solid, dan performa optimal.
                  Fokus kami adalah menghadirkan solusi digital yang fungsional,
                  aman,dan siap bersaing di era digital."
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center flex-col lg:flex-row lg:justify-between p-4 gap-6">
          <img
            src="./prev-image2.png"
            className="shrink-0 flex items-center justify-center"
            alt=""
          />

          <div className="w-full flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col gap-4 lg:pr-44">
              <span className="text-2xl lg:text-4xl font-bold">
                Siap Membuat Web <br /> Bersama Kami?
              </span>
              <span>Kami Siap Membantu anda dengan teknologi powerfull</span>
            </div>

            <img src="./language-programs.png" className="w-[600px]" alt="" />
          </div>
        </div>

        <div id="portofolio" className="w-full h-full lg:relative lg:shrink-0">
          <img
            src="./bottom.png"
            alt=""
            className="w-full hidden lg:block lg:h-[1100px] lg:shrink-0"
          />
          <div className="w-full flex flex-col items-start p-4 gap-6 lg:absolute lg:top-0">
            <h1 className="font-semibold text-2xl lg:text-4xl bg-gradient-to-r from-white to-[#E352E8] bg-clip-text text-transparent">
              Ayo Dapatkan solusi <br /> terbaik untuk website mu!
            </h1>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="w-full h-full rounded-4xl bg-zinc-800 relative">
                <img
                  src="./image-1.png"
                  className="w-full h-full rounded-4xl"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 bg-white/30 backdrop-blur-lg w-max h-max flex flex-col items-center justify-center gap-2 p-4 lg:p-8">
                  <span className="text-[#7400F8] italic font-semibold text-lg lg:text-xl underline">
                    Website UMKM
                  </span>
                  <p className="text-[#4E4A4A] text-sm lg:text-base">
                    Didesain khusus untuk <br /> kebutuhan promosi dan <br />{" "}
                    penjualan online skala UMKM.
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-4xl bg-zinc-800 relative">
                <img
                  src="./image-2.png"
                  className="w-full h-full rounded-4xl"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 bg-white/30 backdrop-blur-lg w-max h-max flex flex-col items-center justify-center gap-2 p-8">
                  <span className="text-[#7400F8] italic font-semibold text-lg lg:text-xl underline">
                    Website E-COMMERCE
                  </span>
                  <p className="text-[#4E4A4A] text-sm lg:text-base">
                    Didesain khusus untuk <br /> kebutuhan promosi dan <br />{" "}
                    penjualan online skala UMKM.
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-4xl bg-zinc-800 relative">
                <img
                  src="./image-3.png"
                  className="w-full h-full rounded-4xl"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 bg-white/30 backdrop-blur-lg w-max h-max flex flex-col items-center justify-center gap-2 p-8">
                  <span className="text-[#7400F8] italic font-semibold text-lg lg:text-xl underline">
                    Website LANDINGPAGE
                  </span>
                  <p className="text-[#4E4A4A] text-sm lg:text-base">
                    Didesain khusus untuk <br /> kebutuhan promosi dan <br />{" "}
                    penjualan online skala UMKM.
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-4xl bg-zinc-800 relative">
                <img
                  src="./image-1.png"
                  className="w-full h-full rounded-4xl"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 bg-white/30 backdrop-blur-lg w-max h-max flex flex-col items-center justify-center gap-2 p-8">
                  <span className="text-[#7400F8] italic font-semibold text-lg lg:text-xl underline">
                    Website UMKM
                  </span>
                  <p className="text-[#4E4A4A] text-sm lg:text-base">
                    Didesain khusus untuk <br /> kebutuhan promosi dan <br />{" "}
                    penjualan online skala UMKM.
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-4xl bg-zinc-800 relative">
                <img
                  src="./image-2.png"
                  className="w-full h-full rounded-4xl"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 bg-white/30 backdrop-blur-lg w-max h-max flex flex-col items-center justify-center gap-2 p-8">
                  <span className="text-[#7400F8] italic font-semibold text-lg lg:text-xl underline">
                    Website E-COMMERCE
                  </span>
                  <p className="text-[#4E4A4A] text-sm lg:text-base">
                    Didesain khusus untuk <br /> kebutuhan promosi dan <br />{" "}
                    penjualan online skala UMKM.
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-4xl bg-zinc-800 relative">
                <img
                  src="./image-3.png"
                  className="w-full h-full rounded-4xl"
                  alt=""
                />

                <div className="absolute bottom-0 left-0 bg-white/30 backdrop-blur-lg w-max h-max flex flex-col items-center justify-center gap-2 p-8">
                  <span className="text-[#7400F8] italic font-semibold text-lg lg:text-xl underline">
                    Website LANDINGPAGE
                  </span>
                  <p className="text-[#4E4A4A] text-sm lg:text-base">
                    Didesain khusus untuk <br /> kebutuhan promosi dan <br />{" "}
                    penjualan online skala UMKM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="w-full h-full p-4 lg:py-14 lg:px-56 flex flex-col gap-12 items-center justify-center bg-[#1D0B2D] rounded-lg shadow-inner"
        >
          <h1 className="font-semibold text-2xl lg:text-4xl">Kontak Kami</h1>

          <div className="w-full flex items-end flex-col gap-6">
            <input
              type="text"
              placeholder="Nama"
              className="w-full p-3 bg-white rounded-lg"
            />

            <input
              type="text"
              placeholder="No Hp"
              className="w-full p-3 bg-white rounded-lg"
            />

            <div className="w-full flex items-center gap-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-white rounded-lg"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-white rounded-lg"
              />
            </div>

            <textarea
              name=""
              id=""
              placeholder="Kirim Pesan"
              className="w-full h-[140px] p-3 bg-white rounded-lg"
            ></textarea>

            <button className="w-max flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-[#5D22B6] to-[#9D50C9] text-white hover:brightness-110 rounded-xl cursor-pointer mt-8 active:scale-95 transition-all">
              <i className="bi bi-send-fill"></i>
              <span>Kirim Pesan</span>
            </button>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-max flex flex-col items-center justify-center gap-3 lg:gap-10">
              <i className="bi bi-send-fill text-xl lg:text-6xl"></i>
              <span className="text-xs lg:text-base text-white">
                081214074066
              </span>
            </div>

            <div className="w-max flex flex-col items-center justify-center gap-3 lg:gap-10">
              <i className="bi bi-telephone-fill text-xl lg:text-6xl"></i>
              <span className="text-xs lg:text-base text-white text-center">
                Cianjur , Jawa Brat, Indonesia
              </span>
            </div>

            <div className="w-max flex flex-col items-center justify-center gap-3 lg:gap-10">
              <i className="bi bi-envelope-fill text-xl lg:text-6xl"></i>
              <span className="text-xs lg:text-base text-white">
                contact@donasi.com
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const NavMenuMobile = ({ navItems, active, handleScroll }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <button className="w-max relative lg:hidden" onClick={toggleMenu}>
      <i className={`bi ${isActive ? "bi-x-lg" : "bi-list"}`}></i>

      {isActive && (
        <div className="w-32 h-32 flex flex-col items-start gap-2 bg-zinc-100/30 backdrop-blur-xl rounded-xl absolute top-5 right-0 p-3">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                handleScroll(item);
                setIsActive(false);
              }}
              className={`text-zinc-200 text-xs ${
                item === active ? "!text-fuchsia-700" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </button>
  );
};

export default App;
