
<script setup>
definePageMeta({
    layout: "custom",
}
);
const supabase = useSupabaseClient();
const login = async () => {
    const {error} = supabase.auth.signInWithOAuth(
        {
            provider: "google",
        }
    )
};
const user = useSupabaseUser();
</script>
<template>
    <div class="mt-10">
        <h1 class="text-5xl font-bold mb-7">
            Login in
        </h1>
        <button @click="login" class="bg-black rounded text-white font-bold">
            Login with Google
        </button>
    </div>
</template>