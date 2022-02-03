<script>
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <div
    class="background-pattern min-h-screen font-montserrat bg-cstm-very-light-grayish-blue"
  >
    <div class="flex flex-col items-center">
      <h1 class="mt-16 mb-10 text-3xl text-cstm-grayish-blue">Our Pricing</h1>
      <div
        class="flex justify-center items-center gap-6 text-cstm-light-grayish-blue"
      >
        <p>Annually</p>
        <!-- Toggle switch -->
        <div>
          <label for="toggle" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input type="checkbox" id="toggle" class="sr-only" />
              <!-- line -->
              <div class="block bg-linear-gradient w-14 h-8 rounded-full" />
              <!-- dot -->
              <div
                class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
              />
            </div>
          </label>
        </div>
        <p>Monthly</p>
      </div>
    </div>

    <div class="px-5 space-y-5">
      <div class="bg-white rounded-md p-5">
        <p>Basic</p>
        <p>&dollar;19.99 (m)</p>
        <p>&dollar;199.99 (y)</p>
        <p>500 GB Storage</p>
        <p>2 Users Allowed</p>
        <p>Send up to 3 GB</p>
        <button>Learn More</button>
      </div>
      <div class="bg-white rounded-md p-5">
        <p>Professional</p>
        <p>&dollar;24.99 (m)</p>
        <p>&dollar;249.99 (y)</p>
        <p>1 TB Storage</p>
        <p>5 Users Allowed</p>
        <p>Send up to 10 GB</p>
        <button>Learn More</button>
      </div>
      <div class="bg-white rounded-md p-5">
        <p>Master</p>
        <p>&dollar;39.99 (m)</p>
        <p>&dollar;399.99 (y)</p>
        <p>2 TB Storage</p>
        <p>10 Users Allowed</p>
        <p>Send up to 20 GB</p>
        <button>Learn More</button>
      </div>
    </div>
  </div>
</main>
