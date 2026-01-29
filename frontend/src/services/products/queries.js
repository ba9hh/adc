import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchProducts,
    fetchProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    bulkDeleteProducts,
    updateProductStock,

} from './api';
/**
 * Hook to fetch all products
 * @param {Object} options - Query options (search, category, sortBy, ascending)
 */
export const useProducts = (options = {}) => {
    return useQuery({
        queryKey: ['products', options],
        queryFn: () => fetchProducts(options),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

/**
 * Hook to fetch a single product by ID
 * @param {number|string} id - Product ID
 */
export const useProduct = (id) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id),
        enabled: !!id, // Only run if ID is provided
        staleTime: 1000 * 60 * 5,
    });
};

/**
 * Hook to add a new product
 */
export const useAddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addProduct,
        onSuccess: () => {
            // Invalidate and refetch products query
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
        },
        onError: (error) => {
            console.error('Failed to add product:', error);
        },
    });
};

/**
 * Hook to update a product
 */
export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updates }) => updateProduct(id, updates),
        onSuccess: (data, variables) => {
            // Invalidate the specific product and all products list
            queryClient.invalidateQueries({ queryKey: ['product', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
        onError: (error) => {
            console.error('Failed to update product:', error);
        },
    });
};

/**
 * Hook to delete a product
 */
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
        },
        onError: (error) => {
            console.error('Failed to delete product:', error);
        },
    });
};

/**
 * Hook to bulk delete products
 */
export const useBulkDeleteProducts = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: bulkDeleteProducts,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
        },
        onError: (error) => {
            console.error('Failed to bulk delete products:', error);
        },
    });
};

/**
 * Hook to update product stock
 */
export const useUpdateProductStock = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, quantity }) => updateProductStock(id, quantity),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['product', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
        onError: (error) => {
            console.error('Failed to update product stock:', error);
        },
    });
};