import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Principal from '@/components/Principal/Principal';


export default function Home() {
  return (
    <main className="">
      <section>
        <div className="bg-[url(/img/bg.webp)] min-h-screen bg-cover bg-center">
          <Header />
          <Principal />
        </div>
      </section>
      <section>
          <Footer/>
      </section>
    </main>
  );
}
