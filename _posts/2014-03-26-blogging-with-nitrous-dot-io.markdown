---
layout: post
title: Blogging with Nitrous.IO and Octopress
date: 2014-03-26 22:26:58 +0000
category: development
tags: [github, ruby, nitrous, octopress]
published: true
---

I have a very fickle relationship with blogging. I love tweaking and testing them,
but when it comes time to write content I'm already fawning over a new platform.
I am notorious among my circle of friends for building these things and then letting them
collect digital dust until they are inevitably scrapped. About a year ago I was surfing
around and happened upon [Octopress](http://octopress.org). I was instantly enamored by the possibilities it offered.<!-- more -->

Since everyone and even some of their mothers have already made a strong case for why static
site generators are the future of personal blogging, I'm not going to dedicate this entire
article to that. However, I will say that Octopress seemingly suited all of my needs as a blogging
platform- no database to worry about, easy to backup, doesn't rely on a service that might
go belly up, simple theming, mostly free to host, and no one else owns the content I create!

It didn't take me long to [clone the repository](https://github.com/imathis/octopress) and get everything running, but then I hit a wall.
I could only update the blog from my development machine. Octopress runs locally to generate
your blog via simple commands, and then it has to be pushed up to where ever you're serving your
website. I researched a few ways that might make it work in a shared folder, but the hoops that
required jumping through were numerous. To top it off I couldn't use my shiny new Chromebook or
any mobile devices for on the go editing.

I gave up hope on finding a solution until just a couple of days ago, when I stumbled across
[Nitrous.IO](https://www.nitrous.io/join/VGB0M15fkh8?utm_source=nitrous.io&utm_medium=copypaste&utm_campaign=referral) as a coding platform for Chromebook. Initially I thought it was pretty nifty, but then
it dawned on me that I could use it to run Octopress in the cloud! I cloned Octopress into my free
box, linked up my Github account, pushed everything up to Github pages, and here we are. I still
have a lot to configure in order to make it my own, but I think I've finally found a blogging
solution that I can stick with.

Once I get everything buttoned up I will write some tutorials for those of you who are interested
in getting a similar setup. If you can't wait, hop on over to [Nitrous.IO](https://www.nitrous.io/join/VGB0M15fkh8?utm_source=nitrous.io&utm_medium=copypaste&utm_campaign=referral)
to claim a ruby development box and go in blind.