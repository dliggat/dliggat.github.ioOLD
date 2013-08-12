---
layout: post
title: "Automate all the things"
date: 2013-08-06 13:04
comments: true
published: false
categories:
---
I've spent much of my career in software in the service of automation of one form of another: automated testing, automated [server] environment creation and deployments, automated backups, etc. A conspicuous absence from the list has been the actual development machines I spend many hours each day using, which for me are my Mac desktop and laptop, and occasionally a VM or two. I suppose this is a case of the cobbler's children having no shoes.
<!--more-->
To correct this error, I've spent a portion of the past few weeks getting up to speed with GitHub Inc's excellent Puppet-based [Boxen](https://boxen.github.com) tool for provisioning their own internal OS X 10.8 Mountain Lion machines. Although the learning curve is not exactly shallow, and the documentation sparse at times - the payoff has been tremendous. You can use it to script absolutely every aspect of your machine(s).

### My Boxen
From a clean install[^1], I've now got a fully-specified, version-controlled, single script that, at a stroke can:

* Set up my machine's SSH keys necessary for GitHub repository access pertinent to my GitHub account
* Install system-wide versions of git, node.js, and rubies (1.8.7, 1.9.3, 2.0.0)[^2]
* Install standard apps like Dropbox, Chrome, iTerm and even VMWare Fusion
* Clone my [dotfile repository](https://github.com/dliggat/dotfiles) and define symlinks from `~` into that repo; e.g. `~/.bashrc -> /Users/daveliggat/git/dotfiles/bashrc`, plus define any other symlinks or environment variables that I might want to have
* Install system-wide gems (e.g. `pry`) and homebrew packages (e.g. `sqlite`, `markdown`)
* Define resources needed on a per project basis, which for a rails app might include local MySQL databases, a cloned git repository, and a redis server
* Set up my text editor of choice, Sublime Text 2, and install the plethora of plugins and preferences that I use
* Set OS X system preferences for the Dock, Dashboard, Trackpad, etc

Assuming you're inclined to care about things like this, it's hard to overstate the satisfaction of kicking off this script and coming back to a fully-provisioned machine a couple of hours later. Best of all, Boxen is cumulative and *idempotent*[^3], so changes can be made to my Boxen install (and then always specified and available in future) and re-run without worrying about it blowing up because it encounters its own previous completions.

If anything, everything I've written here *understates* how capable Boxen is. I'm using it for a couple of machines in a home office - GitHub uses it for their *entire* company's fleet of MacBook Pros.

### Appendix, or Why I like OS X

There's a certain subset of the Windows-IT-dude population that is apparently genuinely aghast that anyone who ostensibly 'knows about computers' would ever stoop so low as to use a *toy laptop*, *not a real computer*, etc. The very existence of things like Boxen is just about the best answer I can give[^4]. There's so much cool stuff going on in software these days, and an overwhelming portion of it is done in OS X. I might be looking in the wrong places, but I simply don't see this level of innovation going on in the Windows world. And given how inherently less scriptable Windows is than anything Unix-based, it's hard to imagine an equal Windows-based peer of Boxen emerging anytime soon.


<!-- put this: https://plus.google.com/+BrunoOliveira/posts/MGxauXypb1Y -->

[^1]: Via the Mac App Store to install the Xcode developer tools which provide the system ruby and git binaries necessary for Boxen to bootstrap itself.
[^2]: A happy side benefit to letting boxen manage ruby versions is the obviation of somewhat horrible kludges like `.rvmrc` files in ruby project directories
[^3]: Idempotent: the property that an operation's outcome is the same whether it is run once or an arbitrary number of times. 'Multiplying by one', and 'checking-in for a flight online' are both idempotent operations.
[^4]: Another answer is: "because BASH".
