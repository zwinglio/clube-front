<template>
  <div class="landing">
    <LandingSectionsMenu />
    <LandingSectionsPromise :checkout-link="checkoutLink" />
    <LandingSectionsPlausability :checkout-link="checkoutLink" />
    <LandingSectionsProgression />
    <LandingSectionsPersonal :checkout-link="checkoutLink" />
    <LandingSectionsSocialProof />
    <LandingSectionsDeliverables :checkout-link="checkoutLink" :price="price" />
    <LandingSectionsWarranty :checkout-link="checkoutLink" />
    <LandingSectionsFaq />
    <LandingSectionsFooter />
  </div>
</template>

<script scoped>
export default {
  layout: "DefaultLayout",

  data () {
    return {
      checkoutLink:
        "https://pay.hotmart.com/T76214790K?off=6l7qeh01&checkoutMode=10&split=12",
      price: {
        indepedent: "R$ 19,90",
        combo: "R$ 29,90"
      }
    }
  }
}
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
