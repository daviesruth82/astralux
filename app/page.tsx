import ProductCard, { dummyProducts } from "./components/ProductCard";

export default function Home() {
  return (
    <div className="bg-pink-100 min-h-screen w-full flex flex-col items-center py-8">
      
      <main className="w-[95%] flex flex-col gap-12">
        
       
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 w-full py-6">
          <h3 className="text-rose-700 w-full md:w-1/2 text-4xl sm:text-6xl lg:text-8xl font-black text-center md:text-left">
            Luxury at its finest
          </h3>
          <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmXUjEcIfDHV3D4bv7bJdMBUeKfha7F8MNMKaCxwJow&s=10"
              alt="shoe"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {dummyProducts.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
            />
          ))}
        </section>

      </main>
    </div>
  );
}