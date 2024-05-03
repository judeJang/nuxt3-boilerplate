import type { Meta, StoryObj, StoryFn } from '@storybook/vue3';
// import { fn } from '@storybook/test';

import appHeader from '@/components/home/appHeader.vue';

const meta = {
  title: 'home/topBanner',
  component: appHeader,
  tags: ['autodocs'],
  argTypes: {
    // data: {
    //   landingUrl: { control: 'text' },
    //   imgUrl: { control: 'text' },
    //   alt: { control: 'text' },
    //   backgroundColor: { control: 'text' },
    // },
  },
} satisfies Meta<typeof appHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopComponents: Story = {
  render: (args) => ({
    components: { appHeader },
    setup() {
      return { args };
    },
    template: '<app-header v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Button',
  },
};

// export default {
//   title: 'home/topBanner',
//   component: appHeader,
//   argType: {
//     landingUrl: { control: 'text' },
//     imgUrl: { control: 'text' },
//     alt: { control: 'text' },
//     backgroundColor: { control: 'text' },
//   },
//   tags: ['autodocs'],
// } satisfies Meta<typeof appHeader>;

// // default
// export const Basic: StoryFn<typeof Comp> = (args) => ({
//   component: { Comp },
//   setup() {
//     return { args };
//   },
//   template: `<comp v-bind="args"/>`,
// });

// Basic.args = {
//   imgUrl:
//     'https://s3.ap-northeast-2.amazonaws.com/mustit-upload/header_event_image/mobile/mo-top-banner-event-220801.png',
// };

// export const BackgroundColor: StoryFn<typeof Comp> = (args) => ({
//   component: { Comp },
//   setup() {
//     return { args };
//   },
//   template: `<comp v-bind="args"/>`,
// });
