import Card from '@/components/Card/Card';
import Header from '@/components/Header/Header';
import Principal from '@/components/Principal/Principal';

export default function Home() {
  // flex min-h-screen flex-col items-center justify-between p-24
  // const img: string[] = ['/img/app.webp', '/img/eat.webp', '/img/delivery.webp', '/img/bd.webp'];
  return (
    <main className="">
      <section>
        <div className="bg-[url(/img/bg.webp)] min-h-screen bg-cover bg-center">
          <Header />
          <Principal />
        </div>
        <div></div>
      </section>
      <section>
        <ul>
          {/* {img.map((imagen: string) => {
            return <Card img={imagen} key={imagen}/>
          })} */}
          {/* <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li> */}
        </ul>
      </section>
    </main>
  );
}
