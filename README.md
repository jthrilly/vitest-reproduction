Vitest doesn't have access to the internal version of React used by NextJS, which causes tests to fail.

In this case, React.cache is not present in the installed React version.

```
npm run test
```
