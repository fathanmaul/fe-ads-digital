import Image from "next/image";
import Container from "../Container";

export default function AutoReply() {
  return (
    <section id="auto-reply">
      <Container>
        <div className="lg:min-h-[740px] flex flex-col justify-center  w-full py-20 lg:py-0">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center ">
            <div className="w-full lg:max-w-lg flex flex-col gap-6">
              <h2 className="font-extrabold text-[34px]">
                Respond Faster with the Convenience of Auto Reply
              </h2>
              <p>
                Fowardin mempermudah Anda untuk memberikan respon cepat kepada
                pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto
                Reply kami, Anda dapat menjawab pertanyaan atau memberikan
                respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih
                cepat dengan Fowardin.
              </p>
            </div>
            <div>
              <Image src={"/assets/thumbnail_4.png"} alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
