import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchCategories,
    addCategory,
    updateCategory,
    deleteCategory,
} from './api';

/**
 * Hook to fetch all categories
 */
export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
};

/**
 * Hook to add a new category
 */
export const useAddCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
        onError: (error) => {
            console.error('Failed to add category:', error);
        },
    });
};

/**
 * Hook to update a category
 */
export const useUpdateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updates }) => updateCategory(id, updates),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
        onError: (error) => {
            console.error('Failed to update category:', error);
        },
    });
};

/**
 * Hook to delete a category
 */
export const useDeleteCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
        onError: (error) => {
            console.error('Failed to delete category:', error);
        },
    });
};