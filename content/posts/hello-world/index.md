---
title: "So What Even Is This?"
description: "Who am I? Why am starting a blog? What am I going to write about?"
date: 2024-07-29T15:00:00Z
draft: false
layout: article
---

## Howdy! Welcome to my blog.

My name is Tyler Wright, and I am currently a lead software engineer at Career TEAM (more on Career TEAM shortly). I graduated with a Bachelor's of Computer Science from Colorado School of Mines in December 2024. When I'm not working, I am foodie, anime fan, math nerd, and world traveler. I am starting a blog for a lot reasons, but one sticks out in particular: I have learned a lot from my friends' blogs and had a lot of fun reading them too. I'll link some of my friends' blogs at the end of this post. 

A few more details about what I studied, where I work, and the things I love. My degree's focus is in data science, and I studied a significant amount of probability and statistics subsequently. During my time at Mines, I was the treasurer for Mines' chapter of ACM, and I started BlasterHacks, a hackathon hosted by Mines. I am currently working at [Career TEAM](https://careerteam.com/). We are building a platform for workforce development, reentry, and education. Previously, I worked as a Software Engineer at Tyler Technologies, building Content Management software. I have fortunate to travel to many places, some of my favorites have been: Japan, France, and New Zealand! While, I'll wait for future posts to talk anime, food, and music, here's one recommendation for each: Your Lie in April / Shigatsu wa Kimi no Uso, [J's Noodles Star Thai 2](https://jnst2.blogspot.com/), and [Jake Minch](https://www.jakeminch.com/).

Before we go any further, I want to address AI and the use of AI in writing. I think AI is a great tool for programming, business, and life, but I will not be using it to write anything in this blog. There is a trend of [not by AI](https://notbyai.fyi/) badges, I personally find them slightly tacky and am choosing not to place them on my blog.

## So What's Worth Reading Here?

### Technical Topics

So if you didn't already guess, I intend to write about interesting computer science topics. While code will be a primary focus when talking Computer Science, I also intend to talk about my time in college, hackathons, conferences, and my career. Similarly, I also plan on writing about math topics I find interesting. Particularly, I will likely write about Statistics, Probability, Linear Algebra and Computational Methods. 

This first post is probably a pretty boring read, so let me spice it up with a random TypeScript factoid before continuing to talk about my vision for this blog.

> Did you know you can make templated strings as a type. For example, suppose you want to make a type representing a hashtag string, you could do:
> ```ts
> type Hashtag = `#${string}`
> ```
> Now this isn't super useful, but we can expand on it to be much more useful. Suppose we want to make a type for a hexcode, we write something like:
> ```ts
> type HexChar = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" |
>                "a" | "b" | "c" | "d" | "e" | "f" |
>                "A" | "B" | "C" | "D" | "E" | "F"
>
> type ShortHexCode = `#${HexChar}${HexChar}${HexChar}`
> type LongHexCode = `#${HexChar}${HexChar}${HexChar}${HexChar}${HexChar}${HexChar}`
>
> type HexCode = ShortHexCode | LongHexCode
> ```
> Now, is this super practical in the middle of your small React App? Probably not, but it is a super useful tool when building libraries, or other sensitive projects, where you want strict type validation. 
>
> This only scratches the surface of the TypeScript type system. The type system is actually Turing-complete, and there have been numerous projects building out incredible things with just the type system. In a future blog post, I intend to write a lot more about the TypeScript type system.

### Non-technical Topics

On a less nerdy note, I intend write about life. Some of my first blogposts will probably will cover some of my travels through, Europe, Asia, and Oceania. I will also probably have some other variety posts talking about my love of food, music, anime, and more. 

On a serious note, I have struggled for years with Mental Health issues, and while I do not intend on writing about this immediately, it is something I intend to address in the future. Until I write about this, if you are feeling depressed or suicidal there is hope and help, and the world is better with you in it. If you are in urgent need of help, please call 988, it is 24/7 and can help you. 

## My Friends' Blogs

*This is not an exhaustive list, rather some of the blogs that inspired me to start my own.*

- [Sumner Evans](https://sumnerevans.com/)
- [Byron Sharman](https://byronsharman.com/)
- [Ethan Richards](https://ezrichards.github.io/)
- [Elijah Potter](https://elijahpotter.dev/)
- [Lukas Werner](https://lukaswerner.com/)
