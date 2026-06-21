<template>
  <footer>
    <div class="div">
      <ul>
        <li class="click">Github</li>
        <li class="click">x</li>
        <li class="click">Linked in</li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="css">
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 5rem;
  max-width: 1500px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

footer > div {
  width: 100%;
  display: flex;
  flex-direction: column;
}

footer > div > ul {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  list-style: none;
}

ul li {
  border-radius: 1rem;
  border: var(--global-border);
  color: var(--global-txt-cl);
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
