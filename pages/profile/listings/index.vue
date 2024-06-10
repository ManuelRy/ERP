<script setup>
definePageMeta({
  layout: "custom",
});
const supabase = useSupabaseClient();
const login = async () => {
    const {error} = supabase.auth.signInWithOAuth(
        {
            provider: "google",
        }
    )
};
const user = useSupabaseUser();
const { listings } = useCars();
</script>

<template>
  <div>
    <div class="flex items-center h-screen w-full justify-center">

      <div class="max-w-xs">
          <div class="bg-white shadow-xl rounded-lg py-3">
              <div class="photo-wrapper p-2">
                  <img class="w-32 h-32 rounded-full mx-auto" src="/img/messi.jpg">
              </div>
              <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ user.user_metadata.full_name }}</h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                      <p>{{ user.email }}</p>
                  </div>
                  <table class="text-xs my-3">
                      <tbody>
                      <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td class="px-2 py-2">{{ user.email }}</td>
                      </tr>
                  </tbody></table>
      
                  <div class="text-center my-3">
                      <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                  </div>
              </div>
          </div>
      </div>
      
      </div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink
        to="/profile/listings/create"
        class="
          w-9
          h-9
          bg-blue-400
          flex
          justify-center
          items-center
          rounded-full
          text-white
          font-bold
          cursor-pointer
        "
        >+</NuxtLink
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
    <CarCards/>
  </div>
</template>