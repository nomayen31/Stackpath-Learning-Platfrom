window.studyGuide = {
  "sources": {
    "py": [
      "Harvard CS50P",
      "https://cs50.harvard.edu/python/"
    ],
    "git": [
      "MIT Missing Semester",
      "https://missing.csail.mit.edu/"
    ],
    "algo": [
      "MIT 6.006 lecture sequence",
      "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
    ],
    "math": [
      "MIT Mathematics for Computer Science",
      "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/"
    ],
    "os": [
      "Operating Systems: Three Easy Pieces",
      "https://pages.cs.wisc.edu/~remzi/OSTEP/"
    ],
    "net": [
      "Cloudflare Learning Center",
      "https://www.cloudflare.com/learning/"
    ],
    "http": [
      "MDN HTTP guide",
      "https://developer.mozilla.org/en-US/docs/Web/HTTP"
    ],
    "sec": [
      "OWASP ASVS",
      "https://owasp.org/www-project-application-security-verification-standard/"
    ],
    "sql": [
      "PostgreSQL SQL tutorial",
      "https://www.postgresql.org/docs/current/tutorial-sql.html"
    ],
    "plan": [
      "PostgreSQL EXPLAIN",
      "https://www.postgresql.org/docs/current/using-explain.html"
    ],
    "tx": [
      "PostgreSQL Transaction Isolation",
      "https://www.postgresql.org/docs/current/transaction-iso.html"
    ],
    "db": [
      "CMU 15-445",
      "https://15445.courses.cs.cmu.edu/"
    ],
    "design": [
      "AWS Well-Architected",
      "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
    ],
    "c4": [
      "C4 model",
      "https://c4model.com/diagrams"
    ],
    "api": [
      "OpenAPI specification",
      "https://spec.openapis.org/oas/latest.html"
    ],
    "docker": [
      "Docker Get Started",
      "https://docs.docker.com/get-started/"
    ],
    "ci": [
      "GitHub Actions quickstart",
      "https://docs.github.com/en/actions/get-started/quickstart"
    ],
    "k8": [
      "Kubernetes Basics",
      "https://kubernetes.io/docs/tutorials/kubernetes-basics/"
    ],
    "sre": [
      "Google SRE books",
      "https://sre.google/books/"
    ],
    "otel": [
      "OpenTelemetry concepts",
      "https://opentelemetry.io/docs/concepts/"
    ],
    "mit": [
      "MIT 6.5840 lectures and labs",
      "https://pdos.csail.mit.edu/6.824/"
    ],
    "raft": [
      "Raft paper",
      "https://raft.github.io/raft.pdf"
    ],
    "aws": [
      "AWS Builders’ Library",
      "https://aws.amazon.com/builders-library/"
    ],
    "retry": [
      "Amazon’s timeouts, retries and jitter",
      "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/"
    ],
    "k6": [
      "Grafana k6 documentation",
      "https://grafana.com/docs/k6/latest/"
    ],
    "ml": [
      "Google ML Crash Course",
      "https://developers.google.com/machine-learning/crash-course/"
    ],
    "hf": [
      "Hugging Face LLM course",
      "https://huggingface.co/learn/llm-course/chapter1/1"
    ],
    "vec": [
      "pgvector documentation",
      "https://github.com/pgvector/pgvector"
    ],
    "vllm": [
      "vLLM documentation",
      "https://docs.vllm.ai/"
    ],
    "pm": [
      "Google SRE postmortem culture",
      "https://sre.google/sre-book/postmortem-culture/"
    ],
    "dynamo": [
      "Amazon Dynamo paper",
      "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf"
    ]
  },
  "details": [
    [
      0,
      "py",
      "Functions, Conditionals, Loops, Exceptions ও Unit Tests",
      [
        "একটি pure function-এ ইনপুট যাচাই করুন",
        "তার ওপর CLI যুক্ত করুন",
        "pytest দিয়ে valid, empty ও duplicate ইনপুট চালান"
      ],
      "ভাঙা JSON পেলে কী হবে এবং কেন?",
      "ফাইল নষ্ট হলেও স্পষ্ট error আসে এবং আগের data অক্ষত থাকে"
    ],
    [
      1,
      "algo",
      "Data structures, sorting, hashing ও graph traversal",
      [
        "একই dataset list ও dict-এ রাখুন",
        "hit ও miss আলাদা মাপুন",
        "BFS-এ queue ও visited set যোগ করুন"
      ],
      "কোন ক্ষেত্রে binary search ব্যবহার করা যাবে?",
      "১K ও ১০K input-এ runtime ও memory trade-off লিখুন"
    ],
    [
      2,
      "os",
      "Processes, threads, scheduling, virtual memory, locks",
      [
        "একই কাজ process ও thread দিয়ে চালান",
        "shared counter-এ lock দিন",
        "কোন state shared তা diagram-এ রাখুন"
      ],
      "Thread-এর নিজস্ব stack আর shared heap-এর পার্থক্য কী?",
      "Concurrency test বহুবার চালিয়েও expected result মেলে"
    ],
    [
      3,
      "net",
      "DNS records, IP, CIDR, routing, TCP handshake, UDP",
      [
        "DNS resolution flow আঁকুন",
        "নিজের localhost app-এর port বের করুন",
        "TCP বনাম UDP ব্যবহারের দুটি উদাহরণ লিখুন"
      ],
      "Hostname resolve হলেও HTTP ব্যর্থ হতে পারে কেন?",
      "DNS ও TCP connection-এর আলাদা failure লক্ষণ বোঝাতে পারবেন"
    ],
    [
      4,
      "http",
      "Methods, status codes, headers, cache semantics, TLS",
      [
        "GET ও POST request চালান",
        "headers ও response body পড়ুন",
        "401, 403, 404 ও 500 কখন ফেরাবেন টেবিলে লিখুন"
      ],
      "PUT retry আর POST retry-এর ঝুঁকি কী?",
      "নিজের API-তে successful ও invalid request test আছে"
    ],
    [
      5,
      "sec",
      "Identity, session lifetime, permission matrix, secrets",
      [
        "Owner, viewer ও logged-out user-এর matrix লিখুন",
        "নিজের endpoints-এ server-side permission check দিন",
        "প্রতিটি denial case test করুন"
      ],
      "Authentication সফল হলেও কোন ক্ষেত্রে 403 দেবেন?",
      "Cross-account read/write প্রত্যাখ্যাত হয় এবং secret repo-তে নেই"
    ],
    [
      6,
      "sql",
      "ERD, keys, normalization, joins, aggregation, NULL",
      [
        "চারটি related table বানান",
        "JOIN ও GROUP BY লিখুন",
        "empty topic দেখাতে LEFT JOIN ব্যবহার করুন"
      ],
      "COUNT(*) আর COUNT(column) কখন আলাদা?",
      "Empty ও duplicate data-সহ report-এর সঠিক ফল দেখান"
    ],
    [
      7,
      "plan",
      "Sequential scan, B-tree, composite index, selectivity",
      [
        "১০K বা তার বেশি row seed করুন",
        "EXPLAIN ANALYZE দিয়ে baseline নিন",
        "index যোগ করে একই query পুনরায় চালান"
      ],
      "Planner কখন index এড়িয়ে যেতে পারে?",
      "Before/after runtime ও plan node ব্যাখ্যা করুন"
    ],
    [
      8,
      "tx",
      "Atomicity, read committed, serializable, rollback",
      [
        "দুই SQL session খুলুন",
        "একটি transaction-এ write করে অন্য session-এ read করুন",
        "rollback ও commit-এর পরে তুলনা করুন"
      ],
      "কেন একই transaction-এর দুটি read ভিন্ন হতে পারে?",
      "অর্ধেক update থেকে যাবে না এবং isolation choice ব্যাখ্যা করতে পারবেন"
    ],
    [
      9,
      "design",
      "User flows, SLO, RPS, storage, traffic assumptions",
      [
        "Read/write flows লিখুন",
        "peak multiplier ধরে capacity হিসাব করুন",
        "estimate-এর assumptions নথিভুক্ত করুন"
      ],
      "Daily average দিয়ে peak কেন বোঝা যায় না?",
      "Units সহ storage ও throughput estimate আছে"
    ],
    [
      10,
      "c4",
      "Context, container boundaries, dependency directions, ADR",
      [
        "C4 context আঁকুন",
        "API এবং DB-এর container diagram দিন",
        "একটি design decision ও বিকল্প ADR-এ লিখুন"
      ],
      "Tracking service আলাদা করার trigger কী হতে পারে?",
      "Tracker flow diagram দেখে অন্য কেউ trace করতে পারে"
    ],
    [
      11,
      "aws",
      "Cache-aside, invalidation, TTL, queue, backpressure",
      [
        "Catalog read baseline নিন",
        "cache যোগ করে hit/miss log করুন",
        "edit-এর পর stale read test করুন"
      ],
      "TTL থাকলেও invalidation কখন দরকার?",
      "Cache update ও queue failure—দুই আচরণেই test আছে"
    ],
    [
      12,
      "docker",
      "Dockerfile layers, image, container, volumes, Compose",
      [
        "API image বানান",
        "Compose-এ DB service যোগ করুন",
        "container recreate করে data persistence দেখুন"
      ],
      "Image ও container-এর পার্থক্য কী?",
      "Fresh checkout থেকে API ও DB reproducibly চলে"
    ],
    [
      13,
      "ci",
      "Pull-request tests, build artifacts, staging, release, rollback",
      [
        "Push-এ tests চালান",
        "commit SHA দিয়ে image tag দিন",
        "staging deploy ও পুরনো tag-এ rollback করুন"
      ],
      "কেন version tag ছাড়া rollback কঠিন?",
      "একটি failing test deployment block করে এবং পুরনো artifact ফেরানো যায়"
    ],
    [
      14,
      "sre",
      "SLI, SLO, error budget, alerts, backup ও recovery",
      [
        "Success rate ও p95 chart করুন",
        "একটি actionable alert লিখুন",
        "backup থেকে আলাদা database restore করুন"
      ],
      "Backup আছে শুনে restore সম্ভব ধরে নেওয়া যায় না কেন?",
      "Restore row count, recovery time ও measured SLI লিখুন"
    ],
    [
      15,
      "retry",
      "Timeout budget, bounded retries, jitter, idempotency",
      [
        "নিজের worker-এ transient timeout simulate করুন",
        "maximum attempts দিন",
        "duplicate job result unique key দিয়ে রোধ করুন"
      ],
      "তিন স্তরে retry হলে downstream load কীভাবে বাড়ে?",
      "একই job দুবার এলে একটিই ফল থাকে"
    ],
    [
      16,
      "mit",
      "Leader/follower, replica lag, read-your-writes, quorum",
      [
        "তিন replica-এর timeline আঁকুন",
        "এক replica lag করান",
        "leader read ও follower read তুলনা করুন"
      ],
      "Read-your-writes কখন session-level guarantee?",
      "তিনটি timeline-এ valid ও stale read চিহ্নিত করুন"
    ],
    [
      17,
      "raft",
      "Terms, elections, majority, log matching ও partitioning",
      [
        "৩-node election কাগজে simulate করুন",
        "leader isolation দেখান",
        "log entry কোন পর্যায়ে commit হয় চিহ্নিত করুন"
      ],
      "নতুন term-এ পুরনো leader-এর write কীভাবে সামলানো হয়?",
      "বিচ্ছিন্ন একটি node একা commit করতে পারে না"
    ],
    [
      18,
      "k6",
      "Warmup, latency percentiles, throughput, error rate",
      [
        "নিজের localhost API-তে warmup দিন",
        "দুটি concurrency level-এ test চালান",
        "p50/p95 ও errors একসঙ্গে লিখুন"
      ],
      "Average latency কী লুকাতে পারে?",
      "একই dataset-এ test পুনরায় চালানো যায়"
    ],
    [
      19,
      "plan",
      "N+1, query batching, indexes, connection pools",
      [
        "Request-এ query count করুন",
        "N+1 থাকলে batch query দিন",
        "আগে/পরে SQL count ও p95 মাপুন"
      ],
      "বড় join কখন batching-এর তুলনায় বেশি ব্যয়বহুল?",
      "ফল একই এবং metrics দিয়ে উন্নতি দেখানো যায়"
    ],
    [
      20,
      "sre",
      "Saturation, bounded queues, throttling, rate limits",
      [
        "নিজের staging বা local API-তে load ধাপে বাড়ান",
        "CPU ও queue depth মিলিয়ে saturation খুঁজুন",
        "bounded queue দিয়ে পুনরায় তুলনা করুন"
      ],
      "Queue বড় হলেই throughput কেন বাড়ে না?",
      "Saturation threshold ও recovery time report করুন"
    ],
    [
      21,
      "ml",
      "Loss, overfitting, feature leakage, precision, recall",
      [
        "একটি simple baseline বানান",
        "train/validation/test split করুন",
        "confusion matrix থেকে precision/recall হিসাব করুন"
      ],
      "Leakage হলে test score কেন বিভ্রান্তিকর?",
      "Held-out set-এ baseline ও model score লিখুন"
    ],
    [
      22,
      "vec",
      "Embedding, chunk size, top-k, metadata, citations",
      [
        "নিজের দশটি নোট chunk করুন",
        "query embedding দিয়ে top-k আনুন",
        "উৎস ও expected answer মিলিয়ে দেখুন"
      ],
      "Relevant source top-k-তে না এলে generator কীভাবে সীমাবদ্ধ হবে?",
      "Answerable ও unanswerable দুই ধরনের query আছে"
    ],
    [
      23,
      "vllm",
      "Inference, prefill, decode, batching, quantization",
      [
        "একই prompt set দুবার চালান",
        "TTFT, tokens/sec ও p95 নিন",
        "batching বা quantization-এর একটি পরিবর্তন তুলনা করুন"
      ],
      "Throughput বাড়লেও first-token latency কেন বাড়তে পারে?",
      "Quality, latency ও resource use একই টেবিলে তুলনা করুন"
    ],
    [
      24,
      "sre",
      "SLO, monitoring, system boundaries, incident evidence",
      [
        "একটি অধ্যায় থেকে user impact লিখুন",
        "reported metrics আলাদা করুন",
        "আপনার app-এর জন্য একটি metric প্রস্তাব করুন"
      ],
      "লেখায় কোন data নেই যেটি সিদ্ধান্ত বদলাতে পারে?",
      "এক পৃষ্ঠার case note-এ claim ও evidence লিংক আছে"
    ],
    [
      25,
      "retry",
      "Timeout, retries, jitter, overload ও retry budget",
      [
        "প্রথমে diagram আঁকুন",
        "দুটি retry strategy তুলনা করুন",
        "নিজের worker-এ ছোট experiment করুন"
      ],
      "Jitter synchronized retry কমায় কীভাবে?",
      "Experiment setup, outcome ও limitations লেখা আছে"
    ],
    [
      26,
      "pm",
      "Impact, timeline, contributing factors, prevention",
      [
        "নিজের staging incident তৈরি করে observed timeline লিখুন",
        "দুটি contributing factor বের করুন",
        "measurable follow-up যোগ করুন"
      ],
      "Root cause লিখেই কাজ শেষ করলে কী বাদ পড়ে?",
      "Follow-up owner ও verification আছে"
    ]
  ],
  "extras": [
    [
      0,
      "git",
      "Terminal, Git & debugging",
      "Paths, pipes, exit codes, branches, diff, breakpoints",
      [
        "শেল দিয়ে file ও logs খুঁজুন",
        "একটি branch-এ ছোট পরিবর্তন করুন",
        "debugger দিয়ে ভুল variable ধরুন"
      ],
      "git diff দিয়ে ভুল edit কীভাবে চিনবেন?",
      "একটি branch, reviewable commit এবং bug পুনরুৎপাদনের test আছে",
      "git switch -c fix-empty-title → git diff → একটি test সহ commit।"
    ],
    [
      0,
      "math",
      "Discrete math & reasoning",
      "Sets, logic, induction, graphs, probability",
      [
        "Set দিয়ে unique lessons হিসাব করুন",
        "loop invariant লিখুন",
        "graph-এ তিন node-এর path আঁকুন"
      ],
      "Induction-এ base case-এর ভূমিকা কী?",
      "Binary search-এর invariant ও termination ব্যাখ্যা করুন",
      "{HTTP, SQL, SQL} থেকে set বানালে unique count ২।"
    ],
    [
      0,
      "os",
      "Computer architecture & memory",
      "Binary, CPU instructions, stack, heap, cache locality",
      [
        "Decimal 13-কে binary করুন",
        "stack frame আঁকুন",
        "sequential ও random array traversal তুলনা করুন"
      ],
      "Cache locality sequential access-এ কেন সাহায্য করে?",
      "CPU, RAM ও disk-এর ভূমিকা আলাদা করে বুঝিয়ে বলুন",
      "১৩ = 1101₂। function call হলে local variable-এর জন্য নতুন stack frame তৈরি হতে পারে।"
    ],
    [
      1,
      "net",
      "Subnetting, routing & NAT",
      "IPv4, private networks, CIDR, gateways, NAT",
      [
        "/24 ও /26 address range লিখুন",
        "একটি ছোট VPC আঁকুন",
        "client থেকে server পর্যন্ত route চিহ্নিত করুন"
      ],
      "10.0.1.0/24 আর 10.0.2.0/24 কীভাবে আলাদা?",
      "দুটি subnet-এর address range ও gateway সঠিক",
      "10.0.0.64/26-এর address range 10.0.0.64–10.0.0.127।"
    ],
    [
      1,
      "http",
      "Browser security & cookies",
      "Origins, CORS, SameSite, Secure, HttpOnly",
      [
        "দুটি local origin চালান",
        "allowed origin configure করুন",
        "নিজের app-এ cookie attributes পরীক্ষা করুন"
      ],
      "CORS browser কোন তথ্য ব্যবহার করে যাচাই করে?",
      "কেবল নির্ধারিত origin-এর credentialed request গ্রহণ করে",
      "localhost:3000 ও localhost:8000-এর port আলাদা, তাই origin আলাদা।"
    ],
    [
      1,
      "sec",
      "Threat modeling & secure defaults",
      "Assets, trust boundaries, input validation, audit logging",
      [
        "নিজের API-এর data-flow আঁকুন",
        "প্রতিটি boundary-এর প্রতিরক্ষা লিখুন",
        "malformed input ও permission checks test করুন"
      ],
      "Request log-এ কোন তথ্য বাদ দেবেন?",
      "Trust boundaries, controls ও defensive tests নথিভুক্ত",
      "Task owner ID server-side session থেকে নিন। Client-এর পাঠানো owner ID দিয়ে অনুমতি নির্ধারণ করবেন না।"
    ],
    [
      2,
      "sql",
      "Schema evolution & migrations",
      "Migration ordering, constraints, defaults, backfill",
      [
        "Existing rows-এ nullable column যোগ করুন",
        "batch-এ backfill দিন",
        "data যাচাই করে constraint বসান"
      ],
      "সব row backfill করার আগে NOT NULL কেন ঝুঁকিপূর্ণ?",
      "Empty এবং populated DB দুটিতে migration চলে",
      "tasks-এ created_at যোগ করুন → পুরনো rows backfill → তারপর NOT NULL দিন।"
    ],
    [
      2,
      "db",
      "Database internals",
      "Pages, buffer pool, WAL, checkpoints, B-tree vs LSM",
      [
        "CMU-এর storage অংশ পড়ুন",
        "row থেকে disk page-এর flow আঁকুন",
        "WAL ও checkpoint timeline লিখুন"
      ],
      "Commit-এর আগে WAL durable করা কেন লাগে?",
      "Crash-এর পরে কী recover হবে তা ব্যাখ্যা করুন",
      "Data page disk-এ পৌঁছানোর আগেও durable WAL থেকে committed পরিবর্তন redo করা যায়।"
    ],
    [
      2,
      "db",
      "Model selection & backup",
      "OLTP/OLAP, relational, document, key-value, restore",
      [
        "একই notes feature তিনভাবে model করুন",
        "query access patterns তুলনা করুন",
        "Postgres dump restore করুন"
      ],
      "Nested document কখন সুবিধা দেয়?",
      "Model choice ও restore verification লিখুন",
      "Task ID দিয়ে এক row খোঁজা OLTP। গত মাসের completion নিয়ে aggregate করা analytics workload।"
    ],
    [
      3,
      "api",
      "API contracts & evolution",
      "OpenAPI, validation, pagination, versions, compatibility",
      [
        "Tasks endpoint-এর spec লিখুন",
        "cursor pagination যোগ করুন",
        "পুরনো response consumer ধরে পরিবর্তন পরীক্ষা করুন"
      ],
      "Field rename কেন breaking change হতে পারে?",
      "Empty page ও next cursor behavior documented",
      "GET /tasks?limit=2 প্রথম পেজে [11, 12] এবং next_cursor=12 দেয়।"
    ],
    [
      3,
      "design",
      "Resilience & multi-tenant boundaries",
      "Bulkheads, timeouts, quotas, isolation, audit trails",
      [
        "Tenant identifier সব query-তে propagate করুন",
        "প্রতি tenant-এর budget নির্ধারণ করুন",
        "নিজের test tenant-এর slow request simulate করুন"
      ],
      "একজন tenant অন্যদের p95 কেন খারাপ করতে পারে?",
      "Tenant isolation ও timeout আচরণ test দিয়ে দেখান",
      "Tenant A-এর quota ৫ concurrent request হলে তার ৬ষ্ঠ request অপেক্ষা করবে বা প্রত্যাখ্যাত হবে।"
    ],
    [
      3,
      "c4",
      "Design review & capstone architecture",
      "Constraints, diagrams, alternatives, failure modes, ADR",
      [
        "Design doc লিখুন",
        "দুটি option-এর cost ও complexity তুলনা করুন",
        "failure review থেকে design সংশোধন করুন"
      ],
      "কোন signal পেলে architecture বদলাবেন?",
      "Diagram, estimates ও দুইটি সিদ্ধান্তের কারণ আছে",
      "ADR-টি লিখুন ‘Report generation async করব, কারণ user request-এর latency budget ৩০০ ms।’"
    ],
    [
      4,
      "design",
      "Cloud networking, IAM & infrastructure as code",
      "VPC, subnet, managed DB, least privilege, desired state",
      [
        "একটি cloud architecture আঁকুন",
        "API role ও DB access scope লিখুন",
        "IaC plan দিয়ে change review করুন"
      ],
      "Public API আর private DB কোথায় বসবে?",
      "Permissions scoped এবং network diagram যাচাই করা যায়",
      "User → public load balancer → private API instance → private DB।"
    ],
    [
      4,
      "k8",
      "Kubernetes fundamentals",
      "Pod, Deployment, Service, probes, rollout",
      [
        "Local cluster-এ app deploy করুন",
        "readiness probe যোগ করুন",
        "image tag বদলে rollout ও rollback দেখুন"
      ],
      "Readiness ও liveness আলাদা কেন?",
      "Updated pods healthy হওয়ার আগে traffic পায় না",
      "Pod চালু হলেও DB connection প্রস্তুত না হলে readiness probe fail করতে পারে।"
    ],
    [
      4,
      "otel",
      "Traces, runbooks & incident response",
      "Trace/span, correlation ID, alerts, runbooks, RTO/RPO",
      [
        "একটি request API থেকে DB পর্যন্ত trace করুন",
        "slow request-এর span খুঁজুন",
        "যাচাইযোগ্য runbook লিখুন"
      ],
      "Metric দেখে সমস্যা বুঝে trace দিয়ে কী খুঁজবেন?",
      "Log ও trace একই request-এর সঙ্গে সম্পর্কিত",
      "একই trace-এ HTTP span ৩০০ ms এবং DB span ২৫০ ms দেখালে DB অংশটি আগে দেখুন।"
    ],
    [
      5,
      "mit",
      "Partitioning, hot keys & rebalancing",
      "Hash/range partitioning, consistent hashing, skew",
      [
        "১০০ key চার shard-এ ভাগ করুন",
        "traffic skew simulate করুন",
        "নতুন shard যোগে key movement তুলনা করুন"
      ],
      "একটি hot key কি বেশি shard দিলেই ঠিক হবে?",
      "Per-shard distribution ও moved keys report করুন",
      "৩ replica update পেলে একটি lagging replica পুরনো version ফেরাতে পারে।"
    ],
    [
      5,
      "mit",
      "Event-driven workflows",
      "Outbox, consumer offsets, deduplication, poison messages",
      [
        "একই transaction-এ task ও outbox event লিখুন",
        "consumer restart করুন",
        "failed event quarantine করুন"
      ],
      "Commit আর publish-এর মাঝখানে crash হলে কী হয়?",
      "Duplicate harmless এবং retry-এর পরও event হারায় না",
      "Task ও event একই transaction-এ লিখুন। Publisher restart হলে pending event আবার তুলবে।"
    ],
    [
      5,
      "dynamo",
      "Failure models & consistency trade-offs",
      "Network partitions, availability, version conflicts, reconciliation",
      [
        "Partition-এর আগে ও পরে read/write timeline আঁকুন",
        "একই key দুই পাশে update করুন",
        "নির্বাচিত conflict policy ব্যাখ্যা করুন"
      ],
      "Last-write-wins-এ কোন তথ্য হারাতে পারে?",
      "Consistency model ও failure assumptions স্পষ্ট",
      "একই note offline-এ দুবার edit হলে timestamp দিয়ে একটি রাখলে অন্য edit হারাতে পারে।"
    ],
    [
      6,
      "otel",
      "Profiling CPU, memory & I/O",
      "CPU profiles, allocations, GC, flame graphs",
      [
        "Slow handler-এ profile নিন",
        "CPU ও waiting time আলাদা করুন",
        "একটি hotspot আগে/পরে মাপুন"
      ],
      "CPU কম অথচ latency বেশি হলে কী দেখবেন?",
      "একটি hotspot এবং measured change দেখান",
      "৯০০ ms request-এ ৮৫০ ms DB অপেক্ষা হলে CPU profile-এ bottleneck পরিষ্কার নাও দেখা যেতে পারে।"
    ],
    [
      6,
      "aws",
      "Caching layers & capacity planning",
      "Browser/CDN/application cache, cache stampede, sizing",
      [
        "Cache key ও TTL লিখুন",
        "একই key-তে simultaneous miss simulate করুন",
        "request coalescing তুলনা করুন"
      ],
      "Private response shared cache-এ গেলে কী সমস্যা?",
      "Cache policy ও peak resource estimate লিখুন",
      "একই key cache miss করলে ১০০ request-এর জন্য একটি upstream fetch share করুন।"
    ],
    [
      6,
      "k6",
      "Performance budgets & regression tests",
      "Thresholds, workload mix, steady state, percentile budget",
      [
        "Traffic mix বানান",
        "p95 ও error thresholds নির্ধারণ করুন",
        "একটি deliberate slow change দিয়ে regression check করুন"
      ],
      "Errors বাড়লে p95 কমতে পারে কেন?",
      "Failing threshold CI বা local run-এ ধরা পড়ে",
      "p95 < 250 ms এবং error rate < 1% একটি উদাহরণ budget।"
    ],
    [
      7,
      "hf",
      "Tokenizer, transformers & generation",
      "Subword tokens, attention, context window, decoding",
      [
        "একই বাক্য tokenizer-এ চালান",
        "long input truncate করুন",
        "temperature বদলে outputs তুলনা করুন"
      ],
      "Context limit input এবং output-কে কীভাবে প্রভাবিত করে?",
      "Token count ও output variation নথিভুক্ত আছে",
      "একই শব্দ tokenizer ভেদে এক token বা একাধিক token হতে পারে।"
    ],
    [
      7,
      "hf",
      "RAG evaluation & model adaptation",
      "Retrieval recall, groundedness, fine-tuning, held-out eval",
      [
        "২০টি question-answer-source লিখুন",
        "retrieval ও generation আলাদা score করুন",
        "prompt change-এর ফল তুলনা করুন"
      ],
      "Retrieval বাদ পড়লে fine-tuning কেন সরাসরি সমাধান নাও হতে পারে?",
      "Baseline ও changed system-এর পৃথক scores আছে",
      "২০ প্রশ্নের ১৬টিতে correct source top-k-তে থাকলে retrieval hit rate ৮০%।"
    ],
    [
      7,
      "vllm",
      "Production AI service & monitoring",
      "GPU memory, KV cache, caching, fallback, model versions",
      [
        "Small model serve করুন",
        "latency, token cost ও quality log করুন",
        "timeout ও empty retrieval-এর fallback test করুন"
      ],
      "Long contexts KV cache-কে কীভাবে প্রভাবিত করে?",
      "Fixed suite-এ serving metrics ও fallback evidence আছে",
      "Model timeout হলে উৎসের snippets দেখিয়ে জানান যে উত্তর তৈরি করা যায়নি।"
    ],
    [
      8,
      "dynamo",
      "A distributed storage case study",
      "Requirements, consistent hashing, versioning, quorum",
      [
        "Dynamo paper থেকে problem ও assumptions লিখুন",
        "একটি write/read example আঁকুন",
        "tracker-এর সঙ্গে trade-off তুলনা করুন"
      ],
      "এই design ছোট app-এ কোন overhead যোগ করবে?",
      "একটি diagram ও প্রমাণ-সমর্থিত trade-off আছে",
      "Dynamo-এর shopping cart উদাহরণে merge policy user intent রক্ষা করতে পারে।"
    ],
    [
      8,
      "aws",
      "Operations reading & comparison",
      "Release safety, backpressure, blast radius, operational controls",
      [
        "একটি deployment article পড়ুন",
        "নিজের rollout checklist-এর সঙ্গে তুলনা করুন",
        "একটি change staging-এ যাচাই করুন"
      ],
      "Canary কোন failure সংকেত ধরতে পারবে?",
      "Source, hypothesis ও verification লিখুন",
      "Canary cohort-এ 5xx baseline ছাড়িয়ে গেলে rollout pause করার নিয়ম লিখুন।"
    ],
    [
      8,
      "pm",
      "Build a portfolio case study",
      "Design decisions, benchmark, shortcomings, next steps",
      [
        "Tracker-এর diagram ও demo বানান",
        "আগে/পরে metrics দিন",
        "একটি সীমাবদ্ধতা ও পরবর্তী experiment লিখুন"
      ],
      "আপনার design ফলাফল কোন assumption-এর ওপর নির্ভর করে?",
      "README পড়ে কাজটি চালানো ও ফল পুনরায় যাচাই করা যায়",
      "README-তে seed command, benchmark settings ও before/after ফল একসঙ্গে দিন।"
    ]
  ]
};
