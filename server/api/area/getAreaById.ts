import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

/**
 * Query that returns the area that corresponds to a given ID.
 */
export default eventHandler(async (event) => {
    // get the employee id from the parameters of the query
    const { id } = getQuery(event);
    // create a client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with employee and error field
    const { data, error } = await client
        .from('area')
        .select('id, name, description, pic, card_revenue, card_why, card_future, description_2')
        .eq('id', id)
        .single();

    if (error) console.log(error);
    return data;
});
