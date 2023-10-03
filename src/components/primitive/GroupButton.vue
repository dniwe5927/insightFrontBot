<template>
    <div class="main-head">
        <div class="main-head__wrap">
          <div @click="toggleShow" class="main-head-button">
            <div class="main-head-button-bg">
              <img :src="getLanguageIconSrc">
            </div>
          </div>
          <div class="main-head-button">
            <div class="main-head-button-bg">
              <div class="main-head-button-bg-prof">
                <div class="main-head-button-bg-prof-box">
                  <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"/>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="main-head-button">
            <div class="main-head-button-bg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5355 4.95407L19.0441 3.46271C18.4271 2.84627 17.4234 2.84526 16.8065 3.46271L15.6706 4.60033L19.3996 8.32932L20.5355 7.1917C21.1524 6.57474 21.1524 5.57103 20.5355 4.95407Z"
                  fill="white"
                />
                <path
                  d="M14.1786 6.0921L14.9246 5.34609L18.6534 9.07491L17.9074 9.82093L14.1786 6.0921Z"
                  fill="white"
                />
                <path
                  d="M5.01875 15.2521L13.4332 6.83767L17.1622 10.5667L8.74771 18.9812L7.62911 17.8627C7.42362 17.6567 7.42362 17.3225 7.62911 17.1165C7.83509 16.9105 7.83509 16.5768 7.62911 16.3708C7.42313 16.1648 7.08939 16.1648 6.88341 16.3708C6.67792 16.5763 6.34369 16.5773 6.13718 16.3708L5.01875 15.2521Z"
                  fill="white"
                />
                <path
                  d="M6.4353 17.5649C6.45358 17.9441 6.59441 18.3194 6.8834 18.6084L7.85955 19.5844L3.69409 20.9727C3.63949 20.9912 3.58286 21 3.52724 21C3.38974 21 3.25481 20.9459 3.15437 20.8455C3.01325 20.7044 2.96382 20.4953 3.02718 20.3058L4.4155 16.1403L5.39147 17.1165C5.6806 17.4056 6.05628 17.5467 6.4353 17.5649Z"
                  fill="white"
                />
              </svg>
            </div>
          </div> -->

        </div>
      </div>
</template>
<script>
export default {

  computed: {
    getLanguageIconSrc() {
      return `src/assets/svg/${this.$i18n.locale === 'ru' ? 'RU.svg' : 'UZ.svg'}`;
    }
  },
  methods: {
    toggleShow() {
      this.$i18n.locale = (this.$i18n.locale === 'uz' ? 'ru' : 'uz')
      // let authData = Telegram.WebApp.initData || "";
      
      // let requestData = {
      //       _auth: authData,
      //       language: this.$i18n.locale,
      //     };
      // this.axios.post(config.BACKEND_URL + `/change-lang`, requestData);
    },

  }
}
</script>
