// ─── Mock Data Layer ───────────────────────────────────────────────────────────

const DB = {

  // ── IDEAS ──────────────────────────────────────────────────────────────────
  ideas: [
    {
      id: 'idea-1',
      title: 'Bulk export of payroll reports to Excel',
      category: 'Finance Portal',
      status: 'Delivered',
      visible: true,
      votes: 47,
      author: 'Maria K.',
      date: '2024-11-02',
      description: 'Currently each payroll period needs to be exported one by one. A bulk export with custom date ranges would save the finance team hours each month.',
      adminMessage: 'Shipped in the November release — check the new "Bulk Export" button on the Reports page!',
      linkedRelease: 'rel-1',
      comments: [
        { id: 'c1', author: 'Maria K.', role: 'user', date: '2024-11-02', text: 'This would be a huge time saver for the entire finance team.' },
        { id: 'c2', author: 'Alex P.', role: 'user', date: '2024-11-03', text: 'Agreed, we need this before year-end close!' },
        { id: 'c3', author: 'Product Team', role: 'admin', date: '2024-11-10', text: "We're planning this for Q4 — targeting the November release. Thanks for the votes!" },
        { id: 'c4', author: 'Maria K.', role: 'user', date: '2024-11-28', text: 'Just used the new export — works perfectly, thank you!' },
      ]
    },
    {
      id: 'idea-2',
      title: 'Approval workflow notifications via email',
      category: 'HR System',
      status: 'In Progress',
      visible: true,
      votes: 34,
      author: 'Dmitri S.',
      date: '2024-12-05',
      description: 'When a leave request or expense is submitted, the approver gets no notification until they log in. Adding email notifications would speed up approvals significantly.',
      adminMessage: "We're building this now — email + in-app notifications. ETA: next sprint.",
      linkedRelease: null,
      comments: [
        { id: 'c5', author: 'Dmitri S.', role: 'user', date: '2024-12-05', text: 'Our approval times are averaging 3 days because managers forget to check.' },
        { id: 'c6', author: 'Nina V.', role: 'user', date: '2024-12-06', text: 'Please also add a reminder if not actioned after 48 hours.' },
        { id: 'c7', author: 'Product Team', role: 'admin', date: '2024-12-12', text: "Great feedback. We're scoping both email and push notifications, plus reminders." },
      ]
    },
    {
      id: 'idea-3',
      title: 'Dashboard widget for team headcount trends',
      category: 'Reporting',
      status: 'Planned',
      visible: true,
      votes: 28,
      author: 'Olena B.',
      date: '2025-01-14',
      description: 'A visual headcount trend widget on the main dashboard would help managers track growth at a glance without pulling separate reports.',
      adminMessage: "Planned for Q2 as part of the new analytics dashboard revamp.",
      linkedRelease: null,
      comments: [
        { id: 'c8', author: 'Olena B.', role: 'user', date: '2025-01-14', text: 'Would love month-over-month and department breakdown options.' },
        { id: 'c9', author: 'Product Team', role: 'admin', date: '2025-01-20', text: "Added to our Q2 analytics roadmap. We'll include drill-down by department." },
      ]
    },
    {
      id: 'idea-4',
      title: 'Mobile app for submitting expenses on the go',
      category: 'Finance Portal',
      status: 'Under Review',
      visible: true,
      votes: 22,
      author: 'James T.',
      date: '2025-01-28',
      description: 'Field employees without laptop access need a mobile-friendly way to snap receipts and submit expenses directly from their phone.',
      adminMessage: '',
      linkedRelease: null,
      comments: [
        { id: 'c10', author: 'James T.', role: 'user', date: '2025-01-28', text: 'Our sales team is constantly on the road and relies on workarounds right now.' },
      ]
    },
    {
      id: 'idea-5',
      title: 'Keyboard shortcuts for common navigation actions',
      category: 'General',
      status: 'Declined',
      visible: true,
      votes: 8,
      author: 'Pavel M.',
      date: '2025-02-10',
      description: 'Power users would benefit from keyboard shortcuts to navigate between sections quickly.',
      adminMessage: "After review, we're focusing on mobile accessibility improvements instead. Keyboard shortcuts may be revisited in a future cycle.",
      linkedRelease: null,
      comments: [
        { id: 'c11', author: 'Pavel M.', role: 'user', date: '2025-02-10', text: 'Even just Ctrl+K for search would be great.' },
        { id: 'c12', author: 'Product Team', role: 'admin', date: '2025-02-18', text: "Thanks for the suggestion — we're prioritising other improvements for now but will revisit." },
      ]
    },
    {
      id: 'idea-6',
      title: 'Custom report builder for HR analytics',
      category: 'Reporting',
      status: 'New',
      visible: false,
      votes: 3,
      author: 'Sandra L.',
      date: '2025-04-20',
      description: 'A drag-and-drop report builder where HR can select fields, apply filters and schedule exports without needing IT support.',
      adminMessage: '',
      linkedRelease: null,
      comments: []
    },
    {
      id: 'idea-7',
      title: 'Single sign-on integration with Azure AD',
      category: 'General',
      status: 'Planned',
      visible: true,
      votes: 41,
      author: 'Tech Team',
      date: '2025-03-01',
      description: 'Employees should be able to log in using their existing corporate Microsoft credentials. Currently managing separate passwords is a friction point.',
      adminMessage: "Planned for Q3 — our infrastructure team is leading the Azure AD integration.",
      linkedRelease: null,
      comments: [
        { id: 'c13', author: 'IT Helpdesk', role: 'user', date: '2025-03-02', text: 'This would cut our password reset tickets by at least 30%.' },
        { id: 'c14', author: 'Product Team', role: 'admin', date: '2025-03-08', text: "Confirmed — this is a Q3 priority aligned with our security roadmap." },
      ]
    },
  ],

  // ── TICKETS ────────────────────────────────────────────────────────────────
  tickets: [
    {
      id: 'tkt-1',
      userId: 'user',
      title: 'Finance Portal: Cannot download invoice for order #4821',
      status: 'In Progress',
      created: '2025-04-10',
      updated: '2025-04-18',
      description: 'When I click "Download Invoice" on order #4821, the page shows a spinner then times out. Other invoices download fine.',
      messages: [
        { id: 'm1', author: 'You', role: 'user', date: '2025-04-10', text: 'I need this invoice for an audit by April 25th. Please advise.', shared: true },
        { id: 'm2', author: 'Support', role: 'admin', date: '2025-04-11', text: '[INTERNAL] Checked DB — order #4821 has a corrupt PDF generation job. Reassigning to backend team.', shared: false },
        { id: 'm3', author: 'Support', role: 'admin', date: '2025-04-12', text: 'Hi! We have identified the issue with order #4821 and our backend team is working on a fix. We expect to resolve this by April 20th.', shared: true },
        { id: 'm4', author: 'Support', role: 'admin', date: '2025-04-17', text: '[INTERNAL] Backend fix deployed to staging. Waiting for QA sign-off before prod push.', shared: false },
        { id: 'm5', author: 'Support', role: 'admin', date: '2025-04-18', text: 'Update: the fix is going through final testing. You should be able to download the invoice by April 22nd at the latest.', shared: true },
      ]
    },
    {
      id: 'tkt-2',
      userId: 'user',
      title: 'HR System: Leave balance showing incorrect days',
      status: 'Resolved',
      created: '2025-03-22',
      updated: '2025-04-02',
      description: 'My leave balance shows 5 remaining days but according to my contract I should have 12 days left. I took only 3 days this year.',
      messages: [
        { id: 'm6', author: 'You', role: 'user', date: '2025-03-22', text: 'This discrepancy is worrying ahead of my vacation in May.', shared: true },
        { id: 'm7', author: 'HR Support', role: 'admin', date: '2025-03-23', text: '[INTERNAL] Checking — employee was transferred between departments in January, carry-over days were not migrated.', shared: false },
        { id: 'm8', author: 'HR Support', role: 'admin', date: '2025-03-25', text: "We found the issue — a department transfer in January caused your carry-over balance not to migrate correctly. We've manually corrected your balance to 12 days. Please check now.", shared: true },
        { id: 'm9', author: 'You', role: 'user', date: '2025-03-25', text: 'Balance now shows 12 days — thank you for fixing this quickly!', shared: true },
      ]
    },
    {
      id: 'tkt-3',
      userId: 'user',
      title: 'Reporting: Q1 consolidated report export fails',
      status: 'Open',
      created: '2025-04-22',
      updated: '2025-04-22',
      description: 'Trying to export the Q1 consolidated report but the download button does nothing in Chrome and Firefox.',
      messages: [
        { id: 'm10', author: 'You', role: 'user', date: '2025-04-22', text: 'Urgent — I need this for the board presentation on Friday.', shared: true },
      ]
    },
    {
      id: 'tkt-4',
      userId: 'other-user',
      title: 'Finance Portal: Duplicate payment entry visible',
      status: 'Open',
      created: '2025-04-21',
      updated: '2025-04-21',
      description: 'A payment made on April 15 appears twice in the transaction list. Concerned this might be a double charge.',
      messages: [
        { id: 'm11', author: 'John D.', role: 'user', date: '2025-04-21', text: 'Please check ASAP — our accounting team is alarmed.', shared: true },
        { id: 'm12', author: 'Finance Support', role: 'admin', date: '2025-04-21', text: '[INTERNAL] Duplicate UI rendering bug — known issue, patch in next release. No actual double charge.', shared: false },
      ]
    },
    {
      id: 'tkt-5',
      userId: 'other-user',
      title: 'HR System: New joiner onboarding checklist missing',
      status: 'Resolved',
      created: '2025-04-05',
      updated: '2025-04-12',
      description: 'Onboarding checklist for new hire starting April 14 not appearing in the HR dashboard.',
      messages: [
        { id: 'm13', author: 'Anna R.', role: 'user', date: '2025-04-05', text: 'Start date is in 9 days — need this resolved urgently.', shared: true },
        { id: 'm14', author: 'HR Support', role: 'admin', date: '2025-04-06', text: '[INTERNAL] Employee record created but onboarding template not assigned. Assigning now.', shared: false },
        { id: 'm15', author: 'HR Support', role: 'admin', date: '2025-04-06', text: "Checklist has been assigned and is now visible in your dashboard. Let us know if anything else is missing.", shared: true },
        { id: 'm16', author: 'Anna R.', role: 'user', date: '2025-04-06', text: 'Confirmed — visible now. Thanks!', shared: true },
      ]
    },
  ],

  // ── ROADMAP ────────────────────────────────────────────────────────────────
  roadmap: [
    {
      id: 'theme-1',
      title: 'Self-Service Automation',
      icon: '⚡',
      color: '#4F7FFF',
      description: 'Empowering employees and managers to complete common HR and finance tasks without IT or admin involvement.',
      items: [
        'Automated leave approval workflows with configurable delegation rules',
        'Self-service payslip generation and custom date-range exports',
        'Smart expense categorisation using receipt OCR',
        'Employee-initiated contract amendment requests',
      ]
    },
    {
      id: 'theme-2',
      title: 'Reporting & Analytics',
      icon: '📊',
      color: '#00B67A',
      description: 'Giving leadership and HR teams richer, real-time visibility into workforce and financial data.',
      items: [
        'Custom drag-and-drop report builder for HR analytics',
        'Headcount trends and attrition dashboard widgets',
        'Real-time budget vs. actuals financial dashboard',
        'Scheduled report distribution via email',
      ]
    },
    {
      id: 'theme-3',
      title: 'Integrations',
      icon: '🔗',
      color: '#F59E0B',
      description: 'Connecting internal systems with the tools employees already use every day.',
      items: [
        'Azure AD single sign-on for all internal portals',
        'Slack and Teams notifications for approvals and alerts',
        'Calendar sync for leave, holidays and company events',
        'ERP data sync for real-time financial reconciliation',
      ]
    },
    {
      id: 'theme-4',
      title: 'UX Improvements',
      icon: '✨',
      color: '#8B5CF6',
      description: 'Continuously improving the experience for all employees across web and mobile.',
      items: [
        'Mobile-first redesign of Finance Portal for field workers',
        'Global search across all modules',
        'Accessibility audit and WCAG 2.1 AA compliance',
        'Dark mode and high-contrast theme options',
      ]
    },
  ],

  // ── RELEASES ───────────────────────────────────────────────────────────────
  releases: [
    {
      id: 'rel-1',
      version: 'v2.4',
      date: '2025-04-15',
      title: 'April Release — Automation & Notifications',
      summary: 'This release focuses on reducing manual work with approval automation and email notifications, alongside several UI quality-of-life improvements.',
      items: [
        { id: 'ri-1', text: 'Email notifications for leave and expense approvals', linkedIdea: 'idea-2' },
        { id: 'ri-2', text: 'Configurable approval delegation when manager is out of office', linkedIdea: null },
        { id: 'ri-3', text: 'Improved loading performance on the HR Dashboard (40% faster)', linkedIdea: null },
        { id: 'ri-4', text: 'Bug fix: overtime calculation rounding error in payroll reports', linkedIdea: null },
      ]
    },
    {
      id: 'rel-2',
      version: 'v2.3',
      date: '2025-03-01',
      title: 'March Release — Finance Portal Upgrades',
      summary: 'Major Finance Portal update with bulk export capabilities and a revamped transaction history view.',
      items: [
        { id: 'ri-5', text: 'Bulk export of payroll reports to Excel with custom date ranges', linkedIdea: 'idea-1' },
        { id: 'ri-6', text: 'Transaction history redesign with advanced filtering', linkedIdea: null },
        { id: 'ri-7', text: 'Invoice PDF generation now supports multi-currency formatting', linkedIdea: null },
        { id: 'ri-8', text: 'Performance fix: report list now loads 3× faster for large datasets', linkedIdea: null },
      ]
    },
    {
      id: 'rel-3',
      version: 'v2.2',
      date: '2025-01-20',
      title: 'January Release — HR Onboarding & Access',
      summary: 'Streamlined new hire onboarding experience and improvements to access management workflows.',
      items: [
        { id: 'ri-9', text: 'Automated onboarding checklist assignment on new employee creation', linkedIdea: null },
        { id: 'ri-10', text: 'Role-based access templates for common job families', linkedIdea: null },
        { id: 'ri-11', text: 'Department transfer now correctly migrates leave carry-over balances', linkedIdea: null },
      ]
    },
  ],

  // ── KNOWLEDGE BASE ─────────────────────────────────────────────────────────
  manuals: [
    {
      id: 'man-cat-1',
      category: 'Finance Portal',
      articles: [
        { id: 'art-1', title: 'How to submit an expense claim', preview: 'Step-by-step guide to uploading receipts and submitting expenses for approval.', content: 'Navigate to Finance Portal → Expenses → New Claim. Attach your receipt (JPG, PNG or PDF, max 5MB), enter the amount and select a category. Click Submit to route the claim to your line manager for approval. You will receive an email confirmation once approved or if further information is required.' },
        { id: 'art-2', title: 'Generating payroll reports', preview: 'Learn how to generate, customise and export payroll reports for any period.', content: 'Go to Finance Portal → Reports → Payroll. Select the date range using the calendar picker. Choose the departments or cost centres to include. Click Generate Report — large reports may take up to 30 seconds. Use the Export button to download as Excel or PDF. The new Bulk Export feature allows selecting multiple periods at once.' },
        { id: 'art-3', title: 'Understanding your payslip', preview: 'A breakdown of every line item on your digital payslip.', content: 'Your payslip shows: Gross Pay (total before deductions), Tax (PAYE calculated on your current tax code), National Insurance, Pension Contribution (employee + employer), and Net Pay. The YTD column shows cumulative figures for the tax year. Download your payslip as PDF from Finance Portal → My Payslips.' },
      ]
    },
    {
      id: 'man-cat-2',
      category: 'HR System',
      articles: [
        { id: 'art-4', title: 'Requesting annual leave', preview: 'How to submit a leave request and check your remaining balance.', content: 'Go to HR System → My Leave → Request Leave. Select the start and end date, choose Leave Type (Annual, Sick, Unpaid) and add an optional note for your manager. Your current balance is shown at the top of the page. Requests are routed to your direct manager and you receive an email notification once a decision is made. Cancellations can be made if the leave hasn\'t started.' },
        { id: 'art-5', title: 'Updating personal information', preview: 'Change your address, emergency contacts and bank details.', content: 'Navigate to HR System → My Profile → Personal Details. You can update your home address, phone number and emergency contacts directly. Bank details changes require verification — you will be sent a confirmation email and the change takes effect on the next payroll run. Name changes require a formal request via HR.' },
        { id: 'art-6', title: 'Performance review process', preview: 'Timeline and steps for completing your annual performance review.', content: 'Performance reviews occur twice yearly (June and December). You will receive a notification to complete a self-assessment. After submission your manager will schedule a 1:1 to discuss and finalise ratings. All review history is stored under HR System → My Performance. Ratings are used in the annual compensation review cycle.' },
      ]
    },
    {
      id: 'man-cat-3',
      category: 'Reporting',
      articles: [
        { id: 'art-7', title: 'Building a custom report', preview: 'Use the report builder to create tailored data exports.', content: 'Go to Reporting → Custom Reports → New Report. Use the field picker on the left to drag columns into your report canvas. Apply filters using the filter bar at the top. Save your report template for future use or schedule it to be emailed automatically. Reports can be exported as Excel, CSV or PDF.' },
        { id: 'art-8', title: 'Scheduling automated report delivery', preview: 'Set up reports to be emailed on a schedule.', content: 'Open any saved report and click Schedule. Choose frequency (Daily, Weekly, Monthly), set the time and add recipient email addresses. The report will be generated and emailed as an attachment at the specified time. Manage all scheduled reports from Reporting → Scheduled Reports.' },
      ]
    },
  ],

  videos: [
    { id: 'vid-1', title: 'Getting started with the Finance Portal', duration: '4:32', category: 'Finance Portal', thumbnail: 'finance', description: 'A complete walkthrough of the Finance Portal for new employees.' },
    { id: 'vid-2', title: 'Submitting and tracking expenses', duration: '3:15', category: 'Finance Portal', thumbnail: 'expense', description: 'Learn how to photograph receipts and submit expense claims on mobile and desktop.' },
    { id: 'vid-3', title: 'HR System overview for managers', duration: '6:48', category: 'HR System', thumbnail: 'hr', description: 'Everything a manager needs to know: approvals, team leave calendar, and performance reviews.' },
    { id: 'vid-4', title: 'Running your first payroll report', duration: '5:20', category: 'Finance Portal', thumbnail: 'payroll', description: 'Step-by-step guide to generating and exporting payroll reports.' },
    { id: 'vid-5', title: 'Building dashboards in Reporting', duration: '7:05', category: 'Reporting', thumbnail: 'reporting', description: 'How to create, customise and share analytical dashboards with your team.' },
    { id: 'vid-6', title: 'New hire onboarding walkthrough', duration: '4:50', category: 'HR System', thumbnail: 'onboarding', description: 'A guided tour of the onboarding checklist and first-week tasks for new employees.' },
  ],

};

