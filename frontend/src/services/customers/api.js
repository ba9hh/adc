import { supabase } from '../../supabaseClient.js';
/**
 * Fetch all customers
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of customers
 */
export const fetchCustomers = async (options = {}) => {
    try {
        let query = supabase
            .from('customers')
            .select('*');

        if (options.search) {
            query = query.or(`name.ilike.%${options.search}%,email.ilike.%${options.search}%`);
        }

        query = query.order('created_at', { ascending: false });

        const { data, error } = await query;

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error;
    }
};

/**
 * Fetch a single customer by ID
 * @param {number|string} id - Customer ID
 * @returns {Promise<Object>} Customer object
 */
export const fetchCustomerById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .select('*, orders(*)')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching customer by ID:', error);
        throw error;
    }
};

/**
 * Add a new customer
 * @param {Object} customer - Customer data
 * @returns {Promise<Object>} Created customer
 */
export const addCustomer = async (customer) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .insert([{
                ...customer,
                created_at: new Date().toISOString(),
            }])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding customer:', error);
        throw error;
    }
};

/**
 * Update a customer
 * @param {number|string} id - Customer ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated customer
 */
export const updateCustomer = async (id, updates) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating customer:', error);
        throw error;
    }
};

/**
 * Delete a customer
 * @param {number|string} id - Customer ID
 * @returns {Promise<void>}
 */
export const deleteCustomer = async (id) => {
    try {
        const { error } = await supabase
            .from('customers')
            .delete()
            .eq('id', id);

        if (error) throw error;
    } catch (error) {
        console.error('Error deleting customer:', error);
        throw error;
    }
};