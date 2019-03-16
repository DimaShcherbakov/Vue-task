<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Symbol</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in results">
        <td>{{ index + 1 }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.symbol }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'Table',
    props: ["results"],
    data: () => {
      return {

      }
    }
  }
</script>