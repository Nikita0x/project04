<template>
  <div>
    <form class="flex flex-col justify-center p-5 space-y-5" action="../../backend/submit.php" method="post">
        <h2 class="flex justify-center text-xl">Send a message to the developer</h2>
        <!-- name -->
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        class="w-full input input-bordered"
        required
      />
      <!-- subject -->
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        name="subject"
        class="w-full input input-bordered"
      />
      <!-- email -->
      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        class="w-full input input-bordered"
        required
      />
      <!-- message -->
      <textarea
        class="w-full textarea textarea-bordered h-[250px]"
        id="message"
        name="message"
        placeholder="Message"
        required
      ></textarea>
      <div class="flex justify-center">
        <button class="btn btn-neutral btn-lg">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>
