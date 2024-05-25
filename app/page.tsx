import { About } from "@/components/About";
import { Appbar } from "@/components/Appbar";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { HomeComponent } from "@/components/Home";
import { Scroll } from "@/components/Scroll";
import { Video } from "@/components/Video";

export default function Home() {
  return (
    <div>
      <Appbar />
      <HomeComponent />
      <About />
      <Community />
      <Scroll />
      <Contact />
      <Video />
      <Footer />
    </div>
  );
}
