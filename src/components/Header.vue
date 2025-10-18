<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
    <div class="container mx-auto px-4 py-4 sm:py-0">
      <div class="flex flex-col items-center sm:flex-row sm:h-16 sm:items-center">
        <a href="/" class="flex items-center space-x-2 mb-3 sm:mb-0 group">
          <img src="/images/logo.png" alt="Navam Logo" class="h-6 w-auto" />
          <div class="flex flex-col">
            <span class="text-2xl font-bold">Navam</span>
            <span class="text-[10px] text-muted-foreground/70 -mt-1 hidden sm:block">Fork, Vibe, Ship!</span>
          </div>
        </a>
        <nav class="flex items-center space-x-6 text-sm font-medium sm:ml-auto">
          <a href="/" class="transition-colors hover:text-foreground/80 text-foreground">Home</a>
          <a href="/blog" class="transition-colors hover:text-foreground/80 text-foreground/60">Blog</a>
          <a href="/contact" class="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
        </nav>
      </div>
    </div>
  </header>
</template>