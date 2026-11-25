window.englishLessons = {
  "0-0": [
    "A function centralizes validation. strip removes surrounding whitespace, and ValueError signals invalid input.",
    "Create a task list, add a valid title, then test blank and duplicate titles.",
    "Reject duplicate titles while preserving the original list.",
    "Why validate before appending?"
  ],
  "0-1": [
    "Arrays keep items in order. Set membership avoids scanning every item on typical implementations.",
    "Run the example, try an existing and a missing ID, then compare lookup on a larger dataset.",
    "Report results for 1,000 and 10,000 elements.",
    "When is binary search valid?"
  ],
  "0-2": [
    "Threads can share process memory. A lock guards the shared counter, and join waits for each worker.",
    "Run two workers, increase to four, and verify the total over repeated runs.",
    "Draw what is shared and predict the final counter.",
    "Which memory belongs to individual threads?"
  ],
  "0-3": [
    "Git stages changes separately from the working tree. Use diff to inspect both before committing.",
    "Initialize an empty folder, stage the sample file, then edit it without staging again.",
    "Compare git diff and git diff --cached.",
    "Which version of the file would a commit include?"
  ],
  "0-4": [
    "Sets remove duplicates, predicates test conditions, and invariants describe what holds as an algorithm runs.",
    "Count unique topics, test a blank item, and write a binary-search invariant.",
    "Explain the invariant and when the loop terminates.",
    "What is the role of the base case in induction?"
  ],
  "0-5": [
    "Binary encodes a number with powers of two. CPU caches favor nearby memory accesses.",
    "Convert 13 and 42 both ways, draw a stack frame, and compare sequential and random access.",
    "Describe where stack, heap and persistent data live.",
    "Why can sequential access benefit from cache locality?"
  ],
  "1-0": [
    "DNS resolves host names. IP routes packets, and TCP provides a reliable byte stream.",
    "Resolve example.com, identify a local service port and draw the client-to-server path.",
    "Compare the addresses returned for example.org.",
    "Can DNS succeed while the HTTP request fails?"
  ],
  "1-1": [
    "An HTTP response includes a status, headers and a body. TLS encrypts a connection when HTTPS is configured.",
    "Run the local server, open it in your browser, and inspect its response in Network tools.",
    "Return 404 for a missing path and verify the status.",
    "How do 401 and 403 differ?"
  ],
  "1-2": [
    "Authentication establishes identity. Authorization limits what that identity may read or change.",
    "Run owner and other-user checks, add a logged-out case, and test them together.",
    "Add a test for a missing owner ID and reject access.",
    "Why should the server get the user ID from the authenticated session?"
  ],
  "1-3": [
    "CIDR specifies the network prefix. An IPv4 /26 has 64 addresses, normally 62 usable hosts.",
    "Run the script, change the prefix to /27, and draw two adjoining subnets.",
    "List the ranges and a gateway for each subnet.",
    "Why do 10.0.1.0/24 and 10.0.2.0/24 differ?"
  ],
  "1-4": [
    "The scheme, host and port define an origin. An allowlist should match the origin exactly.",
    "Compare the two example ports, add an HTTPS origin, and write down which cases pass.",
    "For your local app, verify one allowed and one denied origin in the browser.",
    "What does the Origin request header tell the server?"
  ],
  "1-5": [
    "Server-side validation checks the type, length and meaning of untrusted input before use.",
    "Run empty, valid and oversized inputs. Draw where user data crosses into the API.",
    "Add five boundary-value assertions.",
    "What sensitive fields should you keep out of request logs?"
  ],
  "2-0": [
    "A foreign key links lessons to topics. LEFT JOIN retains topics with no lessons, and COUNT(column) ignores NULL.",
    "Create the sample tables, run the join, then compare with INNER JOIN.",
    "Build a report showing all topics including those with zero lessons.",
    "Why can COUNT(*) and COUNT(l.id) return different totals?"
  ],
  "2-1": [
    "PostgreSQL chooses a query plan based on estimated cost. An index can help selective lookups.",
    "Generate the sample rows, record the plan, add the index, then rerun the same query.",
    "Compare an equality filter with a broad range filter.",
    "When might PostgreSQL choose a sequential scan anyway?"
  ],
  "2-2": [
    "A transaction groups writes. Rollback discards uncommitted updates and commit keeps them.",
    "Run the rollback example, repeat with commit, then inspect isolation in two sessions.",
    "Write down what the second session sees before and after commit.",
    "What can change between reads at Read Committed?"
  ],
  "2-3": [
    "Add a compatible column, backfill existing rows, then enforce the constraint and default.",
    "Run the migration against existing data, verify the backfill, and insert a new row without status.",
    "Check the migration against both an empty and a populated database.",
    "Why can adding NOT NULL before backfilling fail?"
  ],
  "2-4": [
    "Database pages hold rows. Write-ahead logging makes recovery possible after changes are committed.",
    "Inspect the settings, then draw the path from write to WAL flush and checkpoint.",
    "Look up the descriptions of both settings in pg_settings.",
    "Why must the WAL reach durable storage before commit?"
  ],
  "2-5": [
    "Relational tables enforce structure, while JSONB can hold flexible fields. Choose based on the queries you need.",
    "Insert the sample document, filter by a field, then test a missing field.",
    "Compare the same read using a relational column, JSONB and a key-value store.",
    "When is it useful to store related data in one document?"
  ],
  "3-0": [
    "Capacity estimates convert user activity into requests and storage. Separate average from peak traffic.",
    "Estimate actions per day, convert to requests per second, and apply a documented peak factor.",
    "Double the users and state the effect on storage and traffic.",
    "Why can daily averages hide bottlenecks?"
  ],
  "3-1": [
    "A module boundary gives code a narrow interface. The feature can use any store that implements get.",
    "Run with a Map, replace it with a fake store, then test a missing ID.",
    "Draw the client, API and data-store boundary.",
    "What would justify splitting a module into its own service?"
  ],
  "3-2": [
    "Cache-aside reads from the origin on a miss. Invalidation removes stale cached values after a write.",
    "Run the sample, remove invalidation, and compare the final read.",
    "Add a test for reading the catalog immediately after an edit.",
    "When is a TTL alone too slow to refresh visible data?"
  ],
  "3-3": [
    "Cursor pagination uses a stable order and a boundary from the prior page.",
    "Read the first page, fetch the second page, and test the final page.",
    "Specify the cursor and empty-page response in your API contract.",
    "Why can renaming a response field break clients?"
  ],
  "3-4": [
    "Tenant isolation scopes data to a verified tenant. Quotas also limit how much shared capacity a tenant can use.",
    "Test reads for tenants A and B, confirm both are scoped, and sketch a quota for each.",
    "Add a negative test proving one tenant cannot see the other's tasks.",
    "How could one tenant affect another tenant's p95?"
  ],
  "3-5": [
    "A design review makes requirements, boundaries and trade-offs visible before implementation.",
    "Render the example diagram, add metrics, and write down two possible failure paths.",
    "Record why the queue was chosen and what would trigger a design change.",
    "Which metric would tell you to change the architecture?"
  ],
  "4-0": [
    "A Docker image is a build artifact. A container is a running instance, and volumes can retain data between instances.",
    "Save the Dockerfile, build and run it, then change the message and rebuild.",
    "Run the same image twice and compare container behavior.",
    "What changes if you recreate a container without a volume?"
  ],
  "4-1": [
    "A CI workflow runs automated checks on code changes. A failed command should block the check.",
    "Save the workflow under .github/workflows, push it and read the run logs.",
    "Make the assertion fail, confirm the failure, then restore it.",
    "Why does an immutable release tag help rollback?"
  ],
  "4-2": [
    "An SLI measures service behavior. An SLO sets a target for that measurement over a defined window.",
    "Calculate the availability, vary failed requests, and identify the allowed error budget.",
    "Write a measurable SLO and describe a backup restore check.",
    "What evidence proves a backup is usable?"
  ],
  "4-3": [
    "Infrastructure as code describes desired resources. A plan previews changes before applying them.",
    "Initialize the sample, inspect its plan, and change the input to see the next proposal.",
    "Draw a public API and private database, including their access roles.",
    "Which components should have direct database access?"
  ],
  "4-4": [
    "A Kubernetes Deployment manages pods. Readiness controls when a pod can receive traffic through a Service.",
    "Apply the manifest to a local cluster, inspect rollout status and scale to two replicas.",
    "Record rollout behavior and clean up with kubectl delete -f app.yml.",
    "How is readiness different from liveness?"
  ],
  "4-5": [
    "A span records a timed operation. Real traces connect related spans under one request.",
    "Measure the sample operation, add a simulated database step, and compare timings.",
    "Write a runbook for investigating slow requests with logs and traces.",
    "Which span would you inspect first when a request is slow?"
  ],
  "5-0": [
    "Retries can recover transient failures, and an idempotency key avoids repeating a result.",
    "Run the example twice for the same ID, force permanent failure, then check the attempt limit.",
    "Document where a durable unique key would go.",
    "Why do retries at several layers multiply downstream traffic?"
  ],
  "5-1": [
    "A follower can serve old data until it applies a leader update. Consistency guarantees specify which reads are allowed.",
    "Run the timeline, add a second write, and log reads before and after replication.",
    "Mark stale reads in your diagram.",
    "When is read-your-writes a session-level guarantee?"
  ],
  "5-2": [
    "A majority of three nodes is two. Raft also needs valid terms and matching logs to commit safely.",
    "Test one and two votes, change to five nodes, and draw a leader isolated from the majority.",
    "Explain what can be committed on each side of the split.",
    "What happens to writes sent to the old leader after a new term?"
  ],
  "5-3": [
    "A partition key selects a shard. Hot keys can concentrate load even if keys are otherwise evenly distributed.",
    "Compare sequential and repeated IDs, add a shard, and count moved keys.",
    "Report the maximum load on any shard for each dataset.",
    "Why might adding shards leave a hot key unresolved?"
  ],
  "5-4": [
    "The outbox records an event in the same transaction as a business write. A worker publishes pending events later.",
    "Run with commit, repeat with rollback, and sketch how a worker handles duplicate deliveries.",
    "Propose a durable deduplication key and retry status.",
    "What happens if the process stops after commit and before publish?"
  ],
  "5-5": [
    "Concurrent writes can conflict across partitions. Picking a winner may discard another edit.",
    "Run the version comparison, try a tie, and draw concurrent writes on two replicas.",
    "Compare keeping the highest version with merging both edits.",
    "What data could a last-write-wins policy lose?"
  ],
  "6-0": [
    "A percentile describes the distribution. p95 exposes slow requests that averages can hide.",
    "Compute p50 and p95, add an outlier, and compare against the average.",
    "Record concurrency, dataset and error rate along with the percentiles.",
    "What can an average latency hide?"
  ],
  "6-1": [
    "An N+1 pattern issues a query per result row. Joins or batches can fetch related data in fewer trips.",
    "Run the join, compare the rows to separate lookups, and count the queries.",
    "Record query count and p95 before and after on the same dataset.",
    "When might a large join cost more than a batch?"
  ],
  "6-2": [
    "A bounded queue limits outstanding work and can reject new jobs when full.",
    "Fill the queue, submit one extra job, then free a slot and try again.",
    "Plot queue depth and rejection rate during a local load test.",
    "Why does increasing queue size not increase processing throughput?"
  ],
  "6-3": [
    "A CPU profile shows where execution time goes. External I/O may dominate elapsed time without consuming CPU.",
    "Run the profile, increase the input size, and identify the hottest function.",
    "Measure one optimization against the same input.",
    "Where would you look if CPU is low but latency is high?"
  ],
  "6-4": [
    "Request coalescing shares one in-flight fetch for multiple callers of the same key.",
    "Run the example with identical keys, then use two different keys and count fetches.",
    "Write a TTL and cache key policy for the study catalog.",
    "Why must tenant-specific data stay out of a shared cache?"
  ],
  "6-5": [
    "A performance budget combines explicit latency and error thresholds.",
    "Run both test cases, probe the boundary values, and design a repeatable workload.",
    "Make a check fail when either measurement crosses its threshold.",
    "Why can p95 fall when the error rate rises?"
  ],
  "7-0": [
    "Precision measures the share of predicted positives that are correct. Recall measures the share of actual positives found.",
    "Run the metrics, increase false negatives, and compare both scores.",
    "Evaluate a simple baseline on a held-out dataset.",
    "How does data leakage distort evaluation?"
  ],
  "7-1": [
    "Retrieval picks candidate source passages before generating an answer. Source IDs let you verify the candidates.",
    "Run the keyword baseline, add a note, and try an unmatched query.",
    "Compare the keyword results with embeddings on the same test questions.",
    "What happens when the correct source is absent from the top results?"
  ],
  "7-2": [
    "Batching groups requests and can improve throughput at a cost to waiting time.",
    "Run the grouping example, change batch size, then measure your model with a fixed prompt set.",
    "Record time to first token, throughput and p95.",
    "Why might batching increase time to first token?"
  ],
  "7-3": [
    "Tokenizers split text into tokens. Token counts depend on the tokenizer and affect available context.",
    "Run the tokenizer, compare English and Bangla inputs, and count the tokens.",
    "Compare two prompt lengths with the same model.",
    "How does a context limit affect both input and output?"
  ],
  "7-4": [
    "Retrieval hit rate checks whether the correct source is in the candidate list. Answer quality needs a separate check.",
    "Run the sample score, fix the missed source, and score an answer against its citation.",
    "Build 20 questions with expected answers and supporting source IDs.",
    "Can fine-tuning directly fix a missing retrieval result?"
  ],
  "7-5": [
    "A grounded service needs a clear fallback when retrieval or model serving fails.",
    "Run the empty and non-empty cases, then test a timeout in your app.",
    "Log model version, latency and source IDs for a fixed eval suite.",
    "What happens to KV cache memory as context grows?"
  ],
  "8-0": [
    "Read a case study by connecting each claim to its measurement, scope and assumptions.",
    "Recompute the metric, identify excluded traffic, and write down one missing piece of evidence.",
    "Make a one-page case note with citations to the relevant evidence.",
    "Which missing measurement could reverse the conclusion?"
  ],
  "8-1": [
    "Exponential backoff spaces out retries. A cap, jitter and a retry budget keep load predictable.",
    "Run the sequence, cap the delay and compare synchronized and staggered retry timings.",
    "Document your experiment setup and observations.",
    "How does jitter reduce synchronized retry spikes?"
  ],
  "8-2": [
    "A postmortem records impact, a timeline, contributing factors and follow-up checks.",
    "Use the template, fill it with a staging event, and add a verification step.",
    "Give each action item an owner and a testable outcome.",
    "What is lost if you record only one root cause?"
  ],
  "8-3": [
    "Concurrent cart additions can be merged using a union. Deletes require a defined merge rule.",
    "Run the example, add a duplicate, and draw how it would be reconciled across two replicas.",
    "Name one behavior that this merge policy cannot handle.",
    "What overhead would Dynamo-style storage add to a small app?"
  ],
  "8-4": [
    "A canary deployment limits exposure while you measure whether the new version is healthy.",
    "Run the example, adjust the threshold, and note how sample size changes confidence.",
    "Write a pause and rollback rule with a minimum sample size.",
    "What signals should cause a canary rollout to pause?"
  ],
  "8-5": [
    "A portfolio case study should let a reader reproduce the setup and check the outcome.",
    "Fill out the README with real commands, baseline metrics and your known limitations.",
    "Ask a reader to reproduce the result from a clean checkout.",
    "Which design assumption most affects your result?"
  ]
};
window.projectMilestones = [
  [
    "ফাঁকা ফোল্ডার থেকে CLI বানান। JSON save/load যোগ করুন। খালি title, duplicate ID ও restart-এর পর persistence test করুন।",
    "Build the CLI in a clean folder. Add JSON save/load, then test blank titles, duplicate IDs and persistence after restarting.",
    "tracker.py, tests/ এবং README",
    "tracker.py, tests/ and README",
    "নিজে চালিয়ে দেখুন যে restart-এর পর task list একই থাকে।",
    "Restart the CLI and confirm that the task list is identical."
  ],
  [
    "GET ও POST endpoint বানান। সার্ভারে owner check দিন। একই task-এর জন্য owner ও অন্য ব্যবহারকারীর test লিখুন।",
    "Build GET and POST endpoints. Enforce ownership on the server and test the same task with the owner and a different user.",
    "API contract ও role test",
    "API contract and authorization tests",
    "নিজের টেস্টে অনুমোদিত request সফল, অন্য account-এর request প্রত্যাখ্যাত।",
    "Verify that your own tests allow the owner and reject a different account."
  ],
  [
    "ERD আঁকুন। Migration ও sample rows লিখুন। Index যোগ করার আগে এবং পরে একই report query মাপুন।",
    "Draw an ERD. Write migrations and sample rows. Measure the same report query before and after indexing.",
    "schema.sql, seed.sql ও query plan",
    "schema.sql, seed.sql and query plans",
    "Duplicate completion DB-তে প্রত্যাখ্যাত হবে এবং query ফল দুই সংস্করণে একই থাকবে।",
    "The database rejects duplicate completions and both query versions return the same rows."
  ],
  [
    "প্রয়োজনীয় user flow ও traffic assumptions লিখুন। C4 diagram দিন। Cache ও queue কোথায় লাগে এবং কেন, তা ADR-এ লিখুন।",
    "Document the user flows and traffic assumptions. Draw a C4 diagram and write an ADR for where caching and queuing belong.",
    "design.md, diagram ও ADR",
    "design.md, diagram and ADR",
    "একজন পাঠক diagram দেখে একটি task create থেকে database write পর্যন্ত trace করতে পারবেন।",
    "A reader can trace task creation from the client to the database using the diagram."
  ],
  [
    "API containerize করুন। CI-তে test দিন। Staging-এ release, rollback ও backup restore অনুশীলন করুন।",
    "Containerize the API. Add CI tests. Rehearse a release, rollback and backup restore in staging.",
    "Dockerfile, CI workflow ও runbook",
    "Dockerfile, CI workflow and runbook",
    "আগের tag দিয়ে rollback হবে এবং নতুন database-এ reloaded row count মিলে যাবে।",
    "Rollback restores the previous tag, and the restored database row count matches."
  ],
  [
    "Task update এবং outbox event একই transaction-এ রাখুন। Worker-কে retry দিন। একই ID-র event দুবার দিন এবং worker restart করুন।",
    "Commit the task update and outbox event together. Retry in the worker, deliver the same event twice and restart the worker.",
    "worker code, event tests ও failure log",
    "worker code, event tests and failure log",
    "Retry ও restart-এর পর কেবল একটি report তৈরি হবে।",
    "Exactly one report exists after retrying and restarting."
  ],
  [
    "Fixed dataset ও workload-এ baseline নিন। একটি bottleneck profile করুন। একটি পরিবর্তন করে একই পরীক্ষা পুনরায় চালান।",
    "Benchmark a fixed dataset and workload, profile one bottleneck, change one thing and rerun the same test.",
    "benchmark command, raw output ও before/after table",
    "benchmark command, raw output and before/after table",
    "p50, p95, throughput এবং errors একই টেবিলে তুলনা করা যাবে।",
    "The same table compares p50, p95, throughput and errors."
  ],
  [
    "নিজের নোট index করুন। Source ID-সহ ফল ফেরান। উত্তরযোগ্য ও উত্তরহীন প্রশ্ন দিয়ে retrieval এবং citations আলাদাভাবে যাচাই করুন।",
    "Index your notes, return source IDs and test retrieval and citations separately with answerable and unanswerable questions.",
    "eval set, model/version notes ও results.csv",
    "evaluation set, model/version notes and results.csv",
    "২০টি প্রশ্নে ফল নয় শুধু, ভুল ফলের কারণও শ্রেণিবদ্ধ করুন।",
    "Score 20 questions and categorize why each incorrect answer failed."
  ],
  [
    "একটি article-এর claim যাচাই করুন। Study Tracker থেকে একটি ফল মেপে তার প্রমাণ, সীমাবদ্ধতা ও পুনরায় চালানোর উপায় লিখুন।",
    "Check a claim from an engineering article. Measure one result in Study Tracker and document the evidence, limitations and reproduction steps.",
    "case-study.md ও পুনরায় চালানোর ধাপ",
    "case-study.md and reproduction steps",
    "একজন পাঠক README দেখে পরীক্ষা আবার চালিয়ে ফল তুলনা করতে পারবেন।",
    "A reader can rerun your experiment from the README and compare results."
  ]
];
