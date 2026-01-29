import { supabase } from '../../supabaseClient.js';
/**
 * Fetch all products
 * @param {Object} options - Query options
 * @param {string} options.search - Search term for filtering
 * @param {string} options.category - Category filter
 * @param {string} options.sortBy - Field to sort by
 * @param {boolean} options.ascending - Sort direction
 * @returns {Promise<Array>} Array of products
 */
export const fetchProducts = async (options = {}) => {
    try {
        let query = supabase
            .from('products')
            .select('*');

        // Apply search filter
        if (options.search) {
            query = query.or(`name.ilike.%${options.search}%,category.ilike.%${options.search}%`);
        }

        // Apply category filter
        if (options.category) {
            query = query.eq('category', options.category);
        }

        // Apply sorting
        if (options.sortBy) {
            query = query.order(options.sortBy, { ascending: options.ascending ?? true });
        } else {
            query = query.order('created_at', { ascending: false });
        }

        const { data, error } = await query;

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

/**
 * Fetch a single product by ID
 * @param {number|string} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export const fetchProductById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

/**
 * Add a new product
 * @param {Object} product - Product data
 * @param {string} product.name - Product name
 * @param {string} product.category - Product category
 * @param {number} product.price - Product price
 * @param {number} product.stock - Stock quantity
 * @param {string} product.description - Product description
 * @param {string} product.image - Product image URL or emoji
 * @returns {Promise<Object>} Created product
 */
export const addProduct = async (product) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .insert([
                {
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    stock: product.stock,
                    description: product.description || '',
                    image: product.image || '',
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                }
            ])
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

/**
 * Update an existing product
 * @param {number|string} id - Product ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated product
 */
export const updateProduct = async (id, updates) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .update({
                ...updates,
                updated_at: new Date().toISOString(),
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

/**
 * Delete a product
 * @param {number|string} id - Product ID
 * @returns {Promise<void>}
 */
export const deleteProduct = async (id) => {
    try {
        const { error } = await supabase
            .from('products')
            .delete()
            .eq('id', id);

        if (error) throw error;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

/**
 * Bulk delete products
 * @param {Array<number|string>} ids - Array of product IDs
 * @returns {Promise<void>}
 */
export const bulkDeleteProducts = async (ids) => {
    try {
        const { error } = await supabase
            .from('products')
            .delete()
            .in('id', ids);

        if (error) throw error;
    } catch (error) {
        console.error('Error bulk deleting products:', error);
        throw error;
    }
};

/**
 * Update product stock
 * @param {number|string} id - Product ID
 * @param {number} quantity - New stock quantity
 * @returns {Promise<Object>} Updated product
 */
export const updateProductStock = async (id, quantity) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .update({
                stock: quantity,
                updated_at: new Date().toISOString(),
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating product stock:', error);
        throw error;
    }
};
