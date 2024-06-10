<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const logout = async () =>
{
  //1. make user null
  //2. remove the JTW from cookies 

  const {error} = await supabase.auth.signOut();

  try {
    await $fetch('/api/_supabase/session', {
    method: 'POST',
    body: {event: "SIGNED_OUT", session: null}
  })
    
  } catch (error) {
    return console.log(error);

  }

  user.value = null;
  navigateTo('/');
  
  //3. Navigate to homepage

};
</script>

<template>
  <header
    class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
    "
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <nuxt-link to="/profile/listings" class="mr-5">profile</nuxt-link>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <nuxt-link to="/login">Login</nuxt-link>
  </header>
</template>