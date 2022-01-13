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
pub fn sha256(input: String) -> String {
    let mut hasher = Sha256::new();
    hasher.update(&input);

    format!("{:x}", hasher.finalize())
}
