(() => {
  const main = document.querySelector('main');
  const sandbox = `<!doctype html>
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; worker-src blob:">
    <script>
    addEventListener('message', ({source, data}) => {
      if (source !== parent || typeof data?.code !== 'string') return;
      const send = (text, done = false) => parent.postMessage({ text, done }, '*');
      const preamble = \`const show = value => {
        if (typeof value === "string") return value;
        try { return JSON.stringify(value) ?? String(value); }
        catch { return String(value); }
      };
      for (const level of ["log", "info", "warn", "error"]) {
        console[level] = (...values) => postMessage(values.map(show).join(" ").slice(0, 1000));
      };
\`;
      const url = URL.createObjectURL(new Blob([preamble, data.code], {type:'text/javascript'}));
      const worker = new Worker(url);
      let lines = 0;
      const stop = (message) => {
        clearTimeout(timer);
        worker.terminate();
        URL.revokeObjectURL(url);
        send(message, true);
      };
      const timer = setTimeout(() => stop(lines ? '' : data.noOutput), 1500);
      worker.onmessage = ({data}) => {
        if (typeof data === 'string' && lines++ < 50) send(data);
        if (lines === 50) stop(data.lineLimit);
      };
      worker.onerror = (event) => stop(event.message || 'JavaScript error');
    });
    <\/script>`;

  const activeRuns = new WeakMap();

  function run(panel, code) {
    activeRuns.get(panel)?.();
    const output = panel.querySelector('.demo-result');
    output.textContent = '';
    const frame = document.createElement('iframe');
    frame.hidden = true;
    frame.title = 'JavaScript runner';
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.srcdoc = sandbox;
    let timer;
    const cleanup = () => {
      clearTimeout(timer);
      removeEventListener('message', receive);
      frame.remove();
      activeRuns.delete(panel);
    };
    const receive = (event) => {
      if (event.source !== frame.contentWindow || event.origin !== 'null') return;
      const {text, done} = event.data || {};
      if (typeof text === 'string' && text) output.textContent += text.slice(0, 1000) + '\n';
      if (done) cleanup();
    };
    activeRuns.set(panel, cleanup);
    addEventListener('message', receive);
    frame.addEventListener('load', () => frame.contentWindow?.postMessage({code, noOutput:tr('কোনো console output পাওয়া যায়নি বা সময়সীমা শেষ হয়েছে।','No console output or execution timed out.'), lineLimit:tr('৫০ লাইন পর্যন্ত দেখানো হয়েছে।','Showing the first 50 lines.')}, '*'), {once:true});
    panel.append(frame);
    timer = setTimeout(() => {
      if (!output.textContent) output.textContent = tr('কোড চালানো যায়নি বা সময়সীমা শেষ হয়েছে।','The code could not run or timed out.');
      cleanup();
    }, 2500);
  }

  main.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-demo-action]');
    if (!button) return;
    const panel = button.closest('[data-demo]');
    const demo = window.lessonDemos[panel.dataset.demo];
    const editor = panel.querySelector('textarea');
    const code = editor?.value ?? demo.code;
    switch (button.dataset.demoAction) {
      case 'run':
        run(panel, code);
        break;
      case 'reset':
        activeRuns.get(panel)?.();
        editor.value = demo.code;
        panel.querySelector('.demo-result').textContent = '';
        editor.focus();
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(code);
          notify(tr('কোড কপি হয়েছে।','Code copied.'));
        } catch {
          notify(tr('কোড সিলেক্ট করে কপি করুন।','Select and copy the code manually.'));
        }
        break;
    }
  });
})();
