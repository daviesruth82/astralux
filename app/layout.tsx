  import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "AstraLux",
  description: "Welcome to AstraLux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}


        // {dummyProducts.map((item) => (
        //     <ProductCard
        //       key={item.id}
        //       title={item.title}
        //       price={item.price}
        //       image={item.image}
        //       category={item.category}
        //     />
        //   ))}

      //       <div className="bg-blue-500 w-[100vw] min-h-screen flex justify-center items-center p-6">
      // <main className="bg-pink-400 w-[95%] min-h-[90vh] flex flex-col gap-6 p-6 rounded-2xl shadow-xl">
      //   <section className="bg-red-600 h-[200px] w-[100%] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-inner">
      //     Luxury at it's finest
      //   </section>