// ── Helpers ─────────────────────────────────────────────────────────────────

DB.getIdea = (id) => DB.ideas.find(i => i.id === id);
DB.getTicket = (id) => DB.tickets.find(t => t.id === id);
DB.getRelease = (id) => DB.releases.find(r => r.id === id);

DB.statusOrder = ['New', 'Under Review', 'Planned', 'In Progress', 'Delivered', 'Declined'];

DB.statusMeta = {
  'New':          { color: 'status-new',          label: 'New' },
  'Under Review': { color: 'status-review',        label: 'Under Review' },
  'Planned':      { color: 'status-planned',       label: 'Planned' },
  'In Progress':  { color: 'status-inprogress',    label: 'In Progress' },
  'Delivered':    { color: 'status-delivered',     label: 'Delivered' },
  'Declined':     { color: 'status-declined',      label: 'Declined' },
  'Open':         { color: 'status-new',           label: 'Open' },
  'Resolved':     { color: 'status-delivered',     label: 'Resolved' },
  'Closed':       { color: 'status-declined',      label: 'Closed' },
};

DB.categories = ['Finance Portal', 'HR System', 'Reporting', 'General'];
/* ═══════════════════════════════════════════════════════════════════════════
   IntraHub — Application Logic
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

// ── App State ────────────────────────────────────────────────────────────────
const State = {
  role: 'user',        // 'user' | 'admin'
  page: 'ideas',
  votedIdeas: new Set(),
  roadmapEditMode: false,
};

// ── Utilities ────────────────────────────────────────────────────────────────
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }
function el(tag, cls = '', html = '') {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}
function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
function initials(name) { return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(); }
function toast(msg, type = '') {
  const t = el('div', 'toast' + (type ? ' ' + type : ''), msg);
  qs('#toastContainer').appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function badge(status) {
  const m = DB.statusMeta[status] || { color: 'status-new', label: status };
  return `<span class="badge ${m.color}">${m.label}</span>`;
}

// ── App (routing & role) ─────────────────────────────────────────────────────
const App = {
  init() {
    // sidebar nav
    qsa('.nav-item').forEach(item => {
      item.addEventListener('click', () => App.navigate(item.dataset.page));
    });
    App.navigate('ideas');
    Bot.init();
  },

  navigate(page) {
    State.page = page;
    qsa('.page').forEach(p => p.classList.add('page-hidden'));
    qs(`#page-${page}`).classList.remove('page-hidden');

    qsa('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === page));

    const titles = {
      ideas:    'Ideas Feed',
      tickets:  State.role === 'admin' ? 'All Tickets' : 'My Tickets',
      roadmap:  'Product Roadmap',
      releases: 'Release Notes',
      kb:       'Knowledge Base',
    };
    qs('#topbarTitle').textContent = titles[page];

    // render
    if (page === 'ideas')    Ideas.render();
    if (page === 'tickets')  Tickets.render();
    if (page === 'roadmap')  Roadmap.render();
    if (page === 'releases') Releases.render();
    if (page === 'kb')       KB.render();
  },

  setRole(role) {
    State.role = role;
    qs('#roleUser').classList.toggle('active', role === 'user');
    qs('#roleAdmin').classList.toggle('active', role === 'admin');
    qs('#topbarAvatar').className = `avatar avatar-${role}`;
    qs('#topbarAvatar').textContent = role === 'admin' ? 'A' : 'M';
    qs('#topbarAvatar').title = role === 'admin' ? 'Admin (Product Team)' : 'Maria K. (User)';

    // re-render current page
    App.navigate(State.page);
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// IDEAS FEED
// ═══════════════════════════════════════════════════════════════════════════
const Ideas = {

  render() {
    // show/hide create button for users only
    qs('#btnNewIdea').style.display = State.role === 'user' ? '' : 'none';
    this.applyFilters();
  },

  applyFilters() {
    const search   = qs('#ideaSearch').value.toLowerCase();
    const category = qs('#ideaCategoryFilter').value;
    const status   = qs('#ideaStatusFilter').value;
    const sort     = qs('#ideaSortFilter').value;

    let ideas = [...DB.ideas];

    // visibility: users only see visible ideas
    if (State.role === 'user') ideas = ideas.filter(i => i.visible);

    // search
    if (search) ideas = ideas.filter(i =>
      i.title.toLowerCase().includes(search) ||
      i.description.toLowerCase().includes(search)
    );

    // filters
    if (category) ideas = ideas.filter(i => i.category === category);
    if (status)   ideas = ideas.filter(i => i.status === status);

    // sort
    if (sort === 'votes') ideas.sort((a, b) => b.votes - a.votes);
    else ideas.sort((a, b) => new Date(b.date) - new Date(a.date));

    const grid = qs('#ideasGrid');
    if (!ideas.length) {
      grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><h3>No ideas found</h3><p>Try adjusting your filters.</p></div>`;
      return;
    }
    grid.innerHTML = '';
    ideas.forEach(idea => grid.appendChild(this.buildCard(idea)));
  },

  buildCard(idea) {
    const voted = State.votedIdeas.has(idea.id);
    const isAdmin = State.role === 'admin';
    const hiddenClass = (!idea.visible && isAdmin) ? ' hidden-post' : '';

    const card = el('div', `card idea-card${hiddenClass}`);
    card.innerHTML = `
      <div class="vote-col">
        <button class="vote-btn${voted ? ' voted' : ''}"
          onclick="Ideas.toggleVote('${idea.id}', event)"
          title="${voted ? 'Remove vote' : 'Vote for this idea'}">
          <span style="font-size:.8rem">▲</span>
          <span style="font-size:.65rem;font-weight:600">${voted ? 'Voted' : 'Vote'}</span>
        </button>
        <div class="vote-count" id="vote-count-${idea.id}">${idea.votes}</div>
      </div>
      <div class="idea-body">
        <div class="idea-title" onclick="Ideas.openDetail('${idea.id}')">${idea.title}</div>
        <div class="idea-meta">
          <span class="tag">${idea.category}</span>
          ${badge(idea.status)}
          <span class="sep">·</span>
          <span>👤 ${idea.author}</span>
          <span class="sep">·</span>
          <span>${fmtDate(idea.date)}</span>
          <span class="sep">·</span>
          <span>💬 ${idea.comments.length}</span>
        </div>
      </div>
      <div class="idea-actions">
        ${isAdmin ? this.buildVisToggle(idea) : ''}
        <button class="btn-icon" onclick="Ideas.openDetail('${idea.id}')" title="Open idea">→</button>
      </div>
    `;
    return card;
  },

  buildVisToggle(idea) {
    const cls = idea.visible ? 'visible-on' : 'visible-off';
    const label = idea.visible ? '👁 Visible' : '🚫 Hidden';
    return `<button class="visibility-toggle ${cls}"
      id="vistog-${idea.id}"
      onclick="Ideas.toggleVisibility('${idea.id}', event)">${label}</button>`;
  },

  toggleVote(id, e) {
    e.stopPropagation();
    const idea = DB.getIdea(id);
    if (State.role !== 'user') { toast('Only users can vote.', 'error'); return; }
    if (State.votedIdeas.has(id)) {
      State.votedIdeas.delete(id);
      idea.votes--;
    } else {
      State.votedIdeas.add(id);
      idea.votes++;
    }
    // Update card vote display without full re-render
    const btn = qs(`.vote-btn`, e.currentTarget.closest('.idea-card'));
    if (btn) {
      btn.classList.toggle('voted', State.votedIdeas.has(id));
      btn.innerHTML = `<span style="font-size:.8rem">▲</span><span style="font-size:.65rem;font-weight:600">${State.votedIdeas.has(id) ? 'Voted' : 'Vote'}</span>`;
    }
    const countEl = qs(`#vote-count-${id}`);
    if (countEl) countEl.textContent = idea.votes;
  },

  toggleVisibility(id, e) {
    e.stopPropagation();
    const idea = DB.getIdea(id);
    idea.visible = !idea.visible;
    const btn = qs(`#vistog-${id}`);
    if (btn) {
      btn.className = `visibility-toggle ${idea.visible ? 'visible-on' : 'visible-off'}`;
      btn.textContent = idea.visible ? '👁 Visible' : '🚫 Hidden';
    }
    toast(`Idea ${idea.visible ? 'made visible' : 'hidden'} successfully.`, 'success');
  },

  openDetail(id) {
    const idea = DB.getIdea(id);
    qs('#ideaModalTitle').textContent = idea.title;
    qs('#ideaModalBody').innerHTML = this.buildDetailHTML(idea);
    qs('#ideaModal').classList.remove('hidden');
  },

  buildDetailHTML(idea) {
    const isAdmin = State.role === 'admin';
    let html = '';

    // Delivered banner
    if (idea.status === 'Delivered' && idea.linkedRelease) {
      const rel = DB.getRelease(idea.linkedRelease);
      if (rel) {
        html += `<div class="delivered-banner">
          🎉 Shipped in Release <a href="#" onclick="Ideas.closeModal();Releases.openRelease('${rel.id}');App.navigate('releases');return false;">${rel.version}</a> — thanks for the idea!
        </div>`;
      }
    }

    // Meta row
    html += `<div class="idea-meta mb-12">
      <span class="tag">${idea.category}</span>
      ${badge(idea.status)}
      <span class="sep">·</span>
      <span>👤 ${idea.author}</span>
      <span class="sep">·</span>
      <span>${fmtDate(idea.date)}</span>
    </div>`;

    // Description
    html += `<p style="font-size:.9rem;line-height:1.65;color:var(--text-primary);margin-bottom:18px">${idea.description}</p>`;

    // Admin status message
    if (idea.adminMessage) {
      html += `<div class="admin-message-bar">
        💬 <strong>Product Team:</strong> "${idea.adminMessage}"
      </div>`;
    }

    // Admin controls
    if (isAdmin) {
      html += `
        <div class="admin-status-bar">
          <div>
            <label>Update Status</label>
            <select class="form-select" id="modalStatusSelect" style="width:auto">
              ${DB.statusOrder.map(s =>
                `<option value="${s}"${s === idea.status ? ' selected' : ''}>${s}</option>`
              ).join('')}
            </select>
          </div>
          <div style="flex:1">
            <label>Status Message (shown to users)</label>
            <input class="form-input" id="modalAdminMsg" value="${idea.adminMessage || ''}" placeholder="e.g. We're planning this for Q2…" />
          </div>
          <button class="btn btn-secondary btn-sm" onclick="Ideas.saveStatus('${idea.id}')">Save</button>
          <button class="visibility-toggle ${idea.visible ? 'visible-on' : 'visible-off'} mt-8" id="modal-vistog-${idea.id}"
            onclick="Ideas.toggleVisibilityModal('${idea.id}')">
            ${idea.visible ? '👁 Visible' : '🚫 Hidden'}
          </button>
        </div>`;
    }

    // Comments
    html += `<div class="comment-thread">
      <div class="comment-thread-title">Comments (${idea.comments.length})</div>
      <div id="modalComments">${this.buildComments(idea)}</div>
      <div class="comment-input-row">
        <textarea id="newCommentText" placeholder="Add a comment…"></textarea>
        <button class="btn btn-primary btn-sm" onclick="Ideas.submitComment('${idea.id}')">Post</button>
      </div>
    </div>`;

    return html;
  },

  buildComments(idea) {
    if (!idea.comments.length) {
      return `<div class="empty-state" style="padding:20px"><div class="empty-icon">💬</div><p>No comments yet. Be the first!</p></div>`;
    }
    return idea.comments.map(c => `
      <div class="comment">
        <div class="comment-avatar ${c.role === 'admin' ? 'admin-av' : 'user-av'}">${initials(c.author)}</div>
        <div class="comment-body">
          <div class="comment-header">
            <span class="comment-author">${c.author}</span>
            ${c.role === 'admin' ? '<span class="comment-role-badge admin">Product Team</span>' : ''}
            <span class="comment-date">${fmtDate(c.date)}</span>
          </div>
          <div class="comment-text">${c.text}</div>
        </div>
      </div>`).join('');
  },

  saveStatus(ideaId) {
    const idea = DB.getIdea(ideaId);
    idea.status = qs('#modalStatusSelect').value;
    idea.adminMessage = qs('#modalAdminMsg').value;
    toast('Status updated successfully.', 'success');
    // Refresh modal body
    qs('#ideaModalBody').innerHTML = this.buildDetailHTML(idea);
    // Also refresh feed
    this.applyFilters();
  },

  toggleVisibilityModal(ideaId) {
    const idea = DB.getIdea(ideaId);
    idea.visible = !idea.visible;
    const btn = qs(`#modal-vistog-${ideaId}`);
    if (btn) {
      btn.className = `visibility-toggle ${idea.visible ? 'visible-on' : 'visible-off'} mt-8`;
      btn.textContent = idea.visible ? '👁 Visible' : '🚫 Hidden';
    }
    toast(`Idea ${idea.visible ? 'made visible' : 'hidden'}.`, 'success');
    this.applyFilters();
  },

  submitComment(ideaId) {
    const text = qs('#newCommentText').value.trim();
    if (!text) return;
    const idea = DB.getIdea(ideaId);
    const comment = {
      id: 'c' + Date.now(),
      author: State.role === 'admin' ? 'Product Team' : 'Maria K.',
      role: State.role,
      date: new Date().toISOString().split('T')[0],
      text,
    };
    idea.comments.push(comment);
    qs('#modalComments').innerHTML = this.buildComments(idea);
    qs('#newCommentText').value = '';
    qs('.comment-thread-title').textContent = `Comments (${idea.comments.length})`;
    toast('Comment posted.', 'success');
  },

  closeModal() { qs('#ideaModal').classList.add('hidden'); },

  openCreateForm() {
    qs('#newIdeaTitle').value = '';
    qs('#newIdeaCategory').value = '';
    qs('#newIdeaDesc').value = '';
    qs('#createIdeaModal').classList.remove('hidden');
  },
  closeCreateForm() { qs('#createIdeaModal').classList.add('hidden'); },

  submitIdea() {
    const title = qs('#newIdeaTitle').value.trim();
    const cat   = qs('#newIdeaCategory').value;
    const desc  = qs('#newIdeaDesc').value.trim();
    if (!title || !cat || !desc) { toast('Please fill in all fields.', 'error'); return; }
    const idea = {
      id: 'idea-' + Date.now(),
      title, category: cat, description: desc,
      status: 'New', visible: false,
      votes: 0, comments: [],
      author: 'Maria K.',
      date: new Date().toISOString().split('T')[0],
      adminMessage: '', linkedRelease: null,
    };
    DB.ideas.unshift(idea);
    this.closeCreateForm();
    toast('Idea submitted! It\'s under review by the product team.', 'success');
    this.applyFilters();
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// MY TICKETS
// ═══════════════════════════════════════════════════════════════════════════
const Tickets = {

  render() {
    const isAdmin = State.role === 'admin';
    qs('#ticketsPageTitle').textContent = isAdmin ? 'All Tickets' : 'My Tickets';
    qs('#ticketsPageDesc').textContent  = isAdmin
      ? 'Manage all employee support tickets. Toggle message visibility and update statuses.'
      : 'Track your support requests. Only messages marked as Shared by the team are shown.';

    this.backToList();
  },

  backToList() {
    qs('#ticketListView').classList.remove('page-hidden');
    qs('#ticketDetailView').classList.add('page-hidden');
    this.renderList();
  },

  renderList() {
    const isAdmin = State.role === 'admin';
    const tickets = isAdmin
      ? DB.tickets
      : DB.tickets.filter(t => t.userId === 'user');

    const list = qs('#ticketsList');
    if (!tickets.length) {
      list.innerHTML = `<div class="empty-state"><div class="empty-icon">🎫</div><h3>No tickets yet</h3><p>All clear!</p></div>`;
      return;
    }

    list.innerHTML = '';
    tickets.forEach(t => {
      const row = el('div', 'ticket-row');
      row.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:4px;flex:1;min-width:0">
          <div class="ticket-title">${t.title}</div>
          <div style="display:flex;gap:8px;align-items:center;font-size:.76rem;color:var(--text-second)">
            ${isAdmin && t.userId !== 'user' ? '<span style="background:#EDE9FE;color:#6D28D9;padding:1px 6px;border-radius:3px;font-size:.7rem;font-weight:600">Other User</span>' : ''}
            <span>Opened ${fmtDate(t.created)}</span>
            <span>·</span>
            <span>Updated ${fmtDate(t.updated)}</span>
          </div>
        </div>
        <div>${badge(t.status)}</div>
      `;
      row.addEventListener('click', () => this.openDetail(t.id));
      list.appendChild(row);
    });
  },

  openDetail(id) {
    qs('#ticketListView').classList.add('page-hidden');
    qs('#ticketDetailView').classList.remove('page-hidden');
    this.renderDetail(id);
  },

  renderDetail(id) {
    const ticket = DB.getTicket(id);
    const isAdmin = State.role === 'admin';

    let html = `
      <div class="ticket-detail-header">
        <div class="ticket-detail-title">${ticket.title}</div>
        <div class="ticket-detail-meta">
          ${badge(ticket.status)}
          <span>Opened ${fmtDate(ticket.created)}</span>
          <span>·</span>
          <span>Last updated ${fmtDate(ticket.updated)}</span>
        </div>
        <p style="margin-top:12px;font-size:.875rem;color:var(--text-second);line-height:1.6">${ticket.description}</p>
      </div>`;

    // Admin controls
    if (isAdmin) {
      html += `
        <div class="admin-status-bar mb-16">
          <div>
            <label>Update Status</label>
            <select class="form-select" id="tktStatusSel" style="width:auto">
              <option${ticket.status==='Open'?' selected':''}>Open</option>
              <option${ticket.status==='In Progress'?' selected':''}>In Progress</option>
              <option${ticket.status==='Resolved'?' selected':''}>Resolved</option>
              <option${ticket.status==='Closed'?' selected':''}>Closed</option>
            </select>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="Tickets.updateStatus('${id}')">Update Status</button>
        </div>
        <div class="admin-message-bar">
          🔧 Admin view: toggle each message between <strong>Internal</strong> (hidden from user) and <strong>Shared</strong> (visible to user).
        </div>`;
    }

    html += `<div style="font-size:.875rem;font-weight:600;margin-bottom:12px">
      Conversation${isAdmin ? '' : ' (shared messages only)'}
    </div>`;

    // Messages
    const messages = isAdmin
      ? ticket.messages
      : ticket.messages.filter(m => m.shared || m.role === 'user');

    if (!messages.length) {
      html += `<div class="empty-thread">
        <div class="empty-icon">📭</div>
        <p>No messages have been shared with you yet.<br/>We'll update you as soon as there's news.</p>
      </div>`;
    } else {
      messages.forEach(m => {
        const isInternal = !m.shared && m.role === 'admin';
        const msgClass = m.role === 'user' ? 'user-msg' : (isInternal ? 'internal-msg' : 'admin-msg');
        html += `<div class="message ${msgClass}" id="msg-${m.id}">
          <div style="flex:1">
            <div class="message-header">
              <span class="message-author">${m.author}</span>
              ${m.role === 'admin' && isInternal ? '<span class="internal-label">🔒 Internal</span>' : ''}
              ${m.role === 'admin' && !isInternal ? '<span class="shared-label">✅ Shared</span>' : ''}
              <span class="message-date">${fmtDate(m.date)}</span>
              ${isAdmin && m.role === 'admin' ? `<button class="share-toggle-btn" onclick="Tickets.toggleShare('${id}','${m.id}')">${m.shared ? 'Make Internal' : 'Share with User'}</button>` : ''}
            </div>
            <div class="message-text">${m.text}</div>
          </div>
        </div>`;
      });
    }

    // Reply (admin only)
    if (isAdmin) {
      html += `
        <div class="comment-input-row mt-16">
          <div style="flex:1;display:flex;flex-direction:column;gap:8px">
            <textarea id="tktReplyText" placeholder="Write a reply…"></textarea>
            <div style="display:flex;align-items:center;gap:10px">
              <label style="font-size:.8rem;display:flex;align-items:center;gap:6px;cursor:pointer">
                <input type="checkbox" id="tktShareReply" /> Share with user
              </label>
              <span class="text-muted">Unchecked = Internal only</span>
            </div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="Tickets.postReply('${id}')">Send</button>
        </div>`;
    } else {
      html += `
        <div class="comment-input-row mt-16">
          <textarea id="tktUserReply" placeholder="Add a message to this ticket…"></textarea>
          <button class="btn btn-primary btn-sm" onclick="Tickets.postUserMessage('${id}')">Send</button>
        </div>`;
    }

    qs('#ticketDetailContent').innerHTML = html;
  },

  updateStatus(id) {
    const ticket = DB.getTicket(id);
    ticket.status = qs('#tktStatusSel').value;
    ticket.updated = new Date().toISOString().split('T')[0];
    toast('Ticket status updated.', 'success');
    this.renderDetail(id);
  },

  toggleShare(ticketId, msgId) {
    const ticket = DB.getTicket(ticketId);
    const msg = ticket.messages.find(m => m.id === msgId);
    if (msg) msg.shared = !msg.shared;
    toast(`Message ${msg.shared ? 'shared with user' : 'set to internal'}.`, 'success');
    this.renderDetail(ticketId);
  },

  postReply(id) {
    const text   = qs('#tktReplyText').value.trim();
    const shared = qs('#tktShareReply').checked;
    if (!text) return;
    const ticket = DB.getTicket(id);
    ticket.messages.push({
      id: 'm' + Date.now(), author: 'Support', role: 'admin',
      date: new Date().toISOString().split('T')[0], text, shared,
    });
    ticket.updated = new Date().toISOString().split('T')[0];
    toast('Reply sent.', 'success');
    this.renderDetail(id);
  },

  postUserMessage(id) {
    const text = qs('#tktUserReply').value.trim();
    if (!text) return;
    const ticket = DB.getTicket(id);
    ticket.messages.push({
      id: 'm' + Date.now(), author: 'Maria K.', role: 'user',
      date: new Date().toISOString().split('T')[0], text, shared: true,
    });
    ticket.updated = new Date().toISOString().split('T')[0];
    toast('Message sent.', 'success');
    this.renderDetail(id);
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// ROADMAP
// ═══════════════════════════════════════════════════════════════════════════
const Roadmap = {
  editMode: false,

  render() {
    const isAdmin = State.role === 'admin';
    const adminControls = qs('#roadmapAdminControls');
    if (adminControls) adminControls.classList.toggle('page-hidden', !isAdmin);
    if (!isAdmin) this.editMode = false;
    this.renderGrid();
  },

  renderGrid() {
    const grid = qs('#roadmapGrid');
    grid.innerHTML = '';
    DB.roadmap.forEach(theme => grid.appendChild(this.buildThemeCard(theme)));
  },

  buildThemeCard(theme) {
    const isAdmin = State.role === 'admin';
    const editMode = this.editMode && isAdmin;

    const card = el('div', 'roadmap-theme');
    card.innerHTML = `
      <div class="theme-header">
        <div class="theme-icon" style="background:${theme.color}22;color:${theme.color}">${theme.icon}</div>
        <div>
          <div class="theme-title">${theme.title}</div>
          ${editMode
            ? `<textarea class="edit-theme-desc" rows="2" oninput="Roadmap.saveDesc('${theme.id}',this.value)">${theme.description}</textarea>`
            : `<div class="theme-desc">${theme.description}</div>`
          }
        </div>
      </div>
      <ul class="theme-items" id="theme-items-${theme.id}">
        ${editMode
          ? theme.items.map((item, i) => `
              <li class="theme-item-editable">
                <textarea class="theme-item-input" rows="2"
                  oninput="Roadmap.saveItem('${theme.id}',${i},this.value)">${item}</textarea>
                <button class="btn-remove-item" onclick="Roadmap.removeItem('${theme.id}',${i})">✕</button>
              </li>`).join('')
          : theme.items.map(item => `<li class="theme-item">${item}</li>`).join('')
        }
      </ul>
      ${editMode ? `
        <button class="btn btn-ghost btn-sm mt-12" onclick="Roadmap.addItem('${theme.id}')">＋ Add item</button>` : ''}
    `;
    return card;
  },

  toggleEdit() {
    this.editMode = !this.editMode;
    const btn = qs('#btnEditRoadmap');
    if (btn) btn.textContent = this.editMode ? '✅ Done Editing' : '✏️ Edit Themes';
    this.renderGrid();
  },

  saveDesc(themeId, val) { const t = DB.roadmap.find(r => r.id === themeId); if (t) t.description = val; },
  saveItem(themeId, idx, val) { const t = DB.roadmap.find(r => r.id === themeId); if (t) t.items[idx] = val; },
  removeItem(themeId, idx) {
    const t = DB.roadmap.find(r => r.id === themeId);
    if (t) t.items.splice(idx, 1);
    this.renderGrid();
  },
  addItem(themeId) {
    const t = DB.roadmap.find(r => r.id === themeId);
    if (t) t.items.push('New roadmap item');
    this.renderGrid();
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// RELEASE NOTES
// ═══════════════════════════════════════════════════════════════════════════
const Releases = {

  render() {
    const isAdmin = State.role === 'admin';
    qs('#btnNewRelease').style.display = isAdmin ? '' : 'none';
    qs('#releaseFormSection').classList.add('page-hidden');
    this.renderList();
  },

  renderList() {
    const list = qs('#releasesList');
    list.innerHTML = '';
    DB.releases.forEach(rel => list.appendChild(this.buildCard(rel)));
  },

  buildCard(rel) {
    const isAdmin = State.role === 'admin';
    const card = el('div', 'release-card', `
      <div class="release-header" onclick="Releases.toggleRelease('${rel.id}')">
        <span class="release-version">${rel.version}</span>
        <span class="release-title">${rel.title}</span>
        <span class="release-date">${fmtDate(rel.date)}</span>
        <span class="release-chevron" id="chev-${rel.id}">▶</span>
      </div>
      <div class="release-body" id="relbody-${rel.id}">
        <p class="release-summary">${rel.summary}</p>
        <ul class="release-items">
          ${rel.items.map(item => `
            <li class="release-item">
              <span class="release-item-dot"></span>
              <span>${item.text}</span>
              ${item.linkedIdea ? `<span class="release-idea-link"
                onclick="Releases.navToIdea('${item.linkedIdea}')">💡 View idea</span>` : ''}
            </li>`).join('')}
        </ul>
        ${isAdmin ? `
          <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--border)">
            <div class="text-muted mb-12">🔧 Admin: link ideas to release items</div>
            ${rel.items.map((item, i) => `
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;font-size:.82rem">
                <span style="flex:1;color:var(--text-second)">${item.text}</span>
                <select class="linked-idea-select" onchange="Releases.linkIdea('${rel.id}',${i},this.value)">
                  <option value="">No linked idea</option>
                  ${DB.ideas.map(idea =>
                    `<option value="${idea.id}"${item.linkedIdea===idea.id?' selected':''}>${idea.title.slice(0,40)}…</option>`
                  ).join('')}
                </select>
              </div>`).join('')}
          </div>` : ''}
      </div>
    `);
    return card;
  },

  toggleRelease(id) {
    const body  = qs(`#relbody-${id}`);
    const chev  = qs(`#chev-${id}`);
    body.classList.toggle('open');
    chev.classList.toggle('open');
  },

  openRelease(id) {
    const body = qs(`#relbody-${id}`);
    const chev = qs(`#chev-${id}`);
    if (body && !body.classList.contains('open')) {
      body.classList.add('open');
      chev.classList.add('open');
    }
    setTimeout(() => qs(`#relbody-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  },

  linkIdea(relId, itemIdx, ideaId) {
    const rel = DB.getRelease(relId);
    if (rel) rel.items[itemIdx].linkedIdea = ideaId || null;
    toast('Idea linked to release item.', 'success');
  },

  navToIdea(ideaId) {
    App.navigate('ideas');
    setTimeout(() => Ideas.openDetail(ideaId), 100);
  },

  showForm() {
    qs('#releaseFormSection').classList.remove('page-hidden');
    qs('#relVersion').value = '';
    qs('#relTitle').value   = '';
    qs('#relSummary').value = '';
    qs('#relItems').value   = '';
  },
  hideForm() { qs('#releaseFormSection').classList.add('page-hidden'); },

  saveRelease() {
    const version = qs('#relVersion').value.trim();
    const title   = qs('#relTitle').value.trim();
    const summary = qs('#relSummary').value.trim();
    const rawItems = qs('#relItems').value.trim();
    if (!version || !title || !summary || !rawItems) { toast('Please fill in all fields.', 'error'); return; }
    const items = rawItems.split('\n').filter(Boolean).map((text, i) => ({
      id: 'ri-new-' + i, text: text.trim(), linkedIdea: null,
    }));
    DB.releases.unshift({
      id: 'rel-' + Date.now(), version, title, summary, items,
      date: new Date().toISOString().split('T')[0],
    });
    this.hideForm();
    toast('Release published!', 'success');
    this.renderList();
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE
// ═══════════════════════════════════════════════════════════════════════════
const KB = {

  render() {
    this.renderManuals('');
    this.renderVideos();
  },

  switchTab(tab) {
    qsa('.kb-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    qsa('.kb-panel').forEach(p => p.classList.toggle('active', p.id === `kb-${tab}`));
  },

  searchManuals() {
    const q = qs('#manualSearch').value.toLowerCase();
    this.renderManuals(q);
  },

  renderManuals(query) {
    const container = qs('#manualsList');
    container.innerHTML = '';

    DB.manuals.forEach(cat => {
      const articles = cat.articles.filter(a =>
        !query ||
        a.title.toLowerCase().includes(query) ||
        a.preview.toLowerCase().includes(query)
      );
      if (!articles.length) return;

      const section = el('div', 'accordion-category');
      section.innerHTML = `
        <div class="accordion-cat-header" onclick="KB.toggleCategory(this)">
          <span>${cat.category}</span>
          <span class="accordion-chevron">▶</span>
        </div>
        <div class="accordion-articles${query ? ' open' : ''}">
          ${articles.map(a => `
            <div class="article-row" onclick="KB.openArticle('${a.id}')">
              <div>
                <div class="article-row-title">${a.title}</div>
                <div class="article-row-preview">${a.preview}</div>
              </div>
              <span style="color:var(--text-muted);font-size:.8rem;flex-shrink:0">→</span>
            </div>`).join('')}
        </div>`;
      container.appendChild(section);
    });
  },

  toggleCategory(header) {
    const chevron = header.querySelector('.accordion-chevron');
    const articles = header.nextElementSibling;
    articles.classList.toggle('open');
    chevron.classList.toggle('open');
  },

  openArticle(id) {
    const all = DB.manuals.flatMap(c => c.articles);
    const article = all.find(a => a.id === id);
    if (!article) return;
    qs('#articleModalTitle').textContent = article.title;
    qs('#articleModalBody').innerHTML = `
      <p style="font-size:.875rem;color:var(--text-second);margin-bottom:18px">${article.preview}</p>
      <div style="font-size:.9rem;line-height:1.7;color:var(--text-primary)">${article.content}</div>`;
    qs('#articleModal').classList.remove('hidden');
  },
  closeArticle() { qs('#articleModal').classList.add('hidden'); },

  renderVideos() {
    const thumbColors = {
      finance: '#4F7FFF', expense: '#F59E0B', hr: '#10B981',
      payroll: '#3B82F6', reporting: '#8B5CF6', onboarding: '#EC4899',
    };
    const thumbEmojis = {
      finance: '💼', expense: '🧾', hr: '👥',
      payroll: '📊', reporting: '📈', onboarding: '🎉',
    };

    const grid = qs('#videoGrid');
    grid.innerHTML = '';
    DB.videos.forEach(v => {
      const bg = thumbColors[v.thumbnail] || '#6B7280';
      const icon = thumbEmojis[v.thumbnail] || '▶️';
      const card = el('div', 'video-card');
      card.innerHTML = `
        <div class="video-thumb" style="background:${bg}22">
          <span style="font-size:2.5rem">${icon}</span>
          <div class="video-play-overlay">
            <div class="play-btn">▶</div>
          </div>
        </div>
        <div class="video-info">
          <div class="video-title">${v.title}</div>
          <div class="video-meta">
            <span>⏱ ${v.duration}</span>
            <span>·</span>
            <span class="tag">${v.category}</span>
          </div>
        </div>`;
      card.addEventListener('click', () => toast(`▶ Playing: "${v.title}"`, ''));
      grid.appendChild(card);
    });
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// SUPPORT BOT
// ═══════════════════════════════════════════════════════════════════════════
const Bot = {
  isOpen: false,

  responses: [
    { keywords: ['expense','submit','claim'], reply: "To submit an expense claim, go to **Finance Portal → Expenses → New Claim**. Attach your receipt (JPG, PNG or PDF, max 5 MB), enter the amount and category, then click Submit. Your manager will receive an email notification to approve it." },
    { keywords: ['leave','holiday','annual','vacation'], reply: "To request leave, navigate to **HR System → My Leave → Request Leave**. Select your dates, choose the leave type and add a note if needed. You'll receive an email once your manager approves or declines." },
    { keywords: ['payslip','payroll','salary','pay'], reply: "Your payslips are available under **Finance Portal → My Payslips**. You can download any payslip as a PDF. The payroll report generator is in Finance Portal → Reports → Payroll." },
    { keywords: ['report','export','download'], reply: "To generate a report, go to **Reporting → Custom Reports → New Report**. Use the field picker to select columns, apply filters and click Generate. You can export as Excel, CSV or PDF." },
    { keywords: ['password','login','access','sso'], reply: "For login issues, please contact IT Helpdesk at helpdesk@company.com. We're also planning Azure AD SSO in Q3 — once live, you'll be able to log in with your Microsoft credentials." },
    { keywords: ['ticket','support','help','issue','bug'], reply: "You can track your open support tickets under **My Tickets** in the left sidebar. If you have a new issue, please email support@company.com or ask an admin to raise a ticket on your behalf." },
    { keywords: ['roadmap','plan','future','feature'], reply: "Check out the **Roadmap** section in the sidebar for our current strategic priorities. There's no fixed timeline — it reflects intent and direction. You can also submit ideas in the Ideas Feed!" },
    { keywords: ['release','update','version','shipped'], reply: "All released features are documented in **Release Notes** in the sidebar. Each release lists what's new, with links back to the original ideas that inspired them." },
    { keywords: ['idea','suggest','request','feature request'], reply: "You can submit a feature request in the **Ideas Feed** section. Click '+ Submit Idea', fill in the title, category and description. The product team reviews all submissions and keeps you updated." },
    { keywords: ['video','guide','tutorial','how to'], reply: "We have step-by-step video guides in **Knowledge Base → Video Guides**. Topics include expense submission, payroll reports, HR manager workflows, and more." },
    { keywords: ['manual','article','documentation','doc'], reply: "Written guides are in **Knowledge Base → Manuals**, organised by category (Finance, HR, Reporting). Use the search bar to find specific topics." },
  ],

  init() {
    this.addMessage('bot', "👋 Hi! I'm IntraBot. I can help you navigate the portal, find articles, or answer questions about Finance, HR and Reporting. What can I help you with?");
  },

  toggle() {
    this.isOpen = !this.isOpen;
    qs('#botWindow').classList.toggle('hidden', !this.isOpen);
    if (this.isOpen) qs('#botInput').focus();
  },

  handleKey(e) { if (e.key === 'Enter') this.send(); },

  send() {
    const input = qs('#botInput');
    const text = input.value.trim();
    if (!text) return;
    this.addMessage('user', text);
    input.value = '';
    this.showTyping();
    setTimeout(() => {
      this.hideTyping();
      this.addMessage('bot', this.getResponse(text));
    }, 900 + Math.random() * 600);
  },

  getResponse(text) {
    const lower = text.toLowerCase();
    for (const r of this.responses) {
      if (r.keywords.some(k => lower.includes(k))) return r.reply;
    }
    return "I'm not sure about that specific topic. You can browse the **Knowledge Base** for detailed guides, or raise a ticket via **My Tickets** and our support team will assist you directly.";
  },

  addMessage(role, text) {
    const msgs = qs('#botMessages');
    const now  = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    // Convert **bold** markdown
    const formatted = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const msg = el('div', `bot-msg ${role}`);
    msg.innerHTML = `<div class="bot-bubble">${formatted}</div><div class="bot-time">${now}</div>`;
    msgs.appendChild(msg);
    msgs.scrollTop = msgs.scrollHeight;
  },

  showTyping() {
    const msgs = qs('#botMessages');
    const typing = el('div', 'bot-typing');
    typing.id = 'botTyping';
    typing.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;
  },

  hideTyping() {
    qs('#botTyping')?.remove();
  },
};

// ── Close modals on overlay click ─────────────────────────────────────────────
document.addEventListener('click', e => {
  if (e.target.id === 'ideaModal')    Ideas.closeModal();
  if (e.target.id === 'createIdeaModal') Ideas.closeCreateForm();
  if (e.target.id === 'articleModal') KB.closeArticle();
});

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => App.init());
