# Self-Host Supabase Edge Functions Demo

Running the demo shows the error when a worker takes to much time.  
The worker has a timeout of 100 milliseconds.  
The hello-world worker is waiting for 1 second before returning a response.  

The error is:  
```
web_1  | main function started
web_1  | serving the request with /home/deno/functions/hello-world
web_1  | hello-world started
web_1  | Error: channel closed
web_1  |     at async UserWorker.fetch (ext:sb_user_workers/user_workers.js:54:21)
web_1  |     at async Server.<anonymous> (file:///home/deno/functions/main/index.ts:39:16)
web_1  |     at async Server.#respond (https://deno.land/std@0.131.0/http/server.ts:219:24)
web_1  | serving the request with /home/deno/functions/hello-world
web_1  | Error: channel closed
web_1  |     at async Function.create (ext:sb_user_workers/user_workers.js:80:21)
web_1  |     at async Server.<anonymous> (file:///home/deno/functions/main/index.ts:31:24)
web_1  |     at async Server.#respond (https://deno.land/std@0.131.0/http/server.ts:219:24)
```

The first request throws in `ext:sb_user_workers/user_workers.js:54:21`.   
Every subsequent request throws in `ext:sb_user_workers/user_workers.js:80:21`.  