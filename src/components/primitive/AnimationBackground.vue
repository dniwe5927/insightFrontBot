<template>
  <div class="animated-background">
    <html>
      <head></head>
      <body></body>
    </html>
  </div>
</template>

<style scoped lang="scss">
@mixin dots($count) {
  $text-shadow: ();
  @for $i from 0 through $count {
    $text-shadow: $text-shadow,
                 (-.5+(random()) * 2) + em
                 (-.5+(random()) * 3) + em
                 7px
                 #00B4D8;
  }
  text-shadow: $text-shadow;
}

html {
  font: 5vmin/1.3 Serif;
  overflow: hidden;
  background: #007FFF;
}

body, head {
  display: block;
  font-size: 52px;
  color: transparent;
}

head::before, head::after,
body::before, body::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: '.';
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}


body::before {
  @include dots(40);
  animation-duration: 4s;
  animation-delay: -27s;
}

body::after {
  @include dots(40);
  animation-duration: 3s;
  animation-delay: -32s;
}

head::before {
  @include dots(40);
  animation-duration: 2s;
  animation-delay: -23s;
}

head::after {
  @include dots(40);
  animation-duration: 1s;
  animation-delay: -19s;
}


@keyframes move {
  from {
    transform: rotate(0deg) scale(70) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(70) translateX(20px);
  }
}
</style>