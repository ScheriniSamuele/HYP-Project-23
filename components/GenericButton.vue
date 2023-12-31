<script setup lang="ts">
/**
 * Component name: GenericButton
 * Description: this is the general button
 * used in the website, it accepts a value
 * (text to display on the button) and a boolean
 * called altStyle which defines which color
 * scheme the button should have.
 *
 * It also accepts an emit called func, which
 * is the function invoked when clicking the
 * button. Please note that the function logic
 * is obviously defined in the parent of this component
 * to achieve reusability.
 *
 */

interface Props {
    value: string;
    altStyle: boolean;
}

const emit = defineEmits(['func']);

const { value, altStyle } = defineProps<Props>();
</script>

<template>
    <div>
        <button class="btn" :class="altStyle ? 'alt-scheme' : 'scheme'" @click="emit('func')">{{ value }}</button>
    </div>
</template>

<style scoped>
.btn {
    padding: 1rem 3rem;
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
}

.scheme {
    background-color: var(--btn-color);
    color: var(--title-color);
    transition: 0.3s all ease-in;
    border: 1px solid black;
}

.scheme:hover {
    background-color: var(--accent-color);
    color: var(--title-color-alt);
    transition: 0.3s all ease-in;
    border: 1px solid transparent;
}

.alt-scheme {
    background-color: var(--btn-color-alt);
    color: var(--title-color-alt);
    transition: 0.3s all ease-in;
    border: 1px solid transparent;
}

.alt-scheme:hover {
    background-color: var(--accent-color);
    transition: 0.2s all ease-in;
    border: 1px solid transparent;
}
</style>
