mod utils;

use sha2::{Digest, Sha256};
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// :: ---

#[wasm_bindgen]
pub fn sha256(input: String, iterations: u32) -> String {
    let mut hasher = Sha256::new();

    hasher.update(input);
    let mut __result = hasher.finalize_reset();

    for _ in 1..iterations {
        hasher.update(&__result);
        __result = hasher.finalize_reset();
    }

    format!("{:x}", __result)
}
