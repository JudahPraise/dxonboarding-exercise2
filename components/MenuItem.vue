<template>
    <li>
        <a
        href="#"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
            <slot />
            <span class="ml-3 text-uplb-primary-100">{{ menu }}</span>
        </a>
    </li>
</template>

<script setup>
    const props = defineProps(['menu']);
</script>