<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul v-for="item in sidebarItems" :key="item.name" class="space-y-2 font-medium">
        <MenuItem :menu="item.name" :route="item.route"><Icon :name="item.icon" class="text-uplb-maroon-300" /></MenuItem>
      </ul>
    </div>
  </aside>
</template>

<script setup>

  const sidebarItems = [
    {name: "Dashboard", route: "/", icon: "octicon:apps-16"},
    {name: "Courseworks", route: "/courseworks", icon: "octicon:book-16"}
  ];

</script>
