
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/components/ProductCard';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const response = await fetch('/products.json');
      if (!response.ok) {
        throw new Error('Failed to load products.json');
      }
      const data = await response.json();
      return data.map((product: any) => {
        // Ensure all fields are mapped and types are correct
        const image = product.image || '';
        const backImage = product.back_side || product.backImage || '';
        const images = [image, backImage].filter(Boolean);
        console.log('Product:', product.name, 'Images:', images);
        return {
          id: product.id,
          name: product.name,
          price: product.price || 0,
          real_price: product.real_price || null,
          image,
          backImage,
          back_side: product.back_side || undefined,
          sizes: Array.isArray(product.sizes) ? product.sizes : (typeof product.sizes === 'string' ? product.sizes.split(',') : ['S','M','L','XL']),
          description: product.description || '',
          bio: product.bio || '',
          images,
          category: product.category || 'featured',
        };
      });
    },
  });
};
