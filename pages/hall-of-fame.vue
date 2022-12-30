<template>
  <main>
    <h2 class="app-page-heading">Hall of fame</h2>
    <div class="cards">
      <div class="card-of-fame">
        <NuxtImg src="/images/hof-html.png" />
        <div class="podium" />
      </div>
      <div class="card-of-fame">
        <NuxtImg src="/images/hof-css.png" />
        <div class="podium" />
      </div>
      <div class="card-of-fame">
        <NuxtImg src="/images/hof-fe.png" />
        <div class="podium" />
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>

.cards {
  align-items: flex-end;
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
}

.card-of-fame {
  inline-size: 240px;

  img {
    box-shadow: 0 10px 10px -5px;
    margin-block-end: 5px;
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
