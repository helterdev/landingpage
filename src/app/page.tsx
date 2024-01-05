import Card from '@/components/Card/Card';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Principal from '@/components/Principal/Principal';
import Users from '@/components/Users/Users';

export default function Home() {
  const cardImg = [
    {
      img: 'chips.webp',
      description: 'Pedir comida para tus empleados',
    },
    {
      img: 'pizaa.webp',
      description: 'Tu restaurant a domicilio',
    },
    {
      img: 'app_uber.webp',
      description: 'Haz entregas con la app',
    },
  ];
  return (
    <main className="">
      <section>
        <div className="bg-[url(/img/bg.webp)] min-h-screen bg-cover bg-center">
          <Header />
          <Principal />
        </div>
      </section>
      <section>
        <div className="flex flex-col py-10 justify-center items-center gap-y-9 h-screen sm:flex-row">
          {cardImg.map((card) => {
            return (
              <Card
                image={card.img}
                description={card.description}
                key={card.img}
              />
            );
          })}
        </div>
      </section>
      {/* <section className="">
        <div className='w-4/5 m-auto pb-4'>
          <h3>Usuarios</h3>
          <div className='flex flex-wrap gap-4'>
            <Users />
            <Users />
            <Users />
            <Users />
            <Users />
            <Users />
          </div>
        </div>
      </section> */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
