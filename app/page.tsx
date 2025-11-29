import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/bookong-item";
import { prisma } from "@/lib/prisma";
import BarberShopItem from "./_components/barbershop-item";
import Footer from "./_components/footer";
import {
  PageContainer,
  PageSection,
  PageSectionScroller,
  PageSectionTitle,
} from "./_components/ui/page";

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
      <PageContainer>
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <PageSection>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem
            serviceName="Corte de Cabelo"
            barberShopName="Barbearia do João"
            barberShopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
            date={new Date()}
          />
        </PageSection>
        <PageSection>
          <PageSectionTitle>Recomendados</PageSectionTitle>
          <PageSectionScroller>
            {recomendedBarbershops.map((barbershop) => {
              return (
                <BarberShopItem key={barbershop.id} barbershop={barbershop} />
              );
            })}
          </PageSectionScroller>
        </PageSection>
        <PageSection>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => {
              return (
                <BarberShopItem key={barbershop.id} barbershop={barbershop} />
              );
            })}
          </PageSectionScroller>
        </PageSection>
      </PageContainer>
      <Footer />
    </main>
  );
}
