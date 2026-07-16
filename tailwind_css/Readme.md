# Animations & UI Feedback Demo

## Overview
This project is a practice page built with **Tailwind CSS**.  
It shows different animation utilities like spin, ping, pulse, bounce, hover effects on buttons and cards, notification badges, loading states, and staggered animations.

## Built-in Animations
- **animate-spin** → spinning loader  
- **animate-ping** → pulse indicator for alerts  
- **animate-pulse** → skeleton loading effect  
- **animate-bounce** → bounce indicator  

Each card has a short description so I remember what the animation is used for.

## Button Animations
I tried different hover and active states:
- Scale effect  
- Shadow + scale (distinct combination)  
- Color change  
- Rotate  
- Lift (translate up)  
- Combined hover effects  
- Active state shrink  

## Card Animations
- Lift on hover with shadow  
- Scale + rotate using `group-hover`  
- Border reveal with hover  

## Notification Badges
- Bell icon with ping badge  
- Message icon with pulse badge showing count  
- Email icon with bounce badge showing count  

## Loading States
- Skeleton loader card  
- Button with spinner  
- Bouncing dots with staggered delay  

## Staggered Animations
Cards fade in one by one with delays: 0ms, 150ms, 300ms, 450ms.  
I used `animate-[fadeIn_0.5s_ease-out]` with `[animation-delay:...]` in milliseconds (fixed the bug where I had written seconds before).

## What I Learned
- How Tailwind’s built-in animation classes work.  
- How to combine hover, transition, and transform utilities.  
- How to use relative/absolute positioning for badges.  
- The importance of correct units (ms vs s) in animation delays.  

## What I Struggled With
- Remembering exact class names (I once wrote `text-4lg` which was invalid).  
- Getting the shadow + scale button right (needed both shadow and scale together).  
- Understanding staggered animations — I first tried custom keyframes but then realized I should use Tailwind’s `animate-[...]` bracket syntax.  

## Reflection
This project helped me understand Tailwind animations better.  
I made mistakes (like wrong delay units and missing descriptions), but fixing them showed me how important details are.  
It’s not perfect, but now I feel more confident using Tailwind utilities for interactive UI feedback.

## Author
- Rishita Jain