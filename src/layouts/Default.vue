<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="min-h-screen flex flex-col justify-between">
        <header class="border-b py-2 font-roboto">
            <div class="container mx-auto flex items-center justify-between">
                <router-link class="xl:text-lg text-base font-medium" to="/">
                    <span class="text-sm">Dummy</span>
                    <strong>Json</strong>
                </router-link>
                <nav>
                    <ul class="flex gap-5">
                        <li>
                            <router-link class="font-medium md:text-base text-xs" to="/">Products</router-link>
                        </li>
                        <li>
                            <router-link class="font-medium md:text-base text-xs" to="/users">Users</router-link>
                        </li>
                        <li>
                            <router-link class="font-medium md:text-base text-xs" to="/posts">Posts</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main class="flex-grow flex flex-col">
            <slot />
        </main>
        <footer class="font-roboto bg-gray-100 text-center py-3">
            <p>
                Design by 
                <a class="font-medium hover:underline " href="https://hikmatbek.uz">Hikmat</a>
            </p>
        </footer>
    </div>
</template>