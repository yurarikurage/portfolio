<script setup lang="ts">
const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail({
  endpoint: "works",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data)
</script>

<template>
  <template v-if="data">
    <h1>
      {{ data.title }}
    </h1>
    <img
      :src="data.eyecatch?.url"
      :width="data.eyecatch?.width"
      :height="data.eyecatch?.height"
      alt=""
    />
    <div>
      <div>
        {{ data.category?.name }}
      </div>
      <div>
        {{ data.publishedAt ?? data.createdAt }}
      </div>
    </div>
    <div v-html="data.content"></div>
  </template>
</template>