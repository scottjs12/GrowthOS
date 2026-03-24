# Generators

> Ready-to-run prompt chains that produce real outputs using GrowthOS agent methodology. Each generator tells you what you need, walks you through the prompts, and shows you what good output looks like.

## Available Generators

| Generator | What It Produces | Agents Used |
|---|---|---|
| [ad-copy-generator.md](ad-copy-generator.md) | 3-5 ad variants per angle across formats | Content Writer + Researcher |
| [lp-copy-generator.md](lp-copy-generator.md) | Full landing page copy using proven structures | Content Writer + CRO |
| [email-sequence-generator.md](email-sequence-generator.md) | 5-email lifecycle sequence with triggers and branching | CRM + Content Writer |
| [cold-outbound-generator.md](cold-outbound-generator.md) | 5-touch cold email sequence using OPPA framework | Content Writer |
| [video-script-generator.md](video-script-generator.md) | 15/30/60s scripts with hook-body-CTA structure | Content Writer + Designer |
| [seo-content-brief-generator.md](seo-content-brief-generator.md) | Full SEO brief ready for a writer to execute | SEO + Researcher |
| [social-content-batch-generator.md](social-content-batch-generator.md) | Full week of social posts across platforms | Content Writer |
| [cro-hypothesis-generator.md](cro-hypothesis-generator.md) | ICE-scored hypotheses from a URL or data | CRO |
| [campaign-brief-generator.md](campaign-brief-generator.md) | Complete campaign brief with agent assignments | PM |
| [competitive-analysis-generator.md](competitive-analysis-generator.md) | Competitor profiles with strategic assessment | Researcher |

## How to Use

1. Pick the generator that matches your task
2. Gather the inputs listed under "What You Need First"
3. Run the prompt chain step by step — each step builds on the previous
4. Review the output using the built-in review step

## Tips

- **No client context yet?** You can still run any generator — just describe your product, ICP, and value prop inline when prompted for context. Set up `clients/[your-company].md` later for better results.
- You can combine generators: run the **Competitive Analysis** → feed insights into **Ad Copy Generator** → feed copy into **Campaign Brief Generator**
- Generators reference specific AGENT.md files — load those alongside for best results
- Save outputs in the appropriate agent directory (e.g., ad copy → `02_content-writer/copy-bank.md`)
- After using a generator, the relevant workflow file shows you what happens next in the agent chain
