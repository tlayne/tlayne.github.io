---
layout: post
title: Create a Static Blog with Cloud Access
date: 2014-04-09
tags: [tutorials, octopress, github]
category: development
published: true
---
I mentioned in my previous post that I would write a quick and dirty tutorial on how to obtain a blogging setup similar to my own. After following the steps in this post you should have your very own static Octopress blog that you can edit painlessly in the cloud via Nitrous.IO

##Register and Link Accounts

First you will need to register for a free GitHub account [here](https://github.com/), and a free Nitrous.IO account [here](https://www.nitrous.io/join/VGB0M15fkh8?utm_source=nitrous.io&utm_medium=copypaste&utm_campaign=referral). Be sure to verify your email address with both services, or you will have trouble later on in this tutorial. Once you are signed into GitHub click the “New Repository” button and enter the following into the “Repository name” field:

    username.github.io


Where the “username” portion is your actual username. Leave the “public” radio button ticked and click create. Leave this tab open in your browser for easy access later!

Now jump over to Nitrous.IO and open your dashboard for the first time. You will have several options, but for this tutorial we will need the Ruby/Rails template. Select the template, fill in the name and region for your box, and click the “Create Box” button. On the next page select “Connect GitHub” and authorize the app in order to make your life easier.  If you so desire you can link up several of your other social accounts in order to beef up your free box, but you won’t need much juice to run Octopress.

Once you finish linking accounts click next and read the overview, or just jump to the bottom of the page and hit that big orange button. Finally, we’re in the Nitrous.IO IDE! Now we can get some real work done.

##Clone Octopress in your Nitrous.IO Box

Click on the console window near the bottom and enter the following command:

    git clone https://github.com/imathis/octopress.git


This should beam a fresh copy of Octopress directly into your Nitrous.IO box. Click the root (represented by “~”) in the file tree on the left a couple of times and you should see your newly created Octopress folder.

<div class="th"><img src="http://timothysmith.me/images/screenshots/nitrous2.png"></div>


Click on the console window near the bottom again and enter the following commands.

    cd octopress
    gem install bundler
    bundle install
    rake install

Congratulations, you now have Octopress and all it depends on.

##Deploy Your Blog to GitHub Pages

We need to get this thing onto your GitHub pages account ASAP. First enter the following commands into the console to set your identity:

    git config --global user.email youremail
    git config --global user.name yourname


Where “youremail” is your actual email address registered with GitHub and “yourname” is your actual GitHub username.

Now we can use the handy Octopress configuration task to automate the rest of the setup. Use the following command in the console to get started:

    rake setup_github_pages


You should be prompted for your repository URL. Remember that tab I told you to leave open way back when? Check it for your repository URL, and enter it into the prompt. It should look something like this:

    https://github.com/username/username.github.io.git


You’re almost done! There are a few more commands you need to run before you have your very own Octopress blog.

    rake generate
    rake deploy


When “rake deploy” asks for your credentials enter your GitHub user information. The password field will be a little tricky because it won’t show what you’re typing. Now backup all your hard work with the following git commands in your console:

    git add .
    git commit -m ‘Initial deploy’
    git push origin source


In a matter of minutes you should be able to point your browser to your GitHub pages URL and check out all your hard work.

<div class="th"><img src="http://timothysmith.me/images/screenshots/octoexample1.png"></div>


##Additional Resources

At this point you will need to learn the Octopress basics.  Posting new articles consists of running a command, editing the newly created file in markdown, and pushing it all back up to GitHub. You also may have noticed that your newly published website is rather generic. You can update all of your settings in the config.yml file as detailed [here](http://octopress.org/docs/configuring/), and if you desire something a little more swanky you can apply a multitude of free themes to your new Octopress installation.

- [octopress documentation](http://octopress.org/docs/)
- [using a custom domain name on GitHub pages](https://help.github.com/articles/setting-up-a-custom-domain-with-pages)
- [Theming](http://opthemes.com/) \(my current theme is a modified version of [octostrap3](https://github.com/kAworu/octostrap3)\)