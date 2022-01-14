#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

#[wasm_bindgen_test]
fn pass() {
    let initial_seed = "abc";
    let result = wasm::sha256(initial_seed.to_string(), 200_000);

    assert_eq!(
        result,
        "65182256b0af584479e6fbb5809f07a7754eb17ab3ed592acdb1f35e03e311e8".to_string()
    );
}
