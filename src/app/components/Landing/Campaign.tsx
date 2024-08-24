import React from "react";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container";
import Image from "next/image";

export default function Campaign() {
  return (
    <section id="campaign">

    <div className="lg:min-h-[740px] flex flex-col justify-center w-full py-20 lg:py-0 bg-white dark:bg-dark-base">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="w-full lg:max-w-lg flex flex-col gap-6">
            <h2 className="font-extrabold text-[34px]">
              Right Time, Effective Messages
            </h2>
            <p>
              Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan
              yang tepat sasaran. Manfaatkan fitur Campaign kami untuk
              mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan
              sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang
              lebih besar.
            </p>
          </div>
          <div>
            <Image src={"/assets/thumbnail_3.png"} alt="" width={500} height={500} />
          </div>
        </div>
      </Container>
    </div>
    </section>
  );
}
