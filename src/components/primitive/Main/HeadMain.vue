<template>
    <section class="main">
    <div class="container">
      <div class="main-head">
        <div class="main-head__wrap">
          <div class="main-head-button">
            <div class="main-head-button-bg">
              <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.935 14.0804L6.585 17.7932V17.7883H10.715L8.545 13.6176C9.5 13.1596 10.7 12.0812 10.7 10.0476C10.7 7.83668 9.19 6 6.39 6H0V17.7932H3.625V14.0804H4.935ZM5.83 9.11202C6.44 9.11202 7.015 9.39762 7.015 10.0328H7.02C7.02 10.6877 6.445 10.9684 5.835 10.9684H3.625V9.11202H5.83Z"
                fill="white"
              />
              <path
                d="M12.17 6V12.943C12.17 15.8629 14.055 18 18.095 18C22.135 18 24 15.8629 24 12.9282V6H20.32V12.8248C20.32 13.9573 19.585 14.8584 18.095 14.8584C16.605 14.8584 15.85 13.9573 15.85 12.8248V6H12.17Z"
                fill="white"
              />
            </svg>
            </div>
           
          </div>
          <div class="main-head-button">
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
          </div>
        </div>
        
      </div>
      <div class="main-profile-info">
        <div class="prof-pic">
            <div class="bg-prof-pic">
            <div class="place-holder">
              <img
              class="unsplash-if-9-tk-5-uy-ki"
              src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
              />
            </div>
          </div>
        </div>
        <div class="name">Name Surname</div>
          <div class="count-ball">250 000</div>
          <div class="balls">баллов</div>          
      </div>
      
    </div>
  </section>
</template>
<script>
export default {
  components: {
  },
data: function () {
    return {
      balance: 0,
      id: 0,
      name: "John Doe",
      quizes: [],
      quizes2: [],
      withdrawName: '',
      showPassword: false,
      password: null,
    }
  }}
</script>
<style scoped>

</style>