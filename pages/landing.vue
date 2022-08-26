<template>
  <div class="landing">
    <LandingSectionsPromise />
    <LandingSectionsPlausability />
    <LandingSectionsProgression />
    <LandingSectionsPersonal />
    <LandingSectionsSocialProof />
    <LandingSectionsDeliverables />
    <LandingSectionsWarranty />
    <LandingSectionsFaq />
    <LandingSectionsFooter />
  </div>
</template>

<script>
export default {
  layout: "DefaultLayout",
};
</script>

<style>
section {
  padding-top: 25px;
  padding-bottom: 25px;
}

.btn-primary {
  filter: drop-shadow(0px 0px 12px #00df7b);
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 15px;
}
</style>
