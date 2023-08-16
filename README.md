# Tabular Data Formatter for Google Sheets

## Overview
This script streamlines the task of copying tables from different sources into Google Sheets. Instead of manually rewriting tables, you can utilize this script to get the tables in the right format, copy them to the clipboard, and then paste them directly into Google Sheets. While designed initially for Adobe Analytics, it works with any tabular data that is formatted as multiline strings with tab-separated values.

## How to Use:

1. Open your browser's console. (For Chrome, press `Ctrl + Shift + J` on Windows/Linux or `Cmd + Option + J` on Mac).
2. Copy and paste the entire script into the console and press `Enter`.
3. A prompt will appear asking you to input your table. Paste your table data into this prompt and click "OK".
4. The script will format the table and copy it to your clipboard.
5. Go to Google Sheets and paste the table.

## Functions:

- `copyToClipboard(text)`: An async function to copy the provided text to the clipboard.
- `formatTable(input)`: A function that takes in the input table and formats it to make it compatible with Google Sheets.
- `main()`: The main function which prompts the user for table input, formats it, and then copies it to the clipboard.

## Note:
This script is designed for personal use and efficiency in mind. Always ensure you have permission to run scripts, especially if using on web applications that aren't owned or maintained by you.
