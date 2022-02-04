<script>
  let toggled = false
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
  <title>Pricing Component with Toggle</title>
</svelte:head>

<main
  class="background-pattern min-h-screen font-montserrat bg-cstm-very-light-grayish-blue"
>
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-col items-center mb-20">
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
              <input
                type="checkbox"
                bind:checked={toggled}
                id="toggle"
                class="sr-only"
              />
              <!-- line -->
              <div
                class="block bg-linear-gradient hover:brightness-125 w-14 h-8 rounded-full"
              />
              <!-- dot -->
              <div
                class="dot absolute right-1 top-1 bg-white w-6 h-6 rounded-full transition"
              />
            </div>
          </label>
        </div>
        <p>Monthly</p>
      </div>
    </div>

    <div
      class="px-5 space-y-5 md:space-y-0 pb-20 md:grid md:grid-cols-3 md:items-center"
    >
      <!-- Basic -->
      <div class="bg-white rounded-md p-5 text-center shadow-lg">
        <p class="text-cstm-grayish-blue mb-5">Basic</p>
        {#if toggled}
          <p
            class="text-cstm-dark-grayish-blue text-3xl flex justify-center items-center"
          >
            &dollar;<span class="text-6xl ">199.99</span>
          </p>
        {:else}
          <p
            class="text-cstm-dark-grayish-blue text-3xl flex justify-center items-center"
          >
            &dollar;<span class="text-6xl">19.99</span>
          </p>
        {/if}
        <div class="text-cstm-grayish-blue divide-y-[1px] border-y-[1px] my-8">
          <p class="py-3">500 GB Storage</p>
          <p class="py-3">2 Users Allowed</p>
          <p class="py-3">Send up to 3 GB</p>
        </div>
        <button
          class="bg-linear-gradient uppercase text-white w-full py-3 rounded-md text-sm tracking-widest hover:bg-none hover:text-cstm-grayish-blue hover:outline hover:outline-1"
          >Learn More</button
        >
      </div>

      <!-- Professional -->
      <div
        class="bg-white md:bg-linear-gradient rounded-md px-5 py-10 text-center shadow-lg"
      >
        <p class="text-cstm-grayish-blue md:text-white mb-5">Professional</p>
        {#if toggled}
          <p
            class="text-cstm-dark-grayish-blue md:text-white text-3xl flex justify-center items-center"
          >
            &dollar;<span class="text-6xl">249.99</span>
          </p>
        {:else}
          <p
            class="text-cstm-dark-grayish-blue md:text-white text-3xl flex justify-center items-center"
          >
            &dollar;<span class="text-6xl ">24.99</span>
          </p>
        {/if}
        <div
          class="text-cstm-grayish-blue divide-y-[1px] border-y-[1px] my-8 md:text-white"
        >
          <p class="py-3">1 TB Storage</p>
          <p class="py-3">5 Users Allowed</p>
          <p class="py-3">Send up to 10 GB</p>
        </div>
        <button
          class="bg-linear-gradient md:bg-none md:bg-white md:hover:bg-transparent uppercase text-white md:hover:text-white md:text-cstm-grayish-blue w-full py-3 rounded-md text-sm tracking-widest hover:bg-none hover:text-cstm-grayish-blue hover:outline hover:outline-1"
          >Learn More</button
        >
      </div>

      <!-- Master -->
      <div class="bg-white rounded-md p-5 text-center shadow-lg">
        <p class="text-cstm-grayish-blue mb-5">Master</p>
        {#if toggled}
          <p
            class="text-cstm-dark-grayish-blue text-3xl flex justify-center items-center"
          >
            &dollar;<span class="text-6xl ">399.99</span>
          </p>
        {:else}
          <p
            class="text-cstm-dark-grayish-blue text-3xl flex justify-center items-center"
          >
            &dollar;<span class="text-6xl ">39.99</span>
          </p>
        {/if}
        <div class="text-cstm-grayish-blue divide-y-[1px] border-y-[1px] my-8">
          <p class="py-3">2 TB Storage</p>
          <p class="py-3">10 Users Allowed</p>
          <p class="py-3">Send up to 20 GB</p>
        </div>
        <button
          class="bg-linear-gradient uppercase text-white w-full py-3 rounded-md text-sm tracking-widest hover:bg-none hover:text-cstm-grayish-blue hover:outline hover:outline-1"
          >Learn More</button
        >
      </div>
    </div>
  </div>
</main>
