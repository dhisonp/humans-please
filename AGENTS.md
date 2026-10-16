
## Code Quality

These are only relevant when writing and reviewing code.

- Working code is not enough; minimize complexity. Resist each new dependency or obscurity as it appears. Never defer cleanup.
- Prefer deep modules: small interfaces hiding substantial implementation. Optimize the interface for callers, not the implementer.
- Make invalid states unrepresentable. Parse untrusted input once into a typed value; never re-validate raw data downstream.
- Errors are typed and propagated, never swallowed. Fail as early as possible: static over runtime, runtime over silent. Cleanup paths must not fail.
- No hidden control flow, side effects, or resource acquisition. Make every dependency obvious.
- One obvious way to do a thing. Names must not need a comment to explain them.
- Comments state why and invariants, never what. Avoid over-documentation or commenting unless necessary. 
- Composition over inheritance. Model types around data, not object metaphors.
- Confine escape hatches (unsafe, FFI, raw SQL, `any` casts, reflection, lint suppressions) to the smallest area and document the invariant that makes each sound.
- No speculative generality. Keep public surface and data formats small and backward compatible.
- Test pyramid: many fast unit tests, fewer integration, targeted end-to-end. A misleading test is worse than none. Enforce format, lint, and audits mechanically.
- Improve code health, not perfection. Keep unrelated style changes in a separate change.
- Plausible-looking is not correct. Verify before claiming anything works; the human decides what ships.
- Bugs and latency users feel outrank theoretical defects and averages.

## Rules

- Commit with simple sentences, without Claude authorship and without conventional commit. 
