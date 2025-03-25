// eslint-disable-next-line no-undef
module.exports = (plop) => {
	plop.setHelper("upperCase", (txt) => txt.toUpperCase());

	plop.setGenerator("component", {
		description: "Create a reusable component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?",
			},
			{
				type: "input",
				name: "description",
				message: "What does your component do?",
			},
		],
		actions: [
			{
				type: "add",
				path: "./components/{{pascalCase name}}/index.ts",
				template: "export * from './{{pascalCase name}}';\n",
			},
			{
				type: "add",
				path: "./components/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: ".plop/templates/Component.tsx.hbs",
			},
			{
				type: "add",
				path: "./components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
				templateFile: ".plop/templates/Component.stories.tsx.hbs",
			},
			{
				type: "add",
				path: "./components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
				templateFile: ".plop/templates/Component.test.tsx.hbs",
			},
			{
				type: "add",
				path: "./components/{{pascalCase name}}/{{pascalCase name}}.css",
				templateFile: ".plop/templates/Component.css.hbs",
			},
		],
	});
};
