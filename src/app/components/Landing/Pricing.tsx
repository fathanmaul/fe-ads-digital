import React from "react";
import Button from "../Button";
import Card from "../Card";
import Container from "../Container";
import { title } from "process";
import Image from "next/image";

export default function Pricing() {
  const data = [
    {
      title: "Starter",
      description:
        "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
      price: "-",
      yearlyPrice: "-",
      button: "Start Now",
      buttonColor: "btn-primary",
    },
    {
      title: "Basic",
      description:
        "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      price: "Rp 65.000",
      yearlyPrice: "Rp 650.000/tahun",
      button: "Get Started",
      buttonColor: "btn-warning",
    },
    {
      title: "Premium",
      description:
        "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      price: "Rp 76.000",
      yearlyPrice: "Rp 800.000/tahun",
      button: "Get Started",
      buttonColor: "btn-primary",
    },
    {
      title: "Pro",
      description:
        "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      price: "Rp 86.000",
      yearlyPrice: "Rp 900.000/tahun",
      button: "Get Started",
      buttonColor: "btn-primary",
    },
  ];
  return (
    <section>
      <div className="lg:min-h-[740px] flex flex-col  w-full py-20 lg:py-15 bg-white dark:bg-dark-base">
        <Container>
          <div className="w-full">
            <h2 className="font-extrabold  text-4xl max-w-3xl text-center mx-auto">
              Our Pricing
            </h2>
          </div>
          <div className="flex w-fit bg-white dark:bg-neutral-700 shadow-lg mx-auto mt-4 rounded-full">
            <Button className="rounded-full min-w-[130px] bg-white hover:bg-gray-100 dark:bg-neutral-700 dark:text-white">
              Monthly
            </Button>
            <Button className="rounded-full min-w-[130px] btn-primary">
              Yearly
            </Button>
          </div>
          <div className="p-1.5 bg-gray-100 w-fit mx-auto mt-4 rounded-lg dark:bg-neutral-700">
            <p className="text-sm text-primary">
              Hemat hingga 25% dengan paket tahunan
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            {data.map((item, index) => (
              <PricingCard
                key={index}
                title={item.title}
                description={item.description}
                monthlyPrice={item.price}
                yearlyPrice={item.yearlyPrice}
                button={item.button}
                buttonColor={item.buttonColor}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  button: string;
  buttonColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  button,
  buttonColor,
}) => {
  return (
    <Card className="w-full lg:max-w-[350px] shadow-none hover:shadow-2xl lg:hover:scale-110 dark:bg-neutral-800">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl dark:text-white">{title}</h3>
        <p className="text-sm dark:text-white">{description}</p>
        <h4 className="font-extrabold text-3xl dark:text-white">
          {monthlyPrice}{" "}
          {monthlyPrice === "-" ? (
            ""
          ) : (
            <span className="text-base font-normal dark:text-white">/ bulan</span>
          )}
        </h4>
        <p className="text-sm text-gray-400 dark:text-white">{yearlyPrice}</p>
        <Button className={`${buttonColor}`}>{button}</Button>
        <ul className={"pricing flex flex-col gap-2 text-sm text-black dark:text-white"}>
          <li>
            <Image src="/assets/icons/time_auto.svg" alt="" width={20} height={20} />
            100 Auto Reply
          </li>
          <li>
            <Image src="/assets/icons/cast.svg" alt="" width={20} height={20}/>
            500 Broadcast
          </li>
          <li>
            <Image src="/assets/icons/data_exploration.svg" alt="" width={20} height={20} />
            50 Campaign
          </li>
          <li>
            <Image src="/assets/icons/contacts.svg" alt="" width={20} height={20} />
            500 Contact
          </li>
          <li>
            <Image src="/assets/icons/ad_units.svg" alt="" width={20} height={20} />
            50 Device
          </li>
          <li>
            <Image src="/assets/icons/article.svg" alt="" width={20} height={20} />
            Excel / CSV Contact Import
          </li>
          <li>
            <Image src="/assets/icons/sync_saved_locally.svg" alt="" width={20} height={20} />
            Google Contact Sync
          </li>
        </ul>
      </div>
    </Card>
  );
};
