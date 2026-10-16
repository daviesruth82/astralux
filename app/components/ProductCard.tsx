export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export const dummyProducts: Product[] = [
  {
    id: 1,
    title: 'Off-White',
    price: 800.99,
    image: 'https://cdn-images.farfetch-contents.com/21/25/45/00/21254500_52018295_1000.jpg',
    category: 'Men',
  },
  {
    id: 2,
    title: 'Swiss Watch',
    price: 129000.5,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    category: 'Accessories',
  },
  {
    id: 3,
    title: 'Creed Aventus Absolu EDP 100ml',
    price: 740000.25,
    image: 'https://dscentsation.ng/cdn/shop/files/CreedAventusAbsoluEDP100ml.jpg?v=1789040312&width=700',
    category: 'Fragrance',
  },
  {
    id: 4,
    title: 'Maison Margiela',
    price: 950000.0,
    image: 'https://cdn-images.farfetch-contents.com/34/14/64/04/34146404_65144447_1000.jpg',
    category: 'sneakers',
  },
  {
    id: 5,
    title: 'Dress',
    price: 11000.2,
    image: 'https://cdn-images.farfetch-contents.com/27/59/48/03/27594803_57361546_1000.jpg',
    category: 'Women',
  },
  {
    id: 6,
    title: 'Rene Caovilla',
    price: 49.99,
    image: 'https://cdn-images.farfetch-contents.com/33/83/63/09/33836309_67340760_1000.jpg',
    category: 'Gaming',
  },
   {
    id: 7,
    title: 'Off-White',
    price: 800.99,
    image: 'https://cdn-images.farfetch-contents.com/21/25/45/00/21254500_52018295_1000.jpg',
    category: 'Men',
  },
  {
    id: 8,
    title: 'Swiss Watch',
    price: 129000.5,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    category: 'Accessories',
  },
  {
    id: 9,
    title: 'Creed Aventus Absolu EDP 100ml',
    price: 740000.25,
    image: 'https://dscentsation.ng/cdn/shop/files/CreedAventusAbsoluEDP100ml.jpg?v=1789040312&width=700',
    category: 'Fragrance',
  },
  {
    id: 10,
    title: 'polene',
    price: 95000.0,
    image: 'https://eng.polene-paris.com/cdn/shop/files/packshot-front_mini-mokki-camel.png?v=1740569977&width=1920',
    category: 'Bag',
  },
  {
    id: 11,
    title: 'shoe',
    price: 11000.2,
    image: 'https://cdn-images.farfetch-contents.com/37/27/27/55/37272755_70049296_1000.jpg',
    category: 'Women',
  },
  {
    id: 12,
    title: 'Rene ',
    price: 490000.99,
    image: 'https://cdn-images.farfetch-contents.com/24/13/64/64/24136464_54286043_1000.jpg',
    category: 'shoes',
  },
   {
    id: 13,
    title: 'polene',
    price: 95000.0,
    image: 'https://eng.polene-paris.com/cdn/shop/files/packshot-front_mini-mokki-camel.png?v=1740569977&width=1920',
    category: 'Bag',
  },
  {
    id: 14,
    title: 'shoe',
    price: 11000.2,
    image: 'https://cdn-images.farfetch-contents.com/37/27/27/55/37272755_70049296_1000.jpg',
    category: 'Women',
  },
  {
    id: 15,
    title: 'Rene ',
    price: 490000.99,
    image: 'https://cdn-images.farfetch-contents.com/24/13/64/64/24136464_54286043_1000.jpg',
    category: 'shoes',
  },
];

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({ title, price, image, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md h-[400px] w-[350px] flex flex-col overflow-hidden group transition-transform hover:-translate-y-1 shrink-0">
      <div className="relative w-full h-[65%] bg-gray-100 overflow-hidden p-4 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="h-[35%] p-3 flex flex-col justify-between">
        {category && <span className="text-[10px] uppercase tracking-wider text-gray-400 truncate">{category}</span>}
        <h4 className="font-semibold text-gray-800 text-xs line-clamp-2">{title}</h4>
        <p className="text-sm font-bold text-rose-700">${price}</p>
      </div>
    </div>
  );
}
