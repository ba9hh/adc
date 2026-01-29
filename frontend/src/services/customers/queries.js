import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchCustomers,
    fetchCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer,
} from './api';

/**
 * Hook to fetch all customers
 * @param {Object} options - Query options (search)
 */
export const useCustomers = (options = {}) => {
    return useQuery({
        queryKey: ['customers', options],
        queryFn: () => fetchCustomers(options),
        staleTime: 1000 * 60 * 5,
    });
};

/**
 * Hook to fetch a single customer by ID
 * @param {number|string} id - Customer ID
 */
export const useCustomer = (id) => {
    return useQuery({
        queryKey: ['customer', id],
        queryFn: () => fetchCustomerById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });
};

/**
 * Hook to add a new customer
 */
export const useAddCustomer = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addCustomer,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['customers'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
        },
        onError: (error) => {
            console.error('Failed to add customer:', error);
        },
    });
};

/**
 * Hook to update a customer
 */
export const useUpdateCustomer = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updates }) => updateCustomer(id, updates),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['customer', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['customers'] });
        },
        onError: (error) => {
            console.error('Failed to update customer:', error);
        },
    });
};

/**
 * Hook to delete a customer
 */
export const useDeleteCustomer = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteCustomer,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['customers'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
        },
        onError: (error) => {
            console.error('Failed to delete customer:', error);
        },
    });
};