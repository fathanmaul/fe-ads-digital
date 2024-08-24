"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { FaChevronDown, FaRegCalendar, FaUser } from "react-icons/fa";
import Card from "../components/Card";
import Button from "../components/Button";
import DoughnutChart from "./components/DoughnutChart";
import { getLocalDate } from "@/lib/date";
import { Theme } from "@/lib/types";
import { getTheme, toggleTheme } from "@/lib/theme";
import LineChartHour from "./components/LineChart";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState(Theme.Light);
  const [themeClickable, setThemeClickable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 1024;
      setSidebarOpen(!isMobileView);
      setIsMobile(isMobileView);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTheme(getTheme());
    setThemeClickable(true);
  }, []);

  const toogleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toogleTheme = () => {
    if (!themeClickable) {
      return;
    }
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
    toggleTheme({ theme: theme === Theme.Light ? Theme.Dark : Theme.Light });
  };
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "unauthenticated") {
    return null;
  }

  return status === "authenticated" ? (
    // return (
    <>
      <Sidebar sidebarState={isSidebarOpen} />
      <div
        className={`bg-white dark:bg-dark transition-all duration-300 flex-1 p-4 ${
          isSidebarOpen ? "lg:ml-[250px]" : "ml-0"
        }`}
        onClick={() => {
          if (isSidebarOpen && isMobile) {
            setSidebarOpen(false);
          }
        }}
      >
        <div className="w-full bg-gray-200 dark:bg-dark-base rounded-lg h-full p-4">
          <Topbar
            toggleSidebar={toogleSidebar}
            signOut={signOut}
            username={session.user.username}
            // username=""
            toogleDarkMode={toogleTheme}
            darkMode={theme}
          />
          <div className="w-full flex justify-between mt-[29px] items-center">
            <h3 className="font-bold text-2xl">
              Selamat Siang, {session.user.username}
            </h3>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs text-end font-medium text-neutral-500">
                  Tanggal Hari ini
                </p>
                <p className="text-sm text-end font-medium text-neutral-600 ">
                  {getLocalDate()}
                </p>
              </div>
              <FaRegCalendar className="w-4 h-4" />
            </div>
          </div>

          <HeaderSection />
          <AnalyticSection />
          <ChartGraphSection />
        </div>
      </div>
    </>
  ) : // );
  null;
}

