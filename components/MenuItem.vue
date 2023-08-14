<template>
    <li>
        <NuxtLink :to="route" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <slot />
            <span class="ml-3 text-uplb-maroon-300">{{ menu }}</span>
        </NuxtLink>
    </li>
</template>

<script setup>
    const props = defineProps(['menu', 'route']);
</script>