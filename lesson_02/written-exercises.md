1.  **What will be the order of execution between `setImmediate(callback)` and `setTimeout(callback, 0)`?**

    - It depends on the context, if they run on the main we can't predict which one comes first but if they were called in a callback of an I/O operation setImmediate comes always first
2. **Explain the difference between `process.nextTick` and `setImmediate`. ? What will be the execution order?**

    - `nextTick` run after current running operation finishes but `setImmediate` run in the check phase (after poll phase finishes)
    - `nextTick` runs first

3. **Name 10 core modules that Node provides by default.**
    - http
    - fs
    - path
    - net
    - url
    - querystring
    - stream
    - util
    - events
    - assert
