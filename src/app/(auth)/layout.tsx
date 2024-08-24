import Image from "next/image";
import Navbar from "./components/Navbar";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container h-screen">
      <div className="h-full flex flex-col ">
        <Navbar />
        <div className="flex flex-row h-full items-center justify-center lg:justify-between">
          <div className="hidden lg:flex flex-col max-w-2xl gap-3">
            <div className="relative">
              <Image
                src={"/assets/thumbnail.png"}
                className="w-fit relative bottom-10"
                alt=""
                width={500}
                height={100}
              />

              <Image src={"/assets/thumbnail_1.png"} alt="" width={500} height={500} className="absolute top-0 left-7" />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h2 className="font-bold text-2xl ">
                Elevate Your Messaging Efficiency with Our Innovative Admin
                Tools
              </h2>
              <p className="text-base">
                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
                mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
                pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
                lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
                kendali penuh pesan dengan manajemen konten yang praktis.
              </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
