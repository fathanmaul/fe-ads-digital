import RectangleBlob from "@/app/assets/RectangleBlob";
import Container from "../Container";
import { FaMinus, FaSearch } from "react-icons/fa";
import Card from "../Card";
import Button from "../Button";
import Forwadin from "@/app/assets/Forwardin";
import ForwardinText from "@/app/assets/ForwardinText";

export default function Footer() {
  return (
    <section id="faq" className="bg-primary overflow-hidden">
      <div className="lg:min-h-[1385px] relative container">
        <div className="hidden lg:block absolute -left-[1200px] -bottom-[500px] z-0 overflow-hidden opacity-20 scale-150">
          <RectangleBlob />
        </div>

        <div className="flex flex-col z-10 relative">
          <h2 className="text-white text-4xl mt-[150px] lg:mt-[189px] lg:text-3xl font-extrabold text-center">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-8 w-full items-center mt-10">
            <div className="flex flex-row justify-center w-full max-w-lg lg:max-w-2xl">
              <input type="text" className="input w-full" />
              <Button className="btn-primary rounded-l-none">
                <FaSearch />
              </Button>
            </div>
            <div className="max-w-lg lg:max-w-2xl flex flex-col gap-4">
              <FAQCard />
            </div>
            <CompanyProfile />
          </div>
        </div>

        <div className="relative lg:absolute left-0 right-0 lg:bottom-10 mb-10 lg:mb-0">
          <div className="flex items-center gap-4 w-fit mx-auto">
            <p className="text-white">Powered by</p>
            <ForwardinText className="fill-white"/>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQCard() {
  return (
    <>
      <Card className="w-full relative">
        <h3 className="font-bold text-xl">Apa itu Forwardin?</h3>
        <p className="text-sm font-medium mt-2">
          Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang
          dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup
          WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur
          canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta
          sinkronisasi kontak WhatsApp dan kontak Google.
        </p>
        <div className="p-2 bg-primary w-fit absolute top-0 right-0 m-3">
          <FaMinus className="text-white" />
        </div>
      </Card>
      <Card className="w-full max-w-2xl relative">
        <h3 className="font-bold text-xl">
          Apakah Forwardin cocok untuk saya?
        </h3>
        <div className="p-2 bg-primary w-fit absolute top-0 right-0 m-3">
          <FaMinus className="text-white" />
        </div>
      </Card>
      <Card className="w-full max-w-2xl relative">
        <h3 className="font-bold text-xl">
          Apakah Forwardin perlu di-install ke komputer?
        </h3>
        <div className="p-2 bg-primary w-fit absolute top-0 right-0 m-3">
          <FaMinus className="text-white" />
        </div>
      </Card>
    </>
  );
}

function CompanyProfile() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-10 w-full max-w-lg lg:max-w-none mx-auto pb-10">
      <div className="max-w-lg">
        <Forwadin className="fill-white" />
        <p className="text-white pt-10">
          Fowardin is your ultimate communication management solution. We
          empower businesses of all sizes with efficient message forwarding,
          streamlined contact management, and powerful campaign scheduling. Our
          mission is to simplify your communication processes, helping you
          engage with your audience effectively and effortlessly. Join us in
          transforming your communication game today!{" "}
        </p>
      </div>

      <div className="flex flex-col gap-5 max-w-lg">
        <div>
          <p className="font-bold text-xl text-white">Contact Us</p>
        </div>
        <div>
          <p className="text-white">
            Join our mailing list to receive updates, exclusive content, and
            early access to upcoming events. By signing up, you become an
            integral part of our community, spreading the message of compassion
            and making a difference.
          </p>
        </div>
        <div>
          <p className="text-white">Email: info@fowarin</p>
          <p className="text-white">Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-bold text-xl text-white">Lets Talk</p>
        </div>
        <div>
          <a href="#" className="text-white block">
            Facebook
          </a>
          <a href="#" className="text-white block">
            Instagram
          </a>
          <a href="#" className="text-white block">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
