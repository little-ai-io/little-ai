# Little AI — Deep AI integration for vertical industries

Little AI works side by side with enterprises and their domain experts to turn AI into production systems that create real value. We provide consulting, system design, system integration, forward deployed engineering and AI products.

Domains: accounting, legal, geological hazard assessment, AI infrastructure.
Team experience: Microsoft, Cruise Automation, Walmart and startups.
Contact: jilong.liao@little-ai.io · GitHub: https://github.com/little-ai-io · Blog: https://jilongliao.github.io/
中文版: https://www.little-ai.io/zh/

## Services

- **Consulting**: opportunity and feasibility assessment; build / buy / adapt strategy; roadmap with measurable outcomes.
- **System design**: agent and workflow architecture; rule engines and decision tables where LLMs must not guess; evaluation, provenance and compliance design.
- **System integration**: document, CAD and database pipelines; cloud, multi-cloud and on-prem deployment; identity, security and data residency.
- **Forward deployed engineering**: engineers embed with your team and domain experts, work on your real data and systems, own delivery through to production, and transfer knowledge to your team.
- **AI products**: digital associates and report-generation agents; workbenches for expert review and sign-off; self-hosted or managed.

## How we work

1. Discover with experts: understand the work, the standards and where judgment lives.
2. Design for constraints: turn rules, compliance and data limits into architecture. Decide what AI drafts, what rules decide, what humans approve.
3. Build and integrate, embedded: forward deployed engineers build inside your environment.
4. Deliver value and iterate: measure against real outcomes and hand over a system your team owns.

## Principles

- Experts own the decisions.
- Constrained, not free-form: models are confined to extraction, rewriting and suggestions.
- Traceable by default: outputs carry sources and reasoning.
- Private when it must be: open-source models on your own hardware or private cloud.

## Selected work

### Geological hazard assessment: AI report generation with a verifiable core
- Problem: reports must follow national standards, combine owner and field data and ship with CAD drawings.
- Approach: a fact base shared by text and drawings; templates and rules for fixed content; LLMs only for extraction, rewriting and recommendations. Hazard grades come from expert-verified decision tables, never from a model, and are recomputed independently.
- Delivered: a report-generation agent and a web workbench for report lifecycle, site data, Word and DWG files.
- Code: https://github.com/little-ai-io/tinker-ai · https://github.com/little-ai-io/geo-hazard-assessment-workbench

### Legal: a digital associate for law firms
- Problem: firms cannot send client matters to public model APIs.
- Approach: agentic backend on locally deployed open-source models (vLLM, Qwen3.5-27B, Google ADK, FastAPI).
- Delivered: a self-hosted foundation where client data never leaves the firm.
- Code: https://github.com/little-ai-io/keystone

### AI infrastructure: multi-cloud ML platform for a computer-vision company
- Problem: training outgrew local machines; terabyte-scale datasets, scarce GPUs and mixed server and edge hardware.
- Approach: one job-submission layer over Kubernetes on two clouds plus on-prem GPUs, Ray data pipelines, distributed training, edge compilation.
- Result: training time cut from days to under 12 hours; thousands of managed jobs within weeks.

### Accounting
Document-heavy, rule-bound accounting work where accuracy and an audit trail matter. Practitioners define the rules, AI handles extraction and drafting, every figure stays traceable to its source.

## FAQ

**What does Little AI do?** Helps enterprises integrate AI deeply into vertical domains together with their domain experts: consulting, system design, system integration, forward deployed engineering and AI products.

**What is forward deployed engineering?** Our engineers embed with your team and domain experts, work against your real data and systems, own delivery through to production, and transfer knowledge to your team.

**Which industries do you work in?** Accounting, legal, geological hazard assessment and AI infrastructure so far; any domain with specialist knowledge, standards and documents.

**Can AI run on our own infrastructure?** Yes. We deploy open-source models locally or in your private cloud.

**How does an engagement start?** Email us. A short discovery conversation, then a focused first deliverable that proves value.

**Do you build products or only consult?** Both.

**Who is on the team?** Engineers with production experience from Microsoft, Cruise Automation, Walmart and several startups.
