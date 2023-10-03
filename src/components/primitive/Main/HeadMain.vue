<template>
    <div class="container">
      
      <div class="main-profile-info">
        <div class="prof-pic">
            <div class="bg-prof-pic">
            <div class="place-holder">
              <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"/>
            </div>
          </div>
        </div>
        <div class="name">{{ this.name }}</div>
          <div class="count-ball">{{ this.balance }}</div>
          <div class="balls">{{ $t('points') }}</div>          
      </div>
    </div>
</template>
<script>

export default {
  components:{

  },
  data: function () {
    return {
      balance: 0,
      name: "John Smith",
    }
  }
}
</script>