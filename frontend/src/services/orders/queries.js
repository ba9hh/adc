import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchOrders,
    fetchOrderById,
    updateOrderStatus,
} from './api';

/**
 * Hook to fetch all orders
 * @param {Object} options - Query options (status, customerId)
 */
export const useOrders = (options = {}) => {
    return useQuery({
        queryKey: ['orders', options],
        queryFn: () => fetchOrders(options),
        staleTime: 1000 * 60 * 2, // 2 minutes
    });
};

/**
 * Hook to fetch a single order by ID
 * @param {number|string} id - Order ID
 */
export const useOrder = (id) => {
    return useQuery({
        queryKey: ['order', id],
        queryFn: () => fetchOrderById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 2,
    });
};

/**
 * Hook to update order status
 */
export const useUpdateOrderStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, status }) => updateOrderStatus(id, status),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['order', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['orders'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
        },
        onError: (error) => {
            console.error('Failed to update order status:', error);
        },
    });
};