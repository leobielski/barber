import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/bookong-item";
import { prisma } from "@/lib/prisma";
import BarberShopItem from "./_components/barbershop-item";

export default async function Home() {
  const recomendedBarbershops = await prisma.barberShop.findMany({
    orderBy: { name: "asc" },
  });
  const popularBarbershops = await prisma.barberShop.findMany({
    orderBy: { name: "desc" },
  });
  return (
    <main>
      <Header />
      <main className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="Corte de Cabelo"
          barberShopName="Barbearia do João"
          barberShopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
          date={new Date()}
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recomendedBarbershops.map((barbershop) => {
            return (
              <BarberShopItem key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => {
            return (
              <BarberShopItem key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>
      </main>
    </main>
  );
}
