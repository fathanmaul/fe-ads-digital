import React from "react";
import Container from "../Container";
import Image from "next/image";

export default function Broadcast() {
  return (
    <section id="broadcast">
      <Container>
        <div className="lg:min-h-[740px] flex flex-col justify-center mt-36 w-full py-20 lg:py-0">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
            <div className="w-full lg:max-w-lg flex flex-col gap-6">
              <h2 className="font-extrabold text-[34px]">
                Reach Further with Ease
              </h2>
              <p>
                Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
                komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat
                mengirim pesan kepada banyak kontak dan grup sekaligus.
                Menjangkau audiens Anda tidak pernah semudah ini.
              </p>
            </div>
            <div>
              <Image src={"/assets/thumbnail_2.png"} alt="" width={500} height={500}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
