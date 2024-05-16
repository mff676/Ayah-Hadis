import { supabase } from "./SupabaseClient"

const getUser = async() => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
}
const signIn = async (email, pass) => {
    console.log(pass);
    try {
        const { data: { user, session }, error } = await supabase.auth.signInWithPassword({
            email:email, 
            password:pass
        })
        return { user, session, error }
    } catch (e) {
        console.log('Error', e);
    }    
}
export{
    getUser,
    signIn
}