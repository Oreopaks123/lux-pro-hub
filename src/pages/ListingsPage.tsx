import { Header } from "@/components/Header";
import { Listings } from "@/components/Listings";
import { Footer } from "@/components/Footer";

const ListingsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Listings />
      </main>
      <Footer />
    </div>
  );
};

export default ListingsPage;
