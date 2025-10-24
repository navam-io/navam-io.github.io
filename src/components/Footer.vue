<template>
  <footer class="border-t bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <!-- Footer Navigation -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Column 1: Products -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Products</h3>
          <ul class="space-y-3">
            <li>
              <a href="/products/navam-invest" class="text-gray-600 hover:text-gray-900 transition-colors">
                Navam Invest
              </a>
              <span class="text-xs text-gray-500 block">AI Investment Intelligence</span>
            </li>
            <li>
              <a href="/products/moments" class="text-gray-600 hover:text-gray-900 transition-colors">
                Moments
              </a>
              <span class="text-xs text-gray-500 block">Business Intelligence</span>
            </li>
            <li>
              <a href="/products/command" class="text-gray-600 hover:text-gray-900 transition-colors">
                Command
              </a>
              <span class="text-xs text-gray-500 block">AI Terminal</span>
            </li>
            <li>
              <a href="/products/memo" class="text-gray-600 hover:text-gray-900 transition-colors">
                Memo
              </a>
              <span class="text-xs text-gray-500 block">Browser Extension</span>
            </li>
          </ul>
        </div>

        <!-- Column 2: Resources -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
          <ul class="space-y-3">
            <li>
              <a href="/blog" class="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/blog?tag=Strategic%20Intelligence" class="text-gray-600 hover:text-gray-900 transition-colors">
                Strategic Intelligence
              </a>
            </li>
            <li>
              <a href="/blog?tag=Investment%20Analysis" class="text-gray-600 hover:text-gray-900 transition-colors">
                Investment Analysis
              </a>
            </li>
            <li>
              <a href="/blog?tag=Development%20Acceleration" class="text-gray-600 hover:text-gray-900 transition-colors">
                Development Acceleration
              </a>
            </li>
            <li>
              <a href="/blog?tag=Knowledge%20Discovery" class="text-gray-600 hover:text-gray-900 transition-colors">
                Knowledge Discovery
              </a>
            </li>
            <li>
              <a href="/blog?tag=System%20Architecture" class="text-gray-600 hover:text-gray-900 transition-colors">
                System Architecture
              </a>
            </li>
            <li>
              <a href="/blog?tag=Performance%20%26%20Cost" class="text-gray-600 hover:text-gray-900 transition-colors">
                Performance & Cost
              </a>
            </li>
            <li>
              <a href="/blog?tag=Data%20Visualization" class="text-gray-600 hover:text-gray-900 transition-colors">
                Data Visualization
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Company -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Company</h3>
          <ul class="space-y-3">
            <li>
              <a href="/" class="text-gray-600 hover:text-gray-900 transition-colors">
                About Navam
              </a>
            </li>
            <li>
              <a href="/contact" class="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="https://github.com/navam-io" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                GitHub
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="/humans.txt" class="text-gray-600 hover:text-gray-900 transition-colors">
                Team & Credits
              </a>
            </li>
            <li>
              <a href="/.well-known/security.txt" class="text-gray-600 hover:text-gray-900 transition-colors">
                Security
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: SEO & Legal -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Site Info</h3>
          <ul class="space-y-3">
            <li>
              <a href="/sitemap-index.xml" class="text-gray-600 hover:text-gray-900 transition-colors">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/robots.txt" class="text-gray-600 hover:text-gray-900 transition-colors">
                Robots.txt
              </a>
            </li>
            <li>
              <a href="/ai.txt" class="text-gray-600 hover:text-gray-900 transition-colors">
                AI.txt
              </a>
            </li>
            <li>
              <a href="https://github.com/navam-io/navam-invest/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors">
                License (MIT)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t pt-8">
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div class="flex items-center space-x-2">
            <span class="text-xl font-bold text-gray-900">Navam</span>
            <span class="text-sm text-gray-600">© 2025 - AI product studio. Fork, Vibe, Ship!</span>
          </div>
          <div class="text-sm text-gray-600">
            <span>Fork working products. Vibe code to make your own. Ship within days!</span>
          </div>
        </div>

        <!-- SEO Keywords Footer -->
        <div class="mt-6 text-center text-xs text-gray-500">
          <p>100% Vibe Coding Ready | Working AI Reference Implementations | Multi-Agent Systems | LangGraph Working Patterns | Agent Orchestration | Streaming UIs | Intelligent Caching | Investment Intelligence | Business Intelligence | Knowledge Graphs | For AI Engineers</p>
        </div>
      </div>
    </div>
  </footer>
</template>