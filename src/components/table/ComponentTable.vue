<template>
  <div>
    <div class="table">
      <!-- {{data}} -->
      <table>
        <template v-if="data.length">
          <tr>
            <th v-for="(value, key) in data[0]" :key="`th-${key}`">
              {{ transformTH(key) }}
            </th>
          </tr>
          <tr v-for="(val, i) in data" :key="`tr-${i}`">
            <td v-for="(value, key) in val" :key="`td-${key}`">
              {{value}}
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script src="./table.js" />
<style src="./table.scss" lang="scss" scoped/>