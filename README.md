# Accrue — User Manual

Accrue is a study app that works like a finance app. You get paid, in play money, for finishing tasks and for every minute you focus. There is no daily focus limit: the longer you study in a day, the more each hour pays. Skip your work and the end of the day can cost you.

Everything lives on your phone. There is no account, no server and no tracking.

---

## Contents

1. [Install it as an app](#1-install-it-as-an-app)
2. [First run](#2-first-run)
3. [Getting around](#3-getting-around)
4. [Today](#4-today)
5. [Plan (calendar)](#5-plan-calendar)
6. [Focus](#6-focus)
7. [How payouts work](#7-how-payouts-work)
8. [Goals that adapt to you](#8-goals-that-adapt-to-you)
9. [Badges](#9-badges)
10. [Ranks](#10-ranks)
11. [End of day](#11-end-of-day)
12. [Stats and You](#12-stats-and-you)
13. [Settings reference](#13-settings-reference)
14. [Default odds and numbers](#14-default-odds-and-numbers)
15. [Your data](#15-your-data)
16. [Tips for the OPPO K13](#16-tips-for-the-oppo-k13)
17. [Troubleshooting](#17-troubleshooting)
18. [What's new in this version](#18-whats-new-in-this-version)

---

## 1. Install it as an app

Chrome only installs apps that come from a web address (`https://…`). A file opened from your phone's storage can't be installed. You can still use `accrue.html` straight from your files, but to get a home-screen app that opens fullscreen, put the app online once. It's free and takes a few minutes.

You'll use the **accrue-app.zip** package. It contains:

| File | What it is |
|---|---|
| `index.html` | The app |
| `manifest.webmanifest` | App name, icons and fullscreen mode |
| `sw.js` | Lets the app open without internet after the first visit |
| `icon-*.png`, `apple-touch-icon.png` | App icons |

### Option A: Netlify Drop (quickest)

1. On a computer, unzip **accrue-app.zip**. You get a folder called `accrue-app`.
2. Go to **app.netlify.com/drop** and drag the `accrue-app` folder onto the page.
3. Sign up for a free account when asked so the site stays online.
4. Netlify gives you a link such as `https://quiet-river-1234.netlify.app`.
5. On your phone, open that link in **Chrome**.
6. Tap **Install** when Chrome offers it (Accrue also shows an **Install** banner on Today). If you don't see it, tap **⋮ → Install app** (or **Add to home screen → Install**).
7. Open Accrue from your home screen. It opens fullscreen with no browser bars.

### Option B: GitHub Pages

1. Create a free GitHub account and a new **public** repository (for example `accrue`).
2. In the repository, tap **Add file → Upload files** and upload everything inside the `accrue-app` folder (not the folder itself).
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute your app is at `https://<your-username>.github.io/accrue/`. Open it in Chrome on your phone and install it as in Option A.

### Moving your progress into the installed app

The installed app has its own storage, separate from the file you opened before.

1. In the old copy: **You → Backup & restore → Export backup**. This saves a `.json` file.
2. In the installed app: **You → Backup & restore → Import backup** and pick that file.

### Updating later

Replace `index.html` on your site with the new version (on Netlify, drag the folder onto your site's **Deploys** page again). The installed app picks up the new version the next time it opens with internet. If you still see the old one, close and reopen it once more.

---

## 2. First run

Setup is three short screens:

1. **Welcome.** A quick look at how Accrue works. Tap **Get started**.
2. **Your name.**
3. **Pick daily tasks.** Choose a few tasks that should repeat every day. You can plan one-time tasks for any date later in the Plan tab.

Tap **Start** and you get a **$10,000 welcome bonus**, revealed like any other payout.

---

## 3. Getting around

### The dock

The floating bar at the bottom has five buttons:

| Button | What it does |
|---|---|
| **Today** | Your money, today at a glance, and today's tasks |
| **Plan** | Calendar for future tasks and repeating tasks |
| **Center button** | Focus (see below) |
| **Stats** | Charts, focus history, totals and activity |
| **You** | Profile, rank, goals, badges and settings |

The selected button shows its name, and a pill slides to it.

**The center button** is the fastest way to study:

- **Tap** it to open the Focus screen. Tap it again there to start.
- **Press and hold** it for half a second from any screen to start focusing right away. A ring fills around it while you hold.
- While you focus, it shows a sound wave and a ring that fills up until your next bonus.

A small dot on **You** means you have a new badge.

### Notifications

Bonuses, hour milestones, goals, badges and check-ins show up as a small card that slides down from the top of the screen for a few seconds. Tap it to dismiss it early.

### Status bar

When Accrue is fullscreen, it shows the time and your battery level at the top, since the phone's own status bar is hidden.

---

## 4. Today

From top to bottom:

- **Header.** Your initial sits inside a ring that shows how close you are to your next rank. Tap it to go to You. Below your greeting: today's date and how long is left in the day.
- **Net worth.** Your balance rolls like a counter and ticks up live while you focus. Under it: today's change. While you focus, a small live timer shows in the corner of this card. Tap the card to open Stats.
- **Next goal.** Your next net-worth goal and how far away it is. Tap it to see all your goals.
- **Install banner.** Shown when Chrome is ready to install Accrue. Tap **Install**, or **×** to hide it.
- **Today at a glance.** Three tiles:
  - **Tasks:** how many are done and how many are left.
  - **Focus:** how long you've focused today, and your best day to beat (or what your next hour pays). Tap to open Focus.
  - **Streak:** your streak and the payout boost it gives you.
- **Today's tasks.** Open tasks are on top. Done tasks drop to the bottom with what they paid.
- **Tomorrow.** Shows how many one-time and repeating tasks are coming tomorrow. Tap it to jump to tomorrow in the calendar.

### Working with tasks

| Action | Result |
|---|---|
| Tap the circle | Completes the task and reveals your payout |
| Swipe right | Completes the task |
| Swipe left | One-time task: moves it to tomorrow. Repeating task: skips it for today. Either way costs the **move fee** ($1,000 by default) |
| Tap the task | Edit it: title, type, repeat, or delete |
| Tap a done task | Shows exactly what it paid and which level it hit |
| **+** button | Add a task |

Tasks marked **Overdue** are one-time tasks you didn't finish on an earlier day.

### Adding a task

The task sheet has:

- **Title**, with one-tap **presets** underneath (tapping a preset adds it right away).
- **Type**, which decides how much it can pay.
- **When:** Today, Tomorrow, or **Pick a date** for any day in the future.
- **Repeat:** Never, Every day, Weekdays, or Custom (pick the weekdays).
- **What can this pay?** shows the odds and amounts for the chosen type, including your current streak boost.

The sheet stays open so you can add several tasks in a row. The When choice stays put, which makes planning a whole day quick.

---

## 5. Plan (calendar)

The Plan tab lets you plan as far ahead as you like.

### The calendar

- Swipe left or right, or use the arrows, to change month. There's no limit going forward.
- Tap a day to select it. **Today** jumps back.
- Dots under each date:

| Dot | Meaning |
|---|---|
| Green | Past day where every task was done |
| Green outline | Past day where some tasks were done |
| Red | Past day where no tasks were done |
| Grey (up to 3) | Future day with one-time tasks planned (one dot per task, up to three) |
| Accent | Today has tasks |

Repeating tasks don't add dots, since they'd be on almost every day. They still show in the day list.

### The day list

Under the calendar you see the selected day:

- **Today:** your live task list. You can tick and swipe here too.
- **Future days:** repeating tasks that fall on that day, plus one-time tasks planned for it. Tap one to edit, move it to another date, make it repeat, or delete it. Tap **+** to add a task for that day.
- **Past days:** a read-only record of what you did and what each task paid.

### Repeating tasks

The **Repeating** list shows every task that repeats, with its days. Tap one to change its title, type or days, or to delete it. A repeating task can start on a future date ("from Thu, Oct 22").

### How planned tasks arrive

When a new day starts, Accrue builds today's list from:

1. Repeating tasks scheduled for today
2. One-time tasks you planned for today
3. Overdue one-time tasks from earlier days (if **Move unfinished tasks to tomorrow** is on)

---

## 6. Focus

Focus mode pays you for time spent studying. **There is no daily focus target.** Focus as long as you can, whether that's 2 hours or 15. The app rewards every extra hour more than the last one.

### Starting

- Tap **Start focus** on the Focus tab, tap the center button while on Focus, or press and hold the center button anywhere.
- Optionally pick a **session goal** first: **Open**, **25m**, **50m** or **1h 30m** (you can change these chips in settings). It's only a bonus target for this one session; your day has no limit.

### What you earn

| Part | How it works (defaults) |
|---|---|
| Pay rate | $6,000 per hour at ×1.00 |
| Rising multiplier | Climbs smoothly to **×2.5** over the first 2 hours of a session, then stays there |
| Hour bonus | Each full hour you focus **in a day** pays an hour bonus that keeps growing: hour 1 pays $2,000, hour 2 pays $4,000, hour 10 pays $20,000, hour 15 pays $30,000 |
| New best day | The moment today's focus passes your best day ever, you get $10,000 and a **New personal best** alert |
| Bonus drops | Every 20 minutes of a session, a random bonus lands (see [odds](#14-default-odds-and-numbers)). Legendary ones get the full reveal |
| Session goal | Reaching your chosen session goal pays an extra 20% of that goal's focus pay (at least $1,000) |
| Check-in bonus | 10% of the hourly pay each time you check in ($600) |

Hour bonuses count all your sessions that day together, so three 40-minute sessions still reach hour 2. Your session pay is paid into your balance when the session ends. Bonuses are paid the moment they land.

Your **best day** is the most focus you've done in a single day. It only updates once a day is over, so beating it always means beating a real day you've already had. The first record alert starts once your best day is at least an hour.

### The Focus screen

- The big counter shows the session time. Under it: what you've earned so far and your current multiplier.
- The ring fills up to the next bonus drop.
- The card below shows:
  - **Next bonus:** time to the next drop.
  - **Hour N today:** what the next hour pays and how long until you reach it.
  - **Session goal** (if you picked one).
  - **Today:** your total focus today, with your best day and how much is left to beat it.
- **Ambience** (top right) cycles through Off, Rain and Brown noise. It plays only while you focus.

### Check-ins

Every 60 minutes Accrue asks **Still focusing?** You have 5 minutes to tap **I'm here**. If you don't, the session ends at the moment the check-in appeared, so idle time never counts. You can turn this off or change the interval in settings.

### Ending a session

Tap **End session**. A sheet shows how close you are to your next hour bonus, your next bonus drop and your session goal. Tap **Keep focusing** to carry on, or **press and hold** the red button for 1.5 seconds to end. Letting go early cancels it.

The timer is based on clock time, so it keeps counting if you switch apps or lock the phone. While Accrue is open and focusing, it keeps the screen awake.

---

## 7. How payouts work

Every task type has its own **payout levels**. Each level has a money range and a chance. When you finish a task, Accrue rolls a level using those chances, then picks a random amount inside its range.

On top of that:

- **Double payout:** 8% chance any task pays double.
- **Streak boost:** +5% per streak day, up to +50%. It applies to task payouts and focus bonus drops.

Levels are color-coded from lowest to highest: grey (Common), blue (Rare), violet (Epic), pink (Legendary). The amount spins before it lands; higher levels spin longer and get a stronger sound and a little confetti.

After the reveal, tap **Collect** (or anywhere) and the money flies into your balance.

---

## 8. Goals that adapt to you

Goals never run out and are never fixed. There are four at a time, shown on **You → Goals**:

| Goal | What it tracks | Bonus when reached (defaults) |
|---|---|---|
| Net worth | Your balance, including a live session | 3% of the goal amount, plus a full celebration |
| Focus | Total hours focused, all time | $5,000 per hour the goal covered |
| Tasks | Total tasks completed | $600 per task the goal covered |
| Streak | Your current streak | $10,000 per streak day |

**How new goals are set.** When you reach a goal, the next one is set from your recent pace: your average over the last 7 active days, blended with an estimate from your own settings. The new goal sits about **one day of your pace** ahead, rounded up to a clean number. Study faster and goals stretch further; slow down and they come closer. You can change the look-ahead in settings.

If a goal sits untouched for a few days, it's quietly re-planned from your current pace so it never goes stale. Streak goals follow 3, 5, 7, 10, 14, 21, 30, 45, 60, 90, 120, 180, 270, 365 days, then every 100.

Tap **History** to see every goal you've reached.

---

## 9. Badges

Badges have **unlimited levels**. Each level is harder than the last and pays a bonus of **$5,000 × the level** (level 3 pays $15,000).

| Badge | Earned by | First level |
|---|---|---|
| Marathoner | Total hours focused | 5 h, then roughly doubling |
| Long Haul | Most hours focused in one day | 3 h, then about ×1.4 each level |
| Deep Diver | Your longest single session | 45 min, then about ×1.5 |
| Record Breaker | Times you beat your best day | 1, then ×2 |
| Finisher | Tasks completed | 10 tasks, then about ×2 |
| Perfectionist | Days with every task done | 2 days, then ×2 |
| Unbroken | Best streak | 3 days, then ×2 |
| Planner | Planned tasks completed | 3, then about ×2 |
| Bonus Hunter | Focus bonuses collected | 10, then ×2 |
| Lucky | Legendary payouts | 1, then ×2 |
| Early Bird | Sessions started between 4 and 8 AM | 3, then ×2 |
| Tycoon | Highest net worth reached | $100K, then ×10 |

The badge color changes as you level up: grey at level 1, blue at 2, violet at 3, pink at 4, and fuchsia from level 5 on. Locked badges show a ring with your progress. Tap any badge to see its next levels.

---

## 10. Ranks

Your rank comes from the **highest net worth you've ever reached**, so a bad day never demotes you.

| Rank | Net worth |
|---|---|
| Intern | $0 |
| Analyst | $25,000 |
| Associate | $100,000 |
| Vice President | $500,000 |
| Director | $1,000,000 |
| Partner | $5,000,000 |
| Managing Director | $25,000,000 |
| Tycoon | $100,000,000 |
| Mogul | $500,000,000 |
| Titan | $1,000,000,000 |

After the last rank the ladder keeps going: Titan II at $10B, Titan III at $100B, and so on, each 10× the last. You can rename, add, remove or re-price ranks in settings. Each promotion gets a full-screen celebration.

---

## 11. End of day

The day ends at midnight by default (you can move it as late as 6 AM in **Day & rules**). The first time you open Accrue after that, you get the **Day closed** report:

1. A summary of tasks, earnings and focus.
2. **New personal best**, if you beat your best day.
3. **Penalties**, revealed one by one. Each unfinished task rolls a penalty level. A day with no focus at all rolls one too (you can turn that off). Some rolls land on **Lucky escape** and cost nothing.
4. The **net** for the day.
5. Your **streak**: kept if every task was done, ended if not (both are settings).
6. **Start today** takes you to the new day's list.

There's no penalty for "not enough" focus, because there's no daily focus target.

### Streaks

Finish every task on today's list to get a **perfect day**. That adds a day to your streak and pays a bonus of 25% of that day's task payouts (at least $5,000). Your streak boosts all payouts by 5% per day, up to 50%.

### If you're away for days

If you don't open Accrue for a few days, repeating tasks on the days you missed roll penalties too, for up to 7 days (a setting). One-time tasks planned for those days come back as **Overdue**. Your streak resets.

### Unfinished one-time tasks

With **Move unfinished tasks to tomorrow** on (the default), unfinished one-time tasks come back the next day marked **Overdue**. Repeating tasks don't carry over; they simply appear again on their next scheduled day.

---

## 12. Stats and You

### Stats

- **Net worth chart** for the week, month or all time. Drag across it to see any day.
- **Focus history**: a grid of the last 18 weeks, one square per day. Brighter squares mean more hours (under 1 h, 1–3 h, 3–6 h, 6–10 h, 10 h and more). Today has an outline.
- **Totals**: total earned, focus time, best day, tasks done, best streak and legendary payouts.
- **Focus this week**: daily bars with a line for your best day. Your strongest day this week is highlighted.
- **Activity**: every payout, bonus and penalty. **See all** shows the full history grouped by day.

### You

- **Profile card**: your rank, level and progress to the next rank.
- **Goals**: your four adaptive goals with their bonuses. **History** lists the goals you've reached.
- **Badges**: tap one for its levels.
- **Settings**, **Install app** and **Backup & restore**.

---

## 13. Settings reference

Open **You → ⚙** (or the **Settings** row). Every number, list and preset can be changed.

| Page | What you can change |
|---|---|
| **Profile & look** | Name, currency ($, ₹, €, £), accent color (Azure, Violet, Teal, Rose, Lime, Mono), keep fullscreen, animations (Full or Reduced) |
| **Task types & payouts** | Add, rename, recolor or delete task types. For each type: add or remove payout levels and set their names, amount ranges and chances |
| **Focus pay & bonuses** | Pay per hour, top multiplier, how long it takes to reach the top, **hour bonus**, **new best day bonus**, how often bonuses drop, bonus odds, session goal chips, session goal bonus, check-ins on or off, check-in interval and check-in bonus |
| **Goals & badges** | Goal look-ahead (days), bonus for each goal type, badge difficulty, badge bonus per level, **Re-plan goals now** |
| **Ranks** | Rename, re-price, add or remove ranks |
| **Payout boosts** | Double payout chance, streak boost per day, streak boost limit, perfect day bonus (percent and minimum) |
| **Quick-add presets** | The one-tap tasks shown when adding a task and during setup: add, rename, set their type, remove |
| **Day & rules** | When the day ends (midnight to 6 AM), penalties on or off, penalty odds, penalize days with no focus, whether unfinished tasks end your streak, missed-day limit, move unfinished tasks to tomorrow, fee to move or skip a task |
| **Sound & vibration** | Sound effects, tap sounds, volume, ambience volume, vibration |
| **Backup & restore** | Export or import a backup |
| **Reset settings to defaults** | Puts every setting back without touching your money, tasks or history |
| **Hold to erase all data** | Press and hold for 2 seconds to wipe everything and start over |

Chances in a payout table don't have to add up to exactly 100%. Accrue scales them for you and shows the real average payout under the bar.

---

## 14. Default odds and numbers

### Task payouts

Every type uses the same four levels, scaled by type.

| Level | Chance | Base range |
|---|---|---|
| Common | 55% | $2,000 – $6,000 |
| Rare | 30% | $8,000 – $20,000 |
| Epic | 12% | $30,000 – $75,000 |
| Legendary | 3% | $150,000 – $350,000 |

| Type | Scale | Average payout |
|---|---|---|
| Deep study | ×1.5 | about $30.3K |
| Practice | ×1.2 | about $24.2K |
| Revision | ×1.0 | about $20.2K |
| Reading | ×0.8 | about $16.2K |
| Health | ×0.7 | about $14.1K |

### Focus bonuses (every 20 minutes of a session)

| Level | Chance | Range |
|---|---|---|
| Common | 60% | $1,500 – $4,000 |
| Rare | 28% | $6,000 – $12,000 |
| Epic | 10% | $20,000 – $45,000 |
| Legendary | 2% | $100,000 – $250,000 |

### Hour bonuses (per day)

| Hour | Pays | Total so far |
|---|---|---|
| 1 | $2,000 | $2,000 |
| 2 | $4,000 | $6,000 |
| 5 | $10,000 | $30,000 |
| 10 | $20,000 | $110,000 |
| 15 | $30,000 | $240,000 |

### End-of-day penalties (per unfinished task, or a day with no focus)

| Level | Chance | Range |
|---|---|---|
| Lucky escape | 20% | $0 |
| Slip | 50% | $2,000 – $6,000 |
| Setback | 25% | $10,000 – $25,000 |
| Crash | 5% | $50,000 – $100,000 |

### Other defaults

| Setting | Default |
|---|---|
| Focus pay | $6,000/h, rising to ×2.5 over 2 h |
| Hour bonus | $2,000 × the hour number |
| New best day bonus | $10,000 |
| Session goal bonus | 20% of the goal's focus pay, at least $1,000 |
| Check-ins | Every 60 min, $600 bonus |
| Double payout | 8% |
| Streak boost | +5% per day, up to +50% |
| Perfect day bonus | 25% of the day's task payouts, at least $5,000 |
| Badge bonus | $5,000 × level |
| Move or skip fee | $1,000 |
| Missed-day limit | 7 days |

---

## 15. Your data

- Everything is stored in your browser on this phone. Nothing is uploaded.
- Clearing Chrome's site data, or uninstalling the app, deletes your progress. Export a backup now and then.
- The file you open from storage and the installed app keep **separate** data. Use Backup & restore to move between them.
- Upgrading from an earlier version is automatic: your balance, history and repeating tasks carry over, and your best focus day is worked out from your history.

---

## 16. Tips for the OPPO K13

- **Use Chrome.** Other browsers may not support fullscreen, installing or vibration.
- **Install it** (see [section 1](#1-install-it-as-an-app)). The installed app always opens fullscreen, with no browser bars.
- **Fullscreen in the browser.** If you use the file directly, Accrue goes fullscreen on your first tap. Swipe from the top edge to see the status bar for a moment; it hides again on its own.
- **Battery saver** can dim the screen during focus. Accrue asks the screen to stay on while you focus, but ColorOS power saving may override it.

---

## 17. Troubleshooting

| Problem | Fix |
|---|---|
| No **Install** option | You're opening a file, not a web address. Host it first (section 1). Also check you're using Chrome |
| No sound | Turn on **Sound effects**, check volume and silent mode. Phones only allow sound after your first tap |
| I hear clicks on every button | Turn off **Tap sounds** (it's off by default) |
| A session ended on its own | You missed a check-in. Turn check-ins off or make the interval longer |
| The day closed at the wrong time | Change **Day ends at** in Day & rules |
| Hour bonuses feel too small or too big | Change **Hour bonus** in Focus pay & bonuses |
| Goals feel too easy or too hard | Change the goal **look-ahead** in Goals & badges, then tap **Re-plan goals now** |
| Badges level too fast or slow | Change **badge difficulty** |
| I want even less motion | Set **Motion** to Reduced in Profile & look |
| The installed app shows an old version | Open it with internet, close it, and open it again |
| I lost my data | Import your latest backup. Without one, data can't be recovered |

---

## 18. What's new in this version

- **No daily focus target.** The fixed daily focus goal is gone. Every hour you focus in a day pays more than the last, and beating your best day pays a bonus.
- **New look.** Flat, quiet dark design with neutral greys, white buttons and one accent color. No glows, light rays or ripple effects.
- **Today at a glance.** Tasks, Focus and Streak tiles replace the three rings. The home screen has no chart; the net-worth chart lives in Stats.
- **No island.** The dynamic island is gone. Notifications now slide down as a small card at the top.
- **Focus button** in the bottom bar is a little smaller, so its progress ring stays inside the bar while you focus.
- **Cleaner Focus screen** with a thin progress ring, plus rows for the next bonus, the next hour and your best day.
- **Focus history** grid in Stats showing the last 18 weeks.
- **New badges:** Long Haul (most hours in one day) and Record Breaker (times you beat your best day).
- **New setting:** penalize days with no focus at all (on by default), replacing the missed-focus-goal penalty.
- **Calmer reveals and celebrations**: a clean card with spinning digits, and confetti only for bigger wins.
- **Calendar dots** now show only one-time planned tasks, so they mean something.
