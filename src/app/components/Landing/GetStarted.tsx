import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section id="get-started">
      <Container>
        <div className="lg:min-h-[740px] flex flex-col justify-center mt-36 w-full pb-10 lg:pb-0">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="w-full lg:max-w-lg flex flex-col gap-6">
              <h2 className="font-extrabold text-[34px]">
                Elevate Your Messaging Efficiency with Our Innovative Admin
                Tools
              </h2>
              <p>
                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
                mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
                pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
                lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
                kendali penuh pesan dengan manajemen konten yang praktis.
              </p>
              <Link href="/register">
                <Button className="bg-[var(--dark-background-color)] hover:bg-[var(--dark-background-color)] w-fit px-0 py-0 dark:bg-neutral-800">
                  <div className="flex flex-row items-center gap-2 h-full">
                    <div className="text-white flex-1 flex items-center justify-center px-5 py-3 ml-4">
                      Daftar Sekarang
                    </div>
                    <div className="text-white flex items-center justify-center py-3 px-5 border-l border-white">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
            <div className="lg:w-full max-w-2xl relative lg:left-20 overflow-hidden">
              <Image
                src={"/assets/thumbnail.png"}
                className="relative w-[300px] lg:w-fit top-20 lg:left-0 dark:shadow-custom-white dark:bg-transparent"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src={"/assets/thumbnail_1.png"}
                className="relative -top-20 lg:-top-28 left-8 lg:left-14"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
