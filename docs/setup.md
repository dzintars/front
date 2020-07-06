# Setup

<!-- Delete `.vscode/pnp*` directory.
Delete all `*yarn*` files and directories.
Execute `yarn set version berry` and check the `yarn --version`. Should be now at least 2.0.0-rc.36.
Execute `yarn install`. It will install all dependencies. -->

Copy certificates to be accessible by user:

```sh
mkdir -p ~/.tls/oswee.com/
sudo cp /etc/letsencrypt/live/oswee.com/fullchain.pem ~/.tls/oswee.com
sudo cp /etc/letsencrypt/live/oswee.com/privkey.pem ~/.tls/oswee.com
sudo chown -R dzintars:dzintars ~/.tls
```

Execute `yarn start`

Webpack Config TypeScript support

[Documentation](https://webpack.js.org/configuration/configuration-languages/#typescript)

PnP
https://next.yarnpkg.com/advanced/pnpify#vscode-support

https://next.yarnpkg.com/advanced/editor-sdks#vscode

## Somewhat working example

By following these steps i got project running after fresh Fedora install. Mby i forgot to list some little tweaks i tried before. I will try to repeat this setup later.

1. Clone repository

2. Switch the branch `git checkout develop`

3. Clear the cache `yarn cache clean --all`. Because of some changes in Yarn, there can be errors when trying to install dependencies. Fsevents, resolve and Typescript. Error example below.

   ```sh
   ➤ YN0013: │ fsevents@patch:fsevents@npm%3A1.2.11#builtin<compat/fsevents>::version=1.2.11&hash=77dfe6 can't be found in the cache and will be fetched from the disk
   ➤ YN0018: │ fsevents@patch:fsevents@npm%3A1.2.11#builtin<compat/fsevents>::version=1.2.11&hash=77dfe6: The remote archive doesn't match the expected checksum
   ➤ YN0013: │ resolve@patch:resolve@npm%3A1.15.1#builtin<compat/resolve>::version=1.15.1&hash=8fccd0 can't be found in the cache and will be fetched from the disk
   ➤ YN0018: │ resolve@patch:resolve@npm%3A1.15.1#builtin<compat/resolve>::version=1.15.1&hash=8fccd0: The remote archive doesn't match the expected checksum
   ➤ YN0013: │ typescript@patch:typescript@npm%3A3.8.2#builtin<compat/typescript>::version=3.8.2&hash=273569 can't be found in the cache and will be fetched from the disk
   ➤ YN0018: │ typescript@patch:typescript@npm%3A3.8.2#builtin<compat/typescript>::version=3.8.2&hash=273569: The remote archive doesn't match the expected checksum
   ```

   https://github.com/yarnpkg/berry/issues/1142

4. Set the yarn version to the bleeding edge `yarn set version from sources`

5. Install dependencies `yarn install`

Enable PnP for VS Code `yarn dlx @yarnpkg/pnpify --sdk vscode`. When popup will show up, press `Allow`.
