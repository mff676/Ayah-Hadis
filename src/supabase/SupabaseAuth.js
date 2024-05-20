import Swal from "sweetalert2";
import { supabase } from "./SupabaseClient"
import toast from "react-hot-toast";

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
const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if(error){
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            return;
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Logged out successfully!',
                showCloseButton: false
                })
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
        }
}

const signUp = async (email, pass, fullName, role) => {
    const {  error } = await supabase.auth.signUp(
        {
          email: email,
          password: pass,
          options: {
            emailRedirectTo: 'https://ayah-hadis.vercel.app/profile/form',
            data: {
              fullName: fullName,
              role: role,
            }
          }
        }
      )
    return error
}
export{
    getUser,
    signIn,
    signOut,
    signUp
}