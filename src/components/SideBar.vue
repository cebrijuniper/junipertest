<template>
  <aside class="w-24 float-left h-full border" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 bg-[#f2f2f2] rounded dark:bg-gray-800 h-full" style="padding-left: 5px; padding-right: 5px">
      <ul class="space-y-2">
        <li class="flex justify-center" v-for="link in sidebarLinks">
          <router-link :to="link.to" class="pt-2 rounded-lg">
            <div class="pb-2 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#b3b3b3] focus:text-[#5a7b32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" :d="link['svg-d']" />
              </svg>
            </div>
            <p class="text-xs pb-2">{{link.name}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
    const sidebarLinks = [
      {
        name: 'Dashboard',
        to: '/',
        'svg-d': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      },
      {
        name: 'Customers',
        to: '/customers',
        'svg-d': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
      },
      {
        name: 'Products',
        to: '/products',
        'svg-d': 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
      },
      {
        name: 'Orders',
        to: '/orders',
        'svg-d': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
      },
      {
        name: 'Analytics',
        to: '/analytics',
        'svg-d': 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
      },
      {
        name: 'Notifications',
        to: '/notifications',
        'svg-d': 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
      },
      {
        name: 'Activities',
        to: '/activities',
        'svg-d': 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      }
    ]

    return {
      sidebarLinks
    }
  },
})
</script>

<style scoped>
.router-link-exact-active {
  background: #fff;
  width: 100%;
  text-align: center;
}

.router-link-exact-active svg {
  color: #88a750;
}
</style>