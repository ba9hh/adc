import { supabase } from '../../supabaseClient.js';
/**
 * Fetch all categories
 * @returns {Promise<Array>} Array of categories
 */
export const fetchCategories = async () => {
    try {
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .order('name', { ascending: true });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

/**
 * Add a new category
 * @param {Object} category - Category data
 * @returns {Promise<Object>} Created category
 */
export const addCategory = async (category) => {
    try {
        const { data, error } = await supabase
            .from('categories')
            .insert([category])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }
};

/**
 * Update a category
 * @param {number|string} id - Category ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated category
 */
export const updateCategory = async (id, updates) => {
    try {
        const { data, error } = await supabase
            .from('categories')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
};

/**
 * Delete a category
 * @param {number|string} id - Category ID
 * @returns {Promise<void>}
 */
export const deleteCategory = async (id) => {
    try {
        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('id', id);

        if (error) throw error;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
};