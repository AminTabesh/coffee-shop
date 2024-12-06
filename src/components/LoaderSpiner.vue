<template>
    <div class="flex justify-center items-center w-full h-full">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoaderSpinner",
  };
  </script>
  
  <style scoped>
  .spinner {
    border-top: 4px solid #4f2c19; /* The color of the spinner */
    border-right: 4px solid transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  