<template>
    <form
      class="flex flex-col text-gray-300 w-96 bg-slate-800"
      action="/submit"
      method="post"
    >
      <label for="name">Name: </label>
      <input
        class="p-4 text-black focus:outline-none"
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
      />
  
      <label for="email">Email:</label>
      <input
        class="p-4 text-black focus:outline-none"
        type="email"
        id="email"
        name="email"
        placeholder="Email:"
        required
      />
  
      <label for="message">Message:</label>
      <textarea
        class="p-4 text-black focus:outline-none"
        id="message"
        name="message"
        rows="4"
        placeholder="Your message"
        required
      ></textarea>
  
      <button
        class="p-5 text-3xl font-bold rounded-b-xl hover:bg-slate-900 active:bg-slate-950"
        type="submit"
      >
        Submit
      </button>
    </form>
  </template>
  
  <script setup>
  </script>