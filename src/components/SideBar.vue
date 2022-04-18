<template>
    
<aside class="w-24 float-left h-full" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-[#f2f2f2] rounded dark:bg-gray-800">
        <ul class="space-y-2">
            <li class="flex justify-center">
                <router-link to="/" class="pt-2">
                      <div class="pb-2 flex justify-center"><i class="fas fa-tachometer-alt fa-2x text-[#b3b3b3]"></i></div>
                      <p class="text-sm pb-2">Dashboard</p>
                </router-link>
            </li>
            <li class="flex justify-center">
                <router-link to="/customers" class="pt-2">
                      <div class="pb-2  flex justify-center"><i class="fas fa-user-circle fa-2x text-[#b3b3b3]"></i></div>
                      <p class="text-sm pb-2">Customers</p>
                </router-link>
            </li>
            <li class="flex justify-center pt-2">
                <router-link to="/products">
                      <div class="pb-2  flex justify-center"><i class="fab fa-product-hunt fa-2x text-[#b3b3b3]"></i></div>
                      <p class=" text-sm pb-2">Products</p>
                </router-link>
            </li>
            <li class="flex justify-center pt-2">
                <router-link to="/orders">
                      <div class="pb-2  flex justify-center"><i class="far fa-clipboard fa-2x text-[#b3b3b3]"></i></div>
                      <p class="text-sm pb-2">Orders</p>
                </router-link>
            </li>
            <li class="flex justify-center pt-2">
                <router-link to="/reports">
                      <div class="pb-2  flex justify-center"><i class="fas fa-chart-bar fa-2x text-[#b3b3b3]"></i></div>
                      <p class=" text-sm pb-2">Reports</p>
                </router-link>
            </li>
            <li class="flex justify-center pt-2">
                <router-link to="/settings">
                      <div class="pb-2  flex justify-center"><i class="fas fa-cog fa-2x text-[#b3b3b3]"></i></div>
                      <p class=" text-sm pb-2">Settings</p>
                </router-link>
            </li>

        </ul>
    </div>
</aside>



</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.router-link-exact-active{
  background: #fff;
  width: 100%;
  text-align: center;
}
.router-link-exact-active i{
     color: #88a750;
}
</style>