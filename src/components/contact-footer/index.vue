<template>
  <footer>
    <div>
      Desenvolvido por
      <a
        href="https://www.linkedin.com/in/lucas-emn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lucas Nóbrega
      </a>
    </div>

    <div class="links">
      <a
        class="btn btn-outline-secondary"
        href="https://www.linkedin.com/in/lucas-emn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon name="bi-linkedin" />
      </a>

      <a
        class="btn btn-outline-secondary"
        href="https://www.linkedin.com/in/lucas-emn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon name="bi-github" />
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineOptions({
  name: "ContactFooter",
});
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.btn {
  border: none;
}

a {
  text-decoration: none;
}

.links {
  display: flex;
  gap: 0.2rem;
}
</style>
