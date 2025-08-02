import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experiences } from '@/components/experiences';
import { Hero } from '@/components/hero';

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-14 text-sm sm:text-base md:px-20">
      <Hero />
      <About />
      <Experiences />
      <Contact />
    </main>
  );
};

export default Home;
