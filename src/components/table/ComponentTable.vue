<template>
  <div>
    <div class="table">
      <!-- {{data}} -->
      <table>
        <template v-if="data.length">
          <tr>
            <th v-for="val in headers" :key="`th-${val}`">
              {{ $t(`components.table.header.${val}`) }}
            </th>
          </tr>
          <tr v-for="(val, i) in data" :key="`tr-${i}`">
            <template v-if="val">
              <td
                v-for="(value, key) in val"
                :key="`td-${key}`"
                v-show="headers.includes(key)"
              >
                <slot :name="key" v-bind="val">
                  {{value}}
                </slot>
              </td>
            </template>
            <template v-else>
              <td
                v-for="val in headers"
                :key="`td-${val}`"
              >
                N/A
              </td>
            </template>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script src="./table.js" />
<style src="./table.scss" lang="scss" scoped/>