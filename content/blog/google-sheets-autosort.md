---
title: "Google Sheets Autosort"
date: "2020-05-22T11:19:53+09:00"
description: "Using scripts to automatically sort columns in Google Sheets"
tags: ["quick tips", "JavaScript"]
---

I'm currently on the job hunt so I've been tracking the dates of my applications/interviews/offers/rejections with a spreadsheet.

I wanted to keep everything sorted by those columns so that the applications that are most furthest along in the process (and not rejected) are sorted to the top rows. If you click on the column letter you can select `Sort sheet A→Z`, but then you have to do that for each column separately. It's slow and clumsy. Let's see if we can't automate that process.

## Enter script editor

Luckily Google provides us with a pretty [rich API](https://developers.google.com/apps-script/reference/spreadsheet) and [event triggers](https://developers.google.com/apps-script/guides/triggers/events#google_sheets_events) that we can interact with via JavaScript. From the menu, select `Tools` > `Script editor` to open a new page with a blank editor.

Here's the script I came up with for my problem, which sorts my sheet in the manner and order specified in `SORT_ORDER` after editing any cell:

```javascript
const SHEET_NAME = "Sheet1";
const SORT_DATA_RANGE = "A2:L";
const SORT_ORDER = [
  { column: 7, ascending: true }, // Application
  { column: 8, ascending: true }, // Response
  { column: 9, ascending: true }, // Screening
  { column: 10, ascending: true }, // Interview
  { column: 11, ascending: true }, // Offer
  { column: 12, ascending: true }, // Rejected
];

function onEdit(e) {
  multiSortColumns();
}

function multiSortColumns() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const range = sheet.getRange(SORT_DATA_RANGE);
  SORT_ORDER.forEach(function (sortOrder) {
    range.sort(sortOrder);
  });
  ss.toast("Sort complete.");
}
```

Here's what the results look like:

![Google Sheets Autosort Example](../assets/google-sheets-autosort-example.png)