function HeaderSection() {
  const message = [
    {
      name: "Anda",
      message: "Hai apa kabarmu hari ini? Semoga...",
      status: "terkirim",
      color: "bg-primary",
    },
    {
      name: "Anda",
      message: "Hai apa kabarmu hari ini? Semoga...",
      status: "terkirim",
      color: "bg-primary",
    },
    {
      name: "Ihsanul Afkar",
      message: "Hai apa kabarmu hari ini? Semoga...",
      status: "terkirim",
      color: "bg-success",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4 mt-8">
      <Card className="col-span-12 lg:col-span-8 px-[33px] pt-[28px] pb-3 bg-white rounded shadow-none relative">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex lg:items-center flex-col lg:flex-row gap-2 lg:gap-10">
            <p className="text-sm font-medium space-y-12 leading-4">
              Paket <br /> saat ini
            </p>
            <h3 className="text-4xl lg:text-2xl font-bold">
              Starter
              <span className="text-[10px] font-normal bg-black text-white relative py-1 px-2 rounded-xl left-1 bottom-1">
                Free
              </span>
            </h3>
          </div>
          <div>
            <p className="text-sm text-neutral-600 lg:text-end">
              Aktif sampai dengan
            </p>
            <p className="text-base font-bold">Selasa, 29 Agustus 2023</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-6">
          <div className="flex flex-col w-full gap-3">
            <div className="w-full flex items-center gap-9">
              <div>
                <p>Devices</p>
              </div>

              <div className="w-full pt-2">
                <div className="w-full relative">
                  <div className="h-[15px] rounded-full w-full bg-neutral-200 dark:bg-neutral-600"></div>
                  <div className="absolute top-0 left-0 h-[15px] rounded-full w-[80%] bg-danger"></div>
                </div>
                <p>8 dari 10 device yang tersedia</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-7">
              <div>
                <p>Contacts</p>
              </div>

              <div className="w-full pt-2">
                <div className="w-full relative">
                  <div className="h-[15px] rounded-full w-full bg-neutral-200 dark:bg-neutral-600"></div>
                  <div className="absolute top-0 left-0 h-[15px] rounded-full w-[25%] bg-success"></div>
                </div>
                <p>5 dari 100 kontak yang tersedia</p>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:justify-end mt-8 lg:mt-0">
            <div className="w-full lg:max-w-xs lg:text-end">
              <p>Upgrade paket untuk meningkatkan batasan fitur yang ada</p>
              <Button className="btn-outline mt-3 lg:w-full lg:max-w-[17rem]">
                Upgrade Paket
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 lg:mt-0 lg:absolute lg:bottom-2 lg:right-0 w-full">
          <a href="#" className="text-neutral-500">
            Tampilkan fitur kapasitas lainnya
          </a>
        </div>
      </Card>
      <Card className="p-4 bg-white col-span-12 lg:col-span-4 rounded shadow-none relative">
        <h3 className="font-bold text-xl">Pesan Terakhir</h3>
        <div className="flex flex-col gap-1 pb-4">
          {message.map((msg, index) => (
            <div
              key={index}
              className="p-3 bg-neutral-100 dark:bg-dark rounded-xl flex justify-between items-center"
            >
              <div className="h-full flex items-center gap-4">
                <div className={`p-3 ${msg.color} rounded-full`}>
                  <FaUser className="w-3 h-3 text-white" />
                </div>
                <div className="">
                  <p className="font-bold">{msg.name}</p>
                  <p className="leading-1">{msg.message}</p>
                </div>
              </div>

              <p className="text-[10px] h-fit font-normal bg-success text-white relative py-1 px-2 rounded-lg">
                {msg.status}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 lg:mt-0 lg:absolute lg:bottom-2 lg:right-0 w-full">
          <a href="#" className="text-neutral-500">
            Tampilkan lainnya
          </a>
        </div>
      </Card>
    </div>
  );
}

function AnalyticSection() {
  return (
    <Card className="mt-4">
      <h3 className="font-bold text-2xl">Analitik</h3>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 mt-4">
        <Card className="col-span-9 lg:col-span-3 border border-neutral-300">
          <h4 className="font-bold text-xl">Ringkasan hari ini</h4>
          <div className="grid grid-cols-5 gap-3 mt-3">
            <div className="col-span-5 lg:col-span-3 flex justify-between items-center w-full bg-neutral-100 dark:bg-dark rounded-lg p-4">
              <div>
                <p className="text-sm">Device</p>
                <h4 className="font-bold text-xl">RMX3263</h4>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
            <div className="col-span-5 lg:col-span-2 flex justify-between items-center w-full bg-neutral-100 dark:bg-dark rounded-lg p-4">
              <div>
                <p className="text-sm">Aktif sejak</p>
                <h4 className="font-bold text-xl">29.8.2023</h4>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-6">
            <div>
              <p className="text-sm">Pesan Keluar</p>
              <h4 className="font-bold text-xl">24</h4>
            </div>
            <div>
              <p className="text-sm">Pesan Masuk</p>
              <h4 className="font-bold text-xl">7</h4>
            </div>
            <div>
              <p className="text-sm">Pesan Gagal</p>
              <h4 className="font-bold text-xl">0</h4>
            </div>
          </div>
        </Card>
        <Card className="col-span-9 lg:col-span-6 border border-neutral-300">
          <div className="flex flex-col lg:flex-row justify-between items-center h-full">
            <div className="h-[90%] flex flex-col justify-between">
              <h4 className="font-bold text-xl">Total statistik pesan</h4>
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div>
                  <p className="text-sm">Pesan Keluar</p>
                  <h4 className="font-bold text-xl">24</h4>
                </div>
                <div>
                  <p className="text-sm">Pesan Masuk</p>
                  <h4 className="font-bold text-xl">7</h4>
                </div>
                <div>
                  <p className="text-sm">Pesan Gagal</p>
                  <h4 className="font-bold text-xl">0</h4>
                </div>
              </div>
            </div>
            <div>
              <DoughnutChart />
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
}

function ChartGraphSection() {
  return (
    <Card className="mt-4">
      <h3 className="font-bold text-2xl">Grafik chart perjam</h3>
      <div className="max-w-md lg:max-w-[90%] flex justify-center mx-auto">
        <LineChartHour />
      </div>

      <h3 className="font-bold text-2xl mt-4">Trend interaksi pesan</h3>
      <div className="max-w-md lg:max-w-[90%] flex justify-center mx-auto">
        <LineChartHour />
      </div>
    </Card>
  );
}
