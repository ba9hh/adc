import { supabase } from '../../supabaseClient.js';
/**
 * Fetch all orders
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of orders
 */
export const fetchOrders = async (options = {}) => {
    try {
        let query = supabase
            .from('orders')
            .select('*, customers(name, email)');

        if (options.status) {
            query = query.eq('status', options.status);
        }

        if (options.customerId) {
            query = query.eq('customer_id', options.customerId);
        }

        query = query.order('created_at', { ascending: false });

        const { data, error } = await query;

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

/**
 * Fetch a single order by ID
 * @param {number|string} id - Order ID
 * @returns {Promise<Object>} Order object
 */
export const fetchOrderById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('orders')
            .select('*, customers(name, email), order_items(*, products(name, price))')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching order by ID:', error);
        throw error;
    }
};

/**
 * Update order status
 * @param {number|string} id - Order ID
 * @param {string} status - New status
 * @returns {Promise<Object>} Updated order
 */
export const updateOrderStatus = async (id, status) => {
    try {
        const { data, error } = await supabase
            .from('orders')
            .update({
                status,
                updated_at: new Date().toISOString(),
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
};