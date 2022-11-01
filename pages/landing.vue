<template>
  <div class="landing">
    <LandingSectionsMenu />
    <LandingSectionsPromise :checkoutLink="checkoutLink" />
    <LandingSectionsPlausability :checkoutLink="checkoutLink" />
    <LandingSectionsProgression />
    <LandingSectionsPersonal :checkoutLink="checkoutLink" />
    <LandingSectionsSocialProof />
    <LandingSectionsDeliverables :checkoutLink="checkoutLink" />
    <LandingSectionsWarranty :checkoutLink="checkoutLink" />
    <LandingSectionsFaq />
    <LandingSectionsFooter />
  </div>
</template>

<script scoped>
export default {
  layout: "DefaultLayout",

  data() {
    return {
      checkoutLink: "https://pay.hotmart.com/T76214790K",
    };
  },
};
</script>

<style>
section {
  padding-top: 25px;
  padding-bottom: 25px;
}

.btn-primary {
  filter: drop-shadow(0px 0px 5px #00df7b);
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 15px;
  margin-top: 45px;
  padding: 20px 0;
  text-transform: uppercase;
}

.btn:hover,
.btn:focus {
  text-transform: uppercase;
  letter-spacing: 150%;
  color: #fff;
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
