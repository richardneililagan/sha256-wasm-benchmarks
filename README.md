# sha256-wasm-benchmarks

A sample webapp that compares `SHA-256` hashing performance across 
vanilla JS, a WebAssembly (WASM) module, and the native `SubtleCrypto` APIs.

### [Live demo][demo] 🚀

---

## Usage

If you want to build and run this on your own machine:

### Prerequisites

Ensure the following are available in your environment:

- [Node JS][nodejs] (and [Yarn][yarn])
- [Rust][rust] 
- [`wasm-pack`][wasm-pack]

### Compiling WASM module

> The WebAssembly source files are located in [`/wasm`](/wasm).

To compile the WASM binary, you can either run this command from the repository root directory:

```shell
make build-wasm
```

or run the following from `/wasm`:

```shell
wasm-pack build --target web --release
```

Either way, the compiled assets and generated JS glue codefiles are going to be made available in `/wasm/pkg`.

### Running a development web server

The following command (run from repository root) takes care of all the steps for you (including building the WASM module as described above):

```shell
make serve
```

This will build the WASM module, link the necessary packages in your environment, and make the webapp available on [`localhost:3000`](http://localhost:3000).

### Building the webapp for production

Likewise, the following builds the webapp for a production deployment:

```shell
make build
```

This makes the webapp assets available from `/webapp/dist`.
You can deploy this directory using a static or SPA website configuration.

---

[Website][website] &middot; [Twitter][twitter] &middot; [Mastodon][mastodon]

[demo]: https://wasm-sample.fueledby.cloud/
[nodejs]: https://nodejs.org
[yarn]: https://classic.yarnpkg.com/lang/en/docs/install
[rust]: https://www.rust-lang.org/tools/install
[wasm-pack]: https://rustwasm.github.io/wasm-pack/installer/

[website]: https://richardneililagan.com
[twitter]: https://twitter.com/techlifemusic
[mastodon]: https://mastodon.social/@techlifemusic

