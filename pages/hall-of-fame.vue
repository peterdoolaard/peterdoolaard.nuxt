<template>
  <main class="page-main">
<!--    <video-->
<!--        class="video-background"-->
<!--        src="/video/fame.mp4"-->
<!--        autoplay-->
<!--        muted-->
<!--        loop-->
<!--    />-->
<!--    <div class="cards">-->
<!--      <div class="card-of-fame">-->
<!--        <img src="/images/hof-html.png"-->
<!--            alt="Badge LinkedIn-vaardigheidsevaluatie met tekst: Evaluatie van HTML. U behoort tot de beste 15% van de 3,4 miljoen personen die deze evaluatie hebben gedaan." />-->
<!--      </div>-->
<!--      <div class="card-of-fame">-->
<!--        <img src="/images/hof-css.png"-->
<!--            alt="Badge LinkedIn-vaardigheidsevaluatie met tekst: Evaluatie van CSS. U behoort tot de beste 5% van de 1,8 miljoen personen die deze evaluatie hebben gedaan." />-->
<!--      </div>-->
<!--      <div class="card-of-fame">-->
<!--        <img src="/images/hof-fe.png"-->
<!--            alt="Badge LinkedIn-vaardigheidsevaluatie met tekst: Evaluatie van Front-endontwikkeling. U behoort tot de beste 5% van de 940,9 duizend personen die deze evaluatie hebben gedaan." />-->
<!--      </div>-->
<!--    </div>-->
  </main>
</template>

<style lang="scss" scoped>

.video-background {
  position: fixed;
  left: 0;
  top: 77px;
  inline-size: 100vw;
  block-size: 100vh;
  object-fit: cover;
  opacity: 0.7;
}

.app-page-heading {
  position: relative;
}

.cards {
  align-items: flex-end;
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
  position: relative;
}

.card-of-fame {
  flex: 1 1 8rem;

  @media (min-width: $breakpoint-tablet-landscape) {
    flex: 1 1 8rem;
  }

  .podium {
    align-items: center;
    background: floralwhite;
    box-shadow: 0 2px 6px;
    inline-size: 100%;
    display: flex;
    justify-content: center;

    &:before {
      color: black;
      font-size: 2rem;
      font-weight: normal;
      font-variation-settings: 'wght' 400;
    }
  }
}

.card-of-fame:nth-child(1) .podium {
  block-size: 80px;

  &:before {
    content: '2';
  }
}

.card-of-fame:nth-child(2) .podium {
  block-size: 120px;

  &:before {
    content: '1';
  }
}

.card-of-fame:nth-child(3) .podium {
  block-size: 40px;

  &:before {
    content: '3';
  }
}

</style>
