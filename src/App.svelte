<script>

</script>

<style>
  :global(body) {
    padding: 0;
  }
  main {
    background-color: hsla(179, 41%, 58%, 0.5);
    width: 100%;
    height: 100%;
  }
  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: absolute;
  }
  .container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 0.1fr 0.1fr 0.56fr 0.1fr 0.1fr;
    grid-template-rows: 0.1fr 0.1fr 0.5fr 0.1fr 0.1fr;
    z-index: 2;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .profile {
    max-width: 100%;
    max-height: 100%;
  }
  .text {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    justify-self: center;
    font-weight: bold;
    font-style: italic;
    margin: 0;
  }
  .heading {
    grid-row: 2;
    grid-column: 3;
    align-self: end;
  }
  .left {
    grid-row: 3;
    grid-column: 2;
    align-self: center;
    justify-self: end;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  .right {
    grid-row: 3;
    grid-column: 4;
    align-self: center;
    justify-self: start;
    writing-mode: vertical-lr;
  }
  .bottom {
    grid-row: 4/5;
    grid-column: 3;
    align-self: start;
  }
  a {
    color: inherit;
    text-decoration: none;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-color: black;
    text-decoration-skip: initial;
  }
  picture {
    grid-row: 3;
    grid-column: 3;
    justify-self: center;
    max-width: 100%;
    max-height: 100%;
    align-self: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 500px) {
    .container {
      grid-template-columns: 0.2fr 0.3fr auto 0.3fr 0.2fr;
      grid-template-rows: 0.2fr 0.3fr auto 0.3fr 0.2fr;
    }
    .heading {
      padding-bottom: 1rem;
    }
    .bottom {
      padding-top: 1rem;
    }
    .left {
      padding-right: 1em;
    }
    .right {
      padding-left: 1em;
    }
    .text {
      font-size: 2rem;
    }
  }
</style>

<main>
  <img class="overlay" src="vector.svg" alt="" />
  <section class="container">
    <h1 class="text heading">KARA STUBBS</h1>
    <p class="text left">SOFTWARE ENGINEER</p>
    <p class="text right">REACT, JS, GQL & TS</p>
    <p class="text bottom">
      <a href="https://twitter.com/kiraarghy" rel="noreferrer" target="_blank">
        TWITTER,
      </a>
      <a href="https://github.com/kiraarghy" rel="noreferrer" target="_blank">
        GITHUB
      </a>
    </p>
    <picture>
      <source class="profile" srcset="profile.webp" type="image/webp" />
      <img
        class="profile"
        src="profile.png"
        alt="Image of Kara, she is a white woman with white blonde hair, brown
        eyes, wearing a leather jacket." />
    </picture>
  </section>
</main>
