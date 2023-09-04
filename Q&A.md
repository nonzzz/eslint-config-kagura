# Q & A

> Why i can't using it at node14?
- You need install `eslint-plugin-import` and using nolyfill. Because `package-spec` minium version requirements `node16`.

```bash
$ npm install eslint-plugin-import
$ npx nolyfill install 
# Then follow nolyfill tips and run next step.

```