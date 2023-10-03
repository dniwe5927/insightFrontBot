<template>

<section class="cards-not">
<div class="container">

  <div class="cards-not__title">
    {{ $t('notlimitTitle') }}
  </div>
  <div class="cards-not__text">
    {{ $t('notlimitContext') }}
  </div>
  <router-link to="/" class="cards-not__btn btn btn-white">
    {{ $t('Take another survey') }}
  </router-link>
</div>
</section>

</template>

<style scoped lang="scss">
.cards {
	padding-bottom: 5rem;

	&-not {
		display: flex;
		align-items: center;
		text-align: center;
		color: #fff;
		position: relative;


		&::after {
			content: "";
      position: absolute;
      bottom: -15px;
      left: -12px;
      width: 100vw;
      height: 100vh;
			background: url(../assets/svg/Rhombus.svg) bottom left no-repeat;
			background-size: contain;
			pointer-events: none;
			z-index: 0;
		}


			img {
				width: 100%;
				display: block;
			}
		

		&__title {
			color: #ffffff;
      text-align: center;
      font: 700 32px/32px "Proxima Nova Bold", sans-serif;
      position: relative;
      margin-bottom: 8vh;
		}

		&__text {
			text-align: center;
      font: 400 24px/24px "Proxima Nova", sans-serif;
      position: relative;
      margin-bottom: 5vh;
		}

		&__btn {
			background: #ffffff;
      border-radius: 24px;
      width: 212px;
      height: 36px;
      position: relative;
      color: #007fff;
      text-align: center;
      font: 700 20px/20px "Proxima Nova", sans-serif;
      position: relative;
		}
	}
}
</style>