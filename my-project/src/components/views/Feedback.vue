<template>
  <div>
    <form class="flex flex-col justify-center p-5 space-y-5" action="submit" method="post">
        <h2 class="flex justify-center text-xl">Leave a message to the developer</h2>
      <input
        type="text"
        placeholder="Name"
        id="name"
        class="w-full input input-bordered"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        class="w-full input input-bordered"
      />

      <input
        type="email"
        placeholder="Email"
        id="email"
        class="w-full input input-bordered"
        required
      />

      <textarea
        class="w-full textarea textarea-bordered h-[250px]"
        id="message"
        placeholder="Bio"
        required
      ></textarea>
      <div class="flex justify-center">
        <button class="btn btn-neutral btn-lg">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>
