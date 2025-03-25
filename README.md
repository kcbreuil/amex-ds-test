This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Task 1 Documentation

For our component library, we will be powering the components with storybook, nextjs, RTL and jest. NextJs comes bootstrapped with Jest support, so we don't need to worry about compilers.

## NextJs

Selected NextJS as our React framework, as it provides easy configuration with jest--mostly because I wouldn't need to configure another compiler. From reviewing the assignment, I could see we would be handling data fetching and their SSR and api routing seems to be a good fit. Plus it's very fresh in my mind as I have been working in this environment for the last 16 months.

## Storybook

I have selected storybook for our component library, as this can be a great format to share component documentation, examples, variants, and the like with developers and designers alike.

Run `yarn storybook` to spin up our storybook instance.

### Testing

Jest will run our suite of React Testing Library tests. This is my standard test runner for RTL, and as mentioned previously, Next comes bootstrapped with jest to process our tests.

## Plop

I have included a plop file that will our developers to easily create components on the fly. By running `yarn plop` in the CL, you will be asked to name your component and provide description, in which a base component directory, with test, style and story file. This can be extended to create addition plop templates, for recipes or page compositions.

## Prettier

I would have liked to intergrate prettier with ESLint, and there is some documentation in the Next docs on how to handle this.

## ESLint

I was able to add a boilerplate configuration for ESLint with Nextjs. This will help us control our code quality within both our test suites and component builds.

# Task 2

For this portion of the exercise, I created a modal for our component library. As time was limited, I used slots (children nodes) to display the different elements within a modal component. Ideally, we'd break out these elements as their own component, i.e ModalHeader, ModalFooter, etc. This allows for the most flexible composition of the component.

I was excited to reverse engineer this component, as we were building it against the test.

Assumming that the final two tests, would allow some sort of displaying of user data on the modal, I would mock the data call for the user information to the component for additional complexity and better UX.

To complete the work needed above, I'd handle this test at the page level, while composing the data fetching within the page and then test that the modal behaves properly once we recieve this data--so dismisses the modal


## Thank you

Thank you to the team for the opportunity to complete this assignment. I had a lot of fun, and look forward to going over it with you.
