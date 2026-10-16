import ProductCard, {dummyProducts} from "./components/ProductCard";

export default function Home() {
  return (
    <div className="bg-pink-100 w-[100vw] h-full flex justify-center items-center ">

   <main className="w-[95%] h-[90%] flex flex-col ">
    <section className=" h-[300px] w-[100%] flex justify-start items-center">
<h3 className="text-rose-700 w-[50%] text-8xl font-black">Luxury at its finest</h3>
<div className=" h-[100%] w-[50%]  ml-10 shadow-lg">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmXUjEcIfDHV3D4bv7bJdMBUeKfha7F8MNMKaCxwJow&s=10" alt="shoe" className="h-[100%] w-[100%] object-cover"></img>
</div>
    </section>
    <section className="w-[100%] h-[60%] flex justify-between flex-wrap gap-5" >
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


