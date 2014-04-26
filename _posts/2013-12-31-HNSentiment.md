---
layout: blog_post
title: HN Sentiment
categories: projects
month: December, 2013
---

####Check it out: [HN Sentiment](http://hn-sentiment.com)
<em style='color:red;'>Temporarily down due to the shudown of an api dependency</em>
#####*Web application that allows users to anylize the sentiment of the Hacker News community towards a particular topic*

<p><strong>Built using:</strong>&nbsp;&nbsp;<span title="Node.js" class="pict-prog-nodejs01 fa-2x"> </span>&nbsp;<span title="CoffeeScript" class="pict-prog-coffeescr fa-2x"> </span>&nbsp;<span title="JQuery" class="pict-prog-jquery fa-2x"> </span>&nbsp;<span title="HTML5" class="pict-html5-01 fa-2x"> </span>&nbsp;<span title="CSS3" class="pict-css3-01 fa-2x"> </span></p>

I completed this project over a few days of my Christmas '13 holidays for the Iron.io hackathon (where it placed [2nd](http://blog.iron.io/2014/01/holiday-hack-winners.html)). The intent is to generalize the way the entire Hacker News community feels towards a particular topic based on the sentiment in their comments on a post containing the searched keyword.


<!-- abridge -->

<object data=http://www.hn-sentiment.com width="100%" height="550px"> <embed src=http://www.hn-sentiment.com width="100%" height="500px"> </embed> <a href="http://www.hn-sentiment.com">www.fbomb.co</a> </object>


###Technical Stuff
####This project is all open-sourced under the [The MIT License](https://github.com/mgingras/HN-Sentiment/blob/master/LICENSE)  and available [here](https://github.com/mgingras/HN-Sentiment)

The project is written in CoffeeScript on NodeJS using the Express framework.
How it functions:

1. The application generates http requests for the 10 (number in flux) most recent posts with the entered keyword in either their content or title.
2. The content is then parsed to determine the original text and, more importantly, all of the comments.
3. The app then aggregates title, content, and all of the comments of the post and analyzes them for any sentiment using the [AFINN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010) wordlist to determine an integer value for the desired topic.
4. The number discovered is then normalized by the number of posts found with comments then returned and displayed to the client.

In my next iteration I will be:

- Work on *better* caching (right now have fairly basic cacheing, which on Heroku gets dumped every time the repo sleeps).
- Track down any bottlenecks or bugs

Send me an <a href="mailto:martin@mgingras.ca?Subject=HN-Sentiment" title="HN-Sentiment">email</a> with any suggestions!!