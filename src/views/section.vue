<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-12">
      <div class="flex flex-col items-center justify-center">
        <div class="lg:py-24 text-center">
          <h2 class="text-3xl text-orange-600 font-extrabold sm:text-6xl">
            Trusted by over <span>{{ count }}+ </span> Customers
          </h2>
          <h2 class="mt-4 text-gray-600  mx-auto" style="font-size: 20px;">
            XprintXchange is unarguably extraordinary compared to other bills payment platforms in Nigeria.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.startCountUp();
  },
  methods: {
    startCountUp() {
      let currentCount = 0;
      const targetCount = 100;
      const duration = 2000; // duration of the count up in milliseconds
      const interval = 10; // update interval in milliseconds
      const increment = targetCount / (duration / interval);

      const countUp = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(countUp);
        }
        this.count = Math.round(currentCount);
      }, interval);
    },
  },
};
</script>

<style scoped></style>
