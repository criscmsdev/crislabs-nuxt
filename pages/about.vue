<script>
export default defineComponent({
  async setup() {
    const [{ data: organization }, { data: repos }] = await Promise.all([
      useFetch(`https://api.github.com/orgs/nuxt`),
      useFetch(`https://api.github.com/orgs/nuxt/repos`)
    ])

    console.log('repos', repos)
    console.log('organization', organization)
    return {
      organization,
      repos
    }
  }
})
</script>

<template>
  <header>
    <h1>{{ organization.login }}</h1>
    <p>{{ organization.description }}</p>
  </header>
</template>
