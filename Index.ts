import { useState } from 'react';
import {
  Smartphone,
  Laptop,
  Tv,
  Home,
  Zap,
  Shirt,
  ShoppingBag,
  Heart,
  Sparkles,
  Apple,
  Dumbbell,
  Gamepad2,
  Baby,
  Car,
  BookOpen,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';
import productMobile from '@/assets/product-mobile.jpg';
import productLaptop from '@/assets/product-laptop.jpg';
import productWatch from '@/assets/product-watch.jpg';
import productHeadphones from '@/assets/product-headphones.jpg';

const categories = [
  { name: 'Mobiles', icon: Smartphone },
  { name: 'Computers', icon: Laptop },
  { name: 'TV & Appliances', icon: Tv },
  { name: 'Electronics', icon: Zap },
  { name: "Men's Fashion", icon: Shirt },
  { name: "Women's Fashion", icon: ShoppingBag },
  { name: 'Home & Kitchen', icon: Home },
  { name: 'Beauty & Health', icon: Heart },
  { name: 'Grocery', icon: Apple },
  { name: 'Sports & Fitness', icon: Dumbbell },
  { name: 'Toys & Games', icon: Gamepad2 },
  { name: 'Baby Products', icon: Baby },
  { name: 'Automotive', icon: Car },
  { name: 'Books & Media', icon: BookOpen },
];

const featuredProducts = [
  {
    id: '1',
    name: 'Premium Smartphone Pro Max',
    price: 999.99,
    image: productMobile,
    category: 'Mobiles',
    discount: 15,
  },
  {
    id: '2',
    name: 'Ultra Gaming Laptop X1',
    price: 1499.99,
    image: productLaptop,
    category: 'Computers',
    discount: 20,
  },
  {
    id: '3',
    name: 'Smart Fitness Watch Pro',
    price: 299.99,
    image: productWatch,
    category: 'Electronics',
    discount: 10,
  },
  {
    id: '4',
    name: 'Wireless Noise Canceling Headphones',
    price: 349.99,
    image: productHeadphones,
    category: 'Electronics',
    discount: 25,
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold neon-text">
              Future of Shopping
            </h1>
            <p className="text-xl text-foreground/80">
              Experience the ultimate e-commerce platform with exclusive deals
              and cutting-edge technology
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 neon-glow text-lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neon-glow-magenta hover:neon-glow text-lg"
              >
                View Offers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              onClick={() => setSelectedCategory(category.name)}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="outline" className="neon-glow">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Offers Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-12 neon-glow animate-glow-pulse">
          <div className="relative z-10 text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary-foreground">
              Mega Sale - Up to 50% Off!
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Limited time offer on all electronics
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Grab the Deal
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 NeonMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
