// TODO(LOBE-7801): replace the bundled snapshot with a fetch from
// https://github.com/lobehub/agent-template once the template repo exposes
// a machine-readable manifest (agent-list.json). Keep this file as the fallback.

import { type AgentTemplate, MarketplaceCategory } from '../types';

export const AGENT_TEMPLATES: AgentTemplate[] = [
  // ==================== Content Creation ====================
  {
    id: 'copywriter',
    category: MarketplaceCategory.ContentCreation,
    title: 'Copywriter',
    description: '撰写营销文案、广告标语、落地页文案、产品描述、邮件主题、生成多版本 A/B 测试变体',
  },
  {
    id: 'blog-writer',
    category: MarketplaceCategory.ContentCreation,
    title: 'Blog Writer',
    description:
      '调研选题、撰写长文博客、设计标题与开头钩子、排版阅读体验、维护内容日历、追踪阅读数据',
  },
  {
    id: 'social-media-content-creator',
    category: MarketplaceCategory.ContentCreation,
    title: 'Social Media Content Creator',
    description: '策划平台选题、撰写图文笔记、搭配话题标签、规划发布节奏、跨平台分发、追踪互动数据',
  },
  {
    id: 'video-scriptwriter',
    category: MarketplaceCategory.ContentCreation,
    title: 'Video Scriptwriter',
    description:
      '策划视频选题、撰写口播脚本、设计开头 3 秒钩子、规划分镜与字幕、适配多平台时长、复盘爆款结构',
  },
  {
    id: 'novelist-fiction-writer',
    category: MarketplaceCategory.ContentCreation,
    title: 'Novelist / Fiction Writer',
    description:
      '构建世界观设定、设计人物小传、撰写章节大纲、起草场景与对白、追踪伏笔线索、保持叙事风格一致',
  },
  {
    id: 'speechwriter',
    category: MarketplaceCategory.ContentCreation,
    title: 'Speechwriter',
    description:
      '梳理演讲主题、设计整体结构、撰写开场与收尾、穿插故事与金句、控制节奏停顿、适配听众画像',
  },
  {
    id: 'editor-and-proofreader',
    category: MarketplaceCategory.ContentCreation,
    title: 'Editor & Proofreader',
    description:
      '优化语言表达、调整行文节奏、统一语气调性、校对语法拼写、删减冗余表述、生成多版本润色',
  },
  {
    id: 'content-repurposer',
    category: MarketplaceCategory.ContentCreation,
    title: 'Content Repurposer',
    description:
      '把长文改编为社媒贴子、把文章拆成视频脚本、把播客转为图文、适配不同平台调性、生成多版本变体',
  },
  {
    id: 'podcast-show-notes-writer',
    category: MarketplaceCategory.ContentCreation,
    title: 'Podcast Show Notes Writer',
    description: '转录节目、撰写结构化节目笔记、提取金句、生成节目摘要、创建推广贴子',
  },
  {
    id: 'ghostwriter',
    category: MarketplaceCategory.ContentCreation,
    title: 'Ghostwriter',
    description: '模仿本人语气风格、撰写个人品牌贴子、起草署名文章、维护语气一致性、适配多平台调性',
  },

  // ==================== Engineering ====================
  {
    id: 'pair-programmer',
    category: MarketplaceCategory.Engineering,
    title: 'Pair Programmer',
    description:
      '根据需求生成代码、补全函数实现、编写单元测试、解释陌生代码、提供多语言实现、生成代码注释',
  },
  {
    id: 'code-reviewer',
    category: MarketplaceCategory.Engineering,
    title: 'Code Reviewer',
    description:
      '审查 PR 代码风格、检查安全漏洞、建议重构方案、执行编码规范、识别坏味道、生成审查摘要',
  },
  {
    id: 'bug-debugger',
    category: MarketplaceCategory.Engineering,
    title: 'Bug Debugger',
    description:
      '分析报错堆栈、复现问题步骤、定位问题根因、排查依赖冲突、推荐修复方案、生成诊断报告',
  },
  {
    id: 'software-architect',
    category: MarketplaceCategory.Engineering,
    title: 'Software Architect',
    description:
      '设计系统架构图、评估技术选型、规划模块边界、设计数据流、评估性能瓶颈、输出架构决策文档',
  },
  {
    id: 'database-engineer',
    category: MarketplaceCategory.Engineering,
    title: 'Database Engineer',
    description:
      '设计数据表结构、编写复杂 SQL、优化慢查询、规划索引策略、生成迁移脚本、排查锁与死锁',
  },
  {
    id: 'api-developer',
    category: MarketplaceCategory.Engineering,
    title: 'API Developer',
    description:
      '设计 RESTful API、生成 OpenAPI 文档、编写接口测试、设计错误码规范、生成 Mock 数据、维护接口版本',
  },
  {
    id: 'frontend-engineer',
    category: MarketplaceCategory.Engineering,
    title: 'Frontend Engineer',
    description:
      '根据设计稿生成组件、封装可复用组件、处理响应式布局、编写交互逻辑、适配主题样式、生成使用示例',
  },
  {
    id: 'devops-engineer',
    category: MarketplaceCategory.Engineering,
    title: 'DevOps Engineer',
    description:
      '编写 Dockerfile 与 K8s 配置、调试 CI/CD 流水线、排查部署故障、编写运维脚本、生成回滚方案',
  },
  {
    id: 'qa-engineer',
    category: MarketplaceCategory.Engineering,
    title: 'QA Engineer',
    description:
      '根据需求编写测试用例、执行手动与自动化测试、提交带复现步骤的 Bug、追踪回归问题、生成测试覆盖率报告',
  },
  {
    id: 'technical-writer',
    category: MarketplaceCategory.Engineering,
    title: 'Technical Writer',
    description: '撰写 API 文档、创建用户指南、维护变更日志、记录内部流程、统一知识库内容标准',
  },
  {
    id: 'security-auditor',
    category: MarketplaceCategory.Engineering,
    title: 'Security Auditor',
    description: '审查代码安全漏洞、审计访问权限、检查依赖风险、生成安全报告、监控安全策略合规',
  },

  // ==================== Design & Creative ====================
  {
    id: 'brand-designer',
    category: MarketplaceCategory.DesignCreative,
    title: 'Brand Designer',
    description:
      '生成 Logo 概念方向、推荐配色与字体方案、构建品牌视觉系统、撰写设计理念、维护品牌规范手册',
  },
  {
    id: 'uiux-designer',
    category: MarketplaceCategory.DesignCreative,
    title: 'UI/UX Designer',
    description:
      '梳理用户流程、设计界面布局、评审交互稿、检查可用性问题、对比设计系统、输出设计规范',
  },
  {
    id: 'graphic-designer',
    category: MarketplaceCategory.DesignCreative,
    title: 'Graphic Designer',
    description: '设计海报与 Banner、排版营销物料、匹配视觉元素、适配节日主题、输出多尺寸素材',
  },
  {
    id: 'illustrator',
    category: MarketplaceCategory.DesignCreative,
    title: 'Illustrator',
    description:
      '构思插画风格方向、撰写插画简报、生成风格变体、规划系列插图、统一画风、输出交付素材',
  },
  {
    id: 'motion-designer',
    category: MarketplaceCategory.DesignCreative,
    title: 'Motion Designer',
    description:
      '设计交互动效流程、撰写动效说明、规划时间曲线、匹配交互反馈、生成动效脚本、输出动效规范',
  },
  {
    id: 'prompt-engineer',
    category: MarketplaceCategory.DesignCreative,
    title: 'Prompt Engineer',
    description:
      '设计 AIGC 提示词、优化出图效果、构建风格化 Prompt、调试负面词、维护提示词库、适配多模型语法',
  },
  {
    id: 'creative-director',
    category: MarketplaceCategory.DesignCreative,
    title: 'Creative Director',
    description:
      '发散创意方向、撰写创意简报、组合跨界灵感、筛选可行方案、把控整体调性、推进概念落地',
  },
  {
    id: 'moodboard-curator',
    category: MarketplaceCategory.DesignCreative,
    title: 'Moodboard Curator',
    description: '按关键词采集灵感素材、生成视觉情绪板、整理风格参考、分类灵感标签、沉淀灵感库',
  },

  // ==================== Learning & Research ====================
  {
    id: 'paper-reader',
    category: MarketplaceCategory.LearningResearch,
    title: 'Paper Reader',
    description: '解读论文结构、提炼核心观点、翻译专业术语、梳理研究方法、总结创新点、生成读后笔记',
  },
  {
    id: 'literature-review-assistant',
    category: MarketplaceCategory.LearningResearch,
    title: 'Literature Review Assistant',
    description:
      '检索相关文献、梳理研究脉络、归纳不同流派、对比研究方法、生成参考文献、输出综述初稿',
  },
  {
    id: 'study-planner',
    category: MarketplaceCategory.LearningResearch,
    title: 'Study Planner',
    description:
      '分析学习目标、推荐学习资源、拆解阶段任务、设计进度计划、追踪学习进展、动态调整节奏',
  },
  {
    id: 'exam-prep-coach',
    category: MarketplaceCategory.LearningResearch,
    title: 'Exam Prep Coach',
    description: '梳理考点大纲、生成真题解析、制定刷题计划、整理错题本、模拟考试、分析薄弱环节',
  },
  {
    id: 'note-taking-assistant',
    category: MarketplaceCategory.LearningResearch,
    title: 'Note-taking Assistant',
    description:
      '结构化笔记、提炼知识框架、生成思维导图、建立笔记索引、制作复习卡片、支持碎片化复习',
  },
  {
    id: 'concept-explainer',
    category: MarketplaceCategory.LearningResearch,
    title: 'Concept Explainer',
    description:
      '用通俗语言解释专业概念、提供类比示例、拆解理解步骤、适配学习者水平、生成对比辨析、支持追问深挖',
  },
  {
    id: 'data-analysis-tutor',
    category: MarketplaceCategory.LearningResearch,
    title: 'Data Analysis Tutor',
    description:
      '指导分析思路、推荐分析方法、生成 Python/R 代码、解读统计结果、排查分析误区、输出分析报告',
  },
  {
    id: 'academic-writing-assistant',
    category: MarketplaceCategory.LearningResearch,
    title: 'Academic Writing Assistant',
    description:
      '优化学术表达、规范引用格式、检查论文格式、检测语法问题、适配期刊投稿要求、生成投稿清单',
  },
  {
    id: 'language-tutor',
    category: MarketplaceCategory.LearningResearch,
    title: 'Language Tutor',
    description:
      '设计学习计划、生成情境对话、纠正语法发音、推荐地道表达、追踪词汇积累、安排听说读写练习',
  },
  {
    id: 'research-methodology-advisor',
    category: MarketplaceCategory.LearningResearch,
    title: 'Research Methodology Advisor',
    description:
      '设计研究方案、推荐研究方法、估算样本量、评估研究效度、规划数据采集、输出方法论文档',
  },

  // ==================== Business & Strategy ====================
  {
    id: 'strategy-consultant',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Strategy Consultant',
    description:
      '梳理战略愿景、拆解年度目标、设计 OKR、评估战略路径、追踪战略执行、生成战略回顾报告',
  },
  {
    id: 'business-model-advisor',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Business Model Advisor',
    description: '绘制商业模式画布、分析盈利模式、评估关键假设、设计商业模式迭代、输出验证建议',
  },
  {
    id: 'industry-analyst',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Industry Analyst',
    description:
      '追踪行业动态、梳理赛道演进、识别趋势信号、预测未来格局、对比标杆打法、输出趋势洞察',
  },
  {
    id: 'competitive-intelligence-analyst',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Competitive Intelligence Analyst',
    description:
      '端到端研究竞品、分析产品定位和定价、制作功能对比矩阵、评估团队和融资信号、输出竞情报告',
  },
  {
    id: 'market-researcher',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Market Researcher',
    description:
      '研究新市场机会、分析竞争格局、梳理合规要求、构建市场规模模型、输出进入/不进入建议',
  },
  {
    id: 'business-case-writer',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Business Case Writer',
    description: '构建商业论证、量化投入产出、评估风险收益、准备决策材料、起草商业计划书',
  },
  {
    id: 'negotiation-coach',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Negotiation Coach',
    description:
      '梳理谈判策略、分析利益诉求、设计让步路径、预判对方底牌、起草谈判话术、复盘谈判结果',
  },
  {
    id: 'pitch-deck-writer',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Pitch Deck Writer',
    description:
      '起草路演材料、梳理叙事结构、撰写每页文案、提炼关键数据、构建财务预测、输出投资人文档',
  },
  {
    id: 'due-diligence-analyst',
    category: MarketplaceCategory.BusinessStrategy,
    title: 'Due Diligence Analyst',
    description: '调研公司用于投资或合作评估、汇编财务摘要、标记风险、查询公开记录、构建尽调清单',
  },

  // ==================== Marketing ====================
  {
    id: 'social-media-manager',
    category: MarketplaceCategory.Marketing,
    title: 'Social Media Manager',
    description: '撰写社媒贴子、规划内容日历、跨平台分发、管理评论互动、追踪互动数据、输出月度复盘',
  },
  {
    id: 'seo-specialist',
    category: MarketplaceCategory.Marketing,
    title: 'SEO Specialist',
    description:
      '研究关键词、审计网站 SEO、规划内容矩阵、追踪排名变化、分析竞品外链、生成月度 SEO 报告',
  },
  {
    id: 'performance-marketer',
    category: MarketplaceCategory.Marketing,
    title: 'Performance Marketer',
    description:
      '撰写广告素材、规划投放策略、生成 A/B 测试变体、分析 ROI 数据、优化出价策略、输出投放复盘',
  },
  {
    id: 'brand-strategist',
    category: MarketplaceCategory.Marketing,
    title: 'Brand Strategist',
    description:
      '梳理品牌主张、撰写品牌故事、构建品牌调性、审查品牌一致性、适配多渠道传播、维护品牌声音',
  },
  {
    id: 'event-marketer',
    category: MarketplaceCategory.Marketing,
    title: 'Event Marketer',
    description:
      '策划线上线下活动、撰写活动方案、设计传播链路、管理活动预算、追踪活动效果、生成复盘报告',
  },
  {
    id: 'influencer-manager',
    category: MarketplaceCategory.Marketing,
    title: 'Influencer Manager',
    description:
      '构建 KOL 名单、评估匹配度、起草合作邀约、追踪合作进度、评估合作 ROI、沉淀合作资产',
  },
  {
    id: 'newsletter-editor',
    category: MarketplaceCategory.Marketing,
    title: 'Newsletter Editor',
    description: '调研选题、撰写每期内容、适配邮件平台格式、管理订阅分组、追踪打开率、优化互动数据',
  },
  {
    id: 'pr-specialist',
    category: MarketplaceCategory.Marketing,
    title: 'PR Specialist',
    description:
      '构建定向媒体名单、撰写新闻稿、起草个性化 Pitch 邮件、追踪记者回复、采访前准备简报',
  },
  {
    id: 'community-manager',
    category: MarketplaceCategory.Marketing,
    title: 'Community Manager',
    description:
      '监控社区频道、回复成员问题、挖掘热门讨论、起草社区更新、策划社群活动、标记需人工介入问题',
  },
  {
    id: 'growth-hacker',
    category: MarketplaceCategory.Marketing,
    title: 'Growth Hacker',
    description:
      '设计增长实验、规划 A/B 测试、分析转化漏斗、评估实验结果、沉淀实验库、推进规模化落地',
  },
  {
    id: 'referral-program-manager',
    category: MarketplaceCategory.Marketing,
    title: 'Referral Program Manager',
    description: '设计转介绍激励方案、起草推广模板、追踪转介绍漏斗、生成 ROI 报告、优化转化率',
  },

  // ==================== Product & Management ====================
  {
    id: 'product-manager',
    category: MarketplaceCategory.ProductManagement,
    title: 'Product Manager',
    description: '撰写 PRD、定义验收标准、梳理用户故事、评估需求优先级、维护 Backlog、对齐路线图',
  },
  {
    id: 'ux-researcher',
    category: MarketplaceCategory.ProductManagement,
    title: 'UX Researcher',
    description:
      '设计访谈提纲、起草邀约文案、整理访谈纪要、分析用户反馈、提炼用户洞察、生成研究报告',
  },
  {
    id: 'product-analyst',
    category: MarketplaceCategory.ProductManagement,
    title: 'Product Analyst',
    description:
      '构建数据看板、解读核心指标、定位漏斗瓶颈、做归因分析、输出数据洞察、推动数据驱动决策',
  },
  {
    id: 'product-competitive-analyst',
    category: MarketplaceCategory.ProductManagement,
    title: 'Product Competitive Analyst',
    description:
      '拆解竞品功能、对比产品体验、分析差异化策略、构建功能矩阵、追踪竞品更新、输出竞品报告',
  },
  {
    id: 'project-manager',
    category: MarketplaceCategory.ProductManagement,
    title: 'Project Manager',
    description:
      '拆解项目任务、制定排期计划、追踪项目进度、识别风险阻塞、协调跨部门资源、生成项目周报',
  },
  {
    id: 'scrum-master',
    category: MarketplaceCategory.ProductManagement,
    title: 'Scrum Master',
    description:
      '组织迭代会议、管理 Sprint Backlog、追踪迭代进展、识别团队阻塞、组织复盘、持续优化流程',
  },
  {
    id: 'release-manager',
    category: MarketplaceCategory.ProductManagement,
    title: 'Release Manager',
    description:
      '构建上线前检查清单、协调多方 Ready 状态、追踪灰度效果、收集上线反馈、生成上线复盘',
  },
  {
    id: 'okr-coach',
    category: MarketplaceCategory.ProductManagement,
    title: 'OKR Coach',
    description: '对齐团队 OKR、拆解关键结果、追踪进展节奏、识别偏差、组织双周回顾、输出季度总结',
  },
  {
    id: 'bug-triager',
    category: MarketplaceCategory.ProductManagement,
    title: 'Bug Triager',
    description: '按严重性和优先级分类 Bug、分配给对应团队、追踪修复状态、去重、生成每周 Bug 汇总',
  },

  // ==================== Sales & Customer ====================
  {
    id: 'lead-qualifier',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Lead Qualifier',
    description: '评分入站线索、补充企业信息、按匹配度排序、标记高意向信号、将热线索导入漏斗',
  },
  {
    id: 'sdr-outbound-rep',
    category: MarketplaceCategory.SalesCustomer,
    title: 'SDR / Outbound Rep',
    description: '寻找目标客户、撰写个性化冷触达、设计跟进序列、追踪打开回复率、管理触达漏斗',
  },
  {
    id: 'proposal-writer',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Proposal Writer',
    description: '根据客户需求起草商业方案、定制报价部分、生成执行摘要、格式化交付物',
  },
  {
    id: 'sales-demo-prep',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Sales Demo Prep',
    description: 'Demo 前调研客户、构建定制话术、准备异议应对、生成 Demo 脚本、创建会后留存材料',
  },
  {
    id: 'account-manager',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Account Manager',
    description: '起草客户回访邮件、标记流失风险客户、准备季度业务回顾、追踪健康分数、挖掘增购机会',
  },
  {
    id: 'renewal-manager',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Renewal Manager',
    description: '监控合同续费时间线、标记流失风险客户、起草续费提案、识别增购机会、准备定价建议',
  },
  {
    id: 'customer-support-agent',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Customer Support Agent',
    description:
      '推荐实时话术、解答常见问题、处理投诉升级、生成标准应答库、追踪响应质量、优化话术模板',
  },
  {
    id: 'customer-insights-analyst',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Customer Insights Analyst',
    description: '构建客户画像、聚类客户分层、识别高价值客户、分析流失特征、输出客户洞察报告',
  },
  {
    id: 'win-loss-analyst',
    category: MarketplaceCategory.SalesCustomer,
    title: 'Win/Loss Analyst',
    description:
      '复盘赢单与丢单、提炼关键打法、构建作战卡、追踪竞品提及、沉淀销售方法论、赋能销售团队',
  },
  {
    id: 'crm-data-steward',
    category: MarketplaceCategory.SalesCustomer,
    title: 'CRM Data Steward',
    description:
      '清洗 CRM 数据、补全客户字段、去重合并、追踪数据质量、生成数据健康报告、维护数据规范',
  },

  // ==================== Operations ====================
  {
    id: 'executive-assistant',
    category: MarketplaceCategory.Operations,
    title: 'Executive Assistant',
    description: '跨日历协调排期、管理会议邀请、处理差旅安排、分拣邮件优先级、起草快速回复',
  },
  {
    id: 'meeting-notetaker',
    category: MarketplaceCategory.Operations,
    title: 'Meeting Notetaker',
    description: '转录会议录音、提取行动项、生成结构化纪要、分发给与会者、追踪后续完成情况',
  },
  {
    id: 'inbox-manager',
    category: MarketplaceCategory.Operations,
    title: 'Inbox Manager',
    description: '按紧急度分拣邮件、起草快速回复、标记行动项、总结长线程、保持收件箱清零',
  },
  {
    id: 'report-generator',
    category: MarketplaceCategory.Operations,
    title: 'Report Generator',
    description:
      '从多数据源拉取数据、构建日报/周报/月报、格式化表格和图表、定时发送、分发给利益相关方',
  },
  {
    id: 'sop-writer',
    category: MarketplaceCategory.Operations,
    title: 'SOP Writer',
    description: '从描述或录音起草标准操作流程、维护版本历史、格式化为团队手册、标记过时流程',
  },
  {
    id: 'travel-planner',
    category: MarketplaceCategory.Operations,
    title: 'Travel Planner',
    description: '规划商务差旅、比较航班和酒店、构建详细行程、追踪差旅费用、处理改签和取消',
  },
  {
    id: 'translator-localizer',
    category: MarketplaceCategory.Operations,
    title: 'Translator / Localizer',
    description: '翻译文档与产品文案、维护翻译记忆库、适配目标受众语气、批量翻译、标记不可直译习语',
  },
  {
    id: 'data-entry-clerk',
    category: MarketplaceCategory.Operations,
    title: 'Data Entry Clerk',
    description: '从邮件、发票和文档中提取数据、清洗和格式化、录入系统、标记异常、生成数据质量报告',
  },
  {
    id: 'knowledge-base-curator',
    category: MarketplaceCategory.Operations,
    title: 'Knowledge Base Curator',
    description: '审计知识库文章准确性、识别内容缺口、起草新文章、更新过时内容、优化信息架构',
  },

  // ==================== People / HR ====================
  {
    id: 'recruiter',
    category: MarketplaceCategory.PeopleHR,
    title: 'Recruiter',
    description: '解析简历、匹配岗位要求、排名候选人、标记风险点、输出入围名单',
  },
  {
    id: 'jd-writer',
    category: MarketplaceCategory.PeopleHR,
    title: 'JD Writer',
    description: '撰写职位描述、优化候选人吸引力、生成面试评分卡、适配多个招聘平台、维护 JD 模板库',
  },
  {
    id: 'interview-designer',
    category: MarketplaceCategory.PeopleHR,
    title: 'Interview Designer',
    description: '生成岗位定制面试题、构建评分卡、设计笔试题、创建行为面试指南、按招聘标准制题库',
  },
  {
    id: 'onboarding-coordinator',
    category: MarketplaceCategory.PeopleHR,
    title: 'Onboarding Coordinator',
    description:
      '构建新员工入职计划、追踪第一周任务、起草欢迎邮件、准备 Day 1 清单、标记逾期入职步骤',
  },
  {
    id: 'performance-review-assistant',
    category: MarketplaceCategory.PeopleHR,
    title: 'Performance Review Assistant',
    description: '汇编员工成就、起草评估叙述、生成自评提示、准备主管谈话要点、整理同事反馈',
  },
  {
    id: 'people-ops-specialist',
    category: MarketplaceCategory.PeopleHR,
    title: 'People Ops Specialist',
    description: '起草员工手册与制度、追踪考勤假期、预警倦怠风险、设计脉冲调查、生成文化洞察',
  },
  {
    id: 'compensation-analyst',
    category: MarketplaceCategory.PeopleHR,
    title: 'Compensation Analyst',
    description: '对标行业薪酬、设计薪酬结构、评估调薪方案、准备薪资预算、生成薪酬报告',
  },

  // ==================== Finance & Legal ====================
  {
    id: 'contract-reviewer',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Contract Reviewer',
    description: '扫描合同条款、标记风险条款、对比修改痕迹、总结核心条款、起草修改建议',
  },
  {
    id: 'bookkeeper',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Bookkeeper',
    description: '分类交易记录、对账、生成月度财务报表、按类别追踪支出、标记异常消费',
  },
  {
    id: 'invoice-manager',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Invoice Manager',
    description: '根据项目信息生成发票、追踪付款状态、发送催款提醒、对账、标记逾期账户',
  },
  {
    id: 'tax-prep-assistant',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Tax Prep Assistant',
    description: '整理报税资料、分类可抵扣费用、准备申报清单、起草预估税额汇总、标记缺失凭证',
  },
  {
    id: 'financial-modeler',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Financial Modeler',
    description: '构建营收预测、计算单位经济模型、运行场景分析、预测燃烧率和跑道、格式化投资人材料',
  },
  {
    id: 'compliance-officer',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Compliance Officer',
    description: '监控法规更新、运行合规自查、评估新法规影响、维护合规清单、生成审计就绪文档',
  },
  {
    id: 'grant-fundraising-researcher',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Grant / Fundraising Researcher',
    description: '查找匹配的资助和基金项目、汇总申请条件、追踪截止日期、起草申请叙述、维护资金管道',
  },
  {
    id: 'legal-research-assistant',
    category: MarketplaceCategory.FinanceLegal,
    title: 'Legal Research Assistant',
    description: '检索判例法规、总结法律观点、起草法律备忘录、标记法律风险、准备庭审资料',
  },

  // ==================== Creator Economy ====================
  {
    id: 'creator-brand-deal-negotiator',
    category: MarketplaceCategory.CreatorEconomy,
    title: 'Creator Brand Deal Negotiator',
    description: '筛选品牌合作邀约、起草报价单、谈判合作条款、追踪合作漏斗、生成合作效果报告',
  },
  {
    id: 'audience-analyst',
    category: MarketplaceCategory.CreatorEconomy,
    title: 'Audience Analyst',
    description: '研究受众画像、分析粉丝增长趋势、识别高表现内容主题、构建观众画像、推荐内容方向',
  },
  {
    id: 'course-builder',
    category: MarketplaceCategory.CreatorEconomy,
    title: 'Course Builder',
    description: '设计课程大纲、撰写课时脚本、创建测验题目、规划模块顺序、制作配套练习',
  },
  {
    id: 'collab-matchmaker',
    category: MarketplaceCategory.CreatorEconomy,
    title: 'Collab Matchmaker',
    description: '为创作者寻找合作伙伴、评估受众重合度、起草邀约消息、追踪合作漏斗、分析合作效果',
  },
  {
    id: 'fan-engagement-manager',
    category: MarketplaceCategory.CreatorEconomy,
    title: 'Fan Engagement Manager',
    description:
      '分类粉丝消息优先级、起草个性化回复、标记需亲自处理消息、追踪忠实粉丝、生成互动摘要',
  },
  {
    id: 'merch-store-operator',
    category: MarketplaceCategory.CreatorEconomy,
    title: 'Merch Store Operator',
    description: '管理商品上架、撰写商品描述、追踪库存、处理客户咨询、策划促销活动',
  },
  {
    id: 'thumbnail-title-tester',
    category: MarketplaceCategory.CreatorEconomy,
    title: 'Thumbnail & Title Tester',
    description: '生成封面变体、撰写标题选项、分析点击率模式、A/B 对比、推荐最优方案',
  },

  // ==================== Personal Life ====================
  {
    id: 'personal-fitness-coach',
    category: MarketplaceCategory.PersonalLife,
    title: 'Personal Fitness Coach',
    description:
      '制定健身计划、设计饮食菜单、追踪训练进度、分析体测数据、推荐恢复方案、提醒健康习惯',
  },
  {
    id: 'mental-wellness-companion',
    category: MarketplaceCategory.PersonalLife,
    title: 'Mental Wellness Companion',
    description:
      '倾听情绪困扰、引导情绪觉察、推荐放松练习、陪伴自我对话、提供认知重构建议、提示专业求助',
  },
  {
    id: 'travel-planner-personal',
    category: MarketplaceCategory.PersonalLife,
    title: 'Personal Travel Planner',
    description:
      '规划旅行路线、推荐当地美食、预订行程酒店、生成打卡清单、适配预算偏好、输出行程手册',
  },
  {
    id: 'personal-finance-advisor',
    category: MarketplaceCategory.PersonalLife,
    title: 'Personal Finance Advisor',
    description:
      '记录日常收支、分析消费结构、规划储蓄目标、监控预算执行、推荐理财方案、生成月度财务报告',
  },
  {
    id: 'parenting-companion',
    category: MarketplaceCategory.PersonalLife,
    title: 'Parenting Companion',
    description:
      '推荐育儿知识、规划亲子活动、设计启蒙内容、解答育儿困惑、追踪成长里程碑、同步家庭共识',
  },
  {
    id: 'personal-chef',
    category: MarketplaceCategory.PersonalLife,
    title: 'Personal Chef',
    description:
      '推荐食谱搭配、生成菜谱步骤、规划一周菜单、优化采买清单、适配饮食偏好、记录厨房心得',
  },
  {
    id: 'pet-care-assistant',
    category: MarketplaceCategory.PersonalLife,
    title: 'Pet Care Assistant',
    description:
      '制定喂养计划、追踪健康状况、提醒疫苗体检、推荐训练方法、解读行为信号、管理宠物档案',
  },
  {
    id: 'career-coach',
    category: MarketplaceCategory.PersonalLife,
    title: 'Career Coach',
    description:
      '梳理职业目标、诊断能力差距、规划成长路径、模拟面试演练、优化个人简历、支持关键跳槽决策',
  },
  {
    id: 'second-brain-curator',
    category: MarketplaceCategory.PersonalLife,
    title: 'Second Brain Curator',
    description:
      '整理日常灵感、构建个人知识库、关联主题笔记、生成周度回顾、沉淀第二大脑、辅助写作输出',
  },
  {
    id: 'habit-tracker-coach',
    category: MarketplaceCategory.PersonalLife,
    title: 'Habit Tracker Coach',
    description:
      '拆解长期目标、规划每日习惯、追踪完成情况、分析习惯曲线、定时提醒打卡、生成成长报告',
  },
];

export const getTemplatesByCategories = (categories: string[]): AgentTemplate[] => {
  if (categories.length === 0) return AGENT_TEMPLATES;
  const set = new Set(categories);
  return AGENT_TEMPLATES.filter((t) => set.has(t.category));
};

export const getTemplateById = (id: string): AgentTemplate | undefined =>
  AGENT_TEMPLATES.find((t) => t.id === id);
