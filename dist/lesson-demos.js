window.lessonDemos = {
  "0-0": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python tracker.py",
    "out": "['SQL']\nEmpty title",
    "explain": "Tasks list-এ title ঢোকানোর আগে strip দিয়ে whitespace বাদ যায়। ValueError ভুল input-কে আলাদা পথে পাঠায়।",
    "task": "Duplicate title যোগ করলে ValueError দিন।",
    "code": "tasks = []\ndef add(title):\n    title = title.strip()\n    if not title:\n        raise ValueError(\"Empty title\")\n    tasks.append(title)\n\nadd(\" SQL \")\nprint(tasks)\ntry:\n    add(\" \")\nexcept ValueError as error:\n    print(error)"
  },
  "0-1": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "2\ntrue",
    "explain": "Array-তে মান ধরে খুঁজতে indexOf প্রতিটি item দেখতে পারে। Set membership-এর জন্য তৈরি।",
    "task": "9-এর জায়গায় 7 খুঁজুন। দুটো ফল কী হবে?",
    "code": "const ids = [2, 5, 9];\nconst lookup = new Set(ids);\nconsole.log(ids.indexOf(9));\nconsole.log(lookup.has(9));"
  },
  "0-2": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python threads.py",
    "out": "2000",
    "explain": "Lock একই সময়ে একটিমাত্র thread-কে shared counter update করতে দেয়। join ফল পড়ার আগে thread শেষ হওয়া নিশ্চিত করে।",
    "task": "Worker-এর সংখ্যা ৪ করুন।",
    "code": "from threading import Thread, Lock\n\ncount = 0\nlock = Lock()\n\ndef work():\n    global count\n    for _ in range(1000):\n        with lock:\n            count += 1\n\nworkers = [Thread(target=work) for _ in range(2)]\nfor worker in workers:\n    worker.start()\nfor worker in workers:\n    worker.join()\nprint(count)"
  },
  "0-3": {
    "lang": "shell",
    "setup": "Git এবং একটি নতুন খালি folder",
    "run": "টার্মিনালে লাইনগুলো চালান",
    "out": "hello.txt দেখা যাবে",
    "explain": "git add ফাইলের পরিবর্তন staging area-তে রাখে। --cached দিলে Git staged diff দেখে।",
    "task": "আরেকটি লাইন যোগ করুন। git diff এবং git diff --cached-এর ফল তুলনা করুন।",
    "code": "git init\necho hello > hello.txt\ngit add hello.txt\ngit diff --cached --name-only"
  },
  "0-4": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "2\ntrue",
    "explain": "Set একই মান একবার রাখে। Every দিয়ে প্রতিটি মানের ওপর একটি শর্ত যাচাই করা যায়।",
    "task": "topics-এ খালি string যোগ করে শর্তটি আবার চালান।",
    "code": "const topics = [\"HTTP\", \"SQL\", \"SQL\"];\nconst unique = new Set(topics);\nconsole.log(unique.size);\nconsole.log([...unique].every(name => name.length > 0));"
  },
  "0-5": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python binary.py",
    "out": "1101\n13",
    "explain": "bin decimal integer-এর binary representation দেয়। int-এর দ্বিতীয় argument 2 হলে string-টি base 2 হিসেবে পড়ে।",
    "task": "42-এর binary বের করুন এবং আবার decimal-এ ফেরান।",
    "code": "number = 13\nbits = bin(number)[2:]\nprint(bits)\nprint(int(bits, 2))"
  },
  "1-0": {
    "lang": "shell",
    "setup": "Python 3 এবং নেটওয়ার্ক সংযোগ",
    "run": "টার্মিনালে চালান",
    "out": "TCP endpoint addresses, IP বদলাতে পারে",
    "explain": "getaddrinfo hostname resolve করে। SOCK_STREAM দিলে TCP-র জন্য উপযোগী ফল চাওয়া হয়।",
    "task": "example.org দিয়ে আবার চালিয়ে address family তুলনা করুন।",
    "code": "python -c \"import socket; print(socket.getaddrinfo('example.com', 443, type=socket.SOCK_STREAM))\""
  },
  "1-1": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python http_demo.py তারপর browser-এ http://127.0.0.1:8000 খুলুন",
    "out": "HTTP 200, body: hello",
    "explain": "do_GET একটি GET request সামলায়। Status line ও headers পাঠানোর পর body লেখা হয়।",
    "task": "/missing path-এর জন্য 404 ফেরান।",
    "code": "from http.server import BaseHTTPRequestHandler, HTTPServer\n\nclass Handler(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.send_header(\"Content-Type\", \"text/plain\")\n        self.end_headers()\n        self.wfile.write(b\"hello\")\n\nHTTPServer((\"127.0.0.1\", 8000), Handler).serve_forever()"
  },
  "1-2": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python access.py",
    "out": "True\nFalse",
    "explain": "এই policy user ID আর task-এর owner ID মেলায়। Server authenticated session থেকে user ID পাবে।",
    "task": "Missing user ID ও missing owner ID যেন access না পায়, test যোগ করুন।",
    "code": "def can_read(user_id, task):\n    return user_id is not None and user_id == task[\"owner_id\"]\n\ntask = {\"id\": 8, \"owner_id\": 42}\nprint(can_read(42, task))\nprint(can_read(17, task))"
  },
  "1-3": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python subnet.py",
    "out": "10.0.0.64\n10.0.0.127\n62",
    "explain": "/26-এ ৬টি host bit, তাই মোট ৬৪ address। এই IPv4 subnet-এ network ও broadcast বাদে ৬২ host address।",
    "task": "Prefix /27 করে network, broadcast ও host count বের করুন।",
    "code": "from ipaddress import ip_network\n\nnetwork = ip_network(\"10.0.0.64/26\")\nprint(network.network_address)\nprint(network.broadcast_address)\nprint(len(list(network.hosts())))"
  },
  "1-4": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python origins.py",
    "out": "True\nFalse",
    "explain": "Origin-এর scheme, host এবং port মিলে exact match করতে হয়। এই function allowlist-এর সিদ্ধান্ত দেখায়।",
    "task": "https://localhost:3000 যোগ করে কী ফল হবে দেখুন।",
    "code": "ALLOWED = {\"http://localhost:3000\"}\n\ndef is_allowed(origin):\n    return origin in ALLOWED\n\nprint(is_allowed(\"http://localhost:3000\"))\nprint(is_allowed(\"http://localhost:8000\"))"
  },
  "1-5": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python validate.py",
    "out": "SQL\nInvalid title",
    "explain": "Validation input-এর type ও দৈর্ঘ্য পরীক্ষা করে। নিচের rule নিজের API-তে request data গ্রহণের আগে চালাতে পারেন।",
    "task": "পাঁচটি boundary case-এর জন্য assert লিখুন।",
    "code": "def clean_title(value):\n    if isinstance(value, str) and 1 <= len(value.strip()) <= 80:\n        return value.strip()\n    raise ValueError(\"Invalid title\")\n\nprint(clean_title(\" SQL \"))\ntry:\n    clean_title(\" \")\nexcept ValueError as error:\n    print(error)"
  },
  "2-0": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "psql session-এ চালান",
    "out": "Databases → 2, Networking → 0",
    "explain": "LEFT JOIN matching lesson না থাকলেও topic রাখে। COUNT(l.id) NULL গোনে না।",
    "task": "INNER JOIN দিয়ে চালিয়ে Networking row-এর ফল দেখুন।",
    "code": "CREATE TEMP TABLE topic (id int PRIMARY KEY, name text);\nCREATE TEMP TABLE lesson (id int PRIMARY KEY, topic_id int REFERENCES topic(id));\nINSERT INTO topic VALUES (1, 'Databases'), (2, 'Networking');\nINSERT INTO lesson VALUES (10,1), (11,1);\nSELECT t.name, COUNT(l.id) AS lessons\nFROM topic t LEFT JOIN lesson l ON l.topic_id = t.id\nGROUP BY t.id ORDER BY t.id;"
  },
  "2-1": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "একই psql session-এ চালান",
    "out": "Plan বদলাতে পারে। Index থাকলে এই selective query-তে index scan খুঁজুন।",
    "explain": "Planner estimated cost থেকে scan বেছে নেয়। EXPLAIN ANALYZE query চালিয়ে actual timing দেখায়।",
    "task": "WHERE id > 100 দিয়ে বেশি rows ফেরান এবং plan তুলনা করুন।",
    "code": "CREATE TEMP TABLE bench AS SELECT generate_series(1, 50000) AS id;\nANALYZE bench;\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM bench WHERE id = 40100;\nCREATE INDEX ON bench (id);\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM bench WHERE id = 40100;"
  },
  "2-2": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "psql session-এ চালান",
    "out": "balance = 100",
    "explain": "ROLLBACK transaction-এর মধ্যে হওয়া UPDATE বাদ দেয়। COMMIT দিলে সেটি স্থায়ী হয়।",
    "task": "ROLLBACK-এর জায়গায় COMMIT দিয়ে তুলনা করুন।",
    "code": "CREATE TEMP TABLE wallet (balance int);\nINSERT INTO wallet VALUES (100);\nBEGIN;\nUPDATE wallet SET balance = balance - 30;\nROLLBACK;\nSELECT balance FROM wallet;"
  },
  "2-3": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "psql session-এ চালান",
    "out": "id 1-এর status pending",
    "explain": "পুরোনো rows-এ status backfill করার পরে NOT NULL যোগ করা হচ্ছে। Default নতুন row-এর জন্য।",
    "task": "id 2 status ছাড়া insert করে default যাচাই করুন।",
    "code": "CREATE TEMP TABLE migration_task (id int PRIMARY KEY);\nINSERT INTO migration_task VALUES (1);\nALTER TABLE migration_task ADD COLUMN status text;\nUPDATE migration_task SET status = 'pending';\nALTER TABLE migration_task ALTER COLUMN status SET DEFAULT 'pending';\nALTER TABLE migration_task ALTER COLUMN status SET NOT NULL;\nSELECT * FROM migration_task;"
  },
  "2-4": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "psql session-এ চালান",
    "out": "block_size ও wal_level-এর বর্তমান মান",
    "explain": "Block size DB page-এর আকার দেখায়। WAL level কী ধরনের তথ্য WAL-এ রাখা হয় তা নিয়ন্ত্রণ করে।",
    "task": "pg_settings থেকে দুই setting-এর description দেখুন।",
    "code": "SHOW block_size;\nSHOW wal_level;\nSELECT name, setting, unit FROM pg_settings\nWHERE name IN ('block_size', 'wal_level');"
  },
  "2-5": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "psql session-এ চালান",
    "out": "title SQL, topic database",
    "explain": "JSONB document-এর ভেতরে flexible field থাকে। ->> নিয়ে text হিসেবে filter করা যায়।",
    "task": "একটি note-এ topic বাদ দিয়ে একই filter চালান।",
    "code": "CREATE TEMP TABLE docs (id int PRIMARY KEY, body jsonb);\nINSERT INTO docs VALUES (1, '{\"title\":\"SQL\",\"topic\":\"database\"}');\nSELECT body->>'title' AS title, body->>'topic' AS topic\nFROM docs WHERE body->>'topic' = 'database';"
  },
  "3-0": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "2.31\n13.89",
    "explain": "Daily actions-কে ৮৬,৪০০ দিয়ে ভাগে average RPS। Peak factor একটি অনুমান, যা মাপা traffic দিয়ে পরে সংশোধন করবেন।",
    "task": "Users দ্বিগুণ করে RPS হিসাব করুন।",
    "code": "const dailyUsers = 10000;\nconst actionsPerUser = 20;\nconst average = dailyUsers * actionsPerUser / 86400;\nconsole.log(average.toFixed(2));\nconsole.log((average * 6).toFixed(2));"
  },
  "3-1": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "SQL",
    "explain": "Module boundary দিয়ে storage lookup-কে feature logic থেকে আলাদা রাখা যায়। Function-টি store-এর interface ব্যবহার করে।",
    "task": "Map-এর বদলে নিজের get method-সহ object দিন।",
    "code": "function titleFor(store, id) {\n  return store.get(id)?.title ?? \"Unknown task\";\n}\nconst store = new Map([[1, {title: \"SQL\"}]]);\nconsole.log(titleFor(store, 1));"
  },
  "3-2": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "SQL, SQL, PostgreSQL আলাদা লাইনে",
    "explain": "Cache miss হলে origin থেকে value আসে। Update-এর পরে cache delete করলে পরের read নতুন value আনে।",
    "task": "cache.delete লাইন বাদ দিয়ে stale value দেখুন।",
    "code": "const origin = new Map([[1, \"SQL\"]]);\nconst cache = new Map();\nfunction read(id) {\n  if (!cache.has(id)) cache.set(id, origin.get(id));\n  return cache.get(id);\n}\nconsole.log(read(1));\norigin.set(1, \"PostgreSQL\");\nconsole.log(read(1));\ncache.delete(1);\nconsole.log(read(1));"
  },
  "3-3": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "{\"ids\":[11,12],\"nextCursor\":12}",
    "explain": "Cursor হলো শেষ ফেরানো ID। পরের page-এ তার চেয়ে বড় IDs নেওয়া হয়।",
    "task": "cursor 12 দিয়ে দ্বিতীয় page নিন।",
    "code": "function page(ids, cursor, limit) {\n  const remaining = ids.filter(id => id > cursor);\n  const results = remaining.slice(0, limit);\n  return {ids: results, nextCursor: remaining.length > limit ? results.at(-1) : null};\n}\nconsole.log(page([11, 12, 13, 14], 0, 2));"
  },
  "3-4": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python tenants.py",
    "out": "['SQL']",
    "explain": "একই list-এ দুই tenant-এর rows থাকতে পারে। Query-তে server-verified tenant ID দিয়ে scope ঠিক করুন।",
    "task": "Tenant B-এর জন্য আলাদা assertion লিখুন।",
    "code": "rows = [(\"A\", \"SQL\"), (\"B\", \"Docker\")]\n\ndef tasks_for(tenant_id):\n    return [title for tenant, title in rows if tenant == tenant_id]\n\nassert tasks_for(\"A\") == [\"SQL\"]\nprint(tasks_for(\"A\"))"
  },
  "3-5": {
    "lang": "mermaid",
    "setup": "Mermaid Live Editor",
    "run": "Diagram editor-এ paste করুন",
    "out": "User থেকে API, DB, Queue এবং Worker-এর flow",
    "explain": "Report job queue-তে দিয়ে API দ্রুত response দিতে পারে। Worker ফল DB-তে রাখে।",
    "task": "Worker থেকে metrics system-এর edge যোগ করুন।",
    "code": "flowchart LR\n    User --> API\n    API --> Database\n    API --> Queue\n    Queue --> Worker\n    Worker --> Database"
  },
  "4-0": {
    "lang": "dockerfile",
    "setup": "Docker; নিচের content Dockerfile নামে save করুন",
    "run": "docker build -t stackpath-demo . তারপর docker run --rm stackpath-demo",
    "out": "container ready",
    "explain": "FROM base image নির্ধারণ করে। CMD container-এর default command।",
    "task": "Message বদলে rebuild করে নতুন image চালান।",
    "code": "FROM python:3.12-slim\nCMD [\"python\", \"-c\", \"print('container ready')\"]"
  },
  "4-1": {
    "lang": "yaml",
    "setup": "GitHub repository; .github/workflows/check.yml হিসেবে save করুন",
    "run": "Commit push করে Actions tab খুলুন",
    "out": "check job success",
    "explain": "Push trigger একটি runner চালায়। Python assertion fail করলে step nonzero status দেয়।",
    "task": "2 + 2 == 5 দিয়ে failure দেখুন।",
    "code": "name: Check\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Check an assumption\n        run: python3 -c \"assert 2 + 2 == 4\""
  },
  "4-2": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "99.80%\nfalse",
    "explain": "Success ratio দিয়ে availability SLI বের হয়। Target 99.9% হলে 1000 request-এ একটি failure budget-এর মধ্যে।",
    "task": "failed = 1 করে দেখুন।",
    "code": "const total = 1000;\nconst failed = 2;\nconst sli = (total - failed) / total;\nconsole.log((sli * 100).toFixed(2) + \"%\");\nconsole.log(sli >= 0.999);"
  },
  "4-3": {
    "lang": "hcl",
    "setup": "Terraform; main.tf নামে save করুন",
    "run": "terraform init তারপর terraform plan",
    "out": "Plan-এ terraform_data.learning add দেখাবে",
    "explain": "terraform_data দিয়ে provider account ছাড়াই desired state ও plan-এর ধারণা দেখা যায়।",
    "task": "input বদলে নতুন plan পড়ুন।",
    "code": "terraform {\n  required_version = \">= 1.4\"\n}\n\nresource \"terraform_data\" \"learning\" {\n  input = \"private-database\"\n}"
  },
  "4-4": {
    "lang": "yaml",
    "setup": "লোকাল Kubernetes cluster; app.yml নামে save করুন",
    "run": "kubectl apply -f app.yml তারপর kubectl rollout status deployment/study-web",
    "out": "deployment successfully rolled out",
    "explain": "Deployment pod তৈরি করে। HTTP readiness probe ready হওয়ার আগে service traffic আটকাতে সাহায্য করে।",
    "task": "replicas 2 করে kubectl get pods দেখুন।",
    "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: study-web\nspec:\n  replicas: 1\n  selector:\n    matchLabels: {app: study-web}\n  template:\n    metadata:\n      labels: {app: study-web}\n    spec:\n      containers:\n        - name: web\n          image: nginx:1.27-alpine\n          readinessProbe:\n            httpGet: {path: /, port: 80}"
  },
  "4-5": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python timing.py",
    "out": "api: প্রায় ২০ ms, পরিবেশভেদে বদলাবে",
    "explain": "perf_counter elapsed duration মাপে। বাস্তব tracing-এ একই request ID দিয়ে একাধিক span যুক্ত হয়।",
    "task": "একটি db step যোগ করে API duration-এর সঙ্গে তুলনা করুন।",
    "code": "from time import perf_counter, sleep\n\nstart = perf_counter()\nsleep(0.02)\nprint(f\"api: {(perf_counter() - start) * 1000:.1f} ms\")"
  },
  "5-0": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python jobs.py",
    "out": "{'job-1': 'report'}",
    "explain": "Exception হলে retry করা হয়। result dictionary একই ID-কে একবারই রাখে। বাস্তব worker-এ durable unique constraint ব্যবহার করুন।",
    "task": "Repeated failure-এ loop সীমার মধ্যে থামে যাচাই করুন।",
    "code": "results = {}\n\ndef run(job_id):\n    if job_id in results:\n        return\n    for attempt in range(2):\n        try:\n            if attempt == 0:\n                raise TimeoutError()\n            results[job_id] = \"report\"\n            return\n        except TimeoutError:\n            if attempt == 1:\n                raise\n\nrun(\"job-1\")\nrun(\"job-1\")\nprint(results)"
  },
  "5-1": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "2\n1\n2",
    "explain": "Leader write-এর পর follower কিছু সময় পুরোনো value ফেরাতে পারে। Replication apply হলে follower update হয়।",
    "task": "দ্বিতীয় write-টি follower-এ apply করার আগে reads যোগ করুন।",
    "code": "let leader = 1;\nlet follower = 1;\nleader = 2;\nconsole.log(leader);\nconsole.log(follower);\nfollower = leader;\nconsole.log(follower);"
  },
  "5-2": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "false\ntrue",
    "explain": "তিন node-এর quorum দুই। এই simulation quorum হিসাব দেখায়। Raft commit করার জন্য term ও log-এর নিয়মও প্রযোজ্য।",
    "task": "Cluster ৫ node করে দরকারি votes বের করুন।",
    "code": "function hasMajority(votes, nodes) {\n  return votes >= Math.floor(nodes / 2) + 1;\n}\nconsole.log(hasMajority(1, 3));\nconsole.log(hasMajority(2, 3));"
  },
  "5-3": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "[3,3,3,3]\n[12,0,0,0]",
    "explain": "Modulo এখানে toy shard mapping। একই hot key বারবার আসলে সব request একই shard-এ যায়।",
    "task": "Shard সংখ্যা ৫ করে sequential ও hot-key distribution তুলনা করুন।",
    "code": "function distribution(ids, shardCount) {\n  const counts = Array(shardCount).fill(0);\n  for (const id of ids) counts[id % shardCount]++;\n  return counts;\n}\nconsole.log(distribution(Array.from({length: 12}, (_, i) => i), 4));\nconsole.log(distribution(Array(12).fill(0), 4));"
  },
  "5-4": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "psql session-এ চালান",
    "out": "Task 7 এবং pending event 7",
    "explain": "একই transaction-এর কারণে task আর event একই সঙ্গে commit হয়। Publisher pending events পরে পড়ে।",
    "task": "COMMIT বদলে ROLLBACK দিয়ে দুই টেবিলের ফল দেখুন।",
    "code": "CREATE TEMP TABLE task (id int PRIMARY KEY);\nCREATE TEMP TABLE outbox (task_id int REFERENCES task(id), sent boolean DEFAULT false);\nBEGIN;\nINSERT INTO task VALUES (7);\nINSERT INTO outbox (task_id) VALUES (7);\nCOMMIT;\nSELECT * FROM task;\nSELECT * FROM outbox WHERE NOT sent;"
  },
  "5-5": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "{\"version\":3,\"text\":\"edit B\"}",
    "explain": "এই উদাহরণে বড় version জেতে, তাই edit A হারায়। Concurrent updates-এ version tie বা merge policy আলাদা সিদ্ধান্ত চায়।",
    "task": "দুই update-এর version এক করে result ব্যাখ্যা করুন।",
    "code": "const edits = [{version: 2, text: \"edit A\"}, {version: 3, text: \"edit B\"}];\nconst latest = edits.reduce((a, b) => a.version >= b.version ? a : b);\nconsole.log(latest);"
  },
  "6-0": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "50\n300",
    "explain": "Nearest-rank percentile sorted list থেকে ceil(n × p) position নেয়। Tail latency গড়ের চেয়ে বেশি হতে পারে।",
    "task": "শেষ latency 1000 করে p50 ও p95 তুলনা করুন।",
    "code": "const timings = [17, 21, 50, 70, 300];\nfunction percentile(values, p) {\n  const sorted = [...values].sort((a, b) => a - b);\n  return sorted[Math.ceil(sorted.length * p) - 1];\n}\nconsole.log(percentile(timings, 0.5));\nconsole.log(percentile(timings, 0.95));"
  },
  "6-1": {
    "lang": "sql",
    "setup": "PostgreSQL, psql",
    "run": "psql session-এ চালান",
    "out": "1 → SQL, 2 → Docker",
    "explain": "JOIN দিয়ে দুইটি task-এর topic একটি query-তে আনা যায়। App থেকে প্রতিটি task-এর জন্য query পাঠানোর দরকার পড়ে না।",
    "task": "একটি task-এর topic_id বদলে output তুলনা করুন।",
    "code": "CREATE TEMP TABLE perf_topic (id int PRIMARY KEY, name text);\nCREATE TEMP TABLE perf_task (id int PRIMARY KEY, topic_id int);\nINSERT INTO perf_topic VALUES (1,'SQL'), (2,'Docker');\nINSERT INTO perf_task VALUES (1,1), (2,2);\nSELECT perf_task.id, perf_topic.name\nFROM perf_task JOIN perf_topic ON perf_topic.id = perf_task.topic_id\nORDER BY perf_task.id;"
  },
  "6-2": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "accepted\naccepted\nbusy",
    "explain": "Bounded queue capacity ছাড়ালে কাজ ফিরিয়ে দেয়। Callers অপেক্ষা বা retry নীতি প্রয়োগ করতে পারে।",
    "task": "একটি job সরিয়ে আবার offer করুন।",
    "code": "const queue = [];\nfunction offer(job) {\n  if (queue.length >= 2) return \"busy\";\n  queue.push(job);\n  return \"accepted\";\n}\nfor (const job of [\"a\", \"b\", \"c\"]) console.log(offer(job));"
  },
  "6-3": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python profile_demo.py",
    "out": "Profile table-এ heavy ও sum-এর calls এবং timing",
    "explain": "cProfile function call-এর সময় রেকর্ড করে। sort=cumulative nested call-সহ সময়ের ক্রম দেখায়।",
    "task": "Range দশগুণ বাড়িয়ে profile তুলনা করুন।",
    "code": "import cProfile\n\ndef heavy():\n    return sum(i*i for i in range(100000))\n\ncProfile.run(\"heavy()\", sort=\"cumulative\")"
  },
  "6-4": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "1\n3",
    "explain": "একই key-এর pending Promise ভাগ করলে তিন caller একটি upstream fetch share করে। finally শেষে map পরিষ্কার করে।",
    "task": "দুটি আলাদা key ব্যবহার করে fetch count তুলনা করুন।",
    "code": "const pending = new Map();\nlet fetches = 0;\nfunction load(key) {\n  if (!pending.has(key)) {\n    fetches++;\n    pending.set(key, Promise.resolve(key).finally(() => pending.delete(key)));\n  }\n  return pending.get(key);\n}\nPromise.all([load(\"sql\"), load(\"sql\"), load(\"sql\")]).then(values => {\n  console.log(fetches);\n  console.log(values.length);\n});"
  },
  "6-5": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "PASS\nFAIL",
    "explain": "Latency threshold এবং error threshold দুটোই মানতে হবে। একটি খারাপ হলে budget fail।",
    "task": "Boundary p95=250 এবং errors=0.01 দিয়ে পরীক্ষা করুন।",
    "code": "function budget(p95, errorRate) {\n  return p95 < 250 && errorRate < 0.01 ? \"PASS\" : \"FAIL\";\n}\nconsole.log(budget(220, 0.004));\nconsole.log(budget(260, 0.004));"
  },
  "7-0": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python metrics.py",
    "out": "0.67\n0.80",
    "explain": "Precision হলো predicted positives-এর মধ্যে correct positives। Recall হলো actual positives-এর মধ্যে সঠিক ধরা পড়া positives।",
    "task": "False negative দ্বিগুণ করে recall গণনা করুন।",
    "code": "tp, fp, fn = 8, 4, 2\nprint(f\"{tp / (tp + fp):.2f}\")\nprint(f\"{tp / (tp + fn):.2f}\")"
  },
  "7-1": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python retrieval.py",
    "out": "note-1",
    "explain": "এটি keyword overlap দিয়ে একটি ছোট retrieval baseline। প্রতিটি candidate source ID সঙ্গে রাখলে ফল যাচাই করা যায়।",
    "task": "আরেকটি note যোগ করুন। Match না পেলে None ফেরান।",
    "code": "notes = {\"note-1\": \"postgres index\", \"note-2\": \"docker image\"}\nquery = set(\"postgres tutorial\".split())\nscored = [(len(query & set(text.split())), id) for id, text in notes.items()]\nscore, source = max(scored)\nprint(source if score else None)"
  },
  "7-2": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python batching.py",
    "out": "[[0, 1], [2, 3], [4]]",
    "explain": "Batching কয়েকটি job একবারে group করে। বাস্তবে maximum batch size ও অপেক্ষার সময় উভয়ই গুরুত্বপূর্ণ।",
    "task": "Batch size ৩ করুন। শেষ batch-এর দৈর্ঘ্য লিখুন।",
    "code": "requests = list(range(5))\nsize = 2\nbatches = [requests[i:i+size] for i in range(0, len(requests), size)]\nprint(batches)"
  },
  "7-3": {
    "lang": "python",
    "setup": "Python 3; pip install transformers",
    "run": "python tokens_demo.py, প্রথমবার tokenizer download হবে",
    "out": "Token strings ও token count",
    "explain": "Tokenizer শব্দকে subword-এ ভাঙতে পারে। একই অর্থের দুই string-এর token count আলাদা হতে পারে।",
    "task": "বাংলা বাক্য দিয়ে count ও tokens তুলনা করুন।",
    "code": "from transformers import AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained(\"distilbert-base-uncased\")\ntokens = tokenizer.tokenize(\"Learning PostgreSQL is useful.\")\nprint(tokens)\nprint(len(tokens))"
  },
  "7-4": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "0.67",
    "explain": "Hit rate-এ expected source top-k-এর কোথাও থাকলেই একটি hit। Answer quality আলাদা মাপা দরকার।",
    "task": "তৃতীয় query-তে সঠিক source যোগ করে score দেখুন।",
    "code": "const evals = [[\"A\", [\"A\", \"B\"]], [\"C\", [\"B\", \"C\"]], [\"D\", [\"A\", \"B\"]]];\nconst hits = evals.filter(([expected, topK]) => topK.includes(expected));\nconsole.log((hits.length / evals.length).toFixed(2));"
  },
  "7-5": {
    "lang": "python",
    "setup": "Python 3",
    "run": "python fallback.py",
    "out": "No source found.\nSource: note-1",
    "explain": "Retrieval খালি হলে grounded answer-এর জন্য প্রয়োজনীয় context নেই। Fallback সেটি স্পষ্ট করে।",
    "task": "Source ID-ও নেই এমন record test করুন।",
    "code": "def reply(sources):\n    if not sources:\n        return \"No source found.\"\n    return f\"Source: {sources[0]}\"\n\nprint(reply([]))\nprint(reply([\"note-1\"]))"
  },
  "8-0": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "99.90%\ntrue",
    "explain": "Article-এর metric definition অনুযায়ী numerator ও denominator লিখলে claim পুনরায় গণনা করা যায়।",
    "task": "Denominator-এ যেসব request ধরা হয় না তাদের তালিকা লিখুন।",
    "code": "const sample = {successful: 9990, requests: 10000, target: 0.999};\nconsole.log((100 * sample.successful / sample.requests).toFixed(2) + \"%\");\nconsole.log(sample.successful / sample.requests >= sample.target);"
  },
  "8-1": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "100\n200\n400\n800",
    "explain": "প্রতিটি retry-এর আগে delay দ্বিগুণ হয়। বাস্তব jitter-এর জন্য bounded randomization যোগ করা যায়।",
    "task": "Delay সর্বোচ্চ ৫০০ ms-এ আটকে দিন।",
    "code": "for (let attempt = 0; attempt < 4; attempt++) {\n  console.log(100 * 2 ** attempt);\n}"
  },
  "8-2": {
    "lang": "markdown",
    "setup": "একটি Markdown editor",
    "run": "postmortem.md হিসেবে save করে preview করুন",
    "out": "Impact, timeline, evidence ও action items",
    "explain": "Timeline-এ observation লিখুন। Action item-এ owner ও যাচাইয়ের পদ্ধতি দিন।",
    "task": "Detection দেরি হলে আলাদা follow-up যোগ করুন।",
    "code": "# Staging incident\n\n## Impact\nStudy reports delayed for 3 minutes.\n\n## Timeline (UTC)\n- 10:02: worker stopped.\n- 10:05: worker recovered.\n\n## Follow-up\n- Owner: API team. Verify: alert fires within 60 seconds during a drill."
  },
  "8-3": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "[\"lesson-1\",\"lesson-2\"]",
    "explain": "এই Dynamo-inspired cart উদাহরণে union দুই branch-এর additions রাখে। Deletes থাকলে আলাদা merge semantics দরকার।",
    "task": "দুই cart-এ একই lesson যোগ করে result দেখুন।",
    "code": "const left = new Set([\"lesson-1\"]);\nconst right = new Set([\"lesson-2\"]);\nconsole.log([...new Set([...left, ...right])].sort());"
  },
  "8-4": {
    "lang": "javascript",
    "setup": "JavaScript",
    "run": "Run code",
    "out": "pause",
    "explain": "Canary-এর error rate baseline-এর চেয়ে নির্ধারিত সীমা ছাড়ালে rollout pause করে review করা যায়।",
    "task": "নমুনার সংখ্যা কম হলে সিদ্ধান্তের জন্য কী signal লাগবে লিখুন।",
    "code": "const baseline = 0.002;\nconst canary = 0.016;\nconst tolerance = 0.005;\nconsole.log(canary - baseline > tolerance ? \"pause\" : \"continue\");"
  },
  "8-5": {
    "lang": "markdown",
    "setup": "Markdown editor",
    "run": "README.md হিসেবে save করুন",
    "out": "Setup, measurement এবং limitation-এর sections",
    "explain": "Portfolio reader যেন setup ও result যাচাই করতে পারে। Before/after data একই workload থেকে নিন।",
    "task": "নিজের test command ও প্রকৃত p95 দিয়ে sample বদলান।",
    "code": "# Study Tracker\n\n## Run locally\n1. Start the API.\n2. Seed the sample data.\n3. Run the documented benchmark.\n\n## Results\nSample: baseline p95 320 ms, revised p95 210 ms.\n\n## Limit\nMeasured against one local instance."
  }
};
