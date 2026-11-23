window.curriculum = [
  [
    "Computer Science Fundamentals",
    "কম্পিউটার সায়েন্সের ভিত্তি",
    "⌘",
    "violet",
    3,
    "https://github.com/ossu/computer-science",
    "OSSU Computer Science",
    "CLI Study Tracker",
    "একটি CLI বানান যা JSON ফাইলে শেখার কাজ সংরক্ষণ, খোঁজ ও সাজাতে পারে।",
    "১০টি automated test লিখুন। ১০০ ও ১০,০০০ রেকর্ডে linear search-এর সময় তুলনা করুন।",
    [
      [
        "Programming, Git & tests",
        "Variables, functions, lists, dictionaries, exceptions, Git commits ও unit tests।",
        "একটি task যোগ, তালিকা দেখা এবং ভুল input-এ error দেখানোর Python CLI বানান।",
        "add('SQL') → list() → ['SQL']। খালি title দিলে error।"
      ],
      [
        "Data structures & Big-O",
        "Arrays, hash maps, stacks, queues, trees, BFS এবং binary search।",
        "একই task list-এ linear search এবং ID দিয়ে dictionary lookup benchmark করুন।",
        "Sorted [2, 5, 9] এ binary search দিয়ে ৫ খুঁজুন।"
      ],
      [
        "Operating systems & concurrency",
        "Process, thread, virtual memory, filesystem ও race condition।",
        "দুই worker দিয়ে একই counter update করুন। Lock যোগ করে ফল তুলনা করুন।",
        "২ worker × ১,০০০ increment শেষে counter ২,০০০ হবে।"
      ]
    ]
  ],
  [
    "Networking & Security",
    "নেটওয়ার্কিং ও নিরাপত্তা",
    "◎",
    "blue",
    3,
    "https://www.cloudflare.com/learning/",
    "Cloudflare Learning Center",
    "Secure Study API",
    "নিজের লোকাল API-তে HTTPS, authorization ও input validation অনুশীলন করুন।",
    "একজন ব্যবহারকারী অন্যের task দেখতে পারে না, এমন automated authorization test লিখুন।",
    [
      [
        "DNS, IP & transport",
        "DNS resolution, IP routing, TCP, UDP ও ports।",
        "নিজের ডোমেইন বা example.com-এর DNS record দেখুন। Browser Network tab-এ timing পর্যবেক্ষণ করুন।",
        "DNS hostname থেকে IP খোঁজে। TCP নির্ভরযোগ্য byte stream দেয়।"
      ],
      [
        "HTTP, TLS & APIs",
        "Methods, status codes, headers, cookies, TLS ও request lifecycle।",
        "একটি GET ও POST endpoint লিখুন। Valid ও invalid payload-এর response যাচাই করুন।",
        "POST /tasks → 201। ভুল payload → 400।"
      ],
      [
        "Authentication & authorization",
        "Sessions, password hashing, role checks, least privilege ও secret management।",
        "নিজের অ্যাপে owner ও viewer role বানান। প্রতিটি role-এর অনুমতি unit test দিয়ে যাচাই করুন।",
        "Viewer পড়তে পারবে, delete করতে গেলে 403।"
      ]
    ]
  ],
  [
    "Databases & Data Modeling",
    "ডেটাবেজ ও ডেটা মডেলিং",
    "▤",
    "mint",
    4,
    "https://15445.courses.cs.cmu.edu/",
    "CMU Database Systems",
    "Study Tracker Database",
    "Users, topics, lessons, completions ও notes-এর relational schema বানান।",
    "ERD, migrations ও seed data দিন। Duplicate completion DB constraint দিয়ে ঠেকান।",
    [
      [
        "Relational modeling & SQL",
        "Primary/foreign keys, normalization, joins, grouping ও constraints।",
        "PostgreSQL-এ schema বানিয়ে প্রতিটি topic-এর completion count query লিখুন।",
        "completions(user_id, lesson_id) জোড়াটি unique রাখুন।"
      ],
      [
        "Indexes & query plans",
        "B-tree index, selectivity, EXPLAIN ANALYZE ও write cost।",
        "বড় seed dataset-এ query plan index যোগের আগে ও পরে তুলনা করুন।",
        "user_id দিয়ে filter করলে index scan হচ্ছে কি না plan-এ দেখুন।"
      ],
      [
        "Transactions & storage choices",
        "ACID, isolation, rollback, SQL বনাম key-value ও document stores-এর trade-off।",
        "একটি transaction-এ completion ও audit entry লিখুন। দ্বিতীয় write ব্যর্থ হলে rollback যাচাই করুন।",
        "Audit insert ব্যর্থ → completion-ও commit হবে না।"
      ]
    ]
  ],
  [
    "System Design & Architecture",
    "সিস্টেম ডিজাইন ও আর্কিটেকচার",
    "◇",
    "orange",
    4,
    "https://roadmap.sh/system-design",
    "System Design Roadmap",
    "Study Tracker Design Doc",
    "একটি modular monolith-এর diagram, API contract ও capacity estimate লিখুন।",
    "দুটি design option-এর latency, cost ও maintenance trade-off লিখুন।",
    [
      [
        "Requirements & estimation",
        "Functional requirements, SLO, workload, capacity ও failure assumptions।",
        "Daily users, actions ও peak factor ধরে read/write throughput হিসাব করুন।",
        "১০,০০০ × ২০ action/day ≈ ২.৩ average requests/sec।"
      ],
      [
        "Architecture & API boundaries",
        "Modular monolith, components, stateless requests, pagination ও API contracts।",
        "Client → API → DB diagram আঁকুন। Progress, notes ও catalog-এর interfaces নির্ধারণ করুন।",
        "GET /lessons?limit=20&cursor=..."
      ],
      [
        "Cache, queue & design review",
        "Cache-aside, TTL, async work, load balancing ও trade-off analysis।",
        "Read-heavy catalog-এ cache যোগ করুন। পরিবর্তনের পর invalidation আচরণ লিখুন।",
        "Lesson edit হলে catalog cache key invalidate হবে।"
      ]
    ]
  ],
  [
    "Cloud, DevOps & Infrastructure",
    "ক্লাউড ও ডেপ্লয়মেন্ট",
    "☁",
    "blue",
    4,
    "https://sre.google/books/",
    "Google SRE Books",
    "Deploy the Study API",
    "Docker-এ API ও PostgreSQL চালান। CI, staging, metrics ও rollback যোগ করুন।",
    "একটি staging deploy ও rollback করুন। Backup থেকে আলাদা database-এ restore যাচাই করুন।",
    [
      [
        "Linux, containers & networking",
        "Shell, permissions, logs, images, volumes ও container networks।",
        "Docker Compose দিয়ে API + DB চালান। DB data volume-এ রাখুন।",
        "Container recreate করেও seeded row দেখা যাবে।"
      ],
      [
        "CI/CD & cloud fundamentals",
        "Tests, artifacts, VPC, IAM, staging, deployment ও rollback।",
        "প্রতি push-এ test ও image build চালান। Staging-এ release tag deploy করুন।",
        "v2 health check fail → staging-এ v1 restore।"
      ],
      [
        "Observability, backups & SLOs",
        "Metrics, logs, traces, health probes, backup/restore; এরপর IaC ও Kubernetes ধারণা।",
        "Latency ও errors chart করুন। Backup restore করে row count যাচাই করুন।",
        "৩০ দিনের ৯৯.৯% availability SLO-তে প্রায় ৪৩ মিনিট error budget।"
      ]
    ]
  ],
  [
    "Distributed Systems",
    "ডিস্ট্রিবিউটেড সিস্টেম",
    "⌬",
    "violet",
    5,
    "https://pdos.csail.mit.edu/6.824/",
    "MIT 6.5840",
    "Reliable Background Jobs",
    "একাধিক worker দিয়ে report jobs চালান। Retry ও duplicate delivery সামলান।",
    "একই job দুইবার deliver করুন এবং worker restart করুন। Output একবারই তৈরি হবে।",
    [
      [
        "Partial failures & retries",
        "Timeouts, exponential backoff, jitter, idempotency ও delivery semantics।",
        "লোকাল worker-এ একটি transient failure simulate করে bounded retry দিন।",
        "job_id unique হলে একই report দ্বিতীয়বার persist হবে না।"
      ],
      [
        "Replication & consistency",
        "Leader/follower, replication lag, quorum, linearizability ও eventual consistency।",
        "কাগজে তিন replica-এর read/write timeline আঁকুন। Stale read চিহ্নিত করুন।",
        "Leader-এ v2, follower-এ v1 → follower থেকে stale read।"
      ],
      [
        "Consensus & partitioning",
        "Raft leader election, log replication, split-brain ও partition keys।",
        "MIT lab বা ছোট simulation-এ leader বন্ধ করে নতুন election পর্যবেক্ষণ করুন।",
        "৩ node-এর cluster-এ majority ২। একা node commit করবে না।"
      ]
    ]
  ],
  [
    "Performance & Scalability",
    "পারফরম্যান্স ও স্কেলিং",
    "↗",
    "orange",
    3,
    "https://aws.amazon.com/builders-library/",
    "AWS Builders’ Library",
    "Latency Benchmark",
    "নিজের API-তে load test চালিয়ে bottleneck চিহ্নিত করুন এবং একটি measurable improvement করুন।",
    "একই dataset ও load-এ before/after p50, p95, throughput এবং error rate দিন।",
    [
      [
        "Measurement & profiling",
        "Latency percentiles, throughput, utilization, profiling ও reproducible baselines।",
        "নিজের API-তে নির্দিষ্ট concurrency দিয়ে p50/p95 মাপুন। Slow query log দেখুন।",
        "p95 ২০০ ms মানে প্রায় ৯৫% request ২০০ ms-এর মধ্যে।"
      ],
      [
        "Optimize the bottleneck",
        "N+1 queries, connection pools, caching, compression ও batching।",
        "N+1 query থাকলে JOIN বা batching ব্যবহার করুন। একই load দিয়ে পুনরায় মাপুন।",
        "১০১ query থেকে ২ query হলে latency ও DB CPU রিপোর্ট করুন।"
      ],
      [
        "Capacity & overload",
        "Horizontal scaling, queue depth, backpressure, rate limits ও load shedding।",
        "লোকাল API-তে load বাড়িয়ে saturation point মাপুন। Backpressure দিয়ে পুনরায় run করুন।",
        "Queue limit ছাড়ালে bounded 503 response ও recovery time রেকর্ড করুন।"
      ]
    ]
  ],
  [
    "AI & Modern AI Infrastructure",
    "এআই ও আধুনিক এআই অবকাঠামো",
    "✦",
    "pink",
    5,
    "https://huggingface.co/learn/llm-course/chapter1/1",
    "Hugging Face LLM Course",
    "Cited Study Assistant",
    "নিজের নোটের ওপর retrieval ও citations সহ Q&A বানান।",
    "২০টি প্রশ্নে retrieval hit rate, citation accuracy, p95 latency ও token cost রিপোর্ট করুন।",
    [
      [
        "ML, evaluation & transformers",
        "Train/validation/test, precision/recall, tokenization, embeddings ও attention।",
        "ছোট text classifier বানান। Holdout examples-এ baseline-এর সঙ্গে তুলনা করুন।",
        "Positive predictions-এর মধ্যে correct positive-এর অনুপাত precision।"
      ],
      [
        "Retrieval & grounding",
        "Chunking, vector search, top-k retrieval, citations এবং evaluation sets।",
        "নিজের notes index করুন। পাঁচটি প্রশ্নে source chunk ও expected answer লিখুন।",
        "উৎস অনুপস্থিত হলে assistant ‘উত্তর পাওয়া যায়নি’ বলবে।"
      ],
      [
        "Serving & MLOps",
        "Inference, streaming, batching, quantization, model versioning ও monitoring।",
        "লোকাল বা hosted model দিয়ে fixed dataset-এ latency ও quality তুলনা করুন।",
        "Batch size ১ বনাম ৪-এর throughput ও p95 আলাদা করে মাপুন।"
      ]
    ]
  ],
  [
    "Engineering Blogs",
    "ইঞ্জিনিয়ারিং কেস স্টাডি",
    "▧",
    "mint",
    null,
    "https://sre.google/books/",
    "Google SRE & case studies",
    "Engineering Case Study Journal",
    "প্রতি সপ্তাহে একটি article পড়ে problem, constraints, design, ফল ও trade-off লিখুন।",
    "তিনটি case study note এবং নিজের project-এ যাচাই করা একটি ধারণা জমা দিন।",
    [
      [
        "Read a real architecture",
        "Google SRE থেকে SLO ও monitoring case study পড়ুন।",
        "এক পৃষ্ঠায় problem, scale, constraints, decision ও evidence লিখুন।",
        "Service goal → metric → target → measurement window।"
      ],
      [
        "Compare reliability approaches",
        "AWS Builders’ Library-তে retries, timeouts ও jitter নিয়ে পড়ুন।",
        "নিজের worker-এ retry budget সেট করে load-এর প্রভাব মাপুন।",
        "Write-up-এ কী ঘটেছে এবং কী অনুমান করেছেন আলাদা করুন।"
      ],
      [
        "Write your own postmortem",
        "Timeline, impact, contributing factors, detection ও follow-up ownership।",
        "নিজের staging service-এ একটি planned failure থেকে ছোট postmortem লিখুন।",
        "Action item-এ owner, verification এবং target date দিন।"
      ]
    ]
  ]
];
