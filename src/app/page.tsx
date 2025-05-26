import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experiences } from '@/components/experiences';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-20">
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
