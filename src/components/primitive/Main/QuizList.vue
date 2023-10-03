<template>
    <div class="quizList">
      <div class="quizList-card orange">
        <div class="quizList-card-content">
          <div class="quizList-card-content-title">Ваш первый квиз</div>
          <div class="quizList-card-content-text">{{ $t('Complete the survey to discover more') }}</div>
          <div class="quizList-card-content-points">{{ +25000 + " " +$t('points') }}</div>
          <div class="quizList-card-content-btn" :class="{'uz': this.$i18n.locale == 'uz'}">{{ $t('Take the Survey') }}</div>
        </div>
      </div>
      <div class="quizList-card">
        <div class="quizList-card-content">
        <div class="quizList-card-content-title">Ваш первый квиз</div>
          <div class="quizList-card-content-text">{{ $t('Complete the survey to discover more') }}</div>
          <div class="quizList-card-content-points">{{ +25000 + " " +$t('points') }}</div>
          <div class="quizList-card-content-btn" :class="{'uz': this.$i18n.locale == 'uz'}">{{ $t('Take the Survey') }}</div>
        </div>
      </div>
      <!-- <div class="empty">
          <div class="empty-text">
            {{ $t('There are currently no polls')}}
          </div>
          <div class="empty-pic"/>
      </div> -->
      
    </div>

      


</template>
<script>

</script>
<style scoped>

</style>