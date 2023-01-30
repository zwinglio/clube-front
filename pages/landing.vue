<template>
  <div class="landing">
    <LandingSectionsMenu />
    <LandingSectionsPromise :checkoutLink="checkoutLink" />
    <LandingSectionsPlausability :checkoutLink="checkoutLink" />
    <LandingSectionsProgression />
    <LandingSectionsPersonal :checkoutLink="checkoutLink" />
    <LandingSectionsSocialProof />
    <LandingSectionsDeliverables :checkoutLink="checkoutLink" :price="price" />
    <LandingSectionsWarranty :checkoutLink="checkoutLink" />
    <LandingSectionsFaq />''
    <LandingSectionsFooter />
  </div>
</template>

<script scoped>
export default {
  layout: "DefaultLayout",

  data() {
    return {
      checkoutLink:
        "https://pay.hotmart.com/T76214790K?off=m4v7p2uk&checkoutMode=10&split=12",
      price: {
        indepedent: "R$ 14,92",
        combo: "R$ 24,92",
      },
    };
  },
};
</script>

<style>
section {
  padding-top: 25px;
  padding-bottom: 25px;
}

hr {
  border-top: 2px solid var(--primary-color);
  width: 150px;
}

h1 {
  font-size: 90px;
  line-height: 93.5%;
}

h2 {
  font-size: 64px;
  line-height: 93.5%;
}

p {
  margin-top: 35px;
}
</style>
