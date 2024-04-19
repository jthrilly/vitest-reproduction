Vitest doesn't have access to the internal version of React used by NextJS, which causes tests to fail when they access Next or React specific methods.

In this case, React.cache is not present in the installed React version, but _is_ present in the internal React canary. No packages were changed from the vanilla `create-next-app`.

```
npm run test
```

The commented out resolve alias in `vitest.config.ts` will allow the test to pass by pointing to the internal version of React used by NextJS. Updating the pacakge React version to the latest canary also resolves the issue, but this creates a maintainability issue.
