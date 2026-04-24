const terminalCommands = {
  help: {
    type: "list",
    label: "Available commands",
    items: [
      "help .............. list available commands",
      "whoami ............ profile summary",
      "ls projects ....... featured build categories",
      "cat about.txt ..... background and philosophy",
      "cat skills.txt .... frontend / backend / infrastructure",
      "ping contact ...... direct contact channels",
      "./hire_me.sh ...... jump to contact section",
      "uname -a .......... system identity",
      "echo $STACK ....... core stack overview",
      "clear ............. reset terminal output",
    ],
  },
  whoami: {
    type: "multiline",
    lines: [
      "Ubaid Bin Waris",
      "Backend Engineer · AI Automation · System Builder",
      "Islamabad, Pakistan",
      "Status: ONLINE",
      "Available for freelance projects and full-time roles",
    ],
  },
  "ls projects": {
    type: "list",
    label: "Featured build categories",
    items: [
      "1. AI-powered product systems",
      "2. SaaS applications",
      "3. Portfolio and marketing engines",
      "4. Admin dashboards and analytics",
    ],
  },
  "cat about.txt": {
    type: "multiline",
    lines: [
      "Backend-focused Full Stack Engineer from Islamabad, Pakistan.",
      "Started with C++ and data structures, then moved into web systems, APIs, DevOps, and AI automation.",
      "Builds production-ready applications with a focus on performance, infrastructure, and real-world impact.",
    ],
  },
  "cat skills.txt": {
    type: "multiline",
    lines: [
      "Frontend: React.js, Next.js, Tailwind CSS, TypeScript",
      "Backend: Node.js, Express.js, REST APIs, GraphQL, MongoDB, SQL",
      "Infrastructure: Linux, Docker, PM2, AWS, Hetzner, Hostinger, server configuration",
      "Automation: AI workflows, system integration, n8n-style process thinking",
    ],
  },
  "ping contact": {
    type: "multiline",
    lines: [
      "Email: ubaidwaris34@gmail.com",
      "GitHub: github.com/UbaidBinWaris",
      "LinkedIn: linkedin.com/in/ubaidbinwaris",
      "Response time: ~24 hours",
    ],
  },
  "./hire_me.sh": {
    type: "action",
    lines: ["Executing contact handshake...", "Redirecting to contact interface..."],
    action: "scroll-contact",
  },
  "uname -a": {
    type: "multiline",
    lines: ["ubaid-portfolio Next.js 16 x86_64 GNU/Linux"],
  },
  "echo $STACK": {
    type: "multiline",
    lines: ["React · Next.js · Node.js · MongoDB · Docker · Linux"],
  },
};

export default terminalCommands;