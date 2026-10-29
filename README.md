Inflation Calculator
A simple, interactive JavaScript application that estimates how the value of money changes over time due to inflation — inspired by the Bank of England’s inflation calculator.

Overview
This project is a lightweight web app built with HTML, CSS, and JavaScript.
It allows users to enter an amount of money and compare its value between two years, showing how inflation affects purchasing power.

It’s designed to be:

Fast

Minimal

Easy to understand

Fully client‑side (no backend required)

Features
Enter any amount of money

Select a start year and end year

See how inflation changes the value

Clean, simple UI

Instant calculation using JavaScript

No external dependencies

Works offline

How It Works
The app uses a basic inflation formula:

Code
adjustedValue = originalAmount * (inflationRate / 100 + 1)
You provide:

The amount

The year you want to compare from

The year you want to compare to

The app then calculates the adjusted value based on the inflation rate you enter.

This makes it ideal for:

Learning how inflation works

Demonstrating simple financial maths

Showing how JavaScript handles user input and DOM updates

Project Structure
Code
InflationCalculator/
│
├── index.html        # UI layout
├── style.css         # Styling
└── script.js         # Inflation logic and interactivity
Usage
Open index.html in any browser.

Enter an amount

Enter an inflation rate

Choose the years

Click Calculate

The result appears instantly.

Why I Built This
I created this app as a small, practical JavaScript project to demonstrate:

DOM manipulation

Form handling

Basic financial calculations

Clean UI design

Lightweight, dependency‑free web apps

It’s a simple tool, but a great example of how JavaScript can make financial concepts interactive and easy to understand.

Future Improvements
Real inflation data lookup

Graphs showing inflation over time

Year‑by‑year breakdown

Mobile‑friendly redesign

Dark mode

License
This project is released under the Creative Commons Attribution–NonCommercial 4.0 International (CC BY‑NC 4.0) license.
