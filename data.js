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
