<template>
  <!-- Weather image + Weather -->
  <section>
    <main class="flex justify-evenly">
      <!-- weather image -->
      <div class="avatar">
        <div class="w-24 rounded">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <!-- weather info -->
      <div>
        <div class="border shadow-xl card w-96 bg-base-100 min-h-[10rem]">
            <div class="grid grid-cols-2 text-center">
                <div>
                    <p>Kyiv</p>
                    <p>Clear</p>
                    <p>23 C</p>
                </div>
                <div>
                    <p>Sunday</p>
                    <p>21:00</p>
                    <p>UA</p>
                </div>
            </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup></script>
