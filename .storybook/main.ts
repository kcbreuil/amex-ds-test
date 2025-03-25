import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	framework: "@storybook/nextjs",
};

export default config;
