# Storybook

This repo showcases how to set up Storybook in a Next.js project.

## Getting Started

- Clone the repository
- Install dependencies with `npm install`
- Run Storybook with `npm run storybook`
- Open [http://localhost:6006](http://localhost:6006) with your browser to see the Storybook interface and explore the components.
- Edit the stories in the `src/stories` directory to add your own components and variations

> Tip: You can also run `npm run dev` to start the Next.js development server at `http://localhost:3000`

## Configure Storybook in a new Next.js project

- Before installing storybook, update the `postcss.config.mjs` with object syntax

  ```ts
  const config = {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  }

  export default config
  ```

- Install storybook and follow the prompts:

```bash
npm create storybook@latest
```

- Import TailwindCSS in `.storybook/preview.ts`

```ts
import '../src/app/globals.css'
```

- Run storybook with `npm run storybook`
- Delete all boilerplate files inside `/stories`

```bash
rm -f ./src/stories/*
```

- Add your own stories inside `/stories`

## Resources

- [Storybook Documentation](https://storybook.js.org/)
- [Next.js Documentation](https://nextjs.org/)

## License

- [MIT](LICENSE.md)
