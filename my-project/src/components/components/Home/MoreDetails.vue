<template>
  <div
    class="grid grid-cols-1 p-5 space-y-5 sm:space-y-0 place-items-center sm:place-items-start sm:grid-cols-3"
  >
    <!-- image-->
    <div class="w-24 col-span-1 576px:w-28 sm:w-36">
      <slot name="image">
        <img src="https://placehold.co/600x400" alt="image" />
      </slot>
    </div>
    <!-- content -->
    <div class="col-span-2 space-y-5">
      <!-- title -->
      <div class="text-xl text-center sm:text-start">
        <slot name="title">
          <p>Longitude: 50</p>
        </slot>
        <!-- optional - second title -->
        <slot name="title2"/>
      </div>
      <!-- description -->
      <div class="text-base text-center text-gray-500 sm:text-start">
        <slot name="description">
          <p>Longitude is a geographic coordinate that specifies the east–west position of a point on the surface of the Earth, or another celestial body.</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>
