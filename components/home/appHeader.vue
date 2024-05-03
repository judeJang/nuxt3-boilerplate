<template>
  <!-- 상단 배너 -->
  <aside class="header-banner header_event" :style="backgroundColor">
    <a :href="data.landingUrl">
      <img :src="data.imgUrl" :alt="data.alt" class="banner" />
    </a>
    <button
      type="button"
      class="close_btn"
      aria-label="상단 배너 닫기"
      @click.stop="bannerClose()"
    ></button>
  </aside>
  <header></header>
</template>

<script lang="ts" setup>
const data = ref({
  landingUrl: 'https://www.google.com',
  imgUrl:
    'https://s3.ap-northeast-2.amazonaws.com/mustit-upload/header_event_image/mobile/mo-top-banner-event-220801.png',
  alt: '상단띠 배너',
  backgroundColor: 'rgb(69, 38, 138)',
});

const headerBannerShow = useCookie('headerBannerShow');

const emit = defineEmits<{
  'banner-close': [state: boolean];
}>();
const bannerClose = () => {
  headerBannerShow.value = 'hidden';
  emit('banner-close', false);
};
const backgroundColor = computed(
  () => `background-color:${data.value.backgroundColor}`,
);
</script>
