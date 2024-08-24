import Image from "next/image";
import Button from "../Button";
import Container from "../Container";

export default function Opportunity() {
  return (
    <section id="opportunity">
      <div className="lg:min-h-[740px] flex flex-col justify-center w-full py-20 lg:py-0 bg-white dark:bg-dark-base">
        <Container>
          <div className="w-full">
            <h2 className="font-bold text-primary text-4xl max-w-3xl text-center mx-auto">
            &quot;One Step Closer to More Effective and Connected Communication!&quot;
            </h2>
          </div>
          <div className="flex w-full flex-col lg:flex-row items-center justify-center mt-[58px]">
            <div>
              <Image src={"/assets/thumbnail_5.png"} alt="" width={300} height={300} />
            </div>
            <div className="flex flex-col max-w-2xl gap-9">
              <div className="flex gap-4 flex-col lg:flex-row">
                <Button className="btn-primary h-fit">
                  Bisnis dan Pemasaran
                </Button>
                <Button className="btn-outline h-fit">
                  Komersial dan Penjualan
                </Button>
                <Button className="btn-outline h-fit">Organisasi Sosial</Button>
              </div>
              <div>
                <p>
                Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim
                promosi, pengumuman, dan informasi produk kepada pelanggan dalam
                jumlah besar secara efisien. Selain itu, fitur Campaign dapat
                membantu merencanakan dan menyampaikan pesan iklan dengan waktu
                yang tepat kepada target audiens yang sesuai.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